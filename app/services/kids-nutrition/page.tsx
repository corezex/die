import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, CheckCircle2 } from "lucide-react";
import { ServiceCtaButtons } from "@/app/components/ServiceCtaButtons";
import img1 from "@/public/image/kids-nutritionimg1.jpg";

const SITE = "https://dietfiniti.com";

export const metadata: Metadata = {
  title: "Kids Nutrition Dietitian in Mumbai & Online",
  description:
    "Kids and child nutrition support from a dietitian in Mumbai, Thane and online across India. Fussy eating, lunch boxes, teen nutrition and family meal planning.",
  alternates: { canonical: "/services/kids-nutrition" },
  openGraph: {
    title: "Kids & Child Nutrition Support | DietFiniti",
    description:
      "Fussy eating, lunch boxes, teen nutrition and family meal planning — personalised family support.",
    type: "website",
    url: `${SITE}/services/kids-nutrition`,
    siteName: "DietFiniti",
    images: [{ url: `${SITE}/image/kids-nutritionimg1.jpg`, alt: "Dietitian showing a parent a kids lunch box and food chart in a family-friendly clinic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kids & Child Nutrition Support | DietFiniti",
    description: "Practical, pressure-free family nutrition support for kids and teens.",
    images: [`${SITE}/image/kids-nutritionimg1.jpg`],
  },
};

const faqs = [
  [
    "How can a dietitian help with a fussy eater?",
    "Fussy eating is developmentally normal for many toddlers. A consultation can help with structured, pressure-free ways to offer foods — repeated exposure, family meals and the division of responsibility — and flag when professional feeding help is needed.",
  ],
  [
    "My child only eats a few foods. Should I worry?",
    "Short phases of narrow eating are common. If your child is growing well and gaining weight, the approach is usually structured exposure, not panic. If growth is slow or the range is very restricted, a paediatrician and dietitian together can help.",
  ],
  [
    "Do you put children on diets?",
    "No. Structured weight-loss diets are not appropriate for growing children. If weight is a concern, the approach is family-wide balanced eating, activity and gentle habits — never singling out or commenting on a child's body.",
  ],
  [
    "Can you help with teen nutrition?",
    "Yes — iron, calcium, protein and study-energy are common teen topics. Guidance is tailored to growth, activity and family preferences.",
  ],
];

export default function KidsNutritionPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE}/services/kids-nutrition#service`,
        name: "Kids & Child Nutrition Support",
        description:
          "Personalised family nutrition consultation for children and teens — fussy eating, lunch boxes and family meals.",
        serviceType: "Nutrition consultation",
        url: `${SITE}/services/kids-nutrition`,
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
          { "@type": "ListItem", position: 3, name: "Kids & Child Nutrition", item: `${SITE}/services/kids-nutrition` },
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
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Kids &amp; child nutrition support from a dietitian in Mumbai &amp; online</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-green-50/90">Practical, pressure-free support for families — fussy eating, lunch boxes, teen nutrition and family meals that actually work.</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50 md:text-xl">Children&apos;s eating habits form at the family table. The practical framework is simple: parents decide what, when and where food is offered — children decide how much. Fussy phases are normal; structured, pressure-free exposure and family meals usually resolve them.</p>
            <div className="mt-9"><ServiceCtaButtons contactColorClass="text-green-800" /></div>
          </div>
          <aside className="rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm">
            <h2 className="text-2xl font-bold">Important to know</h2>
            <ul className="mt-5 space-y-4 leading-7 text-green-50">
              <li>• Children are never put on structured weight-loss diets.</li>
              <li>• Growth and weight concerns are handled gently, with a paediatrician where needed.</li>
              <li>• The approach is family-wide — never singling out a child&apos;s body.</li>
              <li>• Persistent feeding difficulties are reviewed with professional feeding help.</li>
            </ul>
          </aside>
        </div>
      </section>

      <main>
        {/* Section A */}
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="font-semibold text-green-700">The family-table approach</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Habits form at the family table</h2>
            <p className="mt-5 leading-8 text-slate-700">Research consistently shows children eat better when meals are regular, shared and pressure-free. The goal is habits, not perfection.</p>
            <p className="mt-4 leading-8 text-slate-700">A consultation gives your family a clear, calm plan — built around Indian food, school timings and what is realistic for your kitchen.</p>
          </div>
          <Image src={img1} alt="Dietitian showing a parent a kids lunch box and food chart in a family-friendly clinic" className="h-auto w-full rounded-2xl shadow-lg" />
        </section>

        {/* Section B */}
        <section className="bg-slate-50 px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">How we can help your family</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                ["Fussy eating & food refusal", "Repeated-exposure strategies, the division of responsibility, and calm mealtime structure — no pressure or battles."],
                ["Lunch boxes & family meals", "Practical tiffin and family-meal ideas children actually eat, built around Indian food and busy schedules."],
                ["Teen nutrition", "Iron, calcium, protein and study-energy for growing teens — with a positive, non-dieting approach."],
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
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">The family-table approach, at a glance</h2>
              <p className="mt-4 leading-8 text-slate-700">Simple, evidence-backed habits that take the pressure off both parents and children.</p>
              <ul className="mt-5 space-y-3">
                {[
                  "Regular meals and snacks on a schedule",
                  "Parents decide what is served; children decide how much",
                  "Screen-free family meals when possible",
                  "Keep offering vegetables without pressure — familiarity builds acceptance",
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
                <BookOpen className="h-5 w-5 text-green-700" aria-hidden="true" /> Read the guides
              </h3>
              <div className="mt-3 space-y-3">
                <Link href="/blog/kids-healthy-eating-india" className="block font-semibold text-green-700 hover:underline">Healthy Eating for Kids in India</Link>
                <Link href="/blog/fussy-eaters-toddlers" className="block font-semibold text-green-700 hover:underline">Fussy Eaters and Toddlers</Link>
                <Link href="/blog/teen-nutrition-guide" className="block font-semibold text-green-700 hover:underline">Teen Nutrition Guide</Link>
                <Link href="/blog/healthy-lunch-box-ideas" className="block font-semibold text-green-700 hover:underline">Healthy Lunch Box Ideas</Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-4 py-16 md:py-20">
          <h2 className="text-3xl font-bold text-slate-900">Kids nutrition FAQs</h2>
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
            <h2 className="text-3xl font-bold">Talk through your family&apos;s food goals</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-200">
              In Mumbai, Thane or online anywhere in India — start with a consultation that respects your family&apos;s routine.
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
