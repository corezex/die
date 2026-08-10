import { NextResponse } from "next/server";

const siteUrl = "https://dietfiniti.com";

/**
 * Sitemap index (proper <sitemapindex> format) pointing to the three
 * separated sitemaps:
 *  - /sitemap/static.xml  (key static pages)
 *  - /sitemap/recipes.xml (all 537 recipe pages)
 *  - /sitemap/blog.xml    (all 87 published blog posts)
 */
export function GET() {
  const lastModified = new Date().toISOString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteUrl}/sitemap/static.xml</loc>
    <lastmod>${lastModified}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${siteUrl}/sitemap/recipes.xml</loc>
    <lastmod>${lastModified}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${siteUrl}/sitemap/blog.xml</loc>
    <lastmod>${lastModified}</lastmod>
  </sitemap>
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
