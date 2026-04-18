import { pages } from "@/lib/data";
import { generateJsonLd } from "@/lib/jsonld";
import { generateMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import DownloadController from "./download.controller";

export const metadata: Metadata = generateMetadata(pages.download);

export default function DownloadPage() {
  const jsonLd = generateJsonLd(pages.download);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DownloadController />
    </>
  );
}
