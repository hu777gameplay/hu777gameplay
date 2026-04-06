import { routes } from "../untils/RouteEndPoint";

export const privacyData = {
  lastUpdated: "08 Dec 2025",
  sections: [
    {
      title: "1. Information We Collect",
      content: [
        "We may collect the following types of information:",
        "a) Personal Information",
      ],
      list: [
        "Mobile number",
        "Username / Player ID",
        "Payment details (for deposits/withdrawals)",
      ],
      subContent:
        "(We do not collect sensitive data, like bank passwords, unencrypted on our servers.)",
      subTitle: "b) Non-Personal Information",
      subList: [
        "Device type and OS",
        "App usage data",
        "Game activity and performance",
        "IP address",
        "Network connection status",
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: ["HU777 APK DOWNLOAD uses collected data for:"],
      list: [
        "Creating and managing user accounts",
        "Improving game speed and user experience",
        "Providing customer support",
        "Processing real cash transactions securely and safely",
        "Preventing fraud, cheating, and unauthorized activities",
        "Monitoring overall game app performance",
      ],
    },
    {
      title: "3. Sharing of Information",
      content: [
        "We do not sell or trade your personal information.",
        "We may share info in these scenarios:",
      ],
      list: [
        "Service providers (payment processors, cloud storage)",
        "Security & anti-fraud partners",
        "Legal authorities (only if required by law)",
      ],
      subContent:
        "All third-party partners strictly follow privacy and data protection rules.",
    },
    {
      title: "4. Data Protection & Security",
      content: ["We use modern security measures to protect your data:"],
      list: [
        "Data encryption",
        "Secure servers",
        "Anti-cheat mechanisms",
        "Regular security audits",
      ],
      subContent:
        "However, no online platform is 100% secure, and users should use strong passwords while keeping their accounts safe.",
    },
    {
      title: "5. Cookies & Tracking",
      content: ["Our website uses cookies to:"],
      list: [
        "Improve loading speed",
        "Save user preferences",
        "Track website traffic for analytics",
      ],
      subContent: "You may disable cookies in your browser settings.",
    },
    {
      title: "6. User Rights",
      content: ["You have the right to:"],
      list: [
        "Request the personal data we collected",
        "Request deletion of your account",
        "Contact support for privacy-related concerns",
      ],
    },
  ],
  internalLinks: [
    { label: "HU777 Game Download", url: routes.HOME },
    { label: "About HU777 APK", url: routes.ABOUT },
    { label: "Disclaimer Page", url: routes.DISCLAIMER },
  ],
};
