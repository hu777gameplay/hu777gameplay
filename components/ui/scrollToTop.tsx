"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={onScrollTop}
      className={`
        fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50
        h-11 w-11 md:h-12 md:w-12
        rounded-xl md:rounded-2xl
        flex items-center justify-center
        border border-white
        bg-black text-white
        shadow-lg shadow-black/20
        backdrop-blur-md
        transition-all duration-300 ease-in-out
        hover:-translate-y-1 hover:scale-105
        hover:shadow-xl hover:shadow-black
        active:scale-95
        focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0"
        }
      `}
    >
      <ArrowUp className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2.5} />
    </button>
  );
}
