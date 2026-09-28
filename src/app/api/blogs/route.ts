import { NextRequest } from 'next/server';
import { verifyAdmin } from '@/lib/auth';
import { successResponse, errorResponse } from '@/lib/apiResponse';
import { BlogService } from '@/modules/blog/blog.service';
import { createBlogPostSchema } from '@/modules/blog/blog.validation';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const isPublic = searchParams.get('public') === 'true';
    const category = searchParams.get('category') || undefined;
    const search = searchParams.get('search') || undefined;

    const blogs = await BlogService.getAllBlogs({ isPublic, category, search });
    return successResponse('Blogs retrieved successfully', blogs);
  } catch (error: any) {
    console.error('GET /api/blogs error:', error);
    return errorResponse(error.message || 'Internal Server Error', 500);
  }
}

export async function POST(request: NextRequest) {
  const auth = await verifyAdmin(request);
  if (!auth.authorized) return auth.errorResponse!;

  try {
    const body = await request.json();
    const validatedData = createBlogPostSchema.parse(body);
    const created = await BlogService.createBlog(validatedData);
    return successResponse('Blog post created successfully', created, 201);
  } catch (error: any) {
    console.error('POST /api/blogs error:', error);
    return errorResponse(error.message || 'Failed to create blog post', 400);
  }
}
