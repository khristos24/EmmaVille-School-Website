import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emmaville Academy",
  description:
    "Private K-12 academy in Port Harcourt focused on excellence, character, and community.",
  icons: {
    icon: "/favicon.png", // fallback to /favicon.jpg if png unavailable
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Emmaville Academy",
    url: "https://www.emmavilleacademy.com",
    logo: "https://www.emmavilleacademy.com/favicon.png",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="bg-white">{children}</body>
    </html>
  );
}
