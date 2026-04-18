import { pages } from "@/lib/data";
import { generateJsonLd } from "@/lib/jsonld";
import { generateMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import ApkController from "./apk.controller";

export const metadata: Metadata = generateMetadata(pages.apk);

export default function ApkPage() {
  const jsonLd = generateJsonLd(pages.apk);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ApkController />
    </>
  );
}
