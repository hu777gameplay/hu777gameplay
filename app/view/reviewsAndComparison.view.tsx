export default function ReviewsAndComparison() {
  return (
    <section className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-bg-card p-6 rounded-2xl border border-secondary/20 shadow-lg bg-gradient-to-br from-bg-card to-secondary/5">
          <h3 className="font-bold text-xl mb-4 text-secondary flex items-center gap-2">
            <span className="text-2xl">✅</span> Pros
          </h3>
          <ul className="space-y-3 text-sm md:text-base text-text-secondary">
            {[
              "Easy signup process",
              "Multiple games (Slots, Rummy, Ludo)",
              "Fantasy cricket integration",
              "Fast withdrawal system",
            ].map((item, index) => (
              <li key={index} className="flex gap-3 items-center">
                <span className="text-secondary font-bold">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-bg-card p-6 rounded-2xl border border-primary/20 shadow-lg bg-gradient-to-br from-bg-card to-primary/5">
          <h3 className="font-bold text-xl mb-4 text-primary flex items-center gap-2">
            <span className="text-2xl">❌</span> Cons
          </h3>
          <ul className="space-y-3 text-sm md:text-base text-text-secondary">
            {[
              "Financial risk involved",
              "Strictly for 18+ users only",
              "Not available on Google Play Store",
            ].map((item, index) => (
              <li key={index} className="flex gap-3 items-center">
                <span className="text-primary font-bold text-lg">×</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-border">
          <h2 className="text-xl md:text-2xl font-bold text-white">
            HU777 vs Other Gaming Apps
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm md:text-base border-collapse">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-4 text-left text-text-secondary font-bold uppercase tracking-wider">
                  Feature
                </th>
                <th className="px-6 py-4 text-left font-bold text-accent italic">
                  HU777 Game
                </th>
                <th className="px-6 py-4 text-left text-text-secondary font-bold uppercase tracking-wider">
                  Other Apps
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-border">
              {[
                {
                  feature: "Signup Bonus",
                  hu: "₹200 – ₹500",
                  other: "₹10 – ₹50",
                },
                {
                  feature: "Withdrawal",
                  hu: "Instant (UPI/Paytm)",
                  other: "24-48 Hours",
                },
                {
                  feature: "App Size",
                  hu: "29 MB (Lite)",
                  other: "80 MB - 150 MB",
                },
                {
                  feature: "Win Rate",
                  hu: "High/Fair",
                  other: "Variable",
                },
              ].map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-white/[0.03] transition-colors duration-200"
                >
                  <td className="px-6 py-4 text-text-secondary font-medium">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 font-bold text-white">{row.hu}</td>
                  <td className="px-6 py-4 text-text-secondary">{row.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
