import { disclaimerData } from "./disclaimer.constant";

const DisclaimerController = () => {
  return (
    <main className="bg-bg-primary min-h-screen text-text-primary font-sans pb-12 selection:bg-primary/30">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center space-y-4 mb-12 max-w-2xl mx-auto">
          <p className="font-semibold text-black text-lg leading-snug">
            {disclaimerData.intro}
          </p>
          <p className="text-sm text-text-secondary italic opacity-80">
            {disclaimerData.agreement}
          </p>
        </div>

        <div className="space-y-6">
          {disclaimerData.sections.map((section, index) => (
            <div
              key={index}
              className="bg-bg-card border border-border rounded-2xl p-6 shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <h2 className="text-xl font-bold mb-4 text-black border-b border-border pb-3 group-hover:text-primary transition-colors">
                {section.title}
              </h2>

              <div className="space-y-3 text-sm md:text-base text-text-secondary leading-relaxed">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>

              {section.list && (
                <ul className="mt-5 space-y-3 text-sm text-text-secondary pl-2">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="space-y-8 pt-6">
            <div className="bg-red-950/20 border border-red-500/40 p-6 rounded-2xl shadow-[0_0_15px_rgba(239,68,68,0.1)]">
              <h2 className="text-xl font-black text-red-500 mb-3 flex items-center gap-2">
                <span>⚠️</span> Warning -
              </h2>
              <p className="text-sm md:text-base text-red-100/80 leading-relaxed font-semibold">
                HU777 APK Game is an online entertainment platform intended for
                users aged 18 years and above. Playing involves financial risk
                and may be addictive. Please play responsibly.
              </p>
            </div>

            <div className="bg-bg-card border border-border p-6 rounded-2xl shadow-lg border-l-4 border-l-accent">
              <h2 className="text-lg font-bold mb-3 uppercase text-black tracking-wider">
                Not Real Website
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed italic">
                This website is for informational purposes only. The HU777 APK
                download section is not affiliated with any official company. We
                do not promote illegal activities or claim ownership of the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DisclaimerController;
