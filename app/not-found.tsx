import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Visual Element: Large Glowing 404 */}
      <div className="relative">
        <h1 className="text-[12rem] md:text-[15rem] font-black text-white/5 leading-none select-none">
          404
        </h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center"></div>
      </div>

      {/* Message */}
      <div className="max-w-md mt-4">
        <p className="text-muted-foreground text-lg mb-10">
          The guide or page you are looking for has been moved or deleted.
          Don&apos;t lose your streak—head back to the main lobby.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="bg-card border border-border text-foreground font-bold py-4 px-8 rounded-md hover:border-accent hover:text-accent transition-all"
          >
            RETURN TO BLOG
          </Link>

          <Link
            href="/"
            className="bg-primary hover:bg-red-600 text-white font-black py-4 px-8 rounded-md shadow-[0_10px_20px_rgba(239,68,68,0.3)] transition-all hover:-translate-y-1 active:scale-95"
          >
            GO TO GAME LOBBY
          </Link>
        </div>
      </div>

      {/* Decorative Brand Element */}
      <div className="mt-20 opacity-20">
        <span className="text-[10px] text-accent font-black uppercase tracking-[0.5em]">
          HU777 Official Security Protocol
        </span>
      </div>
    </div>
  );
}
