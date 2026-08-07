import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, BadgeCheck, BookOpen } from "lucide-react";
import postsData from "@/app/data/posts.json";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  keywords: string;
  author: string;
  authorCredentials: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  status: string;
  quickAnswer: string;
  sections: { heading: string; body: string }[];
  faqs: { question: string; answer: string }[];
  references: { label: string; url: string }[];
  relatedServices: { name: string; path: string; description: string }[];
}

const SITE_URL = "https://dietfiniti.com";

function formatDate(iso: string): string {
  const date = new Date(iso + "T00:00:00Z");
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

export function generateStaticParams() {
  return postsData.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const post = postsData.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: "DietFiniti",
      images: [{ url: `${SITE_URL}/blog.png`, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${SITE_URL}/blog.png`],
    },
  };
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = postsData.find((p) => p.slug === params.slug) as Post | undefined;
  if (!post) notFound();

  // BlogPosting schema — author entity, publisher references the site's central Organization @id.
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    articleSection: post.category,
    inLanguage: "en-IN",
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: "Dietitian",
      url: `${SITE_URL}/about`,
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    about: post.tags.map((tag) => ({ "@type": "Thing", name: tag })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  };

  return (
    <article className="bg-white">
      {/* OG article timestamps — React 19 hoists these into <head> */}
      <meta property="article:published_time" content={post.publishedAt} />
      <meta property="article:modified_time" content={post.updatedAt} />
      <meta property="article:author" content={`${SITE_URL}/about`} />
      <meta property="article:section" content={post.category} />

      {/* Schema injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <header className="bg-gradient-to-b from-green-50 to-white py-10 md:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 transition hover:text-green-900">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to all articles
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium">
            <span className="rounded-full bg-green-100 px-3 py-1 font-semibold uppercase tracking-wide text-green-800">{post.category}</span>
            <span className="inline-flex items-center gap-1.5 text-slate-500"><Calendar className="h-3.5 w-3.5" aria-hidden="true" />Published {formatDate(post.publishedAt)}</span>
            {post.updatedAt !== post.publishedAt && (
              <span className="inline-flex items-center gap-1.5 text-slate-500"><Clock className="h-3.5 w-3.5" aria-hidden="true" />Updated {formatDate(post.updatedAt)}</span>
            )}
            <span className="inline-flex items-center gap-1.5 text-slate-500"><BookOpen className="h-3.5 w-3.5" aria-hidden="true" />{post.readingTime}</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl">{post.title}</h1>

          {/* Byline — YMYL/E-E-A-T */}
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-slate-200 py-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-700 font-bold text-white" aria-hidden="true">T</div>
            <div>
              <p className="flex items-center gap-1.5 font-semibold text-slate-900">
                <User className="h-4 w-4 text-green-700" aria-hidden="true" />
                {post.author}
                <BadgeCheck className="h-4 w-4 text-green-600" aria-label="Verified" />
              </p>
              <p className="text-sm text-slate-600">{post.authorCredentials}</p>
            </div>

          </div>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-3xl px-4 pb-8 sm:px-6">
        {/* Quick answer block — AEO/AI Overviews: direct answer in the first 200 words */}
        <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-5" role="note" aria-label="Quick answer">
          <p className="font-bold text-green-900">Quick answer</p>
          <p className="mt-2 leading-7 text-slate-800">{post.quickAnswer}</p>
        </div>

        {post.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">{section.heading}</h2>
            <div className="mt-4 space-y-4">
              {section.body.split("\n").filter((p) => p.trim()).map((para, i) => (
                <p key={i} className="leading-8 text-slate-700">{para}</p>
              ))}
            </div>
          </section>
        ))}

        {/* FAQ — visible questions mirror the FAQPage schema */}
        {post.faqs.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Frequently asked questions</h2>
            <div className="mt-5 space-y-3">
              {post.faqs.map((faq) => (
                <details key={faq.question} className="group rounded-xl border border-slate-200 bg-slate-50 open:bg-white">
                  <summary className="cursor-pointer list-none rounded-xl px-5 py-4 font-semibold text-slate-900 transition hover:text-green-800">
                    <span className="flex items-center justify-between gap-3">
                      {faq.question}
                      <span className="text-green-600 transition group-open:rotate-45" aria-hidden="true">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" d="M12 5v14M5 12h14" /></svg>
                      </span>
                    </span>
                  </summary>
                  <p className="px-5 pb-5 leading-7 text-slate-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* References — GEO citations */}
        {post.references.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-bold tracking-tight text-slate-900">References</h2>
            <ul className="mt-4 space-y-2.5">
              {post.references.map((ref) => (
                <li key={ref.url} className="text-sm leading-6">
                  <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-green-700 underline decoration-green-300 underline-offset-4 transition hover:text-green-950">
                    {ref.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-6 text-slate-500">
              Sources are cited where claims are made. This article is for general information and does not replace personalised medical or nutrition advice — always discuss changes with your treating clinician.
            </p>
          </section>
        )}

        {/* CTA */}
        <aside className="mt-12 rounded-2xl bg-gradient-to-br from-green-800 to-emerald-700 p-7 md:p-8">
          <h2 className="text-xl font-bold text-white">Want this turned into a personalised plan?</h2>
          <p className="mt-2 leading-7 text-green-50">
            {post.relatedServices.length > 0
              ? "A one-size-fits-all chart rarely survives real life. DietFiniti builds plans around your health history, routine and kitchen — in Mumbai, Thane or online anywhere in India."
              : "DietFiniti builds personalised plans around your health history, routine and kitchen — in Mumbai, Thane or online anywhere in India."}
          </p>
          <div className="mt-5 space-y-3">
            {post.relatedServices.map((service) => (
              <Link key={service.path} href={service.path} className="block rounded-xl bg-white/10 p-4 ring-1 ring-white/25 transition hover:bg-white/20">
                <span className="flex items-center gap-2 font-semibold text-white">
{service.name}
                </span>
                <span className="mt-1 block text-sm leading-6 text-green-50">{service.description}</span>
              </Link>
            ))}
          </div>
        </aside>

        {/* Author card */}
        <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-700 text-lg font-bold text-white" aria-hidden="true">T</div>
            <div>
              <p className="text-lg font-bold text-slate-900">{post.author}</p>
              <p className="text-sm font-medium text-green-700">{post.authorCredentials}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Founder and lead dietitian at DietFiniti, with clinics in Mumbai (Lower Parel) and Thane and online consultations across India. Her articles focus on practical, evidence-aware nutrition guidance for everyday Indian eating.
              </p>
              <Link href="/about" className="mt-3 inline-flex items-center gap-1 font-semibold text-green-700 transition hover:text-green-900">
                About Dietitian Tejal <ArrowLeft className="h-4 w-4 rotate-180" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
