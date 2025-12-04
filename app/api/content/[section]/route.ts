import { NextResponse } from "next/server";
import { readFile, writeFile } from "fs/promises";
import path from "path";

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

export async function GET(
  _req: Request,
  { params }: { params: { section: string } },
) {
  try {
    const section = params.section;
    if (!allowedSections.has(section)) {
      return NextResponse.json({ error: "Invalid section" }, { status: 400, headers: corsHeaders });
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
    const filePath = getContentPath(section);
    await writeFile(filePath, JSON.stringify(body, null, 2), "utf-8");
    return NextResponse.json({ ok: true }, { headers: corsHeaders });
  } catch (error) {
    console.error("PUT content error", error);
    return NextResponse.json(
      { error: "Unable to save content" },
      { status: 500, headers: corsHeaders },
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}
