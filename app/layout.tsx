import type { Metadata } from "next";
import "./globals.css";

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
        {/* Main content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
