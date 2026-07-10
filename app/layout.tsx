import ScrollToTop from "@/components/ui/scrollToTop";
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
    default: "HU777 Gameplay – APK Download, BT03 & MMY Game Guide 2026",
    template: "%s | HU777 Gameplay",
  },

  description:
    "HU777 Games official guide 2026. Download HU777 APK, login, register account, bonus offers, casino games, slots, and latest updates. 100% safe guide for HU777 users.",

  keywords: [
    // MAIN BRAND
    "mygame",
    "my game",
    "mygame website",
    "mygame gaming platform",
    "mygame reviews",

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

    // 🔴 HU777 GAMEPLAY (MAIN FOCUS)
    "hu777 gameplay",
    "hu777gameplay",
    "hu777 gameplay website",
    "hu777 gameplay guide",
    "hu777 gameplay apk",
    "hu777 gameplay download",
    "hu777 gameplay india",
    "hu777 gameplay casino",
    "hu777 gameplay slot games",
    "hu777 gameplay earning app",
    "hu777 gameplay bonus",
    "hu777 gameplay latest update",
    "hu777 gameplay review",

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

    // 🟠 BT03 GAME
    "bt03 game",
    "bt03 game play",
    "bt03 game download",
    "bt03 game apk",
    "bt03 earning app",
    "bt03 casino game",
    "bt03 slot games",
    "bt03 game india",
    "bt03 game review",
    "bt03 fast access game",

    // 🔵 MMY GAME
    "MMY game",
    "MMY gameplay",
    "MMY game download",
    "MMY apk",
    "MMY earning app",
    "MMY casino",
    "MMY slot games",
    "MMY game india",
    "MMY game review",
    "MMY bonus offers",

    // 🔥 HIGH TRAFFIC (RELEVANT ONLY)
    "best earning app india",
    "real money games india",
    "online casino games india",
    "slot earning apps",
    "mobile casino games india",
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
        <Header />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
