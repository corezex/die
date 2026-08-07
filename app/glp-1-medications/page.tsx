import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle, Pill, ShieldCheck, Sparkles, Stethoscope, UtensilsCrossed } from "lucide-react";
import heroImage from "@/public/image/glp1-hub-hero.jpg";
import { glpMedications } from "./medicationData";

const siteUrl = "https://dietfiniti.com";

const faqs = [
  {
    question: "Can DietFiniti prescribe or sell GLP-1 medication?",
    answer:
      "No. DietFiniti does not prescribe, dispense or sell GLP-1 medication. These pages are for dietitian-led nutrition support for people who are already taking medications such as Ozempic, Wegovy, Rybelsus, Mounjaro, Zepbound, Saxenda, Victoza, Trulicity, Byetta, Bydureon BCise, Adlyxin or Foundayo under medical supervision.",
  },
  {
    question: "Why do people on GLP-1 medication still need a dietitian?",
    answer:
      "Medication can change appetite, but it does not automatically create a balanced eating routine. Many people still need help with protein intake, nausea-friendly meals, constipation support, hydration, social eating, meal timing and building sustainable habits.",
  },
  {
    question: "What are common food challenges on Ozempic, Wegovy or Mounjaro?",
    answer:
      "Common questions include what to eat when appetite is low, how to stop skipping meals, how to eat enough protein, what to do for reflux or constipation and how to make normal home food feel comfortable again.",
  },
  {
    question: "Do you only help people in Mumbai?",
    answer:
      "DietFiniti supports clients in Mumbai and Thane as well as people who prefer online consultations across India.",
  },
  {
    question: "Is there one best GLP-1 diet plan for everyone?",
    answer:
      "No. The right plan depends on the medication, why it was prescribed, whether diabetes is part of the picture, how strong the side effects are, your food preferences, work schedule and the support you need from your treating clinician.",
  },
];

