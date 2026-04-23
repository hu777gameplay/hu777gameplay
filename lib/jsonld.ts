import { BlogPost, PageData, siteConfig } from "./data";

export function generateJsonLd(pageData: PageData) {
  const baseJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageData.title,
    description: pageData.description,
    url: `${siteConfig.url}${pageData.url}`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo.png`,
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: pageData.title,
          item: `${siteConfig.url}${pageData.url}`,
        },
      ],
    },
  };

  // Add specific structured data based on page type
  if (pageData.url === "/apk" || pageData.url === "/download") {
    return {
      ...baseJsonLd,
      "@type": "SoftwareApplication",
      applicationCategory: "GameApplication",
      operatingSystem: "Android, iOS, Windows, macOS",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.5",
        ratingCount: "10000",
      },
    };
  }

  // login/register structured data removed

  return baseJsonLd;
}

export function generateBlogJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image || `${siteConfig.url}/images/blog-default.jpg`,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo.png`,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };
}
