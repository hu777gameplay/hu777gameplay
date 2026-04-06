import ImageSlider from "../components/imageSlider";
import { APP_DETAILS } from "../home.constant";
import s1 from "../../public/images/s1.webp";
import s2 from "../../public/images/s2.webp";
import s3 from "../../public/images/s3.webp";

export default function AppDetailsTable() {
  const SLIDER_IMAGES = [s1, s2, s3];
  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-border shadow-2xl">
        <table className="min-w-full bg-bg-card border-collapse">
          <thead className="bg-white/5">
            <tr>
              <th className="px-4 md:px-6 py-4 text-left text-text-primary font-bold text-base md:text-lg">
                Details
              </th>
              <th className="px-4 md:px-6 py-4 text-left text-text-primary font-bold text-base md:text-lg">
                Information
              </th>
            </tr>
          </thead>

          <tbody>
            {APP_DETAILS.table.map((item, index) => (
              <tr
                key={index}
                className="border-t border-border hover:bg-white/[0.03] transition-colors duration-200"
              >
                <td className="px-4 md:px-6 py-4 text-text-secondary font-medium text-sm md:text-base">
                  {item.label}
                </td>
                <td className="px-4 md:px-6 py-4 font-bold text-text-primary text-sm md:text-base">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <section className="py-4">
        <h2 className="text-center text-xl font-bold mb-8 uppercase tracking-widest text-accent">
          App Screenshots
        </h2>
        <ImageSlider images={SLIDER_IMAGES} />
      </section>
    </>
  );
}
