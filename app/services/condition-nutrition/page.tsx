import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";
import { ServiceCtaButtons } from "@/app/components/ServiceCtaButtons";
import img1 from "@/public/image/condition-nutritionimg1.jpg";

const SITE = "https://dietfiniti.com";

export const metadata: Metadata = {
  title: "Dietitian for PCOS, Thyroid, Diabetes & Gut",
  description:
    "Condition-specific nutrition support for PCOS, thyroid, diabetes, fatty liver and gut — in Mumbai, Thane and online, alongside your medical care.",
  alternates: { canonical: "/services/condition-nutrition" },
  openGraph: {
    title: "Condition-Specific Nutrition Support | DietFiniti",
    description:
      "Nutrition guidance for PCOS, thyroid, diabetes, fatty liver and gut health — designed to complement your doctor's care.",
    type: "website",
    url: `${SITE}/services/condition-nutrition`,
    siteName: "DietFiniti",
    images: [{ url: `${SITE}/image/condition-nutritionimg1.jpg`, alt: "Dietitian reviewing a meal-planning notebook with a client during a consultation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Condition-Specific Nutrition Support | DietFiniti",
    description: "Nutrition guidance that complements—not replaces—medical care.",
    images: [`${SITE}/image/condition-nutritionimg1.jpg`],
  },
};

const conditions = [
  {
    name: "PCOS Nutrition Support",
    href: "/services/pcos-nutrition",
    text: "Practical eating patterns for hormonal health, regular meals and gradual weight goals.",
    blog: "/blog/pcos-nutrition-support",
  },
  {
    name: "Thyroid Nutrition Support",
    href: "/services/thyroid-nutrition",
    text: "Balanced meals that work alongside thyroid medication and help with energy and weight changes.",
    blog: "/blog/thyroid-nutrition-support",
  },
  {
    name: "Diabetes Nutrition Support",
    href: "/services/diabetes-nutrition",
    text: "Steady blood-sugar-friendly Indian meal planning that complements your diabetes care.",
    blog: "/blog/diabetes-meal-planning",
  },
  {
    name: "Fatty Liver Nutrition Support",
    href: "/services/fatty-liver-nutrition",
    text: "Weight and food-pattern support for liver health, alongside your doctor's monitoring.",
    blog: "/blog/fatty-liver-diet",
  },
  {
    name: "Gut Health & IBS Nutrition",
    href: "/services/gut-health-nutrition",
    text: "Eating patterns for bloating and IBS symptoms, including structured food-diary work.",
    blog: "/blog/ibs-diet-guide",
  },
  {
    name: "Medical Weight-Management Support",
    href: "/services/medical-weight-loss",
    text: "Weight-management nutrition when a health condition is part of your goals — planned alongside your clinician's care.",
    blog: "",
  },
];

const faqs = [
  [
    "Can nutrition support help with PCOS, thyroid, diabetes or gut conditions?",
    "A consultation can explore practical food patterns around your diagnosis, routine and preferences. Nutrition guidance supports—it does not replace—medical diagnosis, treatment or medication.",
  ],
  [
    "Will DietFiniti change my medication or interpret my lab reports?",
    "No. Medication decisions and lab interpretation stay with your treating clinician. DietFiniti can help you plan meals that work alongside the medical care you already receive.",
  ],
  [
    "How is this different from a generic diet chart?",
    "Plans are built around your routine, food preferences, relevant health context and questions for your doctor — not a copied chart. The aim is practical direction you can actually follow.",
  ],
  [
    "When should I see a doctor instead?",
    "For new or worsening symptoms, unexplained weight change, or any urgent concern, contact your doctor first. Nutrition support does not diagnose or treat medical conditions.",
  ],
];

export default function ConditionNutritionPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE}/services/condition-nutrition#service`,
        name: "Condition-Specific Nutrition Support",
        description:
          "Personalised nutrition consultation for PCOS, thyroid, diabetes, fatty liver and gut health, designed to complement medical care.",
        serviceType: "Nutrition consultation",
        url: `${SITE}/services/condition-nutrition`,
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
          { "@type": "ListItem", position: 3, name: "Condition-Specific Nutrition", item: `${SITE}/services/condition-nutrition` },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#262262] px-4 py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div>
            <p className="mb-4 font-semibold uppercase tracking-[0.18em] text-green-100 text-sm">Mumbai, Thane & online across India</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Condition-specific nutrition support that works with your medical care</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-green-50/90"><strong>Nutrition support for PCOS, thyroid, diabetes, fatty liver and gut health</strong> — built around your routine and everyday Indian food, and designed to complement—not replace—the care you receive from your doctor.</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50 md:text-xl">If you live with a condition and have questions about what to eat, a consultation can turn those questions into a practical, personalised food pattern — while your treating clinician continues to manage your medical care.</p>
            <div className="mt-9"><ServiceCtaButtons contactColorClass="text-green-800" /></div>
          </div>
          <aside className="rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm">
            <h2 className="text-2xl font-bold">Important to know</h2>
            <ul className="mt-5 space-y-4 leading-7 text-green-50">
              <li>• This service is nutrition support, not medical diagnosis or treatment.</li>
              <li>• Continue your doctor&apos;s treatment, medication and monitoring.</li>
              <li>• Bring your prescribed dietary guidance to the consultation.</li>
              <li>• For urgent symptoms, contact your doctor or emergency services.</li>
            </ul>
          </aside>
        </div>
      </section>

      <main>
        {/* Section A */}
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="font-semibold text-green-700">A careful, coordinated approach</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Nutrition guidance should fit the wider care you receive</h2>
            <p className="mt-5 leading-8 text-slate-700">A condition, medication, dietary restriction or changing health situation can make generic advice inappropriate. A consultation gives you space to discuss the food and routine questions that matter to you, while keeping medical decisions with the clinician responsible for your care.</p>
            <p className="mt-4 leading-8 text-slate-700">DietFiniti can support practical meal planning and nutrition habits. If specialist therapeutic nutrition or medical monitoring is required, the team can help you understand when to seek appropriate clinical advice.</p>
          </div>
          <Image src={img1} alt="Dietitian reviewing a meal-planning notebook with a client during a condition-specific nutrition consultation" className="h-auto w-full rounded-2xl shadow-lg" />
        </section>

        {/* Section B — conditions grid */}
        <section className="bg-slate-50 px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Support for specific conditions</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Each page below explains what nutrition support can realistically involve. Choose your condition to learn more, then book a consultation to discuss your own situation.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {conditions.map((c) => (
                <article key={c.href} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-xl font-bold text-slate-900">
                    <Link href={c.href} className="transition hover:text-green-700">{c.name}</Link>
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">{c.text}</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm">
                    <Link href={c.href} className="font-semibold text-green-700 hover:underline">
                      Service page <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
                    </Link>
                    {c.blog && (
                      <Link href={c.blog} className="font-semibold text-slate-500 hover:text-green-700 hover:underline">
                        Read the guide <BookOpen className="inline h-4 w-4" aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </article>
              ))}
              <article className="rounded-xl border border-dashed border-green-300 bg-green-50 p-6">
                <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900">
                  <HeartPulse className="h-5 w-5 text-green-700" aria-hidden="true" /> Not sure where to start?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Book a consultation and the team can discuss which approach fits your health history, routine and goals.
                </p>
                <Link href="/contact" className="mt-4 inline-flex items-center gap-2 font-semibold text-green-700 hover:underline">
                  Contact DietFiniti <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* Section C — how it works */}
        <section className="bg-green-50 px-4 py-16 md:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">How condition-specific support works</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                ["Discuss your context", "Share your diagnosis, routine, medications and questions for your doctor. You are not asked to stop or change any treatment."],
                ["Build a practical food pattern", "Receive meal-planning direction built around Indian food, your schedule and what you can actually follow."],
                ["Review with your care team", "Use follow-ups to refine the plan, and keep your treating clinician informed so nutrition and medical care stay aligned."],
              ].map(([t, d]) => (
                <article key={t} className="rounded-xl bg-white p-6 ring-1 ring-green-100">
                  <Stethoscope className="h-6 w-6 text-green-700" aria-hidden="true" />
                  <h3 className="mt-3 text-lg font-bold text-slate-900">{t}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{d}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-green-200 bg-white p-5">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-green-700" aria-hidden="true" />
              <p className="text-sm leading-6 text-slate-600">
                <strong>Important:</strong> DietFiniti provides nutrition education and personalised dietary guidance. It
                does not diagnose, treat, cure or prevent any disease, and does not replace medical care. Continue to
                follow your doctor&apos;s treatment, and do not start, stop or alter medication without your clinician.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-4 py-16 md:py-20">
          <h2 className="text-3xl font-bold text-slate-900">Condition-specific nutrition FAQs</h2>
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
            <h2 className="text-3xl font-bold">Talk through your health and food goals</h2>
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
