import { NextRequest } from 'next/server';
import { successResponse, errorResponse } from '@/lib/apiResponse';
import { BlogService } from '@/modules/blog/blog.service';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const blog = await BlogService.getBlogBySlug(slug);
    if (!blog) {
      return errorResponse('Blog post not found', 404);
    }
    return successResponse('Blog post retrieved successfully', blog);
  } catch (error: any) {
    return errorResponse(error.message, 500);
  }
}
