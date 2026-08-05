import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, BookOpen, ShieldCheck } from "lucide-react";

const SITE = "https://dietfiniti.com";

export const metadata: Metadata = {
  title: "Fatty Liver Dietitian in Mumbai & Online",
  description:
    "Fatty liver nutrition support from a dietitian in Mumbai, Thane and online across India. Weight and food-pattern support for liver health, alongside your doctor's monitoring.",
  alternates: { canonical: "/services/fatty-liver-nutrition" },
  openGraph: {
    title: "Fatty Liver Nutrition Support | DietFiniti",
    description: "Weight and food-pattern support for liver health, alongside your doctor's monitoring.",
    type: "website",
    url: `${SITE}/services/fatty-liver-nutrition`,
    siteName: "DietFiniti",
    images: [{ url: `${SITE}/image/MedicalWeightLoss1.jpg`, alt: "Fatty liver nutrition meal planning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatty Liver Nutrition Support | DietFiniti",
    description: "Weight and food-pattern support for liver health.",
    images: [`${SITE}/image/MedicalWeightLoss1.jpg`],
  },
};

const faqs = [
  [
    "Can nutrition help with fatty liver?",
    "For non-alcoholic fatty liver, modest weight loss (5–10% where overweight) and a balanced food pattern are among the most evidence-backed lifestyle approaches. Nutrition supports—it does not replace—your doctor's monitoring and treatment.",
  ],
  [
    "Do I need to avoid all fats?",
    "No. The problem is usually excess calories overall — especially refined carbs, sugar and fried food — not fat alone. Healthy fats from nuts, seeds and moderate oil fit into the pattern.",
  ],
  [
    "Is fatty liver reversible?",
    "Early-stage fatty liver can improve significantly with weight loss and lifestyle change. Advanced fibrosis is less reversible, which is why early action and medical monitoring matter. DietFiniti does not promise outcomes.",
  ],
  [
    "Will you interpret my liver tests?",
    "No. Your doctor interprets scans and blood tests. DietFiniti plans food around the medical picture and supports healthy weight change.",
  ],
];

export default function FattyLiverNutritionPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE}/services/fatty-liver-nutrition#service`,
        name: "Fatty Liver Nutrition Support",
        description:
          "Personalised nutrition consultation for fatty liver — weight and food-pattern support, alongside medical care.",
        serviceType: "Nutrition consultation",
        url: `${SITE}/services/fatty-liver-nutrition`,
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
          { "@type": "ListItem", position: 3, name: "Fatty Liver Nutrition", item: `${SITE}/services/fatty-liver-nutrition` },
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
            Fatty liver nutrition support from a dietitian in Mumbai &amp; online
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-green-50">
            Weight and food-pattern support for liver health — built around everyday Indian meals and designed to work
            alongside your doctor&apos;s monitoring, not instead of it.
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
            Fatty liver is closely linked to weight and metabolic health, and lifestyle change — especially modest
            weight loss where overweight — is one of the most evidence-backed approaches. DietFiniti helps you build a
            practical food pattern; your doctor monitors your liver with scans and blood tests.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-3xl font-bold text-slate-900">What you can discuss in a fatty liver consultation</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ["Gradual weight change", "A modest, sustainable approach — about 5–10% weight loss where relevant, at 0.5–1 kg per week."],
            ["Food patterns that help", "Fewer sugary drinks and refined carbs, more vegetables, dal, whole grains and healthy fats."],
            ["Coordinating with your doctor", "Notes and questions for your clinician, so food changes and medical monitoring stay aligned."],
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
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">What a liver-friendly pattern looks like</h2>
            <p className="mt-4 leading-8 text-slate-700">
              The pattern overlaps heavily with healthy weight and blood-sugar support — which is why it works with
              everyday Indian food rather than requiring a special diet.
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Vegetables and dal at every meal",
                "Whole grains and millets over refined flour",
                "Water or buttermilk instead of sugary drinks",
                "Modest oil, fewer fried foods, limited alcohol",
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
              Our detailed article covers what to eat and avoid for liver health, and how weight and diabetes connect.
            </p>
            <Link href="/blog/fatty-liver-diet" className="mt-4 inline-flex items-center gap-2 font-semibold text-green-700 hover:underline">
              Fatty Liver Diet: What to Eat and Avoid <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-3xl font-bold text-slate-900">Fatty liver nutrition FAQs</h2>
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
          Nutrition guidance for fatty liver supports healthy weight and eating patterns — it does not diagnose, treat
          or cure liver disease, and it does not replace your doctor&apos;s monitoring or treatment.
        </p>
        <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 font-semibold text-green-800 transition hover:bg-green-50">
          Book a consultation <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
