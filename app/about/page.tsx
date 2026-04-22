import { pages } from "@/lib/data";
import { generateJsonLd } from "@/lib/jsonld";
import { generateMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import AboutController from "./about.controller";

export const metadata: Metadata = generateMetadata(pages?.hu777);

export default function AboutPage() {
  const jsonLd = generateJsonLd(pages?.hu777);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutController />
    </>
  );
}
