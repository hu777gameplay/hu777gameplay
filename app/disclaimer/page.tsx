import { pages } from "@/lib/data";
import { generateJsonLd } from "@/lib/jsonld";
import { generateMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import DisclaimerController from "./disclaimer.controller";

export const metadata: Metadata = generateMetadata(pages.disclaimer);

export default function DisclaimerPage() {
  const jsonLd = generateJsonLd(pages.disclaimer);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DisclaimerController />
    </>
  );
}
