import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image"; // <-- Import Next.js Image component

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
        {/* Example optimized site-wide image */}
        <header className="text-center p-4">
          <Image
            src="/images/logo.jpg"
            alt="Emmaville Academy Logo"
            width={200} // adjust to desired size
            height={200}
            priority={true} // loads immediately
            quality={90} // compresses without losing much quality
          />
        </header>

        {/* Page content */}
        {children}
      </body>
    </html>
  );
}
