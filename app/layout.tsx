import ScrollToTop from "@/components/ui/scrollToTop";
import { AuthProvider } from "@/lib/auth";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hu777gameplay.com"),

  title: {
    default: "HU777 Games 2026 – APK Download, Login, Register & Full Guide",
    template: "%s | HU777 Games",
  },

  description:
    "HU777 Games official guide 2026. Download HU777 APK, login, register account, bonus offers, casino games, slots, and latest updates. 100% safe guide for HU777 users.",

  keywords: [
    // 🔥 BRAND (VERY IMPORTANT)
    "hu777gameplay",
    "hu777gameplay.com",
    "hu777 gameplay website",
    "hu777 gameplay official site",

    // =========================
    // 🔴 HU777 KEYWORDS
    // =========================

    // MAIN
    "hu777",
    "hu777 games",
    "hu777 gameplay",
    "hu777 official website",

    // DOWNLOAD
    "hu777 apk",
    "hu777 apk download",
    "hu777 latest apk",
    "download hu777 app",

    // LOGIN / REGISTER
    "hu777 login",
    "hu777 register",
    "hu777 sign up",
    "hu777 account login",

    // CASINO / GAMES
    "hu777 casino",
    "hu777 online casino",
    "hu777 slot games",
    "hu777 betting app",
    "hu777 earning app",

    // LONG TAIL
    "how to download hu777 apk",
    "how to login hu777 account",
    "hu777 real or fake",
    "hu777 safe or not",
    "hu777 app review",
    "hu777 earning proof",
    "hu777 bonus offers",
    "hu777 referral code",

    // INDIA SEO
    "hu777 india",
    "hu777 app india",
    "best earning app india hu777",
    "online casino india hu777",

    // =========================
    // 🔵 K123 GAME KEYWORDS
    // =========================

    "k123 game",
    "k123 game download",
    "k123 apk",
    "k123 login",
    "k123 register",
    "k123 app download",
    "k123 earning app",
    "k123 casino",
    "k123 slot games",
    "how to download k123 game",
    "k123 app india",
    "k123 game review",
    "k123 safe or not",

    // =========================
    // 🟢 IN7 GAME KEYWORDS
    // =========================

    "in7 game",
    "in7 game download",
    "in7 apk",
    "in7 login",
    "in7 register",
    "in7 app download",
    "in7 earning app",
    "in7 casino",
    "in7 slot games",
    "how to download in7 game",
    "in7 app india",
    "in7 game review",
    "in7 safe or not",

    // =========================
    // 🔥 MIXED / HIGH TRAFFIC
    // =========================

    "best earning app india",
    "real money earning apps",
    "casino apps india",
    "online betting apps india",
    "apk download earning apps",
  ],

  authors: [{ name: "HU777 Games" }],
  creator: "HU777 Games",
  publisher: "HU777 Games",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.hu777gameplay.com",
  },

  openGraph: {
    title: "HU777 Games – APK Download & Login Guide",
    description:
      "Download HU777 APK, login guide, register account, and explore casino games with latest updates.",
    url: "https://www.hu777gameplay.com",
    siteName: "HU777 Games",
    images: [
      {
        url: "/og-image.png", // add this image
        width: 1200,
        height: 630,
        alt: "HU777 Games",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "HU777 Games – APK Download & Login Guide",
    description:
      "Complete HU777 guide with APK download, login and latest updates.",
    images: ["/og-image.png"],
  },

  verification: {
    google: "googled4e007b03e57fb22",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <AuthProvider>
          <Header />
          {children}
          <ScrollToTop />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
