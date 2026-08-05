import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Search, ChefHat, Calendar, User, Clock, ArrowRight } from "lucide-react";
import postsData from "@/app/data/posts.json";

export async function generateMetadata(
  props: { searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }
): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const filtered = searchParams?.category || searchParams?.q;

  const base: Metadata = {
    title: "Healthy Indian Nutrition Blog & Diet Tips",
    description:
      "Practical nutrition articles by Dietitian Tejal: PCOS and thyroid nutrition support, diabetes meal planning, postpartum nutrition, BMI guidance and Indian meal-planning FAQs.",
    alternates: { canonical: "https://dietfiniti.com/blog" },
    openGraph: {
      title: "Healthy Indian Nutrition Blog & Diet Tips | DietFiniti",
      description: "Evidence-aware nutrition guidance for everyday Indian eating, written by Dietitian Tejal.",
      type: "website",
      url: "https://dietfiniti.com/blog",
      images: [{ url: "https://dietfiniti.com/blog.png", alt: "DietFiniti nutrition blog" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Healthy Indian Nutrition Blog & Diet Tips | DietFiniti",
      description: "Evidence-aware nutrition guidance for everyday Indian eating, written by Dietitian Tejal.",
      images: ["https://dietfiniti.com/blog.png"],
    },
  };

  // Filtered/paginated states are thin duplicates of the main listing — keep them
  // out of the index while keeping them crawlable.
  if (filtered) {
    return { ...base, robots: { index: false, follow: true }, alternates: { canonical: "https://dietfiniti.com/blog" } };
  }
  return base;
}

const publishedPosts = postsData.filter((post) => post.status === "published");

const CATEGORIES = ["All", ...Array.from(new Set(publishedPosts.map((p) => p.category)))];

function formatDate(iso: string): string {
  const date = new Date(iso + "T00:00:00Z");
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

export default async function BlogListPage(props: { searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = await props.searchParams;
  const q = typeof searchParams?.q === "string" ? searchParams.q.toLowerCase().trim() : "";
  const category = typeof searchParams?.category === "string" ? searchParams.category : "All";

  let filtered = publishedPosts;
  if (category && category !== "All") {
    filtered = filtered.filter((p) => p.category === category);
  }
  if (q) {
    filtered = filtered.filter((p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-800 via-teal-700 to-emerald-700 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-100">Nutrition blog by Dietitian Tejal</p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Practical nutrition answers for everyday Indian eating
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-teal-50">
            Evidence-aware articles on PCOS, thyroid, diabetes, postpartum care and healthy meal planning — written to be useful at your next meal, not just in theory.
          </p>

          {/* Search */}
          <form method="get" action="/blog" className="mt-8 flex max-w-xl items-stretch gap-2">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
              <input
                type="search"
                name="q"
                defaultValue={q}
                placeholder="Search articles… e.g. PCOS, diabetes, breakfast"
                aria-label="Search blog articles"
                className="w-full rounded-xl border-0 bg-white py-3 pl-11 pr-4 text-slate-900 shadow-sm outline-none ring-1 ring-white/20 placeholder:text-slate-400 focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <button type="submit" className="rounded-xl bg-white/15 px-5 py-3 font-semibold text-white ring-1 ring-white/25 transition hover:bg-white/25">
              Search
            </button>
          </form>

          {/* Category chips */}
          <nav aria-label="Blog categories" className="mt-6 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const active = cat === category;
              const href = cat === "All" ? "/blog" : `/blog?category=${encodeURIComponent(cat)}`;
              return (
                <Link
                  key={cat}
                  href={href}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                    active
                      ? "bg-white text-teal-800 shadow"
                      : "bg-white/10 text-teal-50 ring-1 ring-white/20 hover:bg-white/20"
                  }`}
                >
                  {cat}
                </Link>
              );
            })}
          </nav>
        </div>
      </section>

      {/* Listing */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-teal-100 bg-teal-50 p-10 text-center">
            <p className="text-lg font-semibold text-slate-800">No articles match your search.</p>
            <p className="mt-2 text-slate-600">Try a different keyword or browse all categories.</p>
            <Link href="/blog" className="mt-6 inline-block rounded-lg bg-teal-700 px-5 py-2.5 font-semibold text-white transition hover:bg-teal-800">
              View all articles
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <article key={post.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
                <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-teal-50" aria-label={post.title}>
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-teal-700">
                    <span className="rounded-full bg-teal-50 px-3 py-1 font-semibold uppercase tracking-wide">{post.category}</span>
                    <span className="inline-flex items-center gap-1 text-slate-500"><Clock className="h-3.5 w-3.5" aria-hidden="true" />{post.readingTime}</span>
                  </div>
                  <h2 className="text-xl font-bold leading-snug text-slate-900">
                    <Link href={`/blog/${post.slug}`} className="transition hover:text-teal-700">{post.title}</Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5"><User className="h-3.5 w-3.5" aria-hidden="true" />{post.author}</span>
                    <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" aria-hidden="true" />{formatDate(post.publishedAt)}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex items-center gap-1.5 font-semibold text-teal-700 transition hover:gap-2.5 hover:text-teal-900">
                    Read article <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* CTA */}
        <aside className="mt-16 rounded-2xl bg-gradient-to-r from-teal-800 to-emerald-700 p-8 md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-white">Reading is useful. Personalisation is better.</h2>
              <p className="mt-2 max-w-xl leading-7 text-teal-50">
                Turn these articles into a plan built around your health history, routine and kitchen — in Mumbai, Thane or online anywhere in India.
              </p>
            </div>
            <Link href="/online-dietitian-consultation" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-teal-800 shadow transition hover:bg-teal-50">
              Book a consultation <ChefHat className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
