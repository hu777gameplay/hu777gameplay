import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.hu777gameplay.com/sitemap.xml",
    host: "https://www.hu777gameplay.com",
  };
}
