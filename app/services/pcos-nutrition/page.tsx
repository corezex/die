import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { ServiceCtaButtons } from "@/app/components/ServiceCtaButtons";
import img1 from "@/public/image/pcos-nutritionimg1.jpg";

const SITE = "https://dietfiniti.com";

export const metadata: Metadata = {
  title: "PCOS Dietitian in Mumbai & Online",
  description:
    "PCOS nutrition support from a dietitian in Mumbai, Thane and online across India. Practical Indian meal planning alongside your gynaecologist's care.",
  alternates: { canonical: "/services/pcos-nutrition" },
  openGraph: {
    title: "PCOS Nutrition Support | DietFiniti",
    description:
      "Practical Indian meal planning for PCOS — hormonal health, regular meals and gradual weight goals, alongside medical care.",
    type: "website",
    url: `${SITE}/services/pcos-nutrition`,
    siteName: "DietFiniti",
    images: [{ url: `${SITE}/image/pcos-nutritionimg1.jpg`, alt: "Dietitian discussing a food diary with a young woman during a PCOS nutrition consultation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PCOS Nutrition Support | DietFiniti",
    description: "Practical Indian meal planning for PCOS, alongside medical care.",
    images: [`${SITE}/image/pcos-nutritionimg1.jpg`],
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
    <div className="service-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-[#262262] px-4 py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div>
            <p className="mb-4 font-semibold uppercase tracking-[0.18em] text-green-100 text-sm">Mumbai, Thane & online across India</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">PCOS nutrition support from a dietitian in Mumbai &amp; online</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-green-50/90">Looking for a <strong>dietitian for PCOS</strong> in Mumbai, Thane or online? Practical Indian meal planning for hormonal health, steady energy and gradual weight goals — designed to work alongside your gynaecologist&apos;s or physician&apos;s care, not instead of it.</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50 md:text-xl">PCOS has no cure and no single &quot;PCOS diet&quot;. What helps is a steadier pattern you can actually follow — regular meals with protein and fibre, fewer sugary drinks, and gradual weight change if that is your goal. A consultation turns that into a plan for your routine.</p>
            <div className="mt-9"><ServiceCtaButtons contactColorClass="text-green-800" /></div>
          </div>
          <aside className="rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm">
            <h2 className="text-2xl font-bold">Important to know</h2>
            <ul className="mt-5 space-y-4 leading-7 text-green-50">
              <li>• No food cures PCOS — the goal is a steadier, practical eating pattern.</li>
              <li>• Medication and fertility treatment stay with your treating clinicians.</li>
              <li>• Weight goals are gradual — about 0.5–1 kg per week, if weight is part of your plan.</li>
              <li>• Your gynaecologist or physician continues to manage your PCOS care.</li>
            </ul>
          </aside>
        </div>
      </section>

      <main>
        {/* Section A — image + intro */}
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="font-semibold text-green-700">Practical, personalised food planning</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">A PCOS-friendly pattern built around Indian food</h2>
            <p className="mt-5 leading-8 text-slate-700">The goal is not a strict food list. It is a steadier pattern: three balanced meals, fibre and protein at each meal, and whole grains and millets more often than refined flours.</p>
            <p className="mt-4 leading-8 text-slate-700">A consultation personalises this to your cycle, routine, preferences and health history — and keeps your medical care firmly in your clinicians&apos; hands.</p>
          </div>
          <Image src={img1} alt="Dietitian discussing a food diary and healthy eating plan with a young woman during a PCOS nutrition consultation" className="h-auto w-full rounded-2xl shadow-lg" />
        </section>

        {/* Section B — what you can discuss */}
        <section className="bg-slate-50 px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">What you can discuss in a PCOS consultation</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                ["Meals around your cycle", "Practical food patterns that support steady energy and manageable cravings across your monthly routine."],
                ["Gradual weight goals", "If weight is part of your goal, a modest, sustainable approach — about 0.5–1 kg per week — built around Indian food."],
                ["Working with your doctor", "A food plan that sits alongside your gynaecologist's or physician's treatment and any fertility care you are receiving."],
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

        {/* Section C — deep dive + blog guide */}
        <section className="bg-green-50 px-4 py-16 md:py-20">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">What a PCOS-friendly Indian plate looks like</h2>
              <p className="mt-4 leading-8 text-slate-700">A simple daily guide that works with everyday meals — no weighing or calorie-counting required.</p>
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
        <section className="mx-auto max-w-4xl px-4 py-16 md:py-20">
          <h2 className="text-3xl font-bold text-slate-900">PCOS nutrition FAQs</h2>
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
            <h2 className="text-3xl font-bold">Talk through your PCOS and food goals</h2>
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
