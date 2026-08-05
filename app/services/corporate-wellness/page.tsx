import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, BookOpen, ShieldCheck } from "lucide-react";

const SITE = "https://dietfiniti.com";

export const metadata: Metadata = {
  title: "Corporate Wellness in Mumbai & Online",
  description:
    "Corporate wellness and workplace nutrition programs in Mumbai, Thane and online across India — practical nutrition workshops, webinars and employee support from DietFiniti.",
  alternates: { canonical: "/services/corporate-wellness" },
  openGraph: {
    title: "Corporate Wellness Programs | DietFiniti",
    description: "Practical workplace nutrition workshops, webinars and employee support in Mumbai, Thane and online.",
    type: "website",
    url: `${SITE}/services/corporate-wellness`,
    siteName: "DietFiniti",
    images: [{ url: `${SITE}/image/Servicesimg2.png`, alt: "Corporate wellness nutrition program" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Wellness Programs | DietFiniti",
    description: "Practical workplace nutrition support for teams.",
    images: [`${SITE}/image/Servicesimg2.png`],
  },
};

const faqs = [
  [
    "What does a DietFiniti corporate wellness program include?",
    "Practical nutrition workshops and webinars on topics like desk-day eating, meal prep, sugar and weight management — tailored to your team and delivered online or in Mumbai/Thane.",
  ],
  [
    "Can you run programs for remote teams?",
    "Yes. Webinars and online sessions work across India and internationally, so remote and hybrid teams can participate.",
  ],
  [
    "Is this medical advice for employees?",
    "No. Group programs are educational. Employees with specific health conditions are encouraged to consult their own doctor and, where useful, a DietFiniti consultation for personalised guidance.",
  ],
  [
    "How do we get started?",
    "Share your team size, location and goals through the contact page — the team will propose a program outline and options.",
  ],
];

export default function CorporateWellnessPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE}/services/corporate-wellness#service`,
        name: "Corporate Wellness Programs",
        description:
          "Workplace nutrition workshops and employee support from DietFiniti — practical, evidence-aware and delivered online or in Mumbai/Thane.",
        serviceType: "Corporate nutrition program",
        url: `${SITE}/services/corporate-wellness`,
        provider: { "@id": `${SITE}/#organization` },
        areaServed: [
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Thane" },
          { "@type": "Country", name: "India" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
          { "@type": "ListItem", position: 3, name: "Corporate Wellness", item: `${SITE}/services/corporate-wellness` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([name, text]) => ({
          "@type": "Question",
          name,
          acceptedAnswer: { "@type": "Answer", text },
        })),
      },
    ],
  };

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-gradient-to-br from-green-800 via-green-700 to-emerald-700 px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-100">
            Mumbai, Thane &amp; online across India
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Corporate wellness programs in Mumbai &amp; online
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-green-50">
            Practical, evidence-aware <strong>workplace nutrition</strong> — workshops and webinars that help your team
            eat and feel better at work, without fad-diet noise.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-green-800 transition hover:bg-green-50">
              Enquire for your team <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link href="/online-dietitian-consultation" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/20">
              See individual support
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-xl border border-green-200 bg-green-50 p-5">
          <p className="font-bold text-green-900">Quick answer</p>
          <p className="mt-2 leading-7 text-slate-800">
            DietFiniti&apos;s corporate wellness programs are practical nutrition sessions — desk-day eating, meal
            prep, sugar awareness and sustainable weight habits — delivered online or in Mumbai/Thane. Sessions are
            educational, not medical advice; employees with health conditions continue with their own doctors.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-3xl font-bold text-slate-900">Program topics your team will use</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ["Eating well on a workday", "Practical desk-day meals, snack choices and hydration — built around Indian food and busy schedules."],
            ["Sugar, labels and cravings", "How to read food labels, spot hidden sugar, and handle afternoon cravings without restriction."],
            ["Sustainable weight habits", "The plate method, portions and habit-building — the anti-crash-diet approach."],
          ].map(([t, d]) => (
            <article key={t} className="rounded-xl border border-slate-200 bg-white p-6">
              <CheckCircle2 className="h-6 w-6 text-green-700" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-bold text-slate-900">{t}</h3>
              <p className="mt-2 leading-7 text-slate-600">{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-green-50 px-4 py-14">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Why companies choose DietFiniti</h2>
            <ul className="mt-5 space-y-3">
              {[
                "Practical, jargon-free sessions people actually use",
                "Delivered online for remote and hybrid teams",
                "In-person workshops available in Mumbai and Thane",
                "Honest, evidence-aware content — no cure or guarantee claims",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-700" aria-hidden="true" />
                  <span className="leading-7 text-slate-700">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-green-200 bg-white p-6">
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
              <BookOpen className="h-5 w-5 text-green-700" aria-hidden="true" /> Explore related content
            </h3>
            <div className="mt-3 space-y-3">
              <Link href="/blog/healthy-indian-snacks" className="block font-semibold text-green-700 hover:underline">
                Healthy Indian Snacks That Actually Fill You Up
              </Link>
              <Link href="/blog/how-to-read-food-labels-india" className="block font-semibold text-green-700 hover:underline">
                How to Read Food Labels in India
              </Link>
              <Link href="/blog/healthy-weight-loss-india" className="block font-semibold text-green-700 hover:underline">
                Healthy Weight Loss on an Indian Diet
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-3xl font-bold text-slate-900">Corporate wellness FAQs</h2>
        <div className="mt-7 divide-y rounded-xl border border-slate-200 bg-white">
          {faqs.map(([q, a]) => (
            <details key={q} className="group p-5">
              <summary className="cursor-pointer list-none font-semibold text-slate-900">
                {q}
                <span className="float-right text-green-700 transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-4 leading-7 text-slate-700">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-800 to-emerald-700 px-4 py-14 text-center text-white">
        <p className="mx-auto flex max-w-3xl items-start gap-2 text-left text-sm leading-6 text-green-50">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          Corporate wellness sessions are educational. They are not medical advice and do not replace individual
          medical care for employees with health conditions.
        </p>
        <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 font-semibold text-green-800 transition hover:bg-green-50">
          Enquire for your team <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
