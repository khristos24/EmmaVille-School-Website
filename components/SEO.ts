import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  image?: string; // optional for Open Graph / Twitter
}

export const generateMetadata = ({
  title,
  description,
  image = "/images/logo.jpg",
}: SEOProps): Metadata => ({
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: image,
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
  icons: {
    icon: "/images/logo.jpg",
  },
});

export default function SEO({ title, description, image }: SEOProps) {
  // This component does NOT render <html> or <body>
  // It is used only to generate metadata for a page
  return null;
}
