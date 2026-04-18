import { pages } from "@/lib/data";
import { generateJsonLd } from "@/lib/jsonld";
import { generateMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import RegisterController from "./register.controller";

export const metadata: Metadata = generateMetadata(pages.register);

export default function RegisterPage() {
  const jsonLd = generateJsonLd(pages.register);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RegisterController />
    </>
  );
}
