import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, CheckCircle2 } from "lucide-react";
import { ServiceCtaButtons } from "@/app/components/ServiceCtaButtons";
import { ServiceExtraSections } from "@/app/components/ServiceExtraSections";
import img1 from "@/public/image/corporate-wellnessimg1.jpg";
import img2 from "@/public/image/corporate-wellnessimg2.jpg";

const SITE = "https://dietfiniti.com";

export const metadata: Metadata = {
  title: "Corporate Wellness in Mumbai & Online",
  description:
    "Corporate wellness programs in Mumbai, Thane and online across India. Practical workplace nutrition workshops and webinars for your team.",
  alternates: { canonical: "/services/corporate-wellness" },
  openGraph: {
    title: "Corporate Wellness Programs | DietFiniti",
    description:
      "Practical workplace nutrition workshops, webinars and employee support in Mumbai, Thane and online.",
    type: "website",
    url: `${SITE}/services/corporate-wellness`,
    siteName: "DietFiniti",
    images: [{ url: `${SITE}/image/corporate-wellnessimg1.jpg`, alt: "Dietitian leading a workplace nutrition workshop for a team in a bright office" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Wellness Programs | DietFiniti",
    description: "Practical workplace nutrition workshops and webinars for your team.",
    images: [`${SITE}/image/corporate-wellnessimg1.jpg`],
  },
};

const faqs = [
  [
    "What does a DietFiniti corporate wellness program include?",
    "Practical nutrition workshops and webinars on topics like desk-day eating, meal prep, sugar and weight management — tailored to your team and delivered online or in Mumbai/Thane.",
  ],
  [
    "Can you run programs for remote teams?",
    "Yes. Webinars and online sessions work across India and internationally, so remote and hybrid teams can participate.",
  ],
  [
    "Is this medical advice for employees?",
    "No. Group programs are educational. Employees with specific health conditions are encouraged to consult their own doctor and, where useful, a DietFiniti consultation for personalised guidance.",
  ],
  [
    "How do we get started?",
    "Share your team size, location and goals through the contact page — the team will propose a program outline and options.",
  ],
];

const features: [string, string, string][] = [
  ["🎯", "Tailored programs", "Workshops and webinars shaped around your team size, location and goals."],
  ["💻", "Online for remote teams", "Sessions work across India and internationally for remote and hybrid teams."],
  ["🏢", "In-person in Mumbai & Thane", "On-site workshops available for teams in the Mumbai–Thane region."],
  ["🥗", "Practical, usable content", "Desk-day eating, meal prep, labels and cravings — built around Indian food."],
  ["🛡️", "Educational, not medical", "Group programs are educational; employees with conditions continue with their own doctors."],
  ["📊", "Clear next steps", "A simple outline and options after your first enquiry."],
];

const steps: [string, string, string][] = [
  ["01", "Share your goals", "Tell us team size, location and what you'd like to cover."],
  ["02", "Program outline", "Receive a tailored outline — topics, format and duration."],
  ["03", "Schedule & deliver", "Sessions delivered online or in person at a time that suits your team."],
  ["04", "Feedback & follow-up", "Practical takeaways and optional follow-up sessions."],
];

const outcomes: [string, string, string][] = [
  ["👥", "Engaged teams", "Sessions people actually attend and use — not generic wellness content."],
  ["🥗", "Practical skills", "Better snack, meal and label-reading choices in real workdays."],
  ["⚖️", "Sustainable habits", "The anti-crash-diet approach to weight and energy."],
  ["🤝", "A healthier culture", "Small, honest steps your team can keep up after the session."],
];

const stories: [string, string, string][] = [
  ["HR lead, Mumbai startup", "Half-day session", "Our team loved the practical desk-day session — no fad-diet noise, just usable food guidance for busy schedules."],
  ["People ops, remote-first company", "Webinar series", "The webinars worked well for our hybrid team — clear, honest content that people still reference months later."],
];

export default function CorporateWellnessPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE}/services/corporate-wellness#service`,
        name: "Corporate Wellness Programs",
        description:
          "Workplace nutrition workshops and webinars for teams — practical, evidence-aware sessions delivered online or in Mumbai and Thane.",
        serviceType: "Corporate wellness program",
        url: `${SITE}/services/corporate-wellness`,
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
          { "@type": "ListItem", position: 3, name: "Corporate Wellness", item: `${SITE}/services/corporate-wellness` },
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
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Corporate wellness programs in Mumbai &amp; online</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-green-50/90">Practical, evidence-aware <strong>workplace nutrition</strong> — workshops and webinars that help your team eat and feel better at work, without fad-diet noise.</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50 md:text-xl">DietFiniti&apos;s corporate wellness programs are practical nutrition sessions — desk-day eating, meal prep, sugar awareness and sustainable weight habits — delivered online or in Mumbai/Thane. Sessions are educational, not medical advice; employees with health conditions continue with their own doctors.</p>
            <div className="mt-9"><ServiceCtaButtons contactColorClass="text-green-800" /></div>
          </div>
          <aside className="rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm">
            <h2 className="text-2xl font-bold">What to expect</h2>
            <ul className="mt-5 space-y-4 leading-7 text-green-50">
              <li>• Practical, jargon-free sessions people actually use.</li>
              <li>• Delivered online for remote and hybrid teams, or in-person in Mumbai and Thane.</li>
              <li>• Educational content — no cure or guarantee claims.</li>
              <li>• Employees with health conditions continue with their own doctors.</li>
            </ul>
          </aside>
        </div>
      </section>

      <main>
        {/* Section A */}
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="font-semibold text-green-700">Programs your team will use</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Nutrition support that fits the workday</h2>
            <p className="mt-5 leading-8 text-slate-700">Every program is tailored to your team&apos;s size, location and goals — from a single lunch-hour webinar to a multi-session series.</p>
            <p className="mt-4 leading-8 text-slate-700">The content is honest and evidence-aware: practical Indian food solutions for busy schedules, without restriction-heavy rules or fad-diet noise.</p>
          </div>
          <Image src={img1} alt="Dietitian leading a workplace nutrition workshop for a team in a bright office" className="h-auto w-full rounded-2xl shadow-lg" />
        </section>

        {/* Section B */}
        <section className="bg-slate-50 px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Program topics your team will use</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                ["Eating well on a workday", "Practical desk-day meals, snack choices and hydration — built around Indian food and busy schedules."],
                ["Sugar, labels and cravings", "How to read food labels, spot hidden sugar, and handle afternoon cravings without restriction."],
                ["Sustainable weight habits", "The plate method, portions and habit-building — the anti-crash-diet approach."],
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
          <Image src={img2} alt="Dietitian presenting an online nutrition webinar from a bright modern office" className="order-2 h-auto w-full rounded-2xl shadow-lg md:order-1" />
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Why companies choose DietFiniti</h2>
            <p className="mt-5 leading-8 text-slate-700">Practical, evidence-aware sessions that employees actually use — not generic wellness content.</p>
            <ul className="mt-5 space-y-3">
              {[
                "Practical, jargon-free sessions people actually use",
                "Delivered online for remote and hybrid teams",
                "In-person workshops available in Mumbai and Thane",
                "Honest, evidence-aware content — no cure or guarantee claims",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-700" aria-hidden="true" />
                  <span className="leading-7 text-slate-700">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-lg bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800">Enquire for your team</Link>
              <Link href="/online-dietitian-consultation" className="rounded-lg border border-green-700 px-5 py-3 font-semibold text-green-800 hover:bg-green-50">Individual support</Link>
            </div>
          </div>
        </section>

        {/* Section C — related content */}
        <ServiceExtraSections
          featuresTitle="What a corporate wellness program includes"
          features={features}
          steps={steps}
          outcomes={outcomes}
          stories={stories}
        />
        <section className="bg-green-50 px-4 py-16 md:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-2xl border border-green-200 bg-white p-6 md:p-8">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <BookOpen className="h-5 w-5 text-green-700" aria-hidden="true" /> Explore related content
              </h3>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <Link href="/blog/healthy-indian-snacks" className="rounded-xl border border-slate-200 p-4 font-semibold text-green-700 transition hover:border-green-300">Healthy Indian Snacks That Actually Fill You Up</Link>
                <Link href="/blog/how-to-read-food-labels-india" className="rounded-xl border border-slate-200 p-4 font-semibold text-green-700 transition hover:border-green-300">How to Read Food Labels in India</Link>
                <Link href="/blog/healthy-weight-loss-india" className="rounded-xl border border-slate-200 p-4 font-semibold text-green-700 transition hover:border-green-300">Healthy Weight Loss on an Indian Diet</Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-4 py-16 md:py-20">
          <h2 className="text-3xl font-bold text-slate-900">Corporate wellness FAQs</h2>
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
            <h2 className="text-3xl font-bold">Bring better nutrition to your team</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-200">
              Share your team size, location and goals — the DietFiniti team will propose a program outline and options.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href="https://wa.me/919321057899" target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-[#25d366] px-6 py-3 font-semibold text-slate-950 hover:bg-[#1fb959]">Message DietFiniti on WhatsApp</a>
              <Link href="/contact" className="inline-block rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10">Enquire for your team</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
