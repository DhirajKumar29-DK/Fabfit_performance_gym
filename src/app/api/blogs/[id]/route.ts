import { NextRequest } from 'next/server';
import { verifyAdmin } from '@/lib/auth';
import { successResponse, errorResponse } from '@/lib/apiResponse';
import { BlogService } from '@/modules/blog/blog.service';
import { updateBlogPostSchema } from '@/modules/blog/blog.validation';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const blog = await BlogService.getBlogById(id);
    if (!blog) {
      return errorResponse('Blog post not found', 404);
    }
    return successResponse('Blog post retrieved successfully', blog);
  } catch (error: any) {
    return errorResponse(error.message, 500);
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await verifyAdmin(request);
  if (!auth.authorized) return auth.errorResponse!;

  try {
    const { id } = await params;
    const body = await request.json();
    const validatedData = updateBlogPostSchema.parse(body);
    const updated = await BlogService.updateBlog(id, validatedData);
    return successResponse('Blog post updated successfully', updated);
  } catch (error: any) {
    return errorResponse(error.message, 400);
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await verifyAdmin(request);
  if (!auth.authorized) return auth.errorResponse!;

  try {
    const { id } = await params;
    const deleted = await BlogService.deleteBlog(id);
    return successResponse('Blog post deleted successfully', deleted);
  } catch (error: any) {
    return errorResponse(error.message, 500);
  }
}
