import { blogData } from "../blog.constant";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function BlogDetailController({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogData.find((b) => b.slug === params.slug);

  const inviteLink = "https://invite.hu777.club/?code=DU7ITHS";

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/20">
      {/* Simple Navigation */}
      <nav className="border-b border-border py-4 px-6">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <Link
            href="/blog"
            className="text-xs font-bold text-muted-foreground hover:text-accent uppercase tracking-widest transition-colors"
          >
            ← Back to Blog
          </Link>
          <span className="text-[10px] text-primary font-black uppercase tracking-tighter italic">
            HU777 Official
          </span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto py-12 md:py-20 px-6">
        {/* Header Section */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] bg-muted px-2 py-0.5 rounded text-accent font-bold uppercase">
              {post.category}
            </span>
            <span className="text-[10px] text-muted-foreground">
              • {post.date}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black leading-tight text-black mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-bold text-xs shadow-lg">
              {post.author.charAt(0)}
            </div>
            <span>
              Published by{" "}
              <span className="text-foreground font-bold">{post.author}</span>
            </span>
          </div>
        </header>

        {/* Content Section */}
        <div
          className="prose prose-invert prose-slate max-w-none 
            prose-headings:text-foreground prose-headings:font-black
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-strong:text-accent prose-strong:font-bold
            prose-h3:text-primary prose-h3:mt-8
            pb-16 border-b border-border"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="mt-12 py-8 bg-card rounded-[--radius] border border-border p-8 text-center">
          <h3 className="text-xl font-black text-black mb-2">
            Ready to Start Winning?
          </h3>
          <p className="text-muted-foreground text-sm mb-6">
            Download the official HU777 APK and get your ₹500 bonus today.
          </p>

          <Link
            href={inviteLink}
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-red-600 text-black font-black py-4 px-10 rounded-md transition-all shadow-[0_5px_15px_rgba(239,68,68,0.3)] hover:-translate-y-1 active:scale-95"
          >
            GET THE APP NOW
          </Link>
        </footer>
      </main>

      <footer className="py-12 text-center text-muted-foreground text-[10px] uppercase tracking-widest opacity-50">
        © 2026 HU777 Games | Professional Content Hub
      </footer>
    </div>
  );
}
