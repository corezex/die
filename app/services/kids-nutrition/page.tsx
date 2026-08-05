import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, BookOpen, ShieldCheck } from "lucide-react";

const SITE = "https://dietfiniti.com";

export const metadata: Metadata = {
  title: "Kids Nutrition Dietitian in Mumbai & Online",
  description:
    "Kids and child nutrition support from a dietitian in Mumbai, Thane and online across India — fussy eating, lunch boxes, teen nutrition and family meal planning.",
  alternates: { canonical: "/services/kids-nutrition" },
  openGraph: {
    title: "Kids & Child Nutrition Support | DietFiniti",
    description: "Fussy eating, lunch boxes, teen nutrition and family meal planning — personalised family support.",
    type: "website",
    url: `${SITE}/services/kids-nutrition`,
    siteName: "DietFiniti",
    images: [{ url: `${SITE}/image/Servicesimg1.jpg`, alt: "Healthy family meals for kids nutrition planning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kids & Child Nutrition | DietFiniti",
    description: "Fussy eating, lunch boxes and family meal planning, personalised.",
    images: [`${SITE}/image/Servicesimg1.jpg`],
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
          "Personalised nutrition consultation for children and families — fussy eating, lunch boxes, teens and family meal planning.",
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
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-gradient-to-br from-green-800 via-green-700 to-emerald-700 px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-100">
            Mumbai, Thane &amp; online across India
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Kids &amp; child nutrition support from a dietitian in Mumbai &amp; online
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-green-50">
            Practical, pressure-free support for families — fussy eating, lunch boxes, teen nutrition and family meals
            that actually work.
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
            Children&apos;s eating habits form at the family table. The practical framework is simple: parents decide
            what, when and where food is offered — children decide how much. Fussy phases are normal; structured,
            pressure-free exposure and family meals usually resolve them. Growth and weight concerns are always handled
            gently and with a paediatrician where needed.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-3xl font-bold text-slate-900">How we can help your family</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ["Fussy eating & food refusal", "Repeated-exposure strategies, the division of responsibility, and calm mealtime structure — no pressure or battles."],
            ["Lunch boxes & family meals", "Practical tiffin and family-meal ideas children actually eat, built around Indian food and busy schedules."],
            ["Teen nutrition", "Iron, calcium, protein and study-energy for growing teens — with a positive, non-dieting approach."],
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
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">The family-table approach</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Research consistently shows children eat better when meals are regular, shared and pressure-free. The
              goal is habits, not perfection.
            </p>
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
              <Link href="/blog/kids-healthy-eating-india" className="block font-semibold text-green-700 hover:underline">
                Healthy Eating for Kids in India
              </Link>
              <Link href="/blog/fussy-eaters-toddlers" className="block font-semibold text-green-700 hover:underline">
                Fussy Eaters and Toddlers
              </Link>
              <Link href="/blog/teen-nutrition-guide" className="block font-semibold text-green-700 hover:underline">
                Teen Nutrition Guide
              </Link>
              <Link href="/blog/healthy-lunch-box-ideas" className="block font-semibold text-green-700 hover:underline">
                Healthy Lunch Box Ideas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-3xl font-bold text-slate-900">Kids nutrition FAQs</h2>
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
          Children&apos;s nutrition guidance supports healthy growth and habits — it does not replace paediatric
          medical care. Growth concerns, persistent poor weight gain or feeding difficulties are reviewed with a
          paediatrician.
        </p>
        <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 font-semibold text-green-800 transition hover:bg-green-50">
          Book a consultation <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
