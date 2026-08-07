import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { ServiceCtaButtons } from "@/app/components/ServiceCtaButtons";
import { ServiceExtraSections } from "@/app/components/ServiceExtraSections";
import img1 from "@/public/image/thyroid-nutritionimg1.jpg";

const SITE = "https://dietfiniti.com";

export const metadata: Metadata = {
  title: "Thyroid Dietitian in Mumbai & Online",
  description:
    "Thyroid nutrition support from a dietitian in Mumbai, Thane and online across India. Eating patterns that work alongside thyroid medication and medical care.",
  alternates: { canonical: "/services/thyroid-nutrition" },
  openGraph: {
    title: "Thyroid Nutrition Support | DietFiniti",
    description:
      "Practical Indian meal planning for thyroid health — medication-friendly timing, steady energy and gradual weight goals, alongside medical care.",
    type: "website",
    url: `${SITE}/services/thyroid-nutrition`,
    siteName: "DietFiniti",
    images: [{ url: `${SITE}/image/thyroid-nutritionimg1.jpg`, alt: "Dietitian explaining a meal-timing plan to a client during a thyroid nutrition consultation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thyroid Nutrition Support | DietFiniti",
    description: "Practical eating patterns alongside thyroid medication and medical care.",
    images: [`${SITE}/image/thyroid-nutritionimg1.jpg`],
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

const features: [string, string, string][] = [
  ["⏰", "Medication-friendly timing", "Guidance on meal and chai timing around thyroid medication so absorption is not disturbed."],
  ["🥗", "Balanced Indian meals", "Protein, vegetables and whole grains at regular meals — no special 'thyroid' products needed."],
  ["⚖️", "Energy and weight patterns", "Steady energy and gradual weight goals without crash dieting."],
  ["🩺", "Working with your physician", "Plans that respect your thyroid treatment, blood tests and monitoring."],
  ["📊", "Routine follow-ups", "Regular check-ins to keep your plan relevant as your routine changes."],
  ["🛡️", "Honest scope", "No diet replaces thyroid medication — clear about what nutrition supports and what it doesn't."],
];

const steps: [string, string, string][] = [
  ["01", "Comprehensive assessment", "A discussion of your routine, preferences, medication schedule and current medical care."],
  ["02", "Medication-aware planning", "Meal and chai timing built around your thyroid medication, without disturbing absorption."],
  ["03", "Coordination where helpful", "With your permission, guidance aligned with the direction of your treating physician."],
  ["04", "Ongoing follow-ups", "Regular check-ins to refine the plan as your routine and goals evolve."],
];

const outcomes: [string, string, string][] = [
  ["🍽️", "A sustainable approach", "A steady eating pattern that fits alongside your medical care. Individual results vary."],
  ["🌱", "Better everyday routine", "Practical food habits that are easier to maintain than restrictive rules."],
  ["✅", "Confidence with food", "Clearer answers to daily food questions — no more guesswork between appointments."],
  ["🤝", "Aligned with your care team", "Nutrition guidance that complements your treatment plan, with decisions staying with your physician."],
];

const stories: [string, string, string][] = [
  ["Hypothyroidism & energy", "Over ~6 months", "The medication timing guidance alone was worth it — I had no idea chai mattered. My meals now feel normal again instead of a battle."],
  ["Thyroid & weight changes", "Over ~5 months", "I finally understood how to balance my plate for steady energy. My doctor continues to manage my medication and tests."],
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
          "Personalised nutrition consultation for thyroid conditions — practical Indian meal planning alongside medical care.",
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
    <div className="service-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-[#262262] px-4 py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div>
            <p className="mb-4 font-semibold uppercase tracking-[0.18em] text-green-100 text-sm">Mumbai, Thane & online across India</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Thyroid nutrition support from a dietitian in Mumbai &amp; online</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-green-50/90">Looking for a <strong>dietitian for thyroid</strong> support in Mumbai, Thane or online? Practical eating patterns that work <strong>alongside thyroid medication</strong> — supporting energy, steady meals and gradual weight goals, while your doctor continues to manage your thyroid care.</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50 md:text-xl">Thyroid conditions are medical conditions — no food cures them and no diet replaces medication. Nutrition helps by keeping your eating pattern balanced, timing meals so they don&apos;t interfere with thyroid medication, and supporting gradual weight and energy goals. Blood tests and treatment stay with your doctor.</p>
            <div className="mt-9"><ServiceCtaButtons contactColorClass="text-green-800" /></div>
          </div>
          <aside className="rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm">
            <h2 className="text-2xl font-bold">Important to know</h2>
            <ul className="mt-5 space-y-4 leading-7 text-green-50">
              <li>• No diet replaces thyroid medication or medical monitoring.</li>
              <li>• Medication timing around meals and chai is a key consultation topic.</li>
              <li>• No special &quot;thyroid&quot; products are needed — everyday balanced food works.</li>
              <li>• Supplements are only discussed with your doctor&apos;s advice.</li>
            </ul>
          </aside>
        </div>
      </section>

      <main>
        {/* Section A */}
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="font-semibold text-green-700">Medication-aware food planning</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">A balanced thyroid-friendly eating pattern</h2>
            <p className="mt-5 leading-8 text-slate-700">There is no single &quot;thyroid diet&quot;. The practical approach is the same balanced Indian pattern used broadly, with attention to medication timing and steady meals.</p>
            <p className="mt-4 leading-8 text-slate-700">A consultation helps you build meal timing around your medication routine and answers everyday questions — while your physician remains in charge of your thyroid treatment and monitoring.</p>
          </div>
          <Image src={img1} alt="Dietitian explaining a daily meal-timing plan to a client during a thyroid nutrition consultation" className="h-auto w-full rounded-2xl shadow-lg" />
        </section>

        {/* Section B */}
        <section className="bg-slate-50 px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">What you can discuss in a thyroid consultation</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                ["Medication-friendly timing", "Practical guidance on meal and chai timing around thyroid medication, so absorption is not disturbed."],
                ["Energy and weight patterns", "Balanced Indian meals that support steady energy and gradual weight goals — without crash dieting."],
                ["Working with your doctor", "Questions and notes to take to your physician, so your food plan and medical care stay aligned."],
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
        <ServiceExtraSections
          featuresTitle="What a thyroid consultation includes"
          features={features}
          steps={steps}
          outcomes={outcomes}
          stories={stories}
        />
        <section className="bg-green-50 px-4 py-16 md:py-20">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Everyday thyroid-friendly habits</h2>
              <p className="mt-4 leading-8 text-slate-700">Simple, practical points that fit a normal Indian routine — no special foods, no long shopping lists.</p>
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
        <section className="mx-auto max-w-4xl px-4 py-16 md:py-20">
          <h2 className="text-3xl font-bold text-slate-900">Thyroid nutrition FAQs</h2>
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
            <h2 className="text-3xl font-bold">Talk through your thyroid and food goals</h2>
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
