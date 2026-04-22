"use client";

import { useState } from "react";
import { blogPosts, navigationLinks } from "@/lib/data";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ArrowRight, Calendar, User } from "lucide-react";

const POSTS_PER_PAGE = 10;

export default function BlogController() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const currentPosts = blogPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE,
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <main className="container mx-auto px-4 py-16">
        {/* HERO */}
        <section className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              HU777 Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Stay updated with latest tips & earning guides.
            </p>
          </div>
        </section>

        {/* BLOG GRID */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <Card
                key={post.slug}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <CardTitle className="group-hover:text-blue-600 transition line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3">
                    {post.description}
                  </CardDescription>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ✅ PAGINATION */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                page === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* INTERNAL LINKS */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-8">Explore More</h2>

          <div className="grid md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {navigationLinks.slice(0, 4).map((link) => (
              <Link key={link.href} href={link.href}>
                <Card className="p-4 hover:shadow-md transition cursor-pointer">
                  <CardTitle className="text-sm">{link.name}</CardTitle>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
