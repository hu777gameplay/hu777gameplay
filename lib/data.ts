export interface PageData {
  title: string;
  description: string;
  keywords: string[];
  url: string;
  image?: string;
  jsonLd?: Record<string, unknown>;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  image?: string;
  tags: string[];
}

// ✅ SITE CONFIG
export const siteConfig = {
  name: "HU777 Gameplay",
  description:
    "Explore HU777 Gameplay, BT03, and K123 games. Download APK, check bonuses, and start playing top gaming apps in India.",
  url: "https://hu777gameplay.com",
  ogImage: "/images/og-image.jpg",
  links: {
    twitter: "https://twitter.com/hu777gameplay",
    github: "https://github.com/hu777gameplay",
  },
};

// ✅ SEO PAGES
export const pages = {
  home: {
    title: "HU777 Gameplay – APK Download, BT03 & K123 Games (India)",
    description:
      "Explore HU777 Gameplay, BT03, and K123 apps. Download APK, check features, and start playing top gaming apps in India.",
    keywords: [
      "hu777 gameplay",
      "hu777 gameplay apk",
      "bt03 game",
      "bt03 game download",
      "k123 game",
      "k123 gameplay",
      "earning games india",
    ],
    url: "/",
    image: "/images/hero-banner.jpg",
  },

  blog: {
    title: "HU777 Blog | APK Download & Earning Tips",
    description:
      "Read guides for HU777, K123, and IN7 apps including download, safety review, and earning tips.",
    keywords: ["hu777 blog", "k123 guide", "in7 tips", "apk download guide"],
    url: "/blog",
  },

  apk: {
    title: "Download HU777 APK (Latest Version)",
    description:
      "Download HU777 APK latest version for Android. Safe install guide with bonus access.",
    keywords: ["hu777 apk", "hu777 apk download", "download hu777 app"],
    url: "/apk",
  },

  // login and register pages removed

  download: {
    title: "Download HU777 Gameplay, BT03 & K123 Apps",
    description:
      "Download HU777 Gameplay, BT03, and K123 gaming apps with official APK links and start playing instantly.",
    keywords: [
      "hu777 gameplay download",
      "bt03 game apk",
      "k123 apk download",
      "gaming apps india",
    ],
    url: "/download",
  },

  hu777: {
    title: "HU777 Gameplay – APK Download & Full Review",
    description:
      "Explore HU777 Gameplay, download APK, check features, bonus offers, and full review.",
    keywords: [
      "hu777 gameplay",
      "hu777 gameplay apk",
      "hu777 gameplay review",
      "hu777 gameplay bonus",
      "hu777 gameplay india",
    ],
    url: "/hu777",
  },

  bt03: {
    title: "BT03 Game – Fast Access & Gameplay Guide",
    description:
      "Access BT03 game, explore features, and start playing with fast entry link.",
    keywords: [
      "bt03 game",
      "bt03 gameplay",
      "bt03 fast access",
      "bt03 earning game",
      "bt03 india",
    ],
    url: "/bt03",
  },

  k123: {
    title: "K123 Game – APK Download & Gameplay Guide",
    description:
      "Download K123 game APK and explore gameplay features with full guide.",
    keywords: [
      "k123 game",
      "k123 gameplay",
      "k123 apk download",
      "k123 earning game",
      "k123 india",
    ],
    url: "/k123",
  },

  disclaimer: {
    title: "Disclaimer | Terms & Responsible Gaming",
    description: "Read terms, disclaimer, and responsible gaming policy.",
    keywords: ["disclaimer", "terms", "responsible gaming"],
    url: "/disclaimer",
  },

  "privacy-policy": {
    title: "Privacy Policy | Data Protection & Security",
    description: "Learn how we protect your data and ensure secure experience.",
    keywords: ["privacy policy", "data protection"],
    url: "/privacy-policy",
  },
} as const satisfies Record<string, PageData>;

