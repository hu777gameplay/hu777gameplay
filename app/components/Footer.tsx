import Link from "next/link";

interface FooterProps {
  footerLinks?: { name: string; href: string }[];
}

const defaultFooterData = {
  disclaimer: {
    text: "does not operate betting platforms. Content is for information only. Play responsibly & comply with local laws (18+).",
    link: "https://hu777gameplay.com/",
    site: "https://hu777gameplay.com/",
  },
  copyright: {
    year: 2026,
    site: "https://hu777gameplay.com/",
  },
};

export default function Footer({ footerLinks }: FooterProps = {}) {
  const footerData = defaultFooterData;
  return (
    <footer className="w-full border-t border-border bg-bg-secondary py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="max-w-3xl">
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              <Link
                href={footerData.disclaimer.link}
                className="text-primary font-bold hover:brightness-110 transition-all uppercase tracking-tight"
              >
                Disclaimer
              </Link>
              <span className="mx-2 text-border">|</span>
              <Link
                href={footerData.disclaimer.site}
                className="font-bold text-text-primary hover:text-accent transition-colors"
              >
                hu777gameplay.com
              </Link>{" "}
              <span className="opacity-80 italic">
                {footerData.disclaimer.text}
              </span>
            </p>
          </div>

          {footerLinks && footerLinks.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}

          <div className="flex flex-col items-center gap-2">
            <div className="h-[1px] w-20 bg-border mb-2" />
            <p className="text-xs md:text-sm text-text-secondary tracking-wide">
              © {footerData.copyright.year}{" "}
              <Link
                href={footerData.copyright.site}
                className="font-bold text-text-primary hover:text-accent transition-colors uppercase"
              >
                hu777gameplay.com
              </Link>
            </p>
            <p className="text-[10px] text-text-secondary/40 uppercase tracking-widest">
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
