import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, BookOpen, ShieldCheck } from "lucide-react";

const SITE = "https://dietfiniti.com";

export const metadata: Metadata = {
  title: "PCOS Dietitian in Mumbai & Online",
  description:
    "PCOS nutrition support from a dietitian in Mumbai, Thane and online across India. Practical eating patterns for hormonal health, regular meals and gradual weight goals — alongside your gynaecologist's care.",
  alternates: { canonical: "/services/pcos-nutrition" },
  openGraph: {
    title: "PCOS Nutrition Support | DietFiniti",
    description:
      "Practical Indian meal planning for PCOS — hormonal health, regular meals and gradual weight goals, alongside medical care.",
    type: "website",
    url: `${SITE}/services/pcos-nutrition`,
    siteName: "DietFiniti",
    images: [{ url: `${SITE}/image/MedicalWeightLoss1.jpg`, alt: "PCOS nutrition meal planning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PCOS Nutrition Support | DietFiniti",
    description: "Practical Indian meal planning for PCOS, alongside medical care.",
    images: [`${SITE}/image/MedicalWeightLoss1.jpg`],
  },
};

const faqs = [
  [
    "Can diet help with PCOS?",
    "International guidance recommends healthy lifestyle support — including balanced eating and regular activity — as a first-line approach for managing PCOS symptoms. Nutrition supports management; it does not cure PCOS or replace your gynaecologist's or physician's care.",
  ],
  [
    "What should I eat with PCOS?",
    "A practical pattern is regular meals with protein and fibre — dal, legumes, whole grains, vegetables and curd — and fewer sugary drinks and refined flours. The plan is personalised to your routine, preferences and health history.",
  ],
  [
    "Do I need to cut rice or roti for PCOS?",
    "No. Whole grains and millets can be part of a PCOS-friendly pattern. Portions and pairings matter more than banning any single food — dal, sabzi and salad alongside rice or roti changes the meal's effect.",
  ],
  [
    "Will you change my medication or fertility treatment?",
    "No. Medication and fertility treatment stay with your treating clinicians. DietFiniti plans meals around the medical care you already receive and supports—it does not replace—it.",
  ],
];

export default function PcosNutritionPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE}/services/pcos-nutrition#service`,
        name: "PCOS Nutrition Support",
        description:
          "Personalised nutrition consultation for PCOS — practical Indian meal planning for hormonal health, alongside medical care.",
        serviceType: "Nutrition consultation",
        url: `${SITE}/services/pcos-nutrition`,
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
          { "@type": "ListItem", position: 3, name: "PCOS Nutrition", item: `${SITE}/services/pcos-nutrition` },
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
            PCOS nutrition support from a dietitian in Mumbai &amp; online
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-green-50">
            Practical Indian meal planning for hormonal health, steady energy and gradual weight goals — designed to
            work alongside your gynaecologist&apos;s or physician&apos;s care, not instead of it.
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
            PCOS has no cure, and no food reverses it. What nutrition can do is support a steadier eating pattern —
            regular meals with protein and fibre, fewer sugary drinks, and gradual weight change if that is your goal.
            A consultation turns this into a plan for your routine, while your doctor continues to manage your care.
          </p>
        </div>
      </section>

      {/* What you can discuss */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-3xl font-bold text-slate-900">What you can discuss in a PCOS consultation</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ["Meals around your cycle", "Practical food patterns that support steady energy and manageable cravings across your monthly routine."],
            ["Gradual weight goals", "If weight is part of your goal, a modest, sustainable approach — about 0.5–1 kg per week — built around Indian food."],
            ["Working with your doctor", "A food plan that sits alongside your gynaecologist's or physician's treatment and any fertility care you are receiving."],
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
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">What a PCOS-friendly Indian pattern looks like</h2>
            <p className="mt-4 leading-8 text-slate-700">
              The goal is not a strict food list. It is a steadier pattern: three balanced meals, fibre and protein at
              each meal, and whole grains and millets more often than refined flours.
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Half the plate from vegetables and salad",
                "A quarter from dal, legumes or other protein",
                "A quarter from whole grains or millets",
                "Water, buttermilk or unsweetened drinks as the default",
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
              Our detailed article covers PCOS and everyday Indian eating, which foods to limit and when to see a doctor.
            </p>
            <Link href="/blog/pcos-nutrition-support" className="mt-4 inline-flex items-center gap-2 font-semibold text-green-700 hover:underline">
              PCOS Nutrition Support: A Practical Indian Diet Guide <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-3xl font-bold text-slate-900">PCOS nutrition FAQs</h2>
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
          Nutrition guidance for PCOS supports management — it does not diagnose, treat or cure PCOS, and it does not
          replace care from your gynaecologist or physician.
        </p>
        <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 font-semibold text-green-800 transition hover:bg-green-50">
          Book a consultation <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
