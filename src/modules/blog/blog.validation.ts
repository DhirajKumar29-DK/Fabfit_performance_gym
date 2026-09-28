import { z } from 'zod';

export const createBlogPostSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  excerpt: z.string().optional().nullable(),
  content: z.string().min(1, 'Content is required'),
  coverImage: z.string().optional().nullable(),
  category: z.string().default('Fitness'),
  tags: z.array(z.string()).optional().nullable(),
  authorName: z.string().default('Coach Ankit Baliyan'),
  authorRole: z.string().optional().nullable(),
  authorImage: z.string().optional().nullable(),
  readTime: z.string().optional().nullable(),
  isFeatured: z.boolean().optional(),
  
  // SEO fields
  metaTitle: z.string().optional().nullable(),
  metaDescription: z.string().optional().nullable(),
  metaKeywords: z.string().optional().nullable(),
  canonicalUrl: z.string().optional().nullable(),
  ogImage: z.string().optional().nullable(),

  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).optional(),
  publishedAt: z.string().optional().nullable(),
});

export const updateBlogPostSchema = createBlogPostSchema.partial();
