import Image from "next/image";
import logo from "../../public/images/logo.jpg";
import { HERO_DATA } from "../home.constant";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="text-center space-y-6 pt-6">
      <h1 className="text-3xl md:text-5xl font-extrabold text-black drop-shadow-md">
        {HERO_DATA.title}
      </h1>

      <div className="flex justify-center">
        <Image
          src={logo}
          alt="HU777 Game"
          width={180}
          height={180}
          className="rounded-3xl shadow-2xl border-2 border-accent/20"
        />
      </div>

      <div className="flex flex-col gap-4 items-center px-4">
        {HERO_DATA.buttons.map((btn, index) => (
          <Link
            key={index}
            href={btn.link}
            className={`w-full max-w-md py-4 px-6 rounded-xl font-bold text-black text-center transition-all duration-300 shadow-lg ${
              btn.style === "primary"
                ? "bg-gradient-to-r from-orange-500 to-yellow-500 hover:scale-105 active:scale-95"
                : btn.style === "secondary"
                  ? "bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95"
                  : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 active:scale-95"
            }`}
          >
            {btn.text}
          </Link>
        ))}
      </div>
    </section>
  );
}
