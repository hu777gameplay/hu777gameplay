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

export const siteConfig = {
  name: "HU777 Gameplay",
  description:
    "Experience the ultimate gaming adventure with HU777 - the premier gaming platform for thrilling gameplay and massive rewards.",
  url: "https://hu777gameplay.com",
  ogImage: "/images/og-image.jpg",
  links: {
    twitter: "https://twitter.com/hu777gameplay",
    github: "https://github.com/hu777gameplay",
  },
};

export const pages = {
  home: {
    title: "HU777 Gameplay - Ultimate Gaming Experience",
    description:
      "Join HU777 Gameplay for the most exciting gaming experience. Download now and start your adventure with massive rewards and thrilling gameplay.",
    keywords: ["HU777", "gaming", "online games", "mobile gaming", "rewards"],
    url: "/",
    image: "/images/hero-banner.jpg",
  },
  about: {
    title: "About HU777 - Leading Gaming Platform",
    description:
      "Learn about HU777, the premier gaming platform offering unparalleled gaming experiences, fair play, and massive rewards for all players.",
    keywords: ["about HU777", "gaming platform", "fair gaming", "rewards"],
    url: "/about",
  },
  blog: {
    title: "HU777 Blog - Gaming Tips & Updates",
    description:
      "Stay updated with the latest gaming tips, strategies, and HU777 platform updates. Your ultimate guide to gaming success.",
    keywords: ["gaming blog", "HU777 tips", "gaming strategies", "updates"],
    url: "/blog",
  },
  apk: {
    title: "Download HU777 APK - Free Gaming App",
    description:
      "Download the official HU777 APK for Android. Get instant access to thrilling games, exclusive bonuses, and seamless mobile gaming experience.",
    keywords: ["HU777 APK", "download", "Android app", "mobile gaming"],
    url: "/apk",
  },
  login: {
    title: "Login to HU777 - Access Your Account",
    description:
      "Secure login to your HU777 gaming account. Access your profile, check rewards, and continue your gaming journey.",
    keywords: ["HU777 login", "account access", "gaming account"],
    url: "/login",
  },
  register: {
    title: "Register HU777 Account - Join Now",
    description:
      "Create your HU777 gaming account today. Sign up for exclusive bonuses, tournaments, and start winning big rewards.",
    keywords: ["HU777 register", "sign up", "gaming account", "bonuses"],
    url: "/register",
  },
  download: {
    title: "Download HU777 - Get Started Today",
    description:
      "Download HU777 and begin your gaming adventure. Choose from multiple platforms and start winning with our user-friendly interface.",
    keywords: ["download HU777", "gaming platform", "get started"],
    url: "/download",
  },
  disclaimer: {
    title: "HU777 Disclaimer - Terms & Conditions",
    description:
      "Read the official HU777 disclaimer, terms of service, and responsible gaming guidelines. Play responsibly and enjoy fair gaming.",
    keywords: ["HU777 disclaimer", "terms", "responsible gaming"],
    url: "/disclaimer",
  },
  "privacy-policy": {
    title: "HU777 Privacy Policy - Data Protection",
    description:
      "Learn how HU777 protects your privacy and personal data. Our comprehensive privacy policy ensures secure and transparent gaming experience.",
    keywords: ["privacy policy", "data protection", "HU777 security"],
    url: "/privacy-policy",
  },
  hu777: {
    title: "HU777 Official Page - Premium Gaming",
    description:
      "Explore the official HU777 gaming platform. Discover features, bonuses, and everything you need to know about premium gaming experience.",
    keywords: ["HU777 official", "gaming platform", "premium gaming"],
    url: "/hu777",
  },
} as const satisfies Record<string, PageData>;

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-hu777",
    title: "Getting Started with HU777: Your Ultimate Guide",
    description:
      "Learn how to get started with HU777 gaming platform. From registration to your first win, this guide covers everything you need to know.",
    content: "Complete guide content here...",
    date: "2024-01-15",
    author: "HU777 Team",
    tags: ["beginner", "guide", "tutorial"],
  },
  {
    slug: "hu777-bonuses-explained",
    title: "HU777 Bonuses Explained: Maximize Your Rewards",
    description:
      "Discover all the bonus opportunities available on HU777. Learn how to claim and maximize your bonuses for bigger wins.",
    content: "Bonus guide content here...",
    date: "2024-01-20",
    author: "HU777 Team",
    tags: ["bonuses", "rewards", "tips"],
  },
  {
    slug: "mobile-gaming-tips",
    title: "Top Mobile Gaming Tips for HU777 Players",
    description:
      "Master mobile gaming with these expert tips. Improve your gameplay and increase your chances of winning on HU777.",
    content: "Mobile gaming tips content here...",
    date: "2024-01-25",
    author: "HU777 Team",
    tags: ["mobile", "tips", "strategy"],
  },
];

export const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Download APK", href: "/apk" },
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Download", href: "/download" },
  { name: "HU777", href: "/hu777" },
];

export const footerLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];
