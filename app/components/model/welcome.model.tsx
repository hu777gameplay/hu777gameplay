"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useEffect, useState } from "react";

export default function WelcomeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="
          p-0 overflow-hidden 
          w-[95%] max-w-md 
          rounded-2xl 
          bg-black border border-white/10
        "
      >
        {/* 🔥 BACKGROUND DESIGN */}
        <div className="relative w-full p-8 text-center">
          {/* Gradient Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-orange-500/20 blur-2xl" />

          {/* CONTENT */}
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              HU777 Gameplay
            </h2>

            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Fast • Secure • Exciting
            </p>

            <p className="text-gray-500 mt-4 text-sm">
              Explore the latest gameplay and features
            </p>

            {/* CTA */}
            <button
              onClick={() => setOpen(false)}
              className="
                mt-6 w-full 
                rounded-xl 
                bg-gradient-to-r from-purple-500 to-pink-500 
                py-3 
                text-white font-semibold 
                shadow-lg 
                hover:opacity-90 transition
              "
            >
              Continue
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
