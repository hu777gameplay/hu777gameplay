import { blogPosts, pages, siteConfig } from "@/lib/data";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add all pages from data
  Object.values(pages).forEach((page) => {
    sitemapEntries.push({
      url: `${siteConfig.url}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.url === "/" ? "daily" : "weekly",
      priority: page.url === "/" ? 1 : 0.8,
    });
  });

  // Add blog posts
  blogPosts.forEach((post) => {
    sitemapEntries.push({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  });

  return sitemapEntries;
}
