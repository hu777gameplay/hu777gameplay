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
  {
    slug: "hu777-apk-download-guide",
    title: "HU777 APK Download Guide (Latest Version)",
    description:
      "Step-by-step guide to download HU777 APK safely on Android devices.",
    content: "Add full SEO content here (1000+ words)...",
    date: "2024-02-01",
    author: "HU777 Team",
    tags: ["apk", "download"],
  },
  {
    slug: "hu777-login-problems-fix",
    title: "HU777 Login Problems? Fix Easily",
    description: "Common HU777 login problems and quick solutions.",
    content: "Add full SEO content here...",
    date: "2024-02-05",
    author: "HU777 Team",
    tags: ["login", "fix"],
  },
  {
    slug: "k123-game-download-guide",
    title: "K123 Game Download Guide (APK)",
    description: "Download K123 APK and start playing easily.",
    content: "Add full SEO content here...",
    date: "2024-02-10",
    author: "HU777 Team",
    tags: ["k123", "download"],
  },
  {
    slug: "in7-game-login-guide",
    title: "IN7 Game Login Guide & Access",
    description: "Learn how to login to IN7 game account بسهولة.",
    content: "Add full SEO content here...",
    date: "2024-02-15",
    author: "HU777 Team",
    tags: ["in7", "login"],
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
