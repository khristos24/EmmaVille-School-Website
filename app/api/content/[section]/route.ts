import { NextResponse } from "next/server";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { head, list, put } from "@vercel/blob";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const allowedSections = new Set([
  "home",
  "about",
  "admissions",
  "gallery",
  "contact",
]);

function getContentPath(section: string) {
  return path.join(process.cwd(), "content", `${section}.json`);
}

function getBlobToken() {
  return (
    process.env.BLOB_READ_WRITE_TOKEN ||
    process.env.emmavilleacademystorage_READ_WRITE_TOKEN ||
    process.env.EMMAVILLEACADEMYSTORAGE_READ_WRITE_TOKEN
  );
}

async function readFromBlob(section: string) {
  const token = getBlobToken();
  if (!token) return null;
  const key = `content/${section}.json`;
  try {
    // Try head first
    const h = await head(key, { token });
    const url = (h as any)?.downloadUrl;
    if (url) {
      const res = await fetch(url, { cache: "no-store" });
      if (res.ok) return res.json();
    }
  } catch (err) {
    console.error("Blob head error", err);
  }
  try {
    const { blobs } = await list({ prefix: key, token });
    const match = blobs.find((b) => b.pathname === key);
    const url = (match as any)?.downloadUrl;
    if (!url) return null;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
  } catch (err) {
    console.error("Blob read error", err);
    return null;
  }
}

async function writeToBlob(section: string, body: any) {
  const token = getBlobToken();
  if (!token) return false;
  const key = `content/${section}.json`;
  try {
    await put(key, JSON.stringify(body, null, 2), {
      access: "public",
      addRandomSuffix: false,
      contentType: "application/json",
      token,
    });
    return true;
  } catch (err) {
    console.error("Blob write error", err);
    return false;
  }
}

export async function GET(
  _req: Request,
  { params }: { params: { section: string } },
) {
  try {
    const section = params.section;
    if (!allowedSections.has(section)) {
      return NextResponse.json({ error: "Invalid section" }, { status: 400, headers: corsHeaders });
    }
    // Try blob first (for production), fall back to local file (dev)
    const blobData = await readFromBlob(section);
    if (blobData) {
      return NextResponse.json(blobData, { headers: corsHeaders });
    }
    const filePath = getContentPath(section);
    const data = await readFile(filePath, "utf-8");
    return NextResponse.json(JSON.parse(data), { headers: corsHeaders });
  } catch (error) {
    console.error("GET content error", error);
    return NextResponse.json(
      { error: "Unable to read content" },
      { status: 500, headers: corsHeaders },
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { section: string } },
) {
  try {
    const section = params.section;
    if (!allowedSections.has(section)) {
      return NextResponse.json({ error: "Invalid section" }, { status: 400, headers: corsHeaders });
    }
    const body = await req.json();
    // Prefer blob in production; fall back to filesystem for local dev
    const wroteToBlob = await writeToBlob(section, body);
    if (!wroteToBlob) {
      const filePath = getContentPath(section);
      await writeFile(filePath, JSON.stringify(body, null, 2), "utf-8");
    }
    return NextResponse.json({ ok: true }, { headers: corsHeaders });
  } catch (error) {
    console.error("PUT content error", error);
    return NextResponse.json(
      { error: "Unable to save content", detail: (error as Error).message },
      { status: 500, headers: corsHeaders },
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}
