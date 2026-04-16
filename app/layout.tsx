import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "@/components/ui/scrollToTop";

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

    // LONG TAIL (VERY IMPORTANT 🔥)
    "how to download hu777 apk",
    "how to login hu777 account",
    "hu777 real or fake",
    "hu777 safe or not",
    "hu777 app review",
    "hu777 earning proof",
    "hu777 bonus offers",
    "hu777 referral code",

    // LOCATION (India SEO boost 🇮🇳)
    "hu777 india",
    "hu777 app india",
    "best earning app india",
    "online casino india hu777",
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
