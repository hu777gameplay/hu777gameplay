import { aboutData } from "./abount.constant";

const AboutController = () => {
  return (
    <main className="bg-bg-primary min-h-screen text-text-primary font-sans pb-12">
      <div className="max-w-4xl mx-auto px-4 py-8">
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
      </div>
    </main>
  );
};

export default AboutController;
