// components/SEO.tsx
import Head from "next/head";

export default function SEO({
  title = "Emmaville Academy – Excellence in Education",
  description = "Private K-12 academy in Port Harcourt focused on excellence, character, and academic growth.",
  image = "/images/logo.jpg",
  url = "https://emmavilleacademy.com",
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "School",
            "name": "Emmaville Academy",
            "address": "BX4 3RD Avenue, Federal Housing Estate, Port Harcourt, Nigeria",
            "url": url,
          }),
        }}
      />
    </Head>
  );
}
