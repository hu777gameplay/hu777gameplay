import { FEATURES_DATA } from "../home.constant";

export default function FeaturesAndGuides() {
  return (
    <section className="space-y-10">
      <div className="bg-bg-card p-6 rounded-2xl border border-border shadow-lg hover:border-primary/20 transition-all">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-white border-b border-border pb-3">
          What is HU777 Game?
        </h2>
        <p className="text-text-secondary leading-relaxed text-sm md:text-base">
          HU777 Game is an online earning and gaming app where users can play
          slots, color prediction, rummy, teen patti, ludo, and fantasy cricket
          to win real cash.
        </p>
      </div>

      <div className="bg-bg-card p-6 rounded-2xl border border-border shadow-lg hover:border-primary/20 transition-all">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-white border-b border-border pb-3">
          Why Choose HU777 Game 2026?
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FEATURES_DATA.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-text-secondary text-sm md:text-base group"
            >
              <span className="text-emerald-500 bg-emerald-500/10 p-1 rounded-full group-hover:scale-110 transition-transform">
                ✔
              </span>
              <span className="group-hover:text-white transition-colors">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-bg-card p-6 rounded-2xl border border-border shadow-lg hover:border-primary/20 transition-all">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-white border-b border-border pb-3">
          How to Download & Play
        </h2>

        <ol className="space-y-5">
          {[
            "Go to the official HU777 website and click HU777 Game APK Download.",
            "Enable Install from Unknown Sources in your settings.",
            "Install the APK and open the app.",
            "Register using your mobile number and verify OTP.",
            "Deposit money using UPI, Paytm, or Bank.",
            "Select your game and start playing.",
          ].map((step, index) => (
            <li
              key={index}
              className="flex gap-4 text-text-secondary text-sm md:text-base group"
            >
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary/10 text-primary font-bold rounded-full border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
                {index + 1}
              </span>
              <span className="pt-1 group-hover:text-white transition-colors leading-relaxed">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
