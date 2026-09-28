import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { BlogService } from "@/modules/blog/blog.service";
import { fixImageUrl } from "@/lib/apiConfig";
import { Search, Calendar, User, Eye, ArrowRight, Sparkles, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Fitness & Nutrition Blogs | FabFit Performance Gym Gurgaon",
  description: "Read expert fitness advice, nutrition guides, fat loss secrets, and workout split guides written by Coach Ankit Baliyan.",
  alternates: {
    canonical: "https://fabfitperformance.com/blogs",
  },
  openGraph: {
    title: "Fitness & Nutrition Blogs | FabFit Performance Gym Gurgaon",
    description: "Read expert fitness advice, nutrition guides, fat loss secrets, and workout split guides written by Coach Ankit Baliyan.",
    url: "https://fabfitperformance.com/blogs",
    images: ["/fabfit.jpeg"],
  },
};

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>;
}) {
  const { category, search } = await searchParams;
  const blogs = await BlogService.getAllBlogs({
    isPublic: true,
    category,
    search,
  });

  const categories = ["ALL", "Fitness", "Nutrition", "Fat Loss", "Muscle Gain", "Mindset & Lifestyle"];

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 pb-20 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-[#d4af37] text-xs md:text-sm font-black tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20">
            <Sparkles className="w-4 h-4" />
            FABFIT KNOWLEDGE HUB
          </span>

          <h1 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tight leading-[1.05] mb-6">
            FITNESS & <span className="text-[#d4af37]">NUTRITION INSIGHTS</span>
          </h1>

          <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium">
            Evidence-based training architecture, macro calculations, and physique transformation strategies from Gurgaon's elite performance coaches.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2.5 flex-wrap mb-12">
          {categories.map((cat) => {
            const isActive = (category || "ALL") === cat;
            return (
              <Link
                key={cat}
                href={cat === "ALL" ? "/blogs" : `/blogs?category=${encodeURIComponent(cat)}`}
                className={`px-5 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300 border ${
                  isActive
                    ? "bg-[#d4af37] border-[#d4af37] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-[#d4af37]/50 hover:text-white"
                }`}
              >
                {cat}
              </Link>
            );
          })}
        </div>

        {/* Blog Posts Grid */}
        {blogs.length === 0 ? (
          <div className="text-center py-20 bg-zinc-900/30 border border-zinc-800 rounded-3xl max-w-xl mx-auto">
            <BookOpen className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No Articles Found</h3>
            <p className="text-zinc-400 text-sm mb-6">There are no published articles matching your criteria yet.</p>
            <Link
              href="/blogs"
              className="inline-flex items-center px-6 py-3 bg-[#d4af37] text-black font-extrabold text-xs tracking-wider uppercase rounded-lg hover:bg-white transition-colors"
            >
              View All Articles
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog: any) => {
              const formattedDate = blog.publishedAt 
                ? new Date(blog.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                : new Date(blog.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

              return (
                <article
                  key={blog.id}
                  className="group bg-[#0a0a0c] border border-white/10 hover:border-[#d4af37]/50 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col shadow-2xl"
                >
                  {/* Article Thumbnail */}
                  <div className="relative h-56 w-full overflow-hidden bg-zinc-900">
                    {blog.coverImage ? (
                      <img
                        src={fixImageUrl(blog.coverImage)}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-zinc-600 font-semibold text-xs">
                        FabFit Performance
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1.5 bg-black/80 backdrop-blur-md text-[#d4af37] border border-[#d4af37]/30 text-[10px] font-black uppercase tracking-widest rounded-lg">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Article Card Content */}
                  <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Date & Read Time */}
                      <div className="flex items-center gap-4 text-zinc-500 text-xs font-semibold mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                          {formattedDate}
                        </span>
                        <span>•</span>
                        <span>{blog.readTime || "5 min read"}</span>
                      </div>

                      {/* Title */}
                      <h2 className="font-heading text-xl font-black text-white group-hover:text-[#d4af37] transition-colors leading-snug uppercase tracking-tight mb-3">
                        <Link href={`/blogs/${blog.slug}`}>
                          {blog.title}
                        </Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="text-zinc-400 text-sm leading-relaxed font-medium line-clamp-3 mb-6">
                        {blog.excerpt || blog.content.substring(0, 120) + "..."}
                      </p>
                    </div>

                    {/* Author Footer & Read More Link */}
                    <div className="pt-5 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 text-[#d4af37] font-bold text-xs flex items-center justify-center border border-[#d4af37]/40">
                          {blog.authorName.charAt(0)}
                        </div>
                        <span className="text-xs font-bold text-zinc-300">
                          {blog.authorName}
                        </span>
                      </div>

                      <Link
                        href={`/blogs/${blog.slug}`}
                        className="inline-flex items-center text-[#d4af37] font-extrabold text-xs tracking-wider uppercase group-hover:translate-x-1 transition-transform"
                      >
                        READ ARTICLE
                        <ArrowRight className="ml-1.5 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </main>
  );
}