export const metadata: Metadata = {
  title: "GLP-1 Diet Plan & Nutrition Support",
  description:
    "Dietitian-led GLP-1 medication nutrition support for people taking Ozempic, Wegovy, Rybelsus, Mounjaro, Zepbound and more in Mumbai, Thane and online across India.",
  alternates: { canonical: "/glp-1-medications" },
  openGraph: {
    title: "GLP-1 Medication Nutrition Support | DietFiniti",
    description:
      "Practical dietitian support for people taking GLP-1 medications such as Ozempic, Wegovy, Rybelsus, Mounjaro and Zepbound.",
    url: `${siteUrl}/glp-1-medications`,
    images: [{ url: heroImage.src, alt: "DietFiniti nutrition support for people taking GLP-1 medication" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GLP-1 Medication Nutrition Support | DietFiniti",
    description:
      "Dietitian-led nutrition support for people taking GLP-1 medication in Mumbai, Thane and online across India.",
    images: [heroImage.src],
  },
};

function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}/glp-1-medications#webpage`,
        url: `${siteUrl}/glp-1-medications`,
        name: "GLP-1 Medication Diet Plan and Nutrition Support",
        description:
          "Dietitian-led nutrition support for people taking GLP-1 medication such as Ozempic, Wegovy, Rybelsus, Mounjaro and Zepbound.",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@type": "Thing", name: "GLP-1 medication nutrition support" },
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/glp-1-medications#service`,
        name: "Nutrition support for people taking GLP-1 medication",
        serviceType: "Dietitian consultation",
        url: `${siteUrl}/glp-1-medications`,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: [
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Thane" },
          { "@type": "Country", name: "India" },
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: glpMedications.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteUrl}/glp-1-medications/${item.slug}`,
          name: item.brand,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "GLP-1 Medications", item: `${siteUrl}/glp-1-medications` },
        ],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function GlpMedicationHubPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <StructuredData />

      <section className="relative isolate bg-[#f4fbf5] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[40%] bg-[#e2f3e5] lg:block" />
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.05fr_.95fr] md:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-green-800 shadow-sm">
              <Pill className="h-4 w-4" /> Mumbai, Thane & online across India
            </div>
            <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-[#262262] sm:text-4xl lg:text-5xl">
              GLP-1 medication diet plan and nutrition support
            </h1>
            <div className="mt-5 rounded-2xl border border-green-200 bg-white p-4 text-sm leading-6 text-slate-800 shadow-sm sm:text-base">
              <strong>Quick answer:</strong> DietFiniti helps people who are already taking GLP-1 medications such as Ozempic, Wegovy, Rybelsus, Mounjaro and Zepbound make everyday food routines more practical. We do <strong>not</strong> sell or prescribe these medications. We provide dietitian support for protein intake, nausea-friendly meals, hydration, constipation support, meal timing and realistic Indian food choices.
            </div>
            <p className="mt-5 text-base leading-7 text-slate-700 sm:text-lg">
              If eating feels different after starting GLP-1 medication, these pages are here to help with the day-to-day questions: what to eat, how to keep meals balanced, and how to make the routine feel more comfortable and sustainable.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ["Protein", "Keep protein visible even when appetite drops."],
                ["Comfort", "Build gentler meals for nausea, reflux or fullness."],
                ["Hydration", "Prevent dehydration and constipation from low intake."],
                ["Indian food", "Adapt real home meals instead of starting over."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
                  <p className="text-sm font-bold uppercase tracking-wide text-green-700">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Choose the medication page that matches your prescription and use it as a practical starting point before your consultation.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-bold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700">
                <Stethoscope className="h-5 w-5" /> Speak to DietFiniti
              </Link>
              <a href="https://wa.me/919321057899" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#262262] bg-white px-5 py-3 font-bold text-[#262262] transition hover:bg-[#262262] hover:text-white">
                <MessageCircle className="h-5 w-5" /> WhatsApp your question
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-lg">
            <div className="rounded-[1.75rem] bg-white p-3 shadow-xl ring-1 ring-green-100">
              <Image src={heroImage} alt="Dietitian nutrition support for people taking GLP-1 medication" className="aspect-[5/4] w-full rounded-[1.35rem] object-cover" priority />
            </div>
            <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-green-100">
              <p className="text-sm text-slate-500">Focus areas</p>
              <p className="mt-1 font-bold text-[#262262]">Protein • Hydration • Meal structure • Comfort</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">What people usually need help with</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#262262] sm:text-4xl">
                When GLP-1 medication changes how eating feels
              </h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900">Common day-to-day problems</h3>
                  <p className="mt-3 leading-7 text-slate-700">
                    Many people feel too full for regular meals, forget protein, struggle with constipation or reflux, or become unsure how to eat normally at work, while travelling or at family events.
                  </p>
                </article>
                <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900">Where a dietitian can help</h3>
                  <p className="mt-3 leading-7 text-slate-700">
                    The goal is to make meals simpler and more nourishing with realistic Indian food, better hydration, easier side-effect management and a routine that still works in real life.
                  </p>
                </article>
              </div>
            </div>
            <aside className="rounded-3xl border border-green-100 bg-green-50 p-7">
              <h3 className="text-xl font-bold text-slate-900">Support topics covered on these pages</h3>
              <ul className="mt-5 grid gap-3 text-slate-700 sm:grid-cols-2">
                {[
                  "What to eat when appetite is low",
                  "Protein planning",
                  "Hydration and constipation support",
                  "Nausea and reflux-friendly meals",
                  "Meal timing around medication routines",
                  "Vegetarian and Indian home-food options",
                ].map((topic) => (
                  <li key={topic} className="rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-green-100">
                    {topic}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">Medication pages</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#262262] sm:text-4xl">Explore the GLP-1 medication page that matches your prescription</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              These pages are written for people who are already using the medication and want food guidance that is more practical than generic “GLP-1 rules”.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {glpMedications.map((item) => (
              <article key={item.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{item.family}</p>
                    <h3 className="mt-1 text-2xl font-bold text-[#262262]">{item.brand}</h3>
                  </div>
                  <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-bold text-green-800">
                    {item.route}
                  </span>
                </div>
                <p className="mt-4 leading-7 text-slate-600">{item.metaDescription}</p>
                <div className="mt-5 grid gap-3">
                  <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                    <strong>Best for:</strong> {item.usedFor}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.nutritionPriorities.slice(0, 2).map((priority) => (
                      <span key={priority.title} className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-800">
                        {priority.title}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href={`/glp-1-medications/${item.slug}`} className="mt-6 inline-flex items-center gap-2 font-bold text-green-700 transition hover:gap-3">
                  Explore {item.brand} support <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">How DietFiniti helps</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#262262] sm:text-4xl">What dietitian support often looks like while taking GLP-1 medication</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Protein planning",
                text: "Reduced appetite can make protein disappear from the day unless it is planned deliberately.",
              },
              {
                icon: UtensilsCrossed,
                title: "Smaller, more useful meals",
                text: "Many people need lighter meals that still feel nourishing instead of unintentionally living on very little food.",
              },
              {
                icon: Sparkles,
                title: "Side-effect-friendly food choices",
                text: "Nausea, reflux, constipation or strong fullness often call for practical meal adjustments rather than strict detox plans.",
              },
              {
                icon: CheckCircle2,
                title: "Real-life consistency",
                text: "The plan has to work on busy workdays, family days, travel days and low-appetite days—not only in theory.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-3xl border border-green-100 bg-green-50 p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-green-700 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-[#262262]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#262262] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-300">Before you book</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Questions people usually ask first</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "What should I eat on GLP-1 medication?",
                text: "Most people need balanced meals with enough protein, enough fluid and simpler cooking methods on low-appetite days—not a universal banned-food list.",
              },
              {
                title: "Do I still need a meal plan if medication reduces hunger?",
                text: "Usually yes. Hunger changes do not automatically protect muscle, improve food quality or make family and work meals easier to manage.",
              },
              {
                title: "Can I still eat Indian food?",
                text: "Yes. In most cases, Indian home food can be adapted around portion fit, meal composition and digestive comfort far more realistically than imported diet trends.",
              },
            ].map((answer) => (
              <article key={answer.title} className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold">{answer.title}</h3>
                <p className="mt-3 leading-7 text-slate-100">{answer.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-[#262262] sm:text-4xl">GLP-1 medication nutrition support FAQs</h2>
          <div className="mt-8 divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-slate-900">
                  {faq.question}
                  <span className="float-right text-green-700 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-7 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-green-100 bg-white p-8 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">Next step</p>
            <h2 className="mt-2 text-3xl font-bold text-[#262262]">Need personalised support while taking GLP-1 medication?</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-700">
              Whether you are on Ozempic, Wegovy, Rybelsus, Mounjaro, Zepbound or another GLP-1 medication, DietFiniti can help you make the eating routine more comfortable and practical while your prescriber stays in charge of medication decisions.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-green-600 px-6 py-3.5 font-bold text-white transition hover:bg-green-700">
              Book a consultation
            </Link>
            <Link href="/online-dietitian-consultation" className="inline-flex items-center justify-center rounded-xl border border-green-700 px-6 py-3.5 font-bold text-green-800 transition hover:bg-green-50">
              Explore online support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
