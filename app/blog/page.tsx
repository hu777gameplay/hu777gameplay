import { pages } from "@/lib/data";
import { generateJsonLd } from "@/lib/jsonld";
import { generateMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import BlogController from "./blog.controller";

export const metadata: Metadata = generateMetadata(pages.blog);

export default function BlogPage() {
  const jsonLd = generateJsonLd(pages.blog);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogController />
    </>
  );
}
