"use client";

import React, { useState, useEffect } from 'react';
import { api } from '@/services/api';
import { fixImageUrl } from '@/lib/apiConfig';
import { 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  Eye, 
  Globe, 
  FileText, 
  Image as ImageIcon, 
  Check, 
  X, 
  Loader2,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { AdminPagination } from '@/components/ui/AdminPagination';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  coverImage?: string;
  category: string;
  tags?: string[];
  authorName: string;
  authorRole?: string;
  authorImage?: string;
  readTime?: string;
  isFeatured: boolean;

  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  canonicalUrl?: string;
  ogImage?: string;

  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  views: number;
  publishedAt?: string;
  createdAt: string;
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [showSeo, setShowSeo] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    coverImage: '',
    category: 'Fitness',
    authorName: 'Coach Ankit Baliyan',
    authorRole: 'Head Performance Coach',
    readTime: '5 min read',
    isFeatured: false,
    status: 'PUBLISHED' as 'DRAFT' | 'PUBLISHED' | 'ARCHIVED',
    
    // SEO Fields
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
    canonicalUrl: '',
    ogImage: '',
  });

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await api.get('/blogs');
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          setBlogs(data.data || []);
        }
      }
    } catch (e) {
      console.error('Failed to fetch blogs', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleOpenModal = (blog?: BlogPost) => {
    if (blog) {
      setEditingBlog(blog);
      setFormData({
        title: blog.title || '',
        slug: blog.slug || '',
        excerpt: blog.excerpt || '',
        content: blog.content || '',
        coverImage: blog.coverImage || '',
        category: blog.category || 'Fitness',
        authorName: blog.authorName || 'Coach Ankit Baliyan',
        authorRole: blog.authorRole || 'Head Performance Coach',
        readTime: blog.readTime || '5 min read',
        isFeatured: blog.isFeatured || false,
        status: blog.status || 'PUBLISHED',
        metaTitle: blog.metaTitle || '',
        metaDescription: blog.metaDescription || '',
        metaKeywords: blog.metaKeywords || '',
        canonicalUrl: blog.canonicalUrl || '',
        ogImage: blog.ogImage || '',
      });
    } else {
      setEditingBlog(null);
      setFormData({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        coverImage: '',
        category: 'Fitness',
        authorName: 'Coach Ankit Baliyan',
        authorRole: 'Head Performance Coach',
        readTime: '5 min read',
        isFeatured: false,
        status: 'PUBLISHED',
        metaTitle: '',
        metaDescription: '',
        metaKeywords: '',
        canonicalUrl: '',
        ogImage: '',
      });
    }
    setShowSeo(false);
    setIsModalOpen(true);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    // Generate slug from title if creating new
    const generatedSlug = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

    setFormData(prev => ({
      ...prev,
      title,
      slug: !editingBlog ? generatedSlug : prev.slug,
      metaTitle: !prev.metaTitle || !editingBlog ? title : prev.metaTitle
    }));
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, fieldName: 'coverImage' | 'ogImage') => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingImage(true);
      const uploadData = new FormData();
      uploadData.append('image', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: uploadData,
      });

      if (res.ok) {
        const data = await res.json();
        const imageUrl = data.url || data.secure_url || data.data?.url;
        if (imageUrl) {
          setFormData(prev => ({ ...prev, [fieldName]: imageUrl }));
        }
      } else {
        const errData = await res.json().catch(() => ({}));
        alert(errData.error || errData.message || 'Failed to upload image');
      }
    } catch (err) {
      console.error('File upload error', err);
      alert('Failed to upload image');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.slug || !formData.content) {
      alert('Please fill in Title, Slug, and Content');
      return;
    }

    try {
      setSubmitting(true);
      if (editingBlog) {
        const res = await api.put(`/blogs/${editingBlog.id}`, formData);
        if (res.ok) {
          fetchBlogs();
          setIsModalOpen(false);
        } else {
          const err = await res.json();
          alert(err.message || 'Failed to update blog post');
        }
      } else {
        const res = await api.post('/blogs', formData);
        if (res.ok) {
          fetchBlogs();
          setIsModalOpen(false);
        } else {
          const err = await res.json();
          alert(err.message || 'Failed to create blog post');
        }
      }
    } catch (error) {
      console.error('Submit blog error', error);
      alert('Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    try {
      const res = await api.delete(`/blogs/${id}`);
      if (res.ok) {
        fetchBlogs();
      }
    } catch (e) {
      console.error('Delete error', e);
    }
  };

  const filteredBlogs = blogs.filter(b => {
    const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase()) || 
                          b.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === 'ALL' || b.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const categories = ['ALL', ...Array.from(new Set(blogs.map(b => b.category)))];

  return (
    <div className="flex-1 min-h-0 flex flex-col space-y-4">
      {/* Page Header */}
      <div className="shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
            <FileText className="w-6 h-6 text-yellow-600" />
            Blog Articles Manager
          </h1>
          <p className="text-gray-500 text-sm mt-1">Create, edit, and publish SEO-optimized fitness blog articles.</p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="inline-flex items-center justify-center gap-2 bg-black hover:bg-yellow-600 text-white font-bold text-sm px-5 py-3 rounded-xl transition-all shadow-md hover:shadow-lg shrink-0"
        >
          <Plus className="w-4 h-4" />
          Create New Article
        </button>
      </div>

      {/* Filters & Search */}
      <div className="shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by title or category..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/20 text-gray-800"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setCategoryFilter(cat);
                setCurrentPage(1);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                categoryFilter === cat 
                  ? 'bg-black text-yellow-500 shadow-sm' 
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Cards Grid / Table */}
      {loading ? (
        <div className="flex-1 flex flex-col items-center justify-center text-gray-400 bg-white rounded-2xl border border-gray-200">
          <Loader2 className="w-8 h-8 animate-spin text-black mb-3" />
          <span className="text-sm font-medium">Loading articles...</span>
        </div>
      ) : filteredBlogs.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl p-12 text-center">
          <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-800">No blog posts found</h3>
          <p className="text-gray-500 text-sm mt-1">Get started by creating your first article.</p>
        </div>
      ) : (
        <div className="flex-1 min-h-0 flex flex-col space-y-4">
          <div className="flex-1 min-h-0 overflow-y-auto pr-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedBlogs.map(blog => (
                <div 
                  key={blog.id} 
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group"
                >
                  {/* Cover Image */}
                  <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                    {blog.coverImage ? (
                      <img
                        src={fixImageUrl(blog.coverImage)}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium text-xs">
                        No Cover Image
                      </div>
                    )}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-yellow-500 text-[10px] font-black uppercase tracking-wider rounded-md">
                        {blog.category}
                      </span>
                      <span className={`px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-md ${
                        blog.status === 'PUBLISHED' 
                          ? 'bg-emerald-500 text-white' 
                          : 'bg-amber-500 text-white'
                      }`}>
                        {blog.status}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg line-clamp-2 mb-2 group-hover:text-yellow-600 transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-gray-500 text-xs line-clamp-2 mb-4 leading-relaxed">
                        {blog.excerpt || blog.content.substring(0, 100)}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-gray-400 mb-4">
                        <span className="flex items-center gap-1 font-semibold text-gray-600">
                          👤 {blog.authorName}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5" /> {blog.views || 0} views
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleOpenModal(blog)}
                          className="flex-1 py-2 bg-gray-100 hover:bg-black hover:text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 text-gray-700"
                        >
                          <Edit3 className="w-3.5 h-3.5" /> Edit
                        </button>
                        <a
                          href={`/blogs/${blog.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-gray-200 text-gray-500 hover:text-black hover:border-black rounded-lg transition-colors"
                          title="View Article Live"
                        >
                          <Globe className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => handleDelete(blog.id)}
                          className="p-2 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white rounded-lg transition-colors"
                          title="Delete Article"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="shrink-0 bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <AdminPagination
              currentPage={currentPage}
              totalItems={filteredBlogs.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
              onItemsPerPageChange={setItemsPerPage}
              pageSizeOptions={[6, 9, 18, 36]}
            />
          </div>
        </div>
      )}

      {/* CREATE / EDIT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 p-6 md:p-8">
            <div className="flex items-center justify-between pb-6 border-b border-gray-100">
              <div>
                <h2 className="text-xl font-black text-gray-900">
                  {editingBlog ? 'Edit Blog Article' : 'Create New Article'}
                </h2>
                <p className="text-gray-500 text-xs mt-0.5">Fill in article information and SEO tags.</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              {/* Grid Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={handleTitleChange}
                    placeholder="e.g. 10 Essential Fat Loss Hacks"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black text-gray-900 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    URL Slug *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.slug}
                    onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                    placeholder="e.g. 10-essential-fat-loss-hacks"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black text-gray-900 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black text-gray-900 font-medium"
                  >
                    <option value="Fitness">Fitness</option>
                    <option value="Nutrition">Nutrition</option>
                    <option value="Fat Loss">Fat Loss</option>
                    <option value="Muscle Gain">Muscle Gain</option>
                    <option value="Mindset & Lifestyle">Mindset & Lifestyle</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Author Name
                  </label>
                  <input
                    type="text"
                    value={formData.authorName}
                    onChange={(e) => setFormData(prev => ({ ...prev, authorName: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black text-gray-900 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as any }))}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black text-gray-900 font-bold"
                  >
                    <option value="PUBLISHED">PUBLISHED (Live)</option>
                    <option value="DRAFT">DRAFT (Hidden)</option>
                  </select>
                </div>
              </div>

              {/* Cover Image Upload */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Featured Cover Image
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    value={formData.coverImage}
                    onChange={(e) => setFormData(prev => ({ ...prev, coverImage: e.target.value }))}
                    placeholder="Image URL or upload file"
                    className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black text-gray-900"
                  />
                  <label className="px-4 py-3 bg-black hover:bg-yellow-600 text-white font-bold text-xs rounded-xl cursor-pointer transition-colors flex items-center gap-2 shrink-0">
                    <ImageIcon className="w-4 h-4" />
                    {uploadingImage ? 'Uploading...' : 'Upload'}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, 'coverImage')}
                      className="hidden"
                    />
                  </label>
                </div>
                {formData.coverImage && (
                  <div className="mt-3 relative w-40 h-24 rounded-lg overflow-hidden border border-gray-200">
                    <img src={fixImageUrl(formData.coverImage)} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Short Excerpt (Card Summary)
                </label>
                <textarea
                  rows={2}
                  value={formData.excerpt}
                  onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                  placeholder="Brief 2-sentence summary of the article..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black text-gray-900"
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Article Full Content * (Markdown or Standard Text)
                </label>
                <textarea
                  rows={10}
                  required
                  value={formData.content}
                  onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                  placeholder="Write full article here..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black text-gray-900 font-sans"
                />
              </div>

              {/* Advanced SEO Metadata Accordion */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setShowSeo(!showSeo)}
                  className="w-full p-4 bg-gray-50 flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-2 font-bold text-sm text-gray-900">
                    <Sparkles className="w-4 h-4 text-yellow-600" />
                    Advanced SEO & Meta Tags Configuration
                  </div>
                  {showSeo ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {showSeo && (
                  <div className="p-6 space-y-4 bg-white border-t border-gray-200">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Meta Title (Google Search Title)
                      </label>
                      <input
                        type="text"
                        value={formData.metaTitle}
                        onChange={(e) => setFormData(prev => ({ ...prev, metaTitle: e.target.value }))}
                        placeholder="Custom title tag for search engines"
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Meta Description (Search Snippet Text)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.metaDescription}
                        onChange={(e) => setFormData(prev => ({ ...prev, metaDescription: e.target.value }))}
                        placeholder="Snippet describing article in Google search results..."
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Meta Keywords (Comma Separated)
                        </label>
                        <input
                          type="text"
                          value={formData.metaKeywords}
                          onChange={(e) => setFormData(prev => ({ ...prev, metaKeywords: e.target.value }))}
                          placeholder="e.g. gym, fitness gurgaon, diet plan"
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Social Sharing Image URL (OpenGraph Image)
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={formData.ogImage}
                            onChange={(e) => setFormData(prev => ({ ...prev, ogImage: e.target.value }))}
                            placeholder="WhatsApp / Facebook Share Image"
                            className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900"
                          />
                          <label className="px-3 py-2.5 bg-black hover:bg-yellow-600 text-white font-bold text-xs rounded-xl cursor-pointer transition-colors flex items-center gap-1.5 shrink-0" title="Upload Image">
                            <ImageIcon className="w-3.5 h-3.5" />
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleFileUpload(e, 'ogImage')}
                              className="hidden"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 border border-gray-200 hover:bg-gray-100 text-gray-700 font-bold text-xs rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-8 py-3 bg-black hover:bg-yellow-600 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center gap-2"
                >
                  {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                  {editingBlog ? 'Save Changes' : 'Publish Article'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
