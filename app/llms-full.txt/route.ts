import { NextResponse } from "next/server";
import recipesData from "@/app/data/recipes.json";
import postsData from "@/app/data/posts.json";

const siteUrl = "https://dietfiniti.com";

const KEY_PAGES: Array<[string, string]> = [
  ["/", "Personalised dietitian & nutrition consultation home page"],
  ["/services", "All DietFiniti nutrition services — weight loss, medical, pregnancy, weight gain, sports, bridal"],
  ["/online-dietitian-consultation", "Book an online dietitian consultation from anywhere in India"],
  ["/services/weight-loss", "Personalised weight-loss nutrition support"],
  ["/services/medical-weight-loss", "Weight-management nutrition alongside medical care"],
  ["/services/pregnancy-diet", "Pregnancy nutrition support that complements antenatal care"],
  ["/services/weight-gain", "Personalised nutrition support for weight-gain goals"],
  ["/services/sports-nutrition", "Sports nutrition for training and active routines"],
  ["/services/bridal-diet", "Practical pre-wedding nutrition support"],
  ["/recipe", "500+ healthy Indian recipes"],
  ["/blog", "Practical nutrition blog by Dietitian Tejal"],
  ["/bmi-calculator", "Free BMI calculator for adults"],
  ["/testimonials", "Client experiences with DietFiniti"],
  ["/about", "About DietFiniti and Dietitian Tejal"],
  ["/contact", "Contact DietFiniti — Mumbai, Thane & online"],
  ["/disclaimer", "Health and medical disclaimer"],
];

export function GET() {
  const lines: string[] = [];
  lines.push("# DietFiniti — full index");
  lines.push("");
  lines.push("> Personalised dietitian and nutrition consultation practice led by Dietitian Tejal (MSc Dietetics, Certified Diabetic Educator), with clinics in Mumbai (Lower Parel) and Thane and online consultations across India.");
  lines.push("");
  lines.push("## Key pages");
  lines.push("");
  for (const [path, desc] of KEY_PAGES) {
    lines.push(`- [${path === "/" ? "Home" : path.replace(/^\//, "").replace(/\//g, " ")}](${siteUrl}${path}): ${desc}`);
  }
  lines.push("");
  lines.push("## Blog");
  lines.push("");
  const posts = postsData.filter((p) => p.status === "published");
  for (const p of posts) {
    lines.push(`- [${p.title}](${siteUrl}/blog/${p.slug}): ${p.excerpt}`);
  }
  lines.push("");
  lines.push("## Recipes");
  lines.push("");
  for (const r of recipesData) {
    lines.push(`- [${r.title}](${siteUrl}/recipe/${r.slug}): ${r.description}`);
  }
  lines.push("");
  lines.push("<!-- LLMS.txt standard: https://llmstxt.org -->");

  return new NextResponse(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
