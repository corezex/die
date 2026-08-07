import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { ServiceCtaButtons } from "@/app/components/ServiceCtaButtons";
import { ServiceExtraSections } from "@/app/components/ServiceExtraSections";
import img1 from "@/public/image/gut-health-nutritionimg1.jpg";
import img2 from "@/public/image/gut-health-nutritionimg2.jpg";

const SITE = "https://dietfiniti.com";

export const metadata: Metadata = {
  title: "Gut Health & IBS Dietitian in Mumbai",
  description:
    "Gut health and IBS nutrition support from a dietitian in Mumbai, Thane and online. Eating patterns for bloating and IBS symptoms, after a medical diagnosis.",
  alternates: { canonical: "/services/gut-health-nutrition" },
  openGraph: {
    title: "Gut Health & IBS Nutrition Support | DietFiniti",
    description:
      "Eating patterns for bloating and IBS symptoms — regular meals, trigger awareness and structured food-diary work.",
    type: "website",
    url: `${SITE}/services/gut-health-nutrition`,
    siteName: "DietFiniti",
    images: [{ url: `${SITE}/image/gut-health-nutritionimg1.jpg`, alt: "Dietitian reviewing a food and symptom diary with a client during a gut health consultation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gut Health & IBS Nutrition Support | DietFiniti",
    description: "Practical eating patterns for bloating and IBS symptoms, after a proper medical diagnosis.",
    images: [`${SITE}/image/gut-health-nutritionimg1.jpg`],
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

const features: [string, string, string][] = [
  ["📓", "Structured food-symptom diary", "Capture when bloating, pain or bowel changes happen and which foods seem connected."],
  ["🌾", "A fibre plan that suits you", "The right type and amount of fibre for your symptoms — often soluble fibre first, adjusted gradually."],
  ["🔄", "Low-FODMAP, done properly", "A guided elimination and reintroduction phase if persistent bloating warrants it — not a permanent diet."],
  ["🍽️", "Regular meal patterns", "Smaller, regular meals at similar times to settle digestion."],
  ["🩺", "Working with your clinician", "IBS is diagnosed by a doctor first; food work then sits alongside that diagnosis."],
  ["🛡️", "Honest scope", "There is no cure, but symptoms can often be managed well — no miracle promises."],
];

const steps: [string, string, string][] = [
  ["01", "Comprehensive assessment", "A discussion of your symptom pattern, routine, preferences and any existing diagnosis."],
  ["02", "A layered food plan", "Regular meals, the right fibre and a structured diary — personalised to your symptoms."],
  ["03", "Guided elimination", "A short, supervised low-FODMAP phase if persistent bloating warrants it — then careful reintroduction."],
  ["04", "Ongoing follow-ups", "Regular check-ins to refine the plan as you learn your personal triggers."],
];

const outcomes: [string, string, string][] = [
  ["🍽️", "A sustainable approach", "A steady eating pattern that fits alongside your medical care. Individual results vary."],
  ["🌱", "Better everyday routine", "Practical food habits that are easier to maintain than restrictive rules."],
  ["✅", "Confidence with food", "Clearer answers to daily food questions — no more guesswork between appointments."],
  ["🤝", "Aligned with your care team", "Nutrition guidance that complements your diagnosis and treatment, with decisions staying with your clinician."],
];

const stories: [string, string, string][] = [
  ["IBS & bloating", "Over ~6 months", "The food-symptom diary was a revelation — I finally saw my triggers. The low-FODMAP phase was short and guided, not a permanent diet."],
  ["IBS support", "Over ~4 months", "Regular meals and the right fibre for me made bloating manageable. It's not cured, but I have a way of eating I can live with."],
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
          "Personalised nutrition consultation for gut health and IBS — structured food-diary work and symptom management.",
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
    <div className="service-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-[#262262] px-4 py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div>
            <p className="mb-4 font-semibold uppercase tracking-[0.18em] text-green-100 text-sm">Mumbai, Thane & online across India</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Gut health &amp; IBS nutrition support from a dietitian in Mumbai &amp; online</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-green-50/90">Eating patterns for bloating and IBS symptoms — regular meals, trigger awareness and structured food-diary work, always after a proper medical diagnosis.</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50 md:text-xl">IBS is a medical diagnosis made by a doctor after other conditions are ruled out. Once diagnosed, most people improve with a layered food approach: regular small meals, soluble fibre, a food-symptom diary to find personal triggers, and — for persistent bloating — a short low-FODMAP phase done with a dietitian.</p>
            <div className="mt-9"><ServiceCtaButtons contactColorClass="text-green-800" /></div>
          </div>
          <aside className="rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm">
            <h2 className="text-2xl font-bold">Important to know</h2>
            <ul className="mt-5 space-y-4 leading-7 text-green-50">
              <li>• IBS is diagnosed by a doctor after other conditions are ruled out.</li>
              <li>• Low-FODMAP is a temporary, guided phase — not a permanent diet.</li>
              <li>• There is no cure, but symptoms can often be managed well.</li>
              <li>• For new or urgent symptoms, contact your doctor first.</li>
            </ul>
          </aside>
        </div>
      </section>

      <main>
        {/* Section A */}
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="font-semibold text-green-700">Structured, personalised support</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">First-line gut-friendly habits</h2>
            <p className="mt-5 leading-8 text-slate-700">These basics help most people with IBS regardless of their type, and they are the foundation before any special diet.</p>
            <p className="mt-4 leading-8 text-slate-700">A consultation turns them into a personal plan — with a structured food diary and the right type and amount of fibre for your symptoms.</p>
          </div>
          <Image src={img1} alt="Dietitian reviewing a food and symptom diary with a client during a gut health consultation" className="h-auto w-full rounded-2xl shadow-lg" />
        </section>

        {/* Section B */}
        <section className="bg-slate-50 px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">What you can discuss in a gut health consultation</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                ["Your symptom pattern", "When bloating, pain or bowel changes happen, and which foods seem connected — captured in a structured diary."],
                ["A fibre plan that suits you", "The right type and amount of fibre for your symptoms — often soluble fibre first, adjusted gradually."],
                ["Low-FODMAP, done properly", "A guided elimination and reintroduction phase if persistent bloating warrants it — not a permanent diet."],
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

        {/* Section A2 — second image */}
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-20">
          <Image src={img2} alt="Dietitian's desk with a food-symptom diary and probiotic foods for gut health planning" className="order-2 h-auto w-full rounded-2xl shadow-lg md:order-1" />
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Gut-friendly habits, at a glance</h2>
            <p className="mt-5 leading-8 text-slate-700">Simple daily choices that support most people with IBS, regardless of their type.</p>
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
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-lg bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800">Contact DietFiniti</Link>
              <Link href="/online-dietitian-consultation" className="rounded-lg border border-green-700 px-5 py-3 font-semibold text-green-800 hover:bg-green-50">Online consultations</Link>
            </div>
          </div>
        </section>

        {/* Section C — blog guide */}
        <ServiceExtraSections
          featuresTitle="What a gut health consultation includes"
          features={features}
          steps={steps}
          outcomes={outcomes}
          stories={stories}
        />
        <section className="bg-green-50 px-4 py-16 md:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-2xl border border-green-200 bg-white p-6 md:p-8">
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

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-4 py-16 md:py-20">
          <h2 className="text-3xl font-bold text-slate-900">Gut health nutrition FAQs</h2>
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
            <h2 className="text-3xl font-bold">Talk through your gut-health goals</h2>
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
