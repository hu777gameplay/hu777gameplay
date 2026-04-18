import { blogPosts, siteConfig } from "@/lib/data";
import { generateBlogJsonLd } from "@/lib/jsonld";
import { Metadata } from "next";
import BlogDetailController from "./blogDetail.controller";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((b) => b.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      siteName: siteConfig.name,
      images: [
        {
          url: post.image || `${siteConfig.url}/images/blog-default.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image || `${siteConfig.url}/images/blog-default.jpg`],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: Params }) {
  const resolvedParams = await params;
  const post = blogPosts.find((b) => b.slug === resolvedParams.slug);

  if (!post) {
    return null; // Will be handled by notFound() in controller
  }

  const jsonLd = generateBlogJsonLd(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogDetailController params={resolvedParams} />
    </>
  );
}
