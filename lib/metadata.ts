import { Metadata } from "next";
import { PageData, siteConfig } from "./data";

export function generateMetadata(pageData: PageData): Metadata {
  return {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: pageData.url,
    },
    openGraph: {
      title: pageData.title,
      description: pageData.description,
      url: `${siteConfig.url}${pageData.url}`,
      siteName: siteConfig.name,
      images: [
        {
          url: pageData.image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageData.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageData.title,
      description: pageData.description,
      images: [pageData.image || siteConfig.ogImage],
      creator: "@hu777gameplay",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
    },
  };
}
