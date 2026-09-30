import { MetadataRoute } from 'next';
import { homeData } from '@/data/dummy';
import { BlogService } from '@/modules/blog/blog.service';

export const revalidate = 3600; // Revalidate sitemap every 1 hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fabfitperformance.com';

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/programs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/coaches`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/transformations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/membership`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/assessment`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // Dynamic Service Pages
  let servicePages: MetadataRoute.Sitemap = [];
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (apiUrl) {
      const res = await fetch(`${apiUrl}/api/services?public=true`, { signal: AbortSignal.timeout(3000) });
      if (res.ok) {
        const json = await res.json();
        const services = json.success ? json.data : json;
        if (Array.isArray(services)) {
          servicePages = services.map((s: any) => ({
            url: `${baseUrl}/services/${s.slug || s.id}`,
            lastModified: new Date(s.updatedAt || Date.now()),
            changeFrequency: 'weekly',
            priority: 0.8,
          }));
        }
      }
    }
  } catch (error) {
    // Fallback to static dummy items
  }

  if (servicePages.length === 0) {
    servicePages = (homeData.services?.items || []).map((s: any) => ({
      url: `${baseUrl}/services/${s.slug || s.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));
  }

  // Dynamic Blog Pages directly from DB/BlogService
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const blogs = await BlogService.getAllBlogs({ isPublic: true });
    if (Array.isArray(blogs)) {
      blogPages = blogs.map((b: any) => ({
        url: `${baseUrl}/blogs/${b.slug}`,
        lastModified: new Date(b.updatedAt || b.createdAt || Date.now()),
        changeFrequency: 'weekly',
        priority: 0.8,
      }));
    }
  } catch (error) {
    console.error("Sitemap Blog fetch error:", error);
  }

  return [...staticPages, ...servicePages, ...blogPages];
}