// ✅ BLOG POSTS (EXTENDED SEO)
export const blogPosts: BlogPost[] = [
  // 🔥 HU777 CORE
  {
    slug: "hu777-apk-download-latest-version",
    title: "HU777 APK Download Latest Version (2026 Guide)",
    description:
      "Download HU777 APK safely with step-by-step installation guide for Android users.",
    content: "Full SEO content...",
    date: "2024-03-01",
    author: "HU777 Team",
    tags: ["hu777", "apk", "download"],
  },
  // login guide blog post removed
  {
    slug: "hu777-register-account-guide",
    title: "How to Register HU777 Account (Beginner Guide)",
    description:
      "Create HU777 account in minutes with this step-by-step registration guide.",
    content: "Full SEO content...",
    date: "2024-03-03",
    author: "HU777 Team",
    tags: ["hu777", "register"],
  },
  {
    slug: "hu777-bonus-offers-guide",
    title: "HU777 Bonus Offers: How to Claim Rewards",
    description: "Get welcome bonus and daily rewards on HU777 platform.",
    content: "Full SEO content...",
    date: "2024-03-04",
    author: "HU777 Team",
    tags: ["hu777", "bonus"],
  },

  // 🔥 TRUST / REVIEW
  {
    slug: "hu777-real-or-fake-review",
    title: "HU777 Real or Fake? Full Review & Proof",
    description: "Check whether HU777 is safe or not with detailed review.",
    content: "Full SEO content...",
    date: "2024-03-05",
    author: "HU777 Team",
    tags: ["hu777", "review"],
  },
  {
    slug: "hu777-safe-or-not",
    title: "Is HU777 Safe or Not? Security Guide",
    description: "Understand HU777 safety, payment system and user trust.",
    content: "Full SEO content...",
    date: "2024-03-06",
    author: "HU777 Team",
    tags: ["hu777", "security"],
  },

  // 🔥 EARNING / MONEY
  {
    slug: "hu777-earning-app-india",
    title: "HU777 Earning App in India: Real Income Guide",
    description: "Learn how to earn money using HU777 app in India.",
    content: "Full SEO content...",
    date: "2024-03-07",
    author: "HU777 Team",
    tags: ["hu777", "earning"],
  },
  {
    slug: "hu777-withdrawal-process",
    title: "HU777 Withdrawal Process: Get Money Fast",
    description: "Step-by-step withdrawal guide for HU777 users.",
    content: "Full SEO content...",
    date: "2024-03-08",
    author: "HU777 Team",
    tags: ["hu777", "withdraw"],
  },

  // 🔥 K123 GAME
  {
    slug: "k123-apk-download-guide",
    title: "K123 APK Download Guide (Latest Version)",
    description: "Download K123 game APK safely and start playing.",
    content: "Full SEO content...",
    date: "2024-03-09",
    author: "HU777 Team",
    tags: ["k123", "apk"],
  },
  {
    slug: "k123-login-register-guide",
    title: "K123 Login & Register Guide",
    description: "Learn how to login and register in K123 game.",
    content: "Full SEO content...",
    date: "2024-03-10",
    author: "HU777 Team",
    tags: ["k123", "login"],
  },
  {
    slug: "k123-earning-app-review",
    title: "K123 Game Review: Real or Fake?",
    description: "Check full K123 game review and earning proof.",
    content: "Full SEO content...",
    date: "2024-03-11",
    author: "HU777 Team",
    tags: ["k123", "review"],
  },

  // 🔥 IN7 GAME
  {
    slug: "in7-apk-download-guide",
    title: "IN7 Game APK Download Guide",
    description: "Download IN7 game and start playing instantly.",
    content: "Full SEO content...",
    date: "2024-03-12",
    author: "HU777 Team",
    tags: ["in7", "apk"],
  },
  {
    slug: "in7-login-guide",
    title: "IN7 Game Login Guide (Easy Access)",
    description: "Learn how to login to IN7 account quickly.",
    content: "Full SEO content...",
    date: "2024-03-13",
    author: "HU777 Team",
    tags: ["in7", "login"],
  },
  {
    slug: "in7-earning-app-review",
    title: "IN7 Game Review: Safe or Not?",
    description: "Complete IN7 review with earning details.",
    content: "Full SEO content...",
    date: "2024-03-14",
    author: "HU777 Team",
    tags: ["in7", "review"],
  },

  // 🔥 LONG-TAIL SEO (VERY IMPORTANT)
  {
    slug: "how-to-download-hu777-apk",
    title: "How to Download HU777 APK (Step-by-Step)",
    description: "Easy guide to install HU777 APK on Android.",
    content: "Full SEO content...",
    date: "2024-03-15",
    author: "HU777 Team",
    tags: ["hu777", "download"],
  },
  {
    slug: "how-to-login-hu777-account",
    title: "How to Login HU777 Account Easily",
    description: "Step-by-step login process with screenshots.",
    content: "Full SEO content...",
    date: "2024-03-16",
    author: "HU777 Team",
    tags: ["hu777", "login"],
  },
  {
    slug: "best-earning-apps-india-2026",
    title: "Best Earning Apps in India (2026 List)",
    description: "Top earning apps including HU777, K123, IN7.",
    content: "Full SEO content...",
    date: "2024-03-17",
    author: "HU777 Team",
    tags: ["earning", "india"],
  },
];

// ✅ NAVIGATION
export const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
];

export const footerLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "Blog", href: "/blog" },
  { name: "HU777 Gameplay", href: "/hu777" },
  { name: "BT03 Game", href: "/bt03" }, // ✅ add this page
  { name: "K123 Game", href: "/k123" },
  { name: "IN7 Game", href: "/in7" },
];
