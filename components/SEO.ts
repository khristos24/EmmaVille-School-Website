import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image"; // Next.js optimized image component

export const metadata: Metadata = {
  title: "Emmaville Academy",
  description:
    "Private K-12 academy in Port Harcourt focused on excellence, character, and community.",
  icons: {
    icon: "/images/logo.jpg", // favicon
  },
  openGraph: {
    title: "Emmaville Academy",
    description:
      "Private K-12 academy in Port Harcourt focused on excellence, character, and community.",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmaville Academy",
    description:
      "Private K-12 academy in Port Harcourt focused on excellence, character, and community.",
    images: ["/images/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <header className="text-center p-4">
          <Image
            src="/images/logo.jpg"
            alt="Emmaville Academy Logo"
            width={200}
            height={200}
            priority={true}
            quality={90}
          />
        </header>
        {children}
      </body>
    </html>
  );
}
