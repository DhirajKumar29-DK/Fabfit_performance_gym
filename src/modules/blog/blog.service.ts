import prisma from '@/lib/prisma';

export class BlogService {
  static async getAllBlogs(options?: { isPublic?: boolean; category?: string; search?: string }) {
    try {
      let query = "SELECT * FROM BlogPost WHERE deletedAt IS NULL";
      const params: any[] = [];

      if (options?.isPublic) {
        query += " AND status = 'PUBLISHED'";
      }

      if (options?.category && options.category !== 'ALL') {
        query += " AND category = ?";
        params.push(options.category);
      }

      if (options?.search) {
        query += " AND (title LIKE ? OR excerpt LIKE ? OR content LIKE ?)";
        const term = `%${options.search}%`;
        params.push(term, term, term);
      }

      query += " ORDER BY publishedAt DESC, createdAt DESC";

      const rows: any[] = await prisma.$queryRawUnsafe(query, ...params);
      return rows || [];
    } catch (e: any) {
      console.error("Error querying blogPost from MySQL database:", e.message);
      return [];
    }
  }

  static async getBlogBySlug(slug: string) {
    try {
      const rows: any[] = await prisma.$queryRawUnsafe(
        "SELECT * FROM BlogPost WHERE slug = ? AND deletedAt IS NULL AND status = 'PUBLISHED' LIMIT 1",
        slug
      );

      if (rows && rows.length > 0) {
        const blog = rows[0];
        prisma.$executeRawUnsafe("UPDATE BlogPost SET views = views + 1 WHERE id = ?", blog.id)
          .catch(e => console.error("Error updating views", e));
        return blog;
      }
      return null;
    } catch (e: any) {
      console.error("Error fetching blog by slug:", e.message);
      return null;
    }
  }

  static async getBlogById(id: string) {
    try {
      const rows: any[] = await prisma.$queryRawUnsafe(
        "SELECT * FROM BlogPost WHERE id = ? AND deletedAt IS NULL LIMIT 1",
        id
      );
      return rows && rows.length > 0 ? rows[0] : null;
    } catch (e: any) {
      console.error("Error fetching blog by id:", e.message);
      return null;
    }
  }

  static async createBlog(data: any) {
    const id = data.id || `blog-${Date.now()}`;
    const publishedAt = data.status === 'PUBLISHED' ? new Date() : null;

    await prisma.$executeRawUnsafe(
      `INSERT INTO BlogPost (
        id, title, slug, excerpt, content, coverImage, category, tags, authorName, authorRole, authorImage, readTime, isFeatured, metaTitle, metaDescription, metaKeywords, canonicalUrl, ogImage, status, views, publishedAt, createdAt, updatedAt
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
      id,
      data.title,
      data.slug,
      data.excerpt || null,
      data.content,
      data.coverImage || null,
      data.category || 'Fitness',
      data.tags ? JSON.stringify(data.tags) : null,
      data.authorName || 'Coach Ankit Baliyan',
      data.authorRole || 'Head Performance Coach',
      data.authorImage || null,
      data.readTime || '5 min read',
      data.isFeatured ? 1 : 0,
      data.metaTitle || null,
      data.metaDescription || null,
      data.metaKeywords || null,
      data.canonicalUrl || null,
      data.ogImage || null,
      data.status || 'PUBLISHED',
      0,
      publishedAt
    );

    return this.getBlogById(id);
  }

  static async updateBlog(id: string, data: any) {
    const fields: string[] = [];
    const params: any[] = [];

    const allowed = ['title', 'slug', 'excerpt', 'content', 'coverImage', 'category', 'authorName', 'authorRole', 'readTime', 'status', 'metaTitle', 'metaDescription', 'metaKeywords', 'canonicalUrl', 'ogImage'];

    for (const key of allowed) {
      if (data[key] !== undefined) {
        fields.push(`\`${key}\` = ?`);
        params.push(data[key]);
      }
    }

    if (data.isFeatured !== undefined) {
      fields.push("`isFeatured` = ?");
      params.push(data.isFeatured ? 1 : 0);
    }

    if (fields.length === 0) return this.getBlogById(id);

    fields.push("`updatedAt` = NOW()");
    params.push(id);

    await prisma.$executeRawUnsafe(
      `UPDATE BlogPost SET ${fields.join(', ')} WHERE id = ?`,
      ...params
    );

    return this.getBlogById(id);
  }

  static async deleteBlog(id: string) {
    await prisma.$executeRawUnsafe(
      "UPDATE BlogPost SET deletedAt = NOW(), status = 'ARCHIVED' WHERE id = ?",
      id
    );
    return { id };
  }
}
