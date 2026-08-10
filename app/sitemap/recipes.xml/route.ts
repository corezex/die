import { NextResponse } from "next/server";
import recipesData from "@/app/data/recipes.json";

const siteUrl = "https://dietfiniti.com";

export function GET() {
  const lastModified = new Date().toISOString();
  const urls = recipesData
    .map((recipe) => {
      return `  <url>
    <loc>${siteUrl}/recipe/${recipe.slug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
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
