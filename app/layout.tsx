import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ✅ Metadata must be exported outside the component */
export const metadata = {
  title: "HU777 Games – Official HU777 Guide, APK Download & Login Information",
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
  openGraph: {
    title: "HU777 Games – Official HU777 Guide",
    description:
      "Complete guide for HU777 Games including APK download, login instructions, and latest updates.",
    url: "https://playhu777games.com",
    siteName: "HU777 Games",
    type: "website",
  },
  verification: {
    google: "googled4e007b03e57fb22",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
