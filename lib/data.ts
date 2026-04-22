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
    "Download HU777, K123, and IN7 games. Get APK, login guide, bonuses, and start earning with top gaming apps in India.",
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
    title: "HU777 Gameplay | Download APK, Login & Earn Money (India)",
    description:
      "Download HU777, K123, and IN7 apps. Get APK, login guide, and start earning with top gaming apps in India.",
    keywords: [
      "hu777 gameplay",
      "hu777 apk download",
      "k123 game download",
      "in7 game download",
      "earning app india",
    ],
    url: "/",
    image: "/images/hero-banner.jpg",
  },

  blog: {
    title: "HU777 Blog | APK Download, Login & Earning Tips",
    description:
      "Read guides for HU777, K123, and IN7 apps including download, login help, safety review, and earning tips.",
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

  login: {
    title: "HU777 Login | Secure Account Access",
    description:
      "Login to your HU777 account. Fix login issues and access your gaming dashboard.",
    keywords: ["hu777 login", "hu777 account login", "hu777 login problem"],
    url: "/login",
  },

  register: {
    title: "Register HU777 Account | Sign Up & Bonus",
    description:
      "Create HU777 account and get signup bonus. Easy registration guide.",
    keywords: ["hu777 register", "hu777 sign up", "create hu777 account"],
    url: "/register",
  },

  download: {
    title: "Download HU777, K123 & IN7 Apps",
    description:
      "Download HU777, K123, and IN7 gaming apps. Get official APK links and start playing instantly.",
    keywords: ["download hu777", "k123 game download", "in7 game download"],
    url: "/download",
  },

  hu777: {
    title: "HU777 Official Website | APK, Login & Review",
    description:
      "Download HU777 APK, login account, check bonus offers, and read full review.",
    keywords: [
      "hu777 official website",
      "hu777 apk download",
      "hu777 review",
      "hu777 safe or not",
    ],
    url: "/hu777",
  },

  // 🔥 NEW PAGES
  k123: {
    title: "K123 Game Download | APK, Login & Review",
    description:
      "Download K123 game APK, login account, and explore features with full guide.",
    keywords: [
      "k123 game",
      "k123 apk download",
      "k123 login",
      "k123 earning app",
    ],
    url: "/k123",
  },

  in7: {
    title: "IN7 Game Download | Official Link & Login Guide",
    description:
      "Access IN7 game official link, login guide, and APK download.",
    keywords: ["in7 game", "in7 apk", "in7 login", "in7 game download"],
    url: "/in7",
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
  {
    slug: "hu777-login-guide-step-by-step",
    title: "HU777 Login Guide: Easy Account Access (2026)",
    description:
      "Learn how to login HU777 account easily and fix login issues.",
    content: "Full SEO content...",
    date: "2024-03-02",
    author: "HU777 Team",
    tags: ["hu777", "login"],
  },
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
  { name: "Download APK", href: "/apk" },
  { name: "HU777", href: "/hu777" },
  { name: "K123 Game", href: "/k123" },
  { name: "IN7 Game", href: "/in7" },
  { name: "Login", href: "/login" },
];

// ✅ FOOTER
export const footerLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "Blog", href: "/blog" },
  { name: "HU777", href: "/hu777" },
  { name: "K123", href: "/k123" },
  { name: "IN7", href: "/in7" },
];
