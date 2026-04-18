import { pages } from "@/lib/data";
import { generateJsonLd } from "@/lib/jsonld";
import { generateMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import HomeController from "./home.controller";

export const metadata: Metadata = generateMetadata(pages.home);

export default function HomePage() {
  const jsonLd = generateJsonLd(pages.home);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeController />
    </>
  );
}
