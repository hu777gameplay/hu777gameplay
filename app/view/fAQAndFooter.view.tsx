import { FAQ_DATA } from "../home.constant";

export default function FAQAndFooter() {
  return (
    <section className="space-y-10 pb-10">
      <div className="bg-bg-card p-6 rounded-2xl border border-border shadow-xl">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-white border-b border-border pb-3 flex items-center gap-2">
          <span className="text-primary">?</span> FAQs – HU777 Game APK 2026
        </h2>

        <div className="space-y-6">
          {FAQ_DATA.map((item, index) => (
            <div
              key={index}
              className="group border-b border-border/50 pb-4 last:border-0"
            >
              <h3 className="text-base md:text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors cursor-default">
                Q: {item.question}
              </h3>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed bg-white/5 p-3 rounded-lg border-l-2 border-accent/30">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-bg-card to-red-950/10 p-6 rounded-2xl border border-red-500/20 shadow-lg">
        <h2 className="font-bold text-lg mb-4 text-primary flex items-center gap-2">
          <span>⚠️</span> Disclaimer & Important Note
        </h2>

        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p className="text-text-secondary">
            This game involves{" "}
            <strong className="text-white">financial risk</strong> and may be
            addictive. Play responsibly and at your own risk. Strictly for users{" "}
            <strong className="text-white underline decoration-primary">
              18+ only
            </strong>
            .
          </p>

          <p className="text-text-secondary italic opacity-80">
            This website is{" "}
            <strong className="text-text-primary">
              not the official website of HU777
            </strong>
            . It is a dedicated landing page for informational purposes and
            download assistance only. For official support, please reach out to
            the app developers directly.
          </p>
        </div>
      </div>

      {/* <div className="text-center space-y-2">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-border to-transparent mb-6"></div>
        <p className="text-xs text-text-secondary uppercase tracking-widest opacity-60">
          Last Updated: March 2026
        </p>
        <p className="text-[10px] text-text-secondary/40">
          © 2026 HU777 Fan Portal • All Rights Reserved
        </p>
      </div> */}
    </section>
  );
}
