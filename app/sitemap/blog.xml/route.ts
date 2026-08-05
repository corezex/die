import { NextResponse } from "next/server";
import postsData from "@/app/data/posts.json";

const siteUrl = "https://dietfiniti.com";

export function GET() {
  const urls = postsData
    .filter((post) => post.status === "published")
    .map((post) => {
      const lastModified = post.updatedAt ? new Date(post.updatedAt).toISOString() : new Date().toISOString();
      return `  <url>
    <loc>${siteUrl}/blog/${post.slug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
