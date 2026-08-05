import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, BookOpen, ShieldCheck } from "lucide-react";

const SITE = "https://dietfiniti.com";

export const metadata: Metadata = {
  title: "Diabetes Dietitian in Mumbai & Online",
  description:
    "Diabetes nutrition support from a dietitian in Mumbai, Thane and online across India. Steady blood-sugar-friendly Indian meal planning that complements your diabetes care.",
  alternates: { canonical: "/services/diabetes-nutrition" },
  openGraph: {
    title: "Diabetes Nutrition Support | DietFiniti",
    description:
      "Indian meal planning for steady blood sugar — designed to complement, not replace, your diabetes care.",
    type: "website",
    url: `${SITE}/services/diabetes-nutrition`,
    siteName: "DietFiniti",
    images: [{ url: `${SITE}/image/MedicalWeightLoss1.jpg`, alt: "Diabetes meal planning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diabetes Nutrition Support | DietFiniti",
    description: "Indian meal planning for steady blood sugar, alongside your diabetes care.",
    images: [`${SITE}/image/MedicalWeightLoss1.jpg`],
  },
};

const faqs = [
  [
    "Can diet help manage diabetes?",
    "Meal planning is a daily tool for steadier blood sugar, alongside medication and activity — it does not replace treatment. For some people with early type 2 diabetes, substantial weight loss under medical supervision can bring blood sugar into the normal range, but this is never attempted alone.",
  ],
  [
    "Can I eat rice and roti with diabetes?",
    "Yes, in controlled portions paired with dal, sabzi and salad. The plate method — half vegetables, a quarter protein, a quarter grains — is a practical starting point that a consultation personalises to you.",
  ],
  [
    "Will you adjust my diabetes medication or insulin?",
    "No. Medication and insulin decisions stay with your doctor. DietFiniti plans food around your treatment and shares relevant points with your care team as needed.",
  ],
  [
    "What if I have gestational diabetes?",
    "Plans are tailored around pregnancy and your readings, and always coordinated with your obstetrician. Nutrition supports—it does not replace—your antenatal diabetes care.",
  ],
];

export default function DiabetesNutritionPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE}/services/diabetes-nutrition#service`,
        name: "Diabetes Nutrition Support",
        description:
          "Personalised nutrition consultation for diabetes — Indian meal planning for steady blood sugar, alongside medical care.",
        serviceType: "Nutrition consultation",
        url: `${SITE}/services/diabetes-nutrition`,
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
          { "@type": "ListItem", position: 3, name: "Diabetes Nutrition", item: `${SITE}/services/diabetes-nutrition` },
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
            Diabetes nutrition support from a dietitian in Mumbai &amp; online
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-green-50">
            Steady, blood-sugar-friendly <strong>Indian meal planning</strong> that complements your diabetes care —
            including prediabetes, type 2 diabetes and gestational diabetes.
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
            Diabetes is managed — not cured — with medical care, food patterns and activity. The practical starting
            point is the plate method: half your plate vegetables, a quarter dal or protein, a quarter whole grains.
            Meal planning supports your treatment; never stop or reduce prescribed medication on your own.
          </p>
        </div>
      </section>

      {/* What you can discuss */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-3xl font-bold text-slate-900">What you can discuss in a diabetes consultation</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ["Your daily plate", "A personalised version of the plate method built around your routine, preferences and readings."],
            ["Festivals and eating out", "Practical ways to enjoy mithai, feasts and restaurants without derailing your pattern."],
            ["Working with your doctor", "Meal planning that respects your medication, insulin or pregnancy care — with your clinician kept informed."],
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
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">A balanced Indian plate for diabetes</h2>
            <p className="mt-4 leading-8 text-slate-700">
              The plate method is simple, evidence-aligned and works with everyday Indian meals — no weighing or
              calorie-counting required.
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Half the plate: sabzi, salad, cooked greens",
                "A quarter: dal, chole, rajma, paneer, eggs or fish",
                "A quarter: whole grains or millets (roti, rice, jowar, ragi)",
                "Curd on the side, water or buttermilk to drink",
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
              Our detailed article covers the Indian plate, carb choices, festivals and eating out with diabetes.
            </p>
            <Link href="/blog/diabetes-meal-planning" className="mt-4 inline-flex items-center gap-2 font-semibold text-green-700 hover:underline">
              Diabetes Meal Planning: A Balanced Indian Plate Guide <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-3xl font-bold text-slate-900">Diabetes nutrition FAQs</h2>
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
          Nutrition guidance for diabetes supports management — it does not diagnose, treat or cure diabetes, and it
          does not replace medication, insulin or your doctor&apos;s care.
        </p>
        <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 font-semibold text-green-800 transition hover:bg-green-50">
          Book a consultation <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
