import Link from "next/link";
import { blogData } from "./blog.constant";

export default function BlogListing() {
  return (
    <div className="bg-background min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <div className="bg-card h-full p-8 rounded-[--radius] border border-border transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] group-hover:-translate-y-2">
                {/* Category using Accent Color */}
                <span className="text-[10px] uppercase tracking-widest font-black text-accent mb-4 block">
                  {post.category}
                </span>

                {/* Title using Theme Foreground */}
                <h2 className="text-xl font-black text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
                  <span className="text-primary font-bold">{post.author}</span>
                  <span>/</span>
                  <span>{post.date}</span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-6 text-accent text-xs font-black opacity-0 group-hover:opacity-100 transition-opacity">
                  READ GUIDE →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
