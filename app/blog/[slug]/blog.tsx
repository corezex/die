// app/blog/[slug]/blog.tsx - Updated version
"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import DOMPurify from "dompurify";
import { ChevronLeft, Calendar, Clock, Share2, Home } from "lucide-react";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  tags: string[];
  coverImage: string | null;
  images:
    | string
    | Array<{ url: string; filename: string; _id: string; uploadedAt: string }>;
  status: string;
  unique_id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  description?: string;
}

interface BlogDetailPageProps {
  initialBlog?: Blog | null;
}

export default function BlogDetailPage({ initialBlog }: BlogDetailPageProps) {
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(initialBlog || null);
  const [loading, setLoading] = useState(!initialBlog);
  const [imageError, setImageError] = useState(false);
  const [readingTime, setReadingTime] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadBlogData = async () => {
      if (initialBlog) {
        setBlog(initialBlog);
        calculateReadingTime(initialBlog.content);
        setLoading(false);
        return;
      }

      try {
        const blogsData = localStorage.getItem('blogsData');
        if (blogsData) {
          const blogs = JSON.parse(blogsData);
          const foundBlog = blogs.find(
            (b: Blog) => b.slug === params.slug || b._id === params.slug
          );
          
          if (foundBlog) {
            setBlog(foundBlog);
            calculateReadingTime(foundBlog.content);
          } else {
            await fetchBlog();
          }
        } else {
          await fetchBlog();
        }
      } catch (error) {
        console.error("Error loading blog:", error);
        await fetchBlog();
      } finally {
        setLoading(false);
      }
    };

    const fetchBlog = async () => {
      try {
        const response = await fetch(
          `https://api.dietfiniti.com/api/getblog/${params.slug}`
        );
        if (response.ok) {
          const data = await response.json();
          if (data.status && data.data) {
            setBlog(data.data);
            calculateReadingTime(data.data.content);
          }
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    loadBlogData();
  }, [params.slug, initialBlog]);

  useEffect(() => {
    if (blog) {
      calculateReadingTime(blog.content);
    }
  }, [blog]);

  const calculateReadingTime = (content: string) => {
    const text = content.replace(/<[^>]*>/g, '');
    const wordCount = text.trim().split(/\s+/).length;
    const time = Math.ceil(wordCount / 200);
    setReadingTime(time);
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getFeaturedImage = (blog: Blog): string | null => {
    if (blog.coverImage) return blog.coverImage;
    if (blog.images) {
      if (typeof blog.images === "string") return blog.images;
      if (Array.isArray(blog.images) && blog.images.length > 0) {
        return blog.images[0].url;
      }
    }
    return null;
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog?.title,
        text: blog?.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const sanitizeContent = (content: string) => {
    return DOMPurify.sanitize(content, {
      ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'strong', 'em', 'u', 's', 
                     'blockquote', 'code', 'pre', 'br', 'hr', 'ul', 'ol', 'li', 'a', 'img',
                     'div', 'span', 'table', 'thead', 'tbody', 'tr', 'th', 'td'],
      ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'style', 'target', 'rel'],
      ADD_ATTR: ['loading']
    });
  };

  const featuredImage = blog ? getFeaturedImage(blog) : null;
  const imageUrl = featuredImage
    ? featuredImage.startsWith("http")
      ? featuredImage
      : `https://api.dietfiniti.com${featuredImage}`
    : null;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-green-600 rounded-full animate-pulse"></div>
            </div>
          </div>
          <p className="text-gray-600 font-medium animate-pulse">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
            <div className="text-3xl">📄</div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Article Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The article you&apos;re looking for doesn&apos;t exist or may have been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => router.back()}
              className="px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-all duration-300 font-medium flex items-center justify-center gap-2"
            >
              <ChevronLeft size={20} />
              Go Back
            </button>
            <button
              onClick={() => router.push('/')}
              className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 font-medium flex items-center justify-center gap-2"
            >
              <Home size={20} />
              Go Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Blog Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                <Calendar size={16} className="text-white" />
              </div>
              <span className="font-medium">
                {formatDate(blog.createdAt)}
              </span>
            </div>
            
            {readingTime > 0 && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                  <Clock size={16} className="text-white" />
                </div>
                <span className="font-medium">
                  {readingTime} min read
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Featured Image */}
        {imageUrl && !imageError && (
          <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden mb-12 shadow-2xl">
            <Image
              src={imageUrl}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              onError={() => setImageError(true)}
              unoptimized={true}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        )}

        {/* Blog Content */}
        <div 
          className="prose prose-lg md:prose-xl max-w-none 
            prose-headings:text-gray-900 prose-headings:font-bold
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-lg
            prose-li:text-gray-700 
            prose-strong:text-gray-900
            prose-a:text-green-600 prose-a:no-underline hover:prose-a:text-green-700 hover:prose-a:underline
            prose-blockquote:border-l-4 prose-blockquote:border-green-400 prose-blockquote:bg-green-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl
            prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded-lg prose-code:text-gray-800
            prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-2xl prose-pre:p-6
            prose-img:rounded-2xl prose-img:shadow-lg
            prose-hr:border-gray-200"
          ref={contentRef}
          dangerouslySetInnerHTML={{ __html: sanitizeContent(blog.content) }}
        />
      </main>
    </div>
  );
}