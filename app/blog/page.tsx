"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { Search, Calendar, Clock, BookOpen, ArrowRight, Tag } from "lucide-react";

// Types based on your API response
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
}

interface BlogResponse {
  status: boolean;
  message: string;
  data: Blog[];
}

// API function to fetch blogs
const getBlogs = async (): Promise<BlogResponse> => {
  try {
    const response = await fetch("https://api.dietfiniti.com/api/getblog");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return {
      status: false,
      message: "Failed to fetch blogs",
      data: [],
    };
  }
};

// Function to extract first image from content
const getFirstImageFromContent = (content: string): string | null => {
  const imgRegex = /<img[^>]+src="([^">]+)"/g;
  const match = imgRegex.exec(content);
  return match ? match[1] : null;
};

// Function to get featured image from blog data
const getFeaturedImage = (blog: Blog): string | null => {
  // Priority 1: Cover image
  if (blog.coverImage) return blog.coverImage;

  // Priority 2: Handle images field (can be string or array)
  if (blog.images) {
    if (typeof blog.images === "string") {
      return blog.images;
    } else if (Array.isArray(blog.images) && blog.images.length > 0) {
      return blog.images[0].url;
    }
  }

  // Priority 3: First image from content
  const contentImage = getFirstImageFromContent(blog.content);
  if (contentImage) return contentImage;

  return null;
};

// Function to strip HTML tags for excerpt
const stripHtml = (html: string): string => {
  const text = html.replace(/<[^>]*>/g, "");
  return text.length > 150 ? text.substring(0, 150) + "..." : text;
};

// Function to format date
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// Estimate reading time from content
const getReadingTime = (html: string): string => {
  const words = html.replace(/<[^>]*>/g, "").trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

// Custom Image component that handles localhost images
const BlogImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [imageError, setImageError] = useState(false);

  const imageSrc = src.startsWith("http")
    ? src
    : `https://api.dietfiniti.com${src}`;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!imageError ? (
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setImageError(true)}
          unoptimized={true}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <BookOpen className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm">No Image</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default function BlogListPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getBlogs();

        if (response.status && Array.isArray(response.data)) {
          setBlogs(response.data);
        } else {
          setError(response.message || "Invalid data format");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Function to handle blog click - open in new page
  const handleReadMore = (blog: Blog) => {
    // Navigate to individual blog page with the blog data
    router.push(`/blog/${blog.slug || blog._id}`);
  };

  // Save blogs to localStorage for access on individual blog page
  useEffect(() => {
    if (blogs.length > 0) {
      localStorage.setItem("blogsData", JSON.stringify(blogs));
    }
  }, [blogs]);

  // Unique categories from tags
  const categories = ["All", ...new Set(blogs.flatMap((blog) => blog.tags))];

  // Filter blogs by category and search query
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === "All" || blog.tags.includes(selectedCategory);
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      blog.title.toLowerCase().includes(q) ||
      blog.content.toLowerCase().includes(q) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Error Loading Blogs
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-green-50/50 via-white to-blue-50/50 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 py-20 md:py-28">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-44 h-44 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-6 border border-white/30">
              <BookOpen className="w-4 h-4 mr-2" />
              DietFiniti Articles
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Nutrition & Healthy Eating Articles
            </h1>
            <p className="text-lg md:text-2xl text-green-50 max-w-2xl mx-auto font-light">
              Practical nutrition articles, meal ideas and wellbeing guidance from DietFiniti.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search published articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-5 py-4 rounded-2xl border-0 bg-white shadow-xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-white/70 focus:outline-none"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      {categories.length > 1 && (
        <section className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 py-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl shadow-sm border border-gray-100">
            <BookOpen className="w-14 h-14 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No articles found
            </h3>
            <p className="text-gray-600">
              {searchQuery || selectedCategory !== "All"
                ? "Try adjusting your search terms or category filter"
                : "No blogs published yet"}
            </p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredBlogs.map((blog) => {
              const featuredImage = getFeaturedImage(blog);

              return (
                <motion.article
                  key={blog._id}
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  onClick={() => handleReadMore(blog)}
                  className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 flex flex-col h-full cursor-pointer"
                >
                  {/* Image */}
                  {featuredImage ? (
                    <BlogImage
                      src={featuredImage}
                      alt={blog.title}
                      className="h-56 w-full"
                    />
                  ) : (
                    <div className="h-56 w-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        <BookOpen className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-sm">No Image</p>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Tags */}
                    {blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {blog.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2.5 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-100"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Title */}
                    <h2 className="font-bold text-gray-900 text-lg mb-3 line-clamp-2 group-hover:text-green-700 transition-colors">
                      {blog.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                      {stripHtml(blog.content)}
                    </p>

                    {/* Footer */}
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span className="flex items-center">
                          <Calendar className="w-3.5 h-3.5 mr-1.5" />
                          {formatDate(blog.createdAt)}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3.5 h-3.5 mr-1.5" />
                          {getReadingTime(blog.content)}
                        </span>
                      </div>

                      <div className="w-full inline-flex items-center justify-center text-green-700 font-medium text-sm bg-green-50 group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-emerald-500 group-hover:text-white py-2.5 rounded-xl transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        )}
      </section>

      {/* Stats */}
      {blogs.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-8 shadow-xl"
          >
            <div className="grid grid-cols-2 gap-8 text-center text-white">
              <div>
                <div className="text-3xl font-bold">{blogs.length}</div>
                <div className="text-sm text-green-50 mt-1">Total Articles</div>
              </div>
              <div>
                <div className="text-3xl font-bold">
                  {new Set(blogs.flatMap((blog) => blog.tags)).size}
                </div>
                <div className="text-sm text-green-50 mt-1">Topics Covered</div>
              </div>
            </div>
          </motion.div>
        </section>
      )}
    </div>
  );
}
