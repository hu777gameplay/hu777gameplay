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

/* ✅ Proper typed metadata */
export const metadata: Metadata = {
  metadataBase: new URL("https://playhu777games.com"),
  title: {
    default:
      "HU777 Games – Official HU777 Guide, APK Download & Login Information",
    template: "%s | HU777 Games",
  },
  description:
    "Discover everything about HU777 Games including APK download, secure login guide, platform features, and the latest updates. Get complete information and stay updated with HU777 games and online casino news.",
  keywords: [
    "hu777",
    "hu777 games",
    "hu777 apk download",
    "hu777 login",
    "hu777 casino",
    "hu777 online games",
    "hu777 guide",
  ],
  authors: [{ name: "HU777 Games" }],
  creator: "HU777 Games",
  publisher: "HU777 Games",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HU777 Games – Official HU777 Guide",
    description:
      "Complete guide for HU777 Games including APK download, login instructions, and latest updates.",
    url: "https://playhu777games.com",
    siteName: "HU777 Games",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HU777 Games – Official HU777 Guide",
    description:
      "Complete guide for HU777 Games including APK download, login instructions, and latest updates.",
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
