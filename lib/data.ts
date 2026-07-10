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
    "Explore HU777 Gameplay, BT03, and IV7 games. Download APK, check bonuses, and start playing top gaming apps in India.",
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
    title: "HU777 Gameplay – APK Download, BT03 & IV7 Games (India)",
    description:
      "Explore HU777 Gameplay, BT03, and IV7 apps. Download APK, check features, and start playing top gaming apps in India.",
    keywords: [
      "hu777 gameplay",
      "hu777 gameplay apk",
      "bt03 game",
      "bt03 game download",
      "MMY game",
      "MMY gameplay",
      "earning games india",

      "rajluck",
      "rajluck game",
      "raj luck",
      "rajluck apk",
      "rajluck app",
      "rajluck download",
      "rajluck login",
      "rajluck register",
      "rajluck signup",
      "rajluck official",

      // APK
      "rajluck apk download",
      "rajluck latest apk",
      "rajluck android apk",
      "rajluck app download",
      "rajluck game download",
      "rajluck latest version",
      "rajluck install apk",

      // Gaming
      "rajluck rummy",
      "rajluck casino",
      "rajluck card game",
      "rajluck online game",
      "rajluck game guide",
      "rajluck gaming platform",
      "rajluck mobile game",

      // India
      "rajluck india",
      "rajluck game india",
      "rajluck online gaming",
      "rajluck android app",

      // Search Terms
      "rajluck bonus",
      "rajluck referral",
      "rajluck rewards",
      "rajluck update",
      "rajluck news",
      "rajluck review",
      "rajluck latest update",
      "rajluck app guide",
      "rajluck how to download",
      "rajluck how to install",
      "rajluck registration",
      "rajluck account login",
      "rajluck mobile app",
      "rajluck official website",
      "rajluck game 2026",

      // MAIN BRAND
      "mygame",
      "my game",
      "mygame app",
      "mygame apk",
      "mygame download",
      "mygame gameplay",
      "mygame guide",
      "mygame review",
      "mygame latest version",

      // IV7 BRAND
      "iv7",
      "iv7 game",
      "iv7 apk",
      "iv7 download",
      "iv7 gameplay",
      "iv7 app",
      "iv7 guide",
      "iv7 review",
      "iv7 latest update",
      "iv7 gaming platform",

      // GAMING
      "game download",
      "apk download",
      "mobile games",
      "android games",
      "online games",
      "gaming platform",
      "gaming community",
      "game reviews",
      "game guides",
      "game walkthrough",

      // SEARCH TERMS
      "best mobile games",
      "top android games",
      "gaming app india",
      "latest game updates",
      "new games 2026",
    ],
    url: "/",
    image: "/images/hero-banner.jpg",
  },

  blog: {
    title: "HU777 Blog | APK Download & Earning Tips",
    description:
      "Read guides for HU777, IV7, and IN7 apps including download, safety review, and earning tips.",
    keywords: [
      "hu777 blog",
      "MMY guide",
      "in7 tips",
      "apk download guide", // MAIN BRAND
      "mygame",
      "my game",
      "mygame app",
      "mygame apk",
      "mygame download",
      "mygame gameplay",
      "mygame guide",
      "mygame review",
      "mygame latest version",

      // GAMING
      "game download",
      "apk download",
      "mobile games",
      "android games",
      "online games",
      "gaming platform",
      "gaming community",
      "game reviews",
      "game guides",
      "game walkthrough",

      // SEARCH TERMS
      "best mobile games",
      "top android games",
      "gaming app india",
      "latest game updates",
      "new games 2026",
    ],
    url: "/blog",
  },

  apk: {
    title: "Download HU777 APK (Latest Version)",
    description:
      "Download HU777 APK latest version for Android. Safe install guide with bonus access.",
    keywords: [
      "hu777 apk",
      "hu777 apk download",
      "download hu777 app", // MAIN BRAND
      "mygame",
      "my game",
      "mygame app",
      "mygame apk",
      "mygame download",
      "mygame gameplay",
      "mygame guide",
      "mygame review",
      "mygame latest version",
      // IV7 BRAND
      "iv7",
      "iv7 game",
      "iv7 apk",
      "iv7 download",
      "iv7 gameplay",
      "iv7 app",
      "iv7 guide",
      "iv7 review",
      "iv7 latest update",
      "iv7 gaming platform",

      // GAMING
      "game download",
      "apk download",
      "mobile games",
      "android games",
      "online games",
      "gaming platform",
      "gaming community",
      "game reviews",
      "game guides",
      "game walkthrough",

      // SEARCH TERMS
      "best mobile games",
      "top android games",
      "gaming app india",
      "latest game updates",
      "new games 2026",
    ],
    url: "/apk",
  },

  // login and register pages removed

  download: {
    title: "Download HU777 Gameplay, BT03 & IV7 Apps",
    description:
      "Download HU777 Gameplay, BT03, and IV7 gaming apps with official APK links and start playing instantly.",
    keywords: [
      "hu777 gameplay download",
      "bt03 game apk",
      "MMY apk download",
      "gaming apps india",
      // MAIN BRAND
      "mygame",
      "my game",
      "mygame app",
      "mygame apk",
      "mygame download",
      "mygame gameplay",
      "mygame guide",
      "mygame review",
      "mygame latest version",

      // GAMING
      "game download",
      "apk download",
      "mobile games",
      "android games",
      "online games",
      "gaming platform",
      "gaming community",
      "game reviews",
      "game guides",
      "game walkthrough",

      // SEARCH TERMS
      "best mobile games",
      "top android games",
      "gaming app india",
      "latest game updates",
      "new games 2026",
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
      "hu777 gameplay india", // MAIN BRAND
      "mygame",
      "my game",
      "mygame app",
      "mygame apk",
      "mygame download",
      "mygame gameplay",
      "mygame guide",
      "mygame review",
      "mygame latest version",

      // GAMING
      "game download",
      "apk download",
      "mobile games",
      "android games",
      "online games",
      "gaming platform",
      "gaming community",
      "game reviews",
      "game guides",
      "game walkthrough",

      // SEARCH TERMS
      "best mobile games",
      "top android games",
      "gaming app india",
      "latest game updates",
      "new games 2026",
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

  MMY: {
    title: "IV7 Game – APK Download & Gameplay Guide",
    description:
      "Download IV7 game APK and explore gameplay features with full guide.",
    keywords: [
      "MMY game",
      "MMY gameplay",
      "MMY apk download",
      "MMY earning game",
      "MMY india",

      // IV7 BRAND
      "iv7",
      "iv7 game",
      "iv7 apk",
      "iv7 download",
      "iv7 gameplay",
      "iv7 app",
      "iv7 guide",
      "iv7 review",
      "iv7 latest update",
      "iv7 gaming platform",
      // MAIN BRAND
      "mygame",
      "my game",
      "mygame app",
      "mygame apk",
      "mygame download",
      "mygame gameplay",
      "mygame guide",
      "mygame review",
      "mygame latest version",

      // GAMING
      "game download",
      "apk download",
      "mobile games",
      "android games",
      "online games",
      "gaming platform",
      "gaming community",
      "game reviews",
      "game guides",
      "game walkthrough",

      // SEARCH TERMS
      "best mobile games",
      "top android games",
      "gaming app india",
      "latest game updates",
      "new games 2026",
    ],
    url: "/MMY",
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

  // 🔥 IV7 GAME
  {
    slug: "MMY-apk-download-guide",
    title: "IV7 APK Download Guide (Latest Version)",
    description: "Download IV7 game APK safely and start playing.",
    content: "Full SEO content...",
    date: "2024-03-09",
    author: "HU777 Team",
    tags: ["MMY", "apk"],
  },
  {
    slug: "MMY-login-register-guide",
    title: "IV7 Login & Register Guide",
    description: "Learn how to login and register in IV7 game.",
    content: "Full SEO content...",
    date: "2024-03-10",
    author: "HU777 Team",
    tags: ["MMY", "login"],
  },
  {
    slug: "MMY-earning-app-review",
    title: "IV7 Game Review: Real or Fake?",
    description: "Check full IV7 game review and earning proof.",
    content: "Full SEO content...",
    date: "2024-03-11",
    author: "HU777 Team",
    tags: ["MMY", "review"],
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

  {
    slug: "rajluck-apk-download-latest-version",
    title: "RajLuck APK Download Latest Version (2026 Guide)",
    description:
      "Learn how to download and install the latest RajLuck APK for Android devices.",
    content: "Full SEO content...",
    date: "2026-07-01",
    author: "RajLuck Team",
    tags: ["rajluck", "apk", "download"],
  },
  {
    slug: "rajluck-login-guide",
    title: "How to Login to RajLuck Game",
    description: "A step-by-step guide to logging into your RajLuck account.",
    content: "Full SEO content...",
    date: "2026-07-02",
    author: "RajLuck Team",
    tags: ["rajluck", "login"],
  },
  {
    slug: "rajluck-register-account",
    title: "How to Register a RajLuck Account",
    description: "Learn how to create a new RajLuck account.",
    content: "Full SEO content...",
    date: "2026-07-03",
    author: "RajLuck Team",
    tags: ["rajluck", "register"],
  },
  {
    slug: "rajluck-install-apk",
    title: "How to Install RajLuck APK on Android",
    description: "Follow these steps to install the RajLuck APK safely.",
    content: "Full SEO content...",
    date: "2026-07-04",
    author: "RajLuck Team",
    tags: ["rajluck", "android"],
  },
  {
    slug: "rajluck-update-guide",
    title: "How to Update RajLuck to the Latest Version",
    description: "Keep your RajLuck app up to date with the latest version.",
    content: "Full SEO content...",
    date: "2026-07-05",
    author: "RajLuck Team",
    tags: ["rajluck", "update"],
  },
  {
    slug: "rajluck-features",
    title: "Top Features of RajLuck Game",
    description: "Explore the main features available in RajLuck.",
    content: "Full SEO content...",
    date: "2026-07-06",
    author: "RajLuck Team",
    tags: ["rajluck", "features"],
  },
  {
    slug: "rajluck-android-guide",
    title: "RajLuck Android App Complete Guide",
    description: "Everything Android users should know about RajLuck.",
    content: "Full SEO content...",
    date: "2026-07-07",
    author: "RajLuck Team",
    tags: ["rajluck", "android"],
  },
  {
    slug: "rajluck-faq",
    title: "RajLuck Frequently Asked Questions",
    description: "Answers to common questions about RajLuck.",
    content: "Full SEO content...",
    date: "2026-07-08",
    author: "RajLuck Team",
    tags: ["rajluck", "faq"],
  },
  {
    slug: "rajluck-download-guide",
    title: "RajLuck Download Guide for Beginners",
    description: "A beginner-friendly guide to downloading RajLuck.",
    content: "Full SEO content...",
    date: "2026-07-09",
    author: "RajLuck Team",
    tags: ["rajluck", "download"],
  },
  {
    slug: "rajluck-app-overview",
    title: "RajLuck App Overview",
    description: "An overview of the RajLuck mobile application.",
    content: "Full SEO content...",
    date: "2026-07-10",
    author: "RajLuck Team",
    tags: ["rajluck", "app"],
  },

  {
    slug: "mmy-apk-download",
    title: "MMY APK Download Latest Version",
    description: "Download the latest MMY APK for Android devices.",
    content: "Full SEO content...",
    date: "2026-07-11",
    author: "MMY Team",
    tags: ["mmy", "apk"],
  },
  {
    slug: "mmy-login-guide",
    title: "How to Login to MMY Game",
    description: "Step-by-step MMY login guide.",
    content: "Full SEO content...",
    date: "2026-07-12",
    author: "MMY Team",
    tags: ["mmy", "login"],
  },
  {
    slug: "mmy-register-account",
    title: "How to Register on MMY Game",
    description: "Create your MMY account easily.",
    content: "Full SEO content...",
    date: "2026-07-13",
    author: "MMY Team",
    tags: ["mmy", "register"],
  },
  {
    slug: "mmy-install-apk",
    title: "How to Install MMY APK",
    description: "Install the MMY APK on Android devices.",
    content: "Full SEO content...",
    date: "2026-07-14",
    author: "MMY Team",
    tags: ["mmy", "apk"],
  },
  {
    slug: "mmy-update-app",
    title: "How to Update MMY App",
    description: "Keep your MMY app updated with the latest version.",
    content: "Full SEO content...",
    date: "2026-07-15",
    author: "MMY Team",
    tags: ["mmy", "update"],
  },
  {
    slug: "mmy-features-guide",
    title: "Top Features of MMY Game",
    description: "Explore the main features of the MMY app.",
    content: "Full SEO content...",
    date: "2026-07-16",
    author: "MMY Team",
    tags: ["mmy", "features"],
  },
  {
    slug: "mmy-download-guide",
    title: "MMY Download Guide",
    description: "Learn how to download MMY on Android.",
    content: "Full SEO content...",
    date: "2026-07-17",
    author: "MMY Team",
    tags: ["mmy", "download"],
  },
  {
    slug: "mmy-beginner-guide",
    title: "MMY Beginner Guide",
    description: "Getting started with the MMY app.",
    content: "Full SEO content...",
    date: "2026-07-18",
    author: "MMY Team",
    tags: ["mmy", "guide"],
  },
  {
    slug: "mmy-faq",
    title: "MMY Frequently Asked Questions",
    description: "Find answers to common MMY questions.",
    content: "Full SEO content...",
    date: "2026-07-19",
    author: "MMY Team",
    tags: ["mmy", "faq"],
  },
  {
    slug: "mmy-app-overview",
    title: "MMY App Overview",
    description: "An overview of the MMY Android application.",
    content: "Full SEO content...",
    date: "2026-07-20",
    author: "MMY Team",
    tags: ["mmy", "overview"],
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
    description: "Top earning apps including HU777, IV7, IN7.",
    content: "Full SEO content...",
    date: "2024-03-17",
    author: "HU777 Team",
    tags: ["earning", "india"],
  },
  {
    slug: "mygame-apk-download-guide",
    title: "MyGame APK Download Guide (Latest Version 2026)",
    description:
      "Learn how to download and install the latest MyGame APK safely on Android devices.",
    content: "Full SEO content...",
    date: "2026-01-01",
    author: "HU777 Team",
    tags: ["mygame", "apk", "download"],
  },
  {
    slug: "mygame-review-real-or-fake",
    title: "MyGame Review: Real or Fake?",
    description:
      "A complete review of MyGame including features, gameplay, user experience, and safety information.",
    content: "Full SEO content...",
    date: "2026-01-02",
    author: "HU777 Team",
    tags: ["mygame", "review"],
  },
  {
    slug: "mygame-login-guide",
    title: "MyGame Login Guide (Step-by-Step)",
    description:
      "Learn how to access your MyGame account quickly and securely.",
    content: "Full SEO content...",
    date: "2026-01-03",
    author: "HU777 Team",
    tags: ["mygame", "login"],
  },
  {
    slug: "mygame-bonus-and-rewards",
    title: "MyGame Bonus & Rewards Guide",
    description:
      "Discover welcome bonuses, daily rewards, and special promotions available on MyGame.",
    content: "Full SEO content...",
    date: "2026-01-04",
    author: "HU777 Team",
    tags: ["mygame", "bonus"],
  },
  {
    slug: "best-mobile-games-india-2026",
    title: "Best Mobile Games in India (2026 Edition)",
    description:
      "Explore the most popular mobile games, gaming apps, and trending releases in India for 2026.",
    content: "Full SEO content...",
    date: "2026-01-05",
    author: "HU777 Team",
    tags: ["gaming", "india", "mobile-games"],
  },
  {
    slug: "mygame-registration-guide",
    title: "MyGame Registration Guide (2026)",
    description: "Learn how to create a MyGame account quickly and securely.",
    content: "Full SEO content...",
    date: "2026-01-06",
    author: "HU777 Team",
    tags: ["mygame", "register"],
  },
  {
    slug: "mygame-safe-or-not",
    title: "Is MyGame Safe to Use? Complete Security Review",
    description:
      "Explore MyGame security features, user reviews, and safety information.",
    content: "Full SEO content...",
    date: "2026-01-07",
    author: "HU777 Team",
    tags: ["mygame", "security"],
  },
  {
    slug: "mygame-latest-update",
    title: "MyGame Latest Update & New Features",
    description:
      "Discover the latest MyGame updates, improvements, and new features.",
    content: "Full SEO content...",
    date: "2026-01-08",
    author: "HU777 Team",
    tags: ["mygame", "update"],
  },
  {
    slug: "mygame-withdrawal-guide",
    title: "MyGame Withdrawal Guide",
    description:
      "Step-by-step guide for withdrawals and account management on MyGame.",
    content: "Full SEO content...",
    date: "2026-01-09",
    author: "HU777 Team",
    tags: ["mygame", "withdrawal"],
  },
  {
    slug: "mygame-features-review",
    title: "MyGame Features Review",
    description:
      "A detailed overview of MyGame features, gameplay, and user experience.",
    content: "Full SEO content...",
    date: "2026-01-10",
    author: "HU777 Team",
    tags: ["mygame", "features"],
  },
  {
    slug: "how-to-install-mygame-apk",
    title: "How to Install MyGame APK on Android",
    description: "Easy installation guide for MyGame APK on Android devices.",
    content: "Full SEO content...",
    date: "2026-01-11",
    author: "HU777 Team",
    tags: ["mygame", "apk", "android"],
  },
  {
    slug: "mygame-vs-other-gaming-apps",
    title: "MyGame vs Other Gaming Apps",
    description: "Compare MyGame with other popular gaming apps and platforms.",
    content: "Full SEO content...",
    date: "2026-01-12",
    author: "HU777 Team",
    tags: ["mygame", "comparison"],
  },
  {
    slug: "top-gaming-apps-india-2026",
    title: "Top Gaming Apps in India 2026",
    description: "Explore the most popular gaming apps and platforms in India.",
    content: "Full SEO content...",
    date: "2026-01-13",
    author: "HU777 Team",
    tags: ["gaming", "india"],
  },
  {
    slug: "best-android-games-2026",
    title: "Best Android Games to Play in 2026",
    description:
      "A curated list of the top Android games and trending releases.",
    content: "Full SEO content...",
    date: "2026-01-14",
    author: "HU777 Team",
    tags: ["android", "games"],
  },
  {
    slug: "mygame-gameplay-tips-and-tricks",
    title: "MyGame Gameplay Tips & Tricks",
    description:
      "Improve your gameplay with useful tips, strategies, and beginner advice.",
    content: "Full SEO content...",
    date: "2026-01-15",
    author: "HU777 Team",
    tags: ["mygame", "tips", "gameplay"],
  },
  {
    slug: "iv7-apk-download-guide",
    title: "IV7 APK Download Guide (Latest Version 2026)",
    description:
      "Download IV7 APK safely and install the latest version on Android devices.",
    content: "Full SEO content...",
    date: "2026-02-01",
    author: "HU777 Team",
    tags: ["iv7", "apk", "download"],
  },
  {
    slug: "iv7-login-guide",
    title: "IV7 Login Guide (Step-by-Step)",
    description: "Learn how to login to your IV7 account quickly and securely.",
    content: "Full SEO content...",
    date: "2026-02-02",
    author: "HU777 Team",
    tags: ["iv7", "login"],
  },
  {
    slug: "iv7-registration-guide",
    title: "IV7 Registration Guide for Beginners",
    description:
      "Create your IV7 account easily with this complete registration guide.",
    content: "Full SEO content...",
    date: "2026-02-03",
    author: "HU777 Team",
    tags: ["iv7", "register"],
  },
  {
    slug: "iv7-review-real-or-fake",
    title: "IV7 Review: Real or Fake?",
    description:
      "Explore IV7 features, gameplay, and user reviews in this detailed review.",
    content: "Full SEO content...",
    date: "2026-02-04",
    author: "HU777 Team",
    tags: ["iv7", "review"],
  },
  {
    slug: "iv7-safe-or-not",
    title: "Is IV7 Safe to Use?",
    description:
      "Learn about IV7 security, account safety, and platform reliability.",
    content: "Full SEO content...",
    date: "2026-02-05",
    author: "HU777 Team",
    tags: ["iv7", "security"],
  },
  {
    slug: "iv7-bonus-offers-guide",
    title: "IV7 Bonus Offers & Rewards Guide",
    description:
      "Discover bonuses, rewards, and promotional offers available on IV7.",
    content: "Full SEO content...",
    date: "2026-02-06",
    author: "HU777 Team",
    tags: ["iv7", "bonus"],
  },
  {
    slug: "iv7-withdrawal-process",
    title: "IV7 Withdrawal Process Explained",
    description:
      "Step-by-step guide for withdrawals and account transactions on IV7.",
    content: "Full SEO content...",
    date: "2026-02-07",
    author: "HU777 Team",
    tags: ["iv7", "withdrawal"],
  },
  {
    slug: "iv7-latest-update",
    title: "IV7 Latest Update & New Features",
    description:
      "Explore the latest IV7 updates, improvements, and platform features.",
    content: "Full SEO content...",
    date: "2026-02-08",
    author: "HU777 Team",
    tags: ["iv7", "update"],
  },
  {
    slug: "iv7-gameplay-tips-and-tricks",
    title: "IV7 Gameplay Tips & Tricks",
    description:
      "Improve your IV7 experience with useful gameplay strategies and tips.",
    content: "Full SEO content...",
    date: "2026-02-09",
    author: "HU777 Team",
    tags: ["iv7", "gameplay", "tips"],
  },
  {
    slug: "iv7-vs-mygame-comparison",
    title: "IV7 vs MyGame: Complete Comparison",
    description:
      "Compare IV7 and MyGame features, gameplay, and user experience.",
    content: "Full SEO content...",
    date: "2026-02-10",
    author: "HU777 Team",
    tags: ["iv7", "mygame", "comparison"],
  },
  // 🔥 EXTRA HU777 BLOGS
  {
    slug: "hu777-latest-update-2026",
    title: "HU777 Latest Update & New Features (2026)",
    description:
      "Discover the latest HU777 updates, improvements, and new features.",
    content: "Full SEO content...",
    date: "2026-03-01",
    author: "HU777 Team",
    tags: ["hu777", "update"],
  },
  {
    slug: "hu777-deposit-guide",
    title: "HU777 Deposit Guide for Beginners",
    description:
      "Learn how to add funds to your HU777 account safely and quickly.",
    content: "Full SEO content...",
    date: "2026-03-02",
    author: "HU777 Team",
    tags: ["hu777", "deposit"],
  },
  {
    slug: "hu777-referral-program-guide",
    title: "HU777 Referral Program Guide",
    description:
      "Earn rewards by inviting friends through the HU777 referral system.",
    content: "Full SEO content...",
    date: "2026-03-03",
    author: "HU777 Team",
    tags: ["hu777", "referral"],
  },
  {
    slug: "hu777-mobile-app-review",
    title: "HU777 Mobile App Review (2026)",
    description:
      "Complete review of the HU777 mobile application and user experience.",
    content: "Full SEO content...",
    date: "2026-03-04",
    author: "HU777 Team",
    tags: ["hu777", "review", "mobile-app"],
  },
  {
    slug: "hu777-customer-support-guide",
    title: "HU777 Customer Support Guide",
    description:
      "Learn how to contact HU777 support and resolve account issues.",
    content: "Full SEO content...",
    date: "2026-03-05",
    author: "HU777 Team",
    tags: ["hu777", "support"],
  },

  // 🔥 EXTRA MMY BLOGS
  {
    slug: "MMY-registration-guide",
    title: "MMY Registration Guide (2026)",
    description: "Step-by-step guide to create an MMY account.",
    content: "Full SEO content...",
    date: "2026-03-06",
    author: "HU777 Team",
    tags: ["MMY", "register"],
  },
  {
    slug: "MMY-safe-or-not",
    title: "Is MMY Safe to Use?",
    description: "Learn about MMY security features and user safety.",
    content: "Full SEO content...",
    date: "2026-03-07",
    author: "HU777 Team",
    tags: ["MMY", "security"],
  },
  {
    slug: "MMY-bonus-rewards-guide",
    title: "MMY Bonus & Rewards Guide",
    description: "Explore MMY welcome bonuses, rewards, and promotions.",
    content: "Full SEO content...",
    date: "2026-03-08",
    author: "HU777 Team",
    tags: ["MMY", "bonus"],
  },
  {
    slug: "MMY-withdrawal-process",
    title: "MMY Withdrawal Process Explained",
    description:
      "Complete guide to withdrawals and account transactions on MMY.",
    content: "Full SEO content...",
    date: "2026-03-09",
    author: "HU777 Team",
    tags: ["MMY", "withdrawal"],
  },
  {
    slug: "MMY-latest-update",
    title: "MMY Latest Update & New Features",
    description:
      "Check out the newest MMY updates, features, and improvements.",
    content: "Full SEO content...",
    date: "2026-03-10",
    author: "HU777 Team",
    tags: ["MMY", "update"],
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
  { name: "IV7 Game", href: "/MMY" },
  { name: "IN7 Game", href: "/in7" },
];
