import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image"; // Next.js optimized image component

export const metadata: Metadata = {
  title: "Emmaville Academy",
  description:
    "Private K-12 academy in Port Harcourt focused on excellence, character, and community.",
  icons: {
    icon: "/images/logo.jpg", // favicon path
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
        {/* Site-wide logo (optimized) */}
        <header className="text-center p-4">
          <Image
            src="/images/logo.jpg" // Make sure this exists in /public/images/
            alt="Emmaville Academy Logo"
            width={200} // adjust as needed
            height={200}
            priority={true} // loads immediately
            quality={90} // compresses without losing much quality
          />
        </header>

        {/* Main page content */}
        {children}
      </body>
    </html>
  );
}
