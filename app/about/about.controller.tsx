import Image from "next/image";
import logo from "../../public/images/logo.jpeg";
import { aboutData } from "./abount.constant";
import { routes } from "../untils/RouteEndPoint";
import Link from "next/link";

const AboutController = () => {
  return (
    <main className="bg-bg-primary min-h-screen text-text-primary font-sans pb-12">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-10 text-text-primary leading-tight">
          HU777 Game APK Download 2026 – Play Real Cash Games & Fantasy Cricket
        </h1>

        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="w-32 h-32 bg-bg-card border-2 border-accent rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl transition-transform hover:scale-110">
            <Image
              src={logo}
              alt="HU777 Logo"
              width={128}
              height={128}
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col w-full max-w-sm gap-4">
            <Link
              href="https://acc.in7game.org/api/web/share/index.html?ic=AA0MCX3K&ts=1776184440&m=2&lang=en&id=1"
              className="bg-emerald-500 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-all text-center"
            >
              🚀 IN7 Game – Official Access Link
            </Link>

            <Link
              href="https://www.k123game.com/?inviteCode=WX4LZUS"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-all uppercase tracking-wider text-center"
            >
              💎 Download & Play K123
            </Link>

            <Link
              href="https://invite.hu777.club/?code=DU7ITHS"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-all text-center"
            >
              👉 HU777 Club – Official APK Download
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          {aboutData.sections.map((section, index) => (
            <section
              key={index}
              className="bg-bg-card border border-border rounded-2xl p-6 shadow-xl hover:border-primary/20 transition-colors"
            >
              <h2 className="text-xl font-bold text-black mb-4 border-b border-border pb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-sm md:text-base text-text-secondary leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-12 p-6 bg-bg-card border border-border rounded-2xl shadow-inner">
          <h3 className="font-bold mb-5 text-text-primary border-b border-border pb-2 uppercase text-sm tracking-widest">
            Internal Link Page
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "HU777 Game Download", url: routes.HOME },
              { name: "About HU777 APK", url: routes.ABOUT },
              { name: "Privacy Policy", url: routes.PRIVACY_POLICY },
              { name: "Disclaimer Page", url: routes.DISCLAIMER },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  href={link.url}
                  className="text-accent hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="text-[10px] group-hover:translate-x-1 transition-transform">
                    ▶
                  </span>
                  {link.name} — Link
                </Link>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </main>
  );
};

export default AboutController;
