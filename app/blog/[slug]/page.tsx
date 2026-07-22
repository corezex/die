// app/blog/[slug]/page.tsx
import { Metadata } from "next";
import BlogDetailPage from "./blog";
import { getBlogBySlug } from "./actions";
import { notFound } from "next/navigation";

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

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const blog = await getBlogBySlug(slug);
    
    if (!blog) {
      return {
        title: "Blog Not Found | DietFiniti",
        description: "The requested blog article could not be found.",
        robots: {
          index: false,
          follow: false,
        }
      };
    }

    const metaDescription = blog.description || 
      blog.content.replace(/<[^>]*>/g, '').substring(0, 160);
    
    const imageUrl = blog.coverImage
      ? blog.coverImage.startsWith("http")
        ? blog.coverImage
        : `https://api.dietfiniti.com${blog.coverImage}`
      : "https://dietfiniti.com/logo.png";

    return {
      title: `${blog.title} | DietFiniti Blog`,
      description: metaDescription,
      keywords: blog.tags ? blog.tags.join(', ') : "diet, nutrition, health",
      authors: [{ name: "DietFiniti" }],
      openGraph: {
        title: blog.title,
        description: metaDescription,
        type: "article",
        url: `https://dietfiniti.com/blog/${blog.slug}`,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: blog.title,
          },
        ],
        publishedTime: blog.createdAt,
        modifiedTime: blog.updatedAt || blog.createdAt,
        authors: ["DietFiniti"],
        tags: blog.tags,
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: metaDescription,
        images: [imageUrl],
      },
      alternates: {
        canonical: `https://dietfiniti.com/blog/${blog.slug}`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Article unavailable | DietFiniti",
      description: "The requested article is currently unavailable.",
      robots: { index: false, follow: false },
    };
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  
  if (!blog) {
    notFound();
  }
  
  // Generate structured data on server side
  const generateStructuredData = (blog: Blog) => {
    const metaDescription = blog.description || 
      blog.content.replace(/<[^>]*>/g, '').substring(0, 160);
    
    const imageUrl = blog.coverImage
      ? blog.coverImage.startsWith("http")
        ? blog.coverImage
        : `https://api.dietfiniti.com${blog.coverImage}`
      : "https://dietfiniti.com/logo.png";

    // Calculate reading time
    const text = blog.content.replace(/<[^>]*>/g, '');
    const wordCount = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://dietfiniti.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://dietfiniti.com/blog"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": blog.title,
              "item": `https://dietfiniti.com/blog/${blog.slug}`
            }
          ]
        },
        {
          "@type": "BlogPosting",
          "headline": blog.title,
          "description": metaDescription,
          "image": imageUrl,
          "datePublished": blog.createdAt,
          "dateModified": blog.updatedAt || blog.createdAt,
          "author": {
            "@type": "Person",
            "name": "DietFiniti",
            "url": "https://dietfiniti.com"
          },
          "publisher": {
            "@type": "Organization",
            "name": "DietFiniti",
            "logo": {
              "@type": "ImageObject",
              "url": "https://dietfiniti.com/image/logo.png",
              "width": 200,
              "height": 60
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://dietfiniti.com/blog/${blog.slug}`
          },
          "articleBody": blog.content.replace(/<[^>]*>/g, ''),
          "wordCount": wordCount,
          "timeRequired": `PT${readingTime}M`,
          "keywords": blog.tags ? blog.tags.join(', ') : "diet, nutrition, health, weight loss"
        }
      ]
    };
  };

  const structuredData = generateStructuredData(blog);

  return (
    <>
      {/* Add all structured data in the server component */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      {/* Pass blog data to client component */}
      <BlogDetailPage initialBlog={blog} />
    </>
  );
}