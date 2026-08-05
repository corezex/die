import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, BookOpen, ShieldCheck } from "lucide-react";

const SITE = "https://dietfiniti.com";

export const metadata: Metadata = {
  title: "Gut Health & IBS Dietitian in Mumbai",
  description:
    "Gut health and IBS nutrition support from a dietitian in Mumbai, Thane and online across India. Eating patterns for bloating and IBS symptoms, including structured food-diary work.",
  alternates: { canonical: "/services/gut-health-nutrition" },
  openGraph: {
    title: "Gut Health & IBS Nutrition Support | DietFiniti",
    description: "Eating patterns for bloating and IBS symptoms, including structured food-diary work.",
    type: "website",
    url: `${SITE}/services/gut-health-nutrition`,
    siteName: "DietFiniti",
    images: [{ url: `${SITE}/image/MedicalWeightLoss1.jpg`, alt: "Gut health nutrition meal planning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gut Health & IBS Nutrition | DietFiniti",
    description: "Eating patterns for bloating and IBS symptoms.",
    images: [`${SITE}/image/MedicalWeightLoss1.jpg`],
  },
};

const faqs = [
  [
    "Can diet help with IBS?",
    "Most people with IBS improve with a combination of regular meals, trigger awareness and, for persistent bloating, a structured dietary approach such as low-FODMAP — done with professional guidance. There is no cure, but symptoms can often be managed well.",
  ],
  [
    "What is the low-FODMAP diet?",
    "It is a temporary elimination phase (2–6 weeks) followed by careful reintroduction to find personal triggers. It is not a permanent restrictive diet, and it should be done with a dietitian rather than self-prescribed.",
  ],
  [
    "Should I cut out all fibre?",
    "No. Large amounts of insoluble fibre (raw salads, bran) can worsen symptoms, while soluble fibre (oats, cooked vegetables, banana) is often well tolerated. The right type and amount is personalised.",
  ],
  [
    "Do I need a medical diagnosis first?",
    "Yes. IBS is diagnosed by a doctor after other conditions are ruled out. Start with your clinician, then bring the food-side questions to a dietitian.",
  ],
];

export default function GutHealthNutritionPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE}/services/gut-health-nutrition#service`,
        name: "Gut Health & IBS Nutrition Support",
        description:
          "Personalised nutrition consultation for gut health and IBS — eating patterns for bloating and symptoms.",
        serviceType: "Nutrition consultation",
        url: `${SITE}/services/gut-health-nutrition`,
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
          { "@type": "ListItem", position: 3, name: "Gut Health & IBS Nutrition", item: `${SITE}/services/gut-health-nutrition` },
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
            Gut health &amp; IBS nutrition support from a dietitian in Mumbai &amp; online
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-green-50">
            Eating patterns for bloating and IBS symptoms — regular meals, trigger awareness and structured
            food-diary work, always after a proper medical diagnosis.
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

      <section className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-xl border border-green-200 bg-green-50 p-5">
          <p className="font-bold text-green-900">Quick answer</p>
          <p className="mt-2 leading-7 text-slate-800">
            IBS is a medical diagnosis made by a doctor after other conditions are ruled out. Once diagnosed, most
            people improve with a layered food approach: regular small meals, soluble fibre, a food-symptom diary to
            find personal triggers, and — for persistent bloating — a short low-FODMAP phase done with a dietitian.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-3xl font-bold text-slate-900">What you can discuss in a gut health consultation</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ["Your symptom pattern", "When bloating, pain or bowel changes happen, and which foods seem connected — captured in a structured diary."],
            ["A fibre plan that suits you", "The right type and amount of fibre for your symptoms — often soluble fibre first, adjusted gradually."],
            ["Low-FODMAP, done properly", "A guided elimination and reintroduction phase if persistent bloating warrants it — not a permanent diet."],
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
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">First-line gut-friendly habits</h2>
            <p className="mt-4 leading-8 text-slate-700">
              These basics help most people with IBS regardless of their type, and they are the foundation before any
              special diet.
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Regular meals at similar times",
                "Smaller meals if bloating is an issue",
                "Adequate water; less alcohol and caffeine",
                "Eating slowly, seated, without rushing",
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
              Our detailed article covers IBS diagnosis, first-line changes and the low-FODMAP approach.
            </p>
            <Link href="/blog/ibs-diet-guide" className="mt-4 inline-flex items-center gap-2 font-semibold text-green-700 hover:underline">
              IBS Diet Guide: Eating Well With Irritable Bowel Syndrome <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-3xl font-bold text-slate-900">Gut health &amp; IBS nutrition FAQs</h2>
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
          Nutrition guidance for gut health supports symptom management — it does not diagnose IBS or other digestive
          conditions. Always start with a medical diagnosis and your doctor&apos;s guidance.
        </p>
        <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 font-semibold text-green-800 transition hover:bg-green-50">
          Book a consultation <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
