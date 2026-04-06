import { privacyData } from "./privacyPolicy.constant";
import Image from "next/image";
import promoImg from "../../public/images/promo.jpg";
import Link from "next/link";

const PrivacyPolicyController = () => {
  // Your provided invite link
  const inviteLink = "https://invite.hu777.club/?code=DU7ITHS";

  return (
    <main className="bg-bg-primary min-h-screen text-text-primary font-sans pb-16 selection:bg-primary/30">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-white uppercase tracking-tighter drop-shadow-sm">
          Privacy Policy – HU777 APK DOWNLOAD
        </h1>

        <div className="flex justify-center mb-12">
          <div className="bg-primary/10 p-4 rounded-[2.5rem] border border-primary/20 inline-block shadow-2xl transition-transform hover:scale-[1.02] duration-500">
            <div className="relative w-72 h-[480px] bg-bg-card border-2 border-accent/40 rounded-[2rem] overflow-hidden shadow-inner">
              <Image
                src={promoImg}
                alt="HU777 Game Welfare Feast Promo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <Link
            href={inviteLink}
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black py-4 px-12 rounded-xl shadow-[0_10px_20px_rgba(6,182,212,0.3)] hover:shadow-[0_15px_30px_rgba(6,182,212,0.4)] hover:-translate-y-1 active:translate-y-0 transition-all uppercase tracking-widest text-sm text-center"
          >
            DOWNLOAD NOW
          </Link>
        </div>

        <div className="bg-bg-card border border-border rounded-2xl p-8 mb-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full"></div>

          <h2 className="text-xl font-black text-center mb-4 text-accent uppercase tracking-widest">
            HU777 APK OFFICIAL
          </h2>
          <p className="text-xs text-center text-text-secondary mb-4 uppercase tracking-widest font-bold opacity-70">
            Last Updated:{" "}
            <span className="text-white font-mono">
              {privacyData.lastUpdated}
            </span>
          </p>
          <p className="text-sm md:text-base leading-relaxed text-center max-w-2xl mx-auto italic text-text-secondary font-medium">
            &quot;We value your privacy. This policy details how we collect and
            protect your personal data while you enjoy the HU777 gaming
            experience.&quot;
          </p>
        </div>

        <div className="space-y-8">
          {privacyData.sections.map((section, index) => (
            <section
              key={index}
              className="bg-bg-card border border-border rounded-2xl p-7 shadow-lg hover:border-primary/30 transition-all duration-300 group"
            >
              <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-3 group-hover:text-primary transition-colors">
                <span className="w-1.5 h-7 bg-primary rounded-full inline-block shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span>
                {section.title}
              </h2>

              <div className="space-y-5">
                {section.content?.map((text, i) => (
                  <p
                    key={i}
                    className="text-sm md:text-base text-text-secondary leading-relaxed font-medium"
                  >
                    {text}
                  </p>
                ))}

                {section.list && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-2 mt-4">
                    {section.list.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-text-secondary flex items-start gap-3 group/item"
                      >
                        <span className="text-secondary font-bold group-hover/item:scale-125 transition-transform">
                          ✔
                        </span>
                        <span className="group-hover/item:text-text-primary transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.subTitle && (
                  <h3 className="text-md font-bold text-white mt-6 border-l-4 border-accent pl-4 py-1 bg-accent/5 rounded-r-lg">
                    {section.subTitle}
                  </h3>
                )}

                {section.subList && (
                  <ul className="grid grid-cols-1 gap-3 pl-8 mt-4">
                    {section.subList.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-text-secondary flex items-center gap-3"
                      >
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-16 bg-bg-card p-8 rounded-2xl border border-border shadow-2xl relative">
          <h3 className="font-black mb-6 text-white border-b border-border pb-3 uppercase text-xs tracking-[0.2em]">
            Quick Navigation
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-accent">
            {privacyData.internalLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className="hover:text-primary transition-all flex items-center gap-3 group/link"
                >
                  <span className="text-[10px] group-hover/link:translate-x-1 transition-transform">
                    ▶
                  </span>
                  <span className="font-bold tracking-wide">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </main>
  );
};

export default PrivacyPolicyController;
