import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MessageCircle, Pill, ShieldAlert, Stethoscope } from "lucide-react";
import { getMedicationBySlug, glpMedicationSlugs, glpMedications } from "../medicationData";

const siteUrl = "https://dietfiniti.com";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return glpMedicationSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const medication = getMedicationBySlug(slug);

  if (!medication) {
    return {};
  }

  return {
    title: medication.metaTitle,
    description: medication.metaDescription,
    alternates: { canonical: `/glp-1-medications/${medication.slug}` },
    openGraph: {
      title: `${medication.heroTitle} | DietFiniti`,
      description: medication.metaDescription,
      url: `${siteUrl}/glp-1-medications/${medication.slug}`,
      images: [{ url: medication.heroImage.src, alt: `${medication.brand} diet plan and nutrition support` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${medication.heroTitle} | DietFiniti`,
      description: medication.metaDescription,
      images: [medication.heroImage.src],
    },
  };
}

function MedicationStructuredData({ slug }: { slug: string }) {
  const medication = getMedicationBySlug(slug);
  if (!medication) return null;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/glp-1-medications/${medication.slug}#webpage`,
        url: `${siteUrl}/glp-1-medications/${medication.slug}`,
        name: medication.metaTitle,
        description: medication.metaDescription,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: [
          { "@type": "Drug", name: medication.brand, nonProprietaryName: medication.generic },
          { "@type": "Thing", name: medication.primaryKeyword },
        ],
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/glp-1-medications/${medication.slug}#service`,
        name: `${medication.brand} nutrition support consultation`,
        serviceType: "Dietitian consultation",
        description: medication.metaDescription,
        url: `${siteUrl}/glp-1-medications/${medication.slug}`,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: [
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Thane" },
          { "@type": "Country", name: "India" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: medication.faqs.map((faq) => ({
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
          { "@type": "ListItem", position: 3, name: medication.brand, item: `${siteUrl}/glp-1-medications/${medication.slug}` },
        ],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default async function MedicationPage({ params }: PageProps) {
  const { slug } = await params;
  const medication = getMedicationBySlug(slug);

  if (!medication) {
    notFound();
  }

  const relatedPages = glpMedications
    .filter((item) => item.slug !== medication.slug)
    .slice(0, 3);

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <MedicationStructuredData slug={slug} />

      <section className={`${medication.accent.panel} px-4 py-12 sm:px-6 lg:px-8 lg:py-16`}>
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.05fr_.95fr] md:items-start">
          <div>
            <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-sm ${medication.accent.badge}`}>
              <Pill className="h-4 w-4" /> {medication.route} • Mumbai, Thane & online across India
            </div>
            <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{medication.heroTitle}</h1>
            <div className="mt-5 rounded-2xl border border-white/20 bg-white/10 p-4 text-sm leading-6 text-slate-100 backdrop-blur-sm sm:text-base">
              <strong>Quick answer:</strong> {medication.quickAnswer}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Protein",
                "Hydration",
                medication.route.includes("oral") ? "Meal timing" : "Portion comfort",
                "Indian food routines",
              ].map((label) => (
                <span key={label} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-slate-100">
                  {label}
                </span>
              ))}
            </div>
            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              {medication.intro.map((paragraph, index) => (
                <article key={paragraph} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-200">{index === 0 ? "What often changes" : "Where support helps"}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-100/95 sm:text-base">{paragraph}</p>
                </article>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold text-white transition ${medication.accent.button}`}>
                <Stethoscope className="h-5 w-5" /> Book nutrition support
              </Link>
              <a href="https://wa.me/919321057899" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-bold text-white transition hover:bg-white/20">
                <MessageCircle className="h-5 w-5" /> WhatsApp DietFiniti
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-lg">
            <div className="rounded-[1.75rem] bg-white/10 p-3 shadow-xl ring-1 ring-white/15 backdrop-blur-sm">
              <Image src={medication.heroImage} alt={`${medication.brand} nutrition support and diet plan guidance`} className="aspect-[5/4] w-full rounded-[1.35rem] object-cover" priority />
            </div>
            <div className="mt-4 rounded-2xl bg-white p-4 text-slate-900 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">Approved use summary</p>
              <p className="mt-1 font-semibold text-[#262262]">{medication.usedFor}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_.95fr] lg:items-start">
            <div>
              <p className={`text-sm font-bold uppercase tracking-[0.2em] ${medication.accent.text}`}>Inside this page</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#262262] sm:text-4xl">
                Planning meals while taking {medication.brand}
              </h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900">Common concerns people have</h3>
                  <p className="mt-3 leading-7 text-slate-700">
                    This guide covers the day-to-day questions people usually have on {medication.brand}: what to eat when appetite drops, how to keep meals balanced, and how to make protein, fluids and digestion easier to manage.
                  </p>
                </article>
                <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900">What you will find here</h3>
                  <p className="mt-3 leading-7 text-slate-700">
                    You will find food priorities, practical meal ideas and guidance on when to contact your prescriber. Medication changes, symptom escalation and dosing decisions still belong with your clinician.
                  </p>
                </article>
              </div>
            </div>
            <aside className={`rounded-3xl border p-7 ${medication.accent.subtle} ${medication.accent.border}`}>
              <h3 className="text-xl font-bold text-slate-900">What DietFiniti does and does not do</h3>
              <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                <li>• We support people who are already taking {medication.brand}.</li>
                <li>• We do not sell or prescribe {medication.brand}.</li>
                <li>• We do not change medication dose, frequency or prescribing decisions.</li>
                <li>• We help with meal structure, protein, hydration, digestion and realistic food habits.</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className={`text-sm font-bold uppercase tracking-[0.2em] ${medication.accent.text}`}>Core nutrition themes</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#262262] sm:text-4xl">
              Food priorities many {medication.brand} users ask about
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {medication.nutritionPriorities.map((item) => (
              <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#262262]">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-xl">
            <Image src={medication.supportImage} alt={`${medication.brand} diet plan with Indian meal guidance`} className="w-full rounded-[1.75rem] object-cover shadow-xl" />
          </div>
          <div>
            <p className={`text-sm font-bold uppercase tracking-[0.2em] ${medication.accent.text}`}>Dietitian support</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#262262] sm:text-4xl">
              How DietFiniti helps people taking {medication.brand}
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {medication.dietitianSupport.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${medication.accent.subtle} px-4 py-16 sm:px-6 lg:px-8 lg:py-20`}>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className={`text-sm font-bold uppercase tracking-[0.2em] ${medication.accent.text}`}>Direct answers</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#262262] sm:text-4xl">
              Quick search answers for {medication.brand} users
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {medication.directAnswers.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/80 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#262262]">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#262262] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-300">Safety and scope</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">When to contact your prescriber instead of trying to fix it with food alone</h2>
            <p className="mt-5 leading-8 text-slate-100">
              Nutrition support is helpful, but it is not a substitute for medical review. If you are taking {medication.brand}, keep medication questions and symptom escalation with your clinician.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <ul className="mt-5 space-y-4 leading-7 text-slate-100">
              {medication.talkToPrescriber.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-[#262262] sm:text-4xl">{medication.brand} nutrition support FAQs</h2>
          <div className="mt-8 divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            {medication.faqs.map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-slate-900">
                  {faq.question}
                  <span className={`float-right transition group-open:rotate-45 ${medication.accent.text}`}>+</span>
                </summary>
                <p className="mt-4 leading-7 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className={`text-sm font-bold uppercase tracking-[0.2em] ${medication.accent.text}`}>Next step</p>
              <h2 className="mt-2 text-3xl font-bold text-[#262262]">{medication.ctaTitle}</h2>
              <p className="mt-4 max-w-3xl leading-8 text-slate-700">{medication.ctaText}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/contact" className={`inline-flex items-center justify-center rounded-xl px-6 py-3.5 font-bold text-white transition ${medication.accent.button}`}>
                Contact DietFiniti
              </Link>
              <Link href="/online-dietitian-consultation" className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3.5 font-bold text-[#262262] transition hover:border-[#262262] hover:bg-slate-50">
                Online consultations
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className={`text-sm font-bold uppercase tracking-[0.2em] ${medication.accent.text}`}>Related pages</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#262262]">Explore other GLP-1 medication pages</h2>
            </div>
            <Link href="/glp-1-medications" className={`hidden items-center gap-2 font-bold ${medication.accent.text} md:inline-flex`}>
              View all medication pages <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedPages.map((item) => (
              <article key={item.slug} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{item.family}</p>
                <h3 className="mt-1 text-2xl font-bold text-[#262262]">{item.brand}</h3>
                <p className="mt-3 leading-7 text-slate-700">{item.metaDescription}</p>
                <Link href={`/glp-1-medications/${item.slug}`} className={`mt-5 inline-flex items-center gap-2 font-bold ${medication.accent.text}`}>
                  Explore {item.brand} <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
