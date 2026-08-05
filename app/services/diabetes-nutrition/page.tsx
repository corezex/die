import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { ServiceCtaButtons } from "@/app/components/ServiceCtaButtons";
import img1 from "@/public/image/diabetes-nutritionimg1.jpg";

const SITE = "https://dietfiniti.com";

export const metadata: Metadata = {
  title: "Diabetes Dietitian in Mumbai & Online",
  description:
    "Diabetes nutrition support from a dietitian in Mumbai, Thane and online across India. Indian meal planning that complements your diabetes care.",
  alternates: { canonical: "/services/diabetes-nutrition" },
  openGraph: {
    title: "Diabetes Nutrition Support | DietFiniti",
    description:
      "Balanced Indian meal planning for steadier blood sugar — the plate method, festivals and eating out, alongside your diabetes care.",
    type: "website",
    url: `${SITE}/services/diabetes-nutrition`,
    siteName: "DietFiniti",
    images: [{ url: `${SITE}/image/diabetes-nutritionimg1.jpg`, alt: "Dietitian showing a plate-method chart to a client during a diabetes nutrition consultation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diabetes Nutrition Support | DietFiniti",
    description: "Steady blood-sugar-friendly Indian meal planning alongside diabetes care.",
    images: [`${SITE}/image/diabetes-nutritionimg1.jpg`],
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
          "Personalised nutrition consultation for diabetes — balanced Indian meal planning alongside medical care.",
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
    <div className="service-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-[#262262] px-4 py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div>
            <p className="mb-4 font-semibold uppercase tracking-[0.18em] text-green-100 text-sm">Mumbai, Thane & online across India</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Diabetes nutrition support from a dietitian in Mumbai &amp; online</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-green-50/90">Looking for a <strong>dietitian for diabetes</strong> in Mumbai, Thane or online? Steady, blood-sugar-friendly <strong>Indian meal planning</strong> that complements your diabetes care — including prediabetes, type 2 diabetes and gestational diabetes.</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50 md:text-xl">Diabetes is managed — not cured — with medical care, food patterns and activity. The practical starting point is the plate method: half your plate vegetables, a quarter dal or protein, a quarter whole grains. Meal planning supports your treatment; never stop or reduce prescribed medication on your own.</p>
            <div className="mt-9"><ServiceCtaButtons contactColorClass="text-green-800" /></div>
          </div>
          <aside className="rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm">
            <h2 className="text-2xl font-bold">Important to know</h2>
            <ul className="mt-5 space-y-4 leading-7 text-green-50">
              <li>• Never stop or reduce prescribed medication or insulin on your own.</li>
              <li>• Meal planning supports — it does not replace — your diabetes care.</li>
              <li>• Gestational diabetes plans are coordinated with your obstetrician.</li>
              <li>• For symptoms or emergencies, contact your doctor or emergency services.</li>
            </ul>
          </aside>
        </div>
      </section>

      <main>
        {/* Section A */}
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="font-semibold text-green-700">The plate method, personalised</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">A balanced Indian plate for diabetes</h2>
            <p className="mt-5 leading-8 text-slate-700">The plate method is simple, evidence-aligned and works with everyday Indian meals — no weighing or calorie-counting required.</p>
            <p className="mt-4 leading-8 text-slate-700">A consultation personalises it around your routine, preferences, readings and care plan — and keeps medication and insulin decisions firmly with your doctor.</p>
          </div>
          <Image src={img1} alt="Dietitian showing a plate-method food chart to a client during a diabetes nutrition consultation" className="h-auto w-full rounded-2xl shadow-lg" />
        </section>

        {/* Section B */}
        <section className="bg-slate-50 px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">What you can discuss in a diabetes consultation</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                ["Your daily plate", "A personalised version of the plate method built around your routine, preferences and readings."],
                ["Festivals and eating out", "Practical ways to enjoy mithai, feasts and restaurants without derailing your pattern."],
                ["Working with your doctor", "Meal planning that respects your medication, insulin or pregnancy care — with your clinician kept informed."],
              ].map(([t, d]) => (
                <article key={t} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <CheckCircle2 className="h-6 w-6 text-green-700" aria-hidden="true" />
                  <h3 className="mt-3 text-lg font-bold text-slate-900">{t}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section C */}
        <section className="bg-green-50 px-4 py-16 md:py-20">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">A balanced Indian plate, at a glance</h2>
              <p className="mt-4 leading-8 text-slate-700">A simple daily guide that works with everyday meals — no weighing or calorie-counting required.</p>
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
        <section className="mx-auto max-w-4xl px-4 py-16 md:py-20">
          <h2 className="text-3xl font-bold text-slate-900">Diabetes nutrition FAQs</h2>
          <div className="mt-7 divide-y divide-green-100 rounded-xl border border-green-100 bg-white">
            {faqs.map(([q, a]) => (
              <details key={q} className="group p-5">
                <summary className="cursor-pointer list-none pr-8 font-semibold text-slate-900">
                  {q}
                  <span className="float-right text-green-700 transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-4 leading-7 text-slate-700">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 px-4 py-16 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold">Talk through your diabetes and food goals</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-200">
              In Mumbai, Thane or online anywhere in India — start with a consultation that respects your medical care.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href="https://wa.me/919321057899" target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-[#25d366] px-6 py-3 font-semibold text-slate-950 hover:bg-[#1fb959]">Message DietFiniti on WhatsApp</a>
              <Link href="/contact" className="inline-block rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10">Book a consultation</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
