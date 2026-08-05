import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, BookOpen, ShieldCheck } from "lucide-react";

const SITE = "https://dietfiniti.com";

export const metadata: Metadata = {
  title: "Thyroid Dietitian in Mumbai & Online",
  description:
    "Thyroid nutrition support from a dietitian in Mumbai, Thane and online across India. Practical eating patterns that work alongside thyroid medication and help with energy and weight changes.",
  alternates: { canonical: "/services/thyroid-nutrition" },
  openGraph: {
    title: "Thyroid Nutrition Support | DietFiniti",
    description:
      "Practical eating patterns that work alongside thyroid medication — energy, weight and everyday Indian meals.",
    type: "website",
    url: `${SITE}/services/thyroid-nutrition`,
    siteName: "DietFiniti",
    images: [{ url: `${SITE}/image/MedicalWeightLoss1.jpg`, alt: "Thyroid nutrition meal planning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thyroid Nutrition Support | DietFiniti",
    description: "Practical eating patterns that work alongside thyroid medication.",
    images: [`${SITE}/image/MedicalWeightLoss1.jpg`],
  },
};

const faqs = [
  [
    "Can diet treat my thyroid condition?",
    "No. Thyroid conditions are managed with medication and medical monitoring. Nutrition supports your energy, weight and overall eating pattern — it does not replace thyroid treatment.",
  ],
  [
    "How does food affect thyroid medication?",
    "Thyroid medication is best absorbed on an empty stomach — usually 30–60 minutes before breakfast, chai, coffee or calcium. A consultation can help you plan meal timing around your medication routine.",
  ],
  [
    "Should I avoid goitrogenic foods like cabbage or soy?",
    "In normal cooked Indian portions, cabbage, cauliflower, millets and soy are generally fine. The goitrogen concern applies mainly to very large, raw amounts. Follow your doctor's advice and your usual thyroid monitoring.",
  ],
  [
    "Will you change my thyroid medication dose?",
    "No. Medication decisions belong to your doctor. DietFiniti plans food around your treatment and helps you discuss relevant points with your clinician.",
  ],
];

export default function ThyroidNutritionPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE}/services/thyroid-nutrition#service`,
        name: "Thyroid Nutrition Support",
        description:
          "Personalised nutrition consultation for thyroid health — eating patterns that work alongside thyroid medication.",
        serviceType: "Nutrition consultation",
        url: `${SITE}/services/thyroid-nutrition`,
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
          { "@type": "ListItem", position: 3, name: "Thyroid Nutrition", item: `${SITE}/services/thyroid-nutrition` },
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

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 via-green-700 to-emerald-700 px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-100">
            Mumbai, Thane &amp; online across India
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Thyroid nutrition support from a dietitian in Mumbai &amp; online
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-green-50">
            Practical eating patterns that work <strong>alongside thyroid medication</strong> — supporting energy,
            steady meals and gradual weight goals, while your doctor continues to manage your thyroid care.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-green-800 transition hover:bg-green-50">
              Book a consultation <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link href="/online-dietitian-consultation" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/20">
              Ask online
            </Link>
          </div>
        </div>
      </section>

      {/* Quick answer */}
      <section className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-xl border border-green-200 bg-green-50 p-5">
          <p className="font-bold text-green-900">Quick answer</p>
          <p className="mt-2 leading-7 text-slate-800">
            Thyroid conditions are medical conditions — no food cures them and no diet replaces medication. Nutrition
            helps by keeping your eating pattern balanced, timing meals so they don&apos;t interfere with thyroid
            medication, and supporting gradual weight and energy goals. Blood tests and treatment stay with your doctor.
          </p>
        </div>
      </section>

      {/* What you can discuss */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-3xl font-bold text-slate-900">What you can discuss in a thyroid consultation</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ["Medication-friendly timing", "Practical guidance on meal and chai timing around thyroid medication, so absorption is not disturbed."],
            ["Energy and weight patterns", "Balanced Indian meals that support steady energy and gradual weight goals — without crash dieting."],
            ["Working with your doctor", "Questions and notes to take to your physician, so your food plan and medical care stay aligned."],
          ].map(([t, d]) => (
            <article key={t} className="rounded-xl border border-slate-200 bg-white p-6">
              <CheckCircle2 className="h-6 w-6 text-green-700" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-bold text-slate-900">{t}</h3>
              <p className="mt-2 leading-7 text-slate-600">{d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Deep dive */}
      <section className="bg-green-50 px-4 py-14">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">A balanced thyroid-friendly eating pattern</h2>
            <p className="mt-4 leading-8 text-slate-700">
              There is no single &quot;thyroid diet&quot;. The practical approach is the same balanced Indian pattern
              used broadly, with attention to medication timing and steady meals.
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Take thyroid medication on an empty stomach, as your doctor advises",
                "Regular meals with protein, vegetables and whole grains",
                "Iodised salt and everyday foods — no need for special 'thyroid' products",
                "Talk to your doctor before any supplement",
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
              <BookOpen className="h-5 w-5 text-green-700" aria-hidden="true" /> Read the full guide
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Our detailed article covers thyroid medication timing, nutrients that matter and how to handle weight changes.
            </p>
            <Link href="/blog/thyroid-nutrition-support" className="mt-4 inline-flex items-center gap-2 font-semibold text-green-700 hover:underline">
              Thyroid Nutrition Support: Diet, Medication Timing &amp; Weight <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-3xl font-bold text-slate-900">Thyroid nutrition FAQs</h2>
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

      {/* Disclaimer + CTA */}
      <section className="bg-gradient-to-r from-green-800 to-emerald-700 px-4 py-14 text-center text-white">
        <p className="mx-auto flex max-w-3xl items-start gap-2 text-left text-sm leading-6 text-green-50">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          Nutrition guidance for thyroid conditions supports everyday eating — it does not diagnose, treat or cure
          thyroid disease, and it does not replace thyroid medication or medical monitoring.
        </p>
        <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 font-semibold text-green-800 transition hover:bg-green-50">
          Book a consultation <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
