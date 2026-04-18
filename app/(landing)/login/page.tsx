import { pages } from "@/lib/data";
import { generateJsonLd } from "@/lib/jsonld";
import { generateMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import LoginController from "./login.controller";

export const metadata: Metadata = generateMetadata(pages.login);

export default function LoginPage() {
  const jsonLd = generateJsonLd(pages.login);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LoginController />
    </>
  );
}
