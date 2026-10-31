import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BlogService } from "@/modules/blog/blog.service";
import { fixImageUrl } from "@/lib/apiConfig";
import { ArrowLeft, Calendar, User, Clock, Share2, Sparkles, ShieldCheck, ArrowRight, Dumbbell } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await BlogService.getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found | Fab Fit Performance Gym",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fabfitperformance.com";
  const postUrl = `${siteUrl}/blogs/${blog.slug}`;
  const title = blog.metaTitle || `${blog.title} | Fab Fit Performance Gym`;
  const description = blog.metaDescription || blog.excerpt || blog.content.substring(0, 160);
  const image = fixImageUrl(blog.ogImage || blog.coverImage || "/fabfit.jpeg");

  return {
    title,
    description,
    keywords: blog.metaKeywords ? blog.metaKeywords.split(",") : [blog.category, "Fitness Gurgaon", "Fab Fit Performance Gym"],
    authors: [{ name: blog.authorName || "Coach Ankit Baliyan" }],
    alternates: {
      canonical: blog.canonicalUrl || postUrl,
    },
    openGraph: {
      title,
      description,
      url: postUrl,
      siteName: "Fab Fit Performance Gym",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      locale: "en_IN",
      type: "article",
      publishedTime: blog.publishedAt ? new Date(blog.publishedAt).toISOString() : new Date(blog.createdAt).toISOString(),
      authors: [blog.authorName || "Ankit Baliyan"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

// Helper to identify near-black / dark text colors that would be unreadable on a dark website
function isDarkTextColor(colorStr: string): boolean {
  if (!colorStr) return false;
  const c = colorStr.trim().toLowerCase();
  if (['black', '#000', '#000000', '#111', '#111111', '#222', '#222020', '#222222', '#1a1a1a', '#2a2a2a', '#333', '#333333', 'rgb(0,0,0)', 'rgb(0, 0, 0)', 'rgb(34, 32, 32)', 'rgb(34,32,32)', 'rgb(17, 24, 39)', 'rgb(31, 41, 55)', 'rgb(55, 65, 81)'].includes(c)) {
    return true;
  }
  const rgbMatch = c.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);
  if (rgbMatch) {
    const r = parseInt(rgbMatch[1], 10);
    const g = parseInt(rgbMatch[2], 10);
    const b = parseInt(rgbMatch[3], 10);
    return r < 75 && g < 75 && b < 75;
  }
  const hexMatch = c.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (hexMatch) {
    let hex = hexMatch[1];
    if (hex.length === 3) hex = hex.split('').map(ch => ch + ch).join('');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return r < 75 && g < 75 && b < 75;
  }
  return false;
}

// Sanitizes HTML: converts dark/black text outside highlights to default light text, while preserving highlight colors and custom text colors (Red, Gold, etc.)
function cleanBlogHtml(html: string): string {
  if (!html) return '';
  const parts = html.split(/(<[^>]+>)/g);
  let activeHighlights = 0;
  const tagStack: Array<{ tagName: string; isHighlight: boolean }> = [];

  const result = parts.map((part) => {
    if (!part.startsWith('<')) {
      return part;
    }

    // Closing tag: </tag>
    const closeMatch = part.match(/^<\/\s*([a-zA-Z0-9]+)\s*>/);
    if (closeMatch) {
      const tagName = closeMatch[1].toLowerCase();
      for (let i = tagStack.length - 1; i >= 0; i--) {
        if (tagStack[i].tagName === tagName) {
          if (tagStack[i].isHighlight) {
            activeHighlights = Math.max(0, activeHighlights - 1);
          }
          tagStack.splice(i, 1);
          break;
        }
      }
      return part;
    }

    // Opening or self-closing tag: <tag attrs>
    const openMatch = part.match(/^<([a-zA-Z0-9]+)([^>]*)>/);
    if (!openMatch) {
      return part;
    }

    const tagName = openMatch[1].toLowerCase();
    const attrs = openMatch[2];
    const isSelfClosing = attrs.trim().endsWith('/') || ['img', 'br', 'hr', 'input'].includes(tagName);

    const isHighlight = tagName === 'mark' || /background-color/i.test(attrs);

    if (!isSelfClosing) {
      if (isHighlight) {
        activeHighlights++;
      }
      tagStack.push({ tagName, isHighlight });
    }

    // If NOT inside an active highlight:
    // Strip dark/black font colors so they become crisp white on dark website theme
    if (activeHighlights === 0) {
      let cleanedPart = part;

      // Clean style="...color: ...;"
      cleanedPart = cleanedPart.replace(/style\s*=\s*(["'])(.*?)\1/gi, (styleAttr, quote, styleContent) => {
        if (/background-color/i.test(styleContent)) {
          return styleAttr;
        }
        const cleanedStyle = styleContent.replace(/(^|;)\s*color\s*:\s*([^;]+)(;?)/gi, (colorDecl, pre, colorVal) => {
          if (isDarkTextColor(colorVal)) {
            return pre ? ';' : '';
          }
          return colorDecl;
        }).replace(/^;+|;+$/g, '').trim();

        if (!cleanedStyle) {
          return '';
        }
        return `style=${quote}${cleanedStyle}${quote}`;
      });

      // Clean <font color="...">
      cleanedPart = cleanedPart.replace(/color\s*=\s*(["'])(.*?)\1/gi, (colorAttr, quote, colorVal) => {
        if (isDarkTextColor(colorVal)) {
          return '';
        }
        return colorAttr;
      });

      return cleanedPart;
    }

    return part;
  });

  return result.join('');
}

// Helper to format blog content safely (handles both Rich HTML and legacy plain text)
function formatBlogContent(content: string) {
  if (!content) return '';
  const hasHtml = /<\/?(p|h1|h2|h3|h4|ul|ol|li|blockquote|strong|b|em|i|a|mark|br|hr|div|span|font)[^>]*>/i.test(content);
  if (hasHtml) {
    return cleanBlogHtml(content);
  }
  // Fallback for legacy plain text: convert double newlines to paragraphs
  return content
    .split(/\n\n+/)
    .map(paragraph => `<p>${paragraph.replace(/\n/g, '<br/>')}</p>`)
    .join('');
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await BlogService.getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fabfitperformance.com";
  const formattedDate = blog.publishedAt 
    ? new Date(blog.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : new Date(blog.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  // Schema.org JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.metaDescription || blog.excerpt || blog.title,
    "image": fixImageUrl(blog.coverImage || "/fabfit.jpeg"),
    "datePublished": blog.publishedAt ? new Date(blog.publishedAt).toISOString() : new Date(blog.createdAt).toISOString(),
    "dateModified": new Date(blog.updatedAt).toISOString(),
    "author": {
      "@type": "Person",
      "name": blog.authorName || "Ankit Baliyan",
      "jobTitle": blog.authorRole || "Head Performance Coach"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fab Fit Performance Gym",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}/blogs/${blog.slug}`
    }
  };

  // Fetch recent blogs for the Sticky Right Sidebar
  const recentBlogs = await BlogService.getAllBlogs({ isPublic: true });
  const sidebarBlogs = recentBlogs.filter((b: any) => b.id !== blog.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-2 md:pt-4 pb-20 relative">
      {/* Background Glow */}
      <div className="absolute top-10 left-1/4 w-[700px] h-[500px] bg-[#d4af37]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
        
        {/* Top Breadcrumb Link - Compact spacing below navbar */}
        <div className="mb-4 md:mb-5">
          <Link
            href="/blogs"
            className="inline-flex items-center text-xs font-bold text-zinc-400 hover:text-[#d4af37] tracking-widest uppercase transition-colors group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            BACK TO ALL ARTICLES
          </Link>
        </div>

        {/* 2-Column Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Main Blog Post Content (8 Columns) */}
          <article className="lg:col-span-8 flex flex-col min-w-0">
            
            {/* Category & Read Time */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1.5 bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] font-black text-xs uppercase tracking-widest rounded-full">
                {blog.category}
              </span>
              <span className="text-zinc-500 text-xs font-semibold flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                {blog.readTime || "5 min read"}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight leading-[1.1] mb-6 text-white">
              {blog.title}
            </h1>

            {/* Author & Date Bar */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#d4af37] text-black font-black text-sm flex items-center justify-center shadow-lg">
                  {blog.authorName.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm leading-snug">{blog.authorName}</h4>
                  <p className="text-zinc-400 text-xs font-medium">{blog.authorRole || "Head Performance Coach"}</p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-zinc-400 text-xs font-semibold flex items-center gap-1.5 justify-end">
                  <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                  {formattedDate}
                </span>
              </div>
            </div>

            {/* Featured Cover Image */}
            {blog.coverImage && (
              <div className="relative w-full h-[320px] md:h-[460px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-10 bg-zinc-900">
                <img
                  src={fixImageUrl(blog.coverImage)}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Excerpt Lead Box */}
            {blog.excerpt && (
              <div className="p-6 md:p-8 bg-[#0a0a0c] border-l-4 border-[#d4af37] rounded-r-2xl mb-10 text-zinc-300 text-base md:text-lg italic font-medium leading-relaxed shadow-lg">
                "{blog.excerpt}"
              </div>
            )}

            {/* Full Article Content with Rich HTML Typography */}
            <div
              className="rich-text-content prose prose-invert max-w-none text-white text-base md:text-lg leading-relaxed font-normal"
              dangerouslySetInnerHTML={{ __html: formatBlogContent(blog.content) }}
            />

            {/* Author Bio Box at end of article */}
            <div className="mt-16 p-8 bg-[#0a0a0c] border border-white/10 rounded-3xl flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-[#d4af37] text-black font-black text-3xl flex items-center justify-center shrink-0 shadow-lg">
                {blog.authorName.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-[#d4af37] text-xs font-extrabold uppercase tracking-widest">WRITTEN BY EXPERT</span>
                </div>
                <h3 className="text-white text-xl font-black uppercase mb-1">{blog.authorName}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                  Head Coach at FabFit Performance Gurgaon. Specializing in scientific physique engineering, contest preparation, and sustainable fat loss transformation.
                </p>
              </div>
            </div>

          </article>

          {/* RIGHT COLUMN: Sticky Sidebar with Recent Posts (4 Columns) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 self-start space-y-5">
              
              {/* Widget 1: Recent Posts List */}
              <div className="bg-[#0a0a0c] border border-white/10 rounded-2xl p-4 md:p-5 shadow-2xl">
                <div className="mb-3">
                  <h3 className="font-heading text-sm md:text-base font-black uppercase tracking-wider text-white pb-2.5 border-b border-[#d4af37]/40 flex items-center justify-between">
                    <span>Recent Posts</span>
                    <Sparkles className="w-4 h-4 text-[#d4af37]" />
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {sidebarBlogs.map((item: any) => {
                    const itemDate = item.publishedAt
                      ? new Date(item.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                      : new Date(item.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

                    return (
                      <Link
                        key={item.id}
                        href={`/blogs/${item.slug}`}
                        className="group flex gap-3 items-center p-1.5 rounded-xl hover:bg-zinc-900/90 transition-all duration-300 border border-transparent hover:border-white/10"
                      >
                        {/* Thumbnail */}
                        <div className="w-14 h-14 rounded-lg overflow-hidden bg-zinc-800 shrink-0 border border-white/10 relative">
                          {item.coverImage ? (
                            <img
                              src={fixImageUrl(item.coverImage)}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-[9px] text-zinc-500">
                              FabFit
                            </div>
                          )}
                        </div>

                        {/* Title & Metadata */}
                        <div className="flex-1 min-w-0">
                          <span className="text-[#d4af37] text-[9px] font-black uppercase tracking-widest block mb-0.5">
                            {item.category}
                          </span>
                          <h4 className="text-white font-bold text-xs leading-snug line-clamp-2 uppercase group-hover:text-[#d4af37] transition-colors mb-0.5">
                            {item.title}
                          </h4>
                          <span className="text-zinc-500 text-[10px] font-medium flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-[#d4af37]" />
                            {itemDate}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Widget 2: Book Assessment CTA Card */}
              <div className="bg-gradient-to-br from-[#121215] to-[#070709] border border-[#d4af37]/30 rounded-2xl p-4 md:p-5 text-center shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#d4af37]/10 blur-2xl rounded-full pointer-events-none" />
                <Dumbbell className="w-7 h-7 text-[#d4af37] mx-auto mb-2 stroke-[2.5]" />
                <h4 className="font-heading text-sm md:text-base font-black uppercase tracking-tight text-white mb-1">
                  Transform Your <span className="text-[#d4af37]">Physique</span>
                </h4>
                <p className="text-zinc-400 text-xs font-medium mb-3.5 leading-relaxed">
                  Get 100% customized macro diet plans & personal coaching from Head Coach Ankit Baliyan.
                </p>
                <Link
                  href="/assessment"
                  target="_blank"
                  className="inline-flex items-center justify-center w-full py-2.5 bg-[#d4af37] text-black font-extrabold text-xs tracking-wider uppercase rounded-xl hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                >
                  BOOK FREE ASSESSMENT
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

          </aside>

        </div>

      </div>

      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </div>
  );
}
