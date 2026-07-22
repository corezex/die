import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  ClipboardList,
  Clock3,
  HeartHandshake,
  MapPin,
  MessageCircle,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  UserRound,
  Video,
} from "lucide-react";
import heroImage from "@/public/image/homeimage1.jpg";
import supportImage from "@/public/image/Servicesimg2.png";

const siteUrl = "https://dietfiniti.com";

export const metadata: Metadata = {
  title: "Online Dietitian Consultation in India",
  description: "Book an online dietitian consultation with DietFiniti. Personalised nutrition guidance designed around your goals, routine, food preferences and health history.",
  alternates: { canonical: "/online-dietitian-consultation" },
  openGraph: {
    title: "Online Dietitian Consultation in India | DietFiniti",
    description: "Personalised nutrition guidance from DietFiniti, available online across India.",
    url: `${siteUrl}/online-dietitian-consultation`,
    images: [{ url: "/image/homeimage1.jpg", alt: "DietFiniti online dietitian consultation" }],
  },
};

const faqs = [
  ["What happens in an online dietitian consultation?", "You can discuss your goals, routine, food preferences, health history and questions with the DietFiniti team. If you enrol in a programme, the team will explain the assessment, plan and follow-up process that applies to your support."],
  ["Can I book from outside Mumbai?", "Yes. DietFiniti offers online consultations for clients across India. In-person options are also available at clinics in Mumbai and Thane."],
  ["Will I receive a generic diet chart?", "No. The aim is to understand your individual context before recommendations are made. Your plan may account for your routine, preferences, goals and relevant health information."],
  ["How are online follow-ups managed?", "The team will explain the follow-up schedule and communication options for your selected programme. Follow-ups are used to discuss progress, challenges and appropriate adjustments."],
  ["Can nutrition advice replace my doctor’s treatment?", "No. Nutrition support does not replace medical diagnosis, treatment or medication. If you have a medical condition, are pregnant, breastfeeding or take medication, continue to work with your treating clinician."],
];

const steps = [
  { number: "01", icon: MessageCircle, title: "Send an enquiry", text: "Message DietFiniti on WhatsApp or use the contact page to ask about availability." },
  { number: "02", icon: CalendarCheck, title: "Choose a time", text: "The team will help you identify the relevant service and arrange your online consultation." },
  { number: "03", icon: Video, title: "Meet online", text: "Discuss your goals, routine, food preferences and relevant health context from home." },
  { number: "04", icon: RefreshCw, title: "Continue with support", text: "If you enrol, use your agreed follow-ups to review questions, progress and adjustments." },
];

const goalLinks = [
  ["Weight management", "/services/weight-loss"],
  ["Medical weight loss", "/services/medical-weight-loss"],
  ["Healthy weight gain", "/services/weight-gain"],
  ["Pregnancy nutrition", "/services/pregnancy-diet"],
  ["Sports nutrition", "/services/sports-nutrition"],
  ["Bridal nutrition", "/services/bridal-diet"],
];

export default function OnlineDietitianConsultationPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Online Dietitian Consultation", item: `${siteUrl}/online-dietitian-consultation` },
      ] },
      { "@type": "Service", name: "Online Dietitian Consultation", serviceType: "Online nutrition consultation", url: `${siteUrl}/online-dietitian-consultation`, provider: { "@id": `${siteUrl}/#organization` }, areaServed: { "@type": "Country", name: "India" }, description: "Personalised online nutrition consultations from DietFiniti for clients across India." },
      { "@type": "FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
    ],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <main className="overflow-hidden bg-white text-slate-900">
      <section className="relative isolate bg-[#f4faf5]">
        <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-br from-green-100/70 to-transparent" />
        <div className="absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-bold text-green-800 shadow-sm">
              <MapPin className="h-4 w-4" /> Available online across India
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-[#262262] sm:text-5xl lg:text-6xl">
              Your dietitian, wherever <span className="text-green-600">life takes you</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">Get personalised nutrition support without travel or waiting rooms. Speak with DietFiniti about your goals, food preferences, schedule and health context—from the comfort of home.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://wa.me/919321057899" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"><MessageCircle className="h-5 w-5" /> Ask about availability</a>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-xl border-2 border-[#262262] bg-white px-6 py-3 font-bold text-[#262262] transition hover:bg-[#262262] hover:text-white">Contact DietFiniti</Link>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
              {["Private & convenient", "Personalised guidance", "Ongoing support"].map((item) => <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-600"><Check className="h-4 w-4 shrink-0 text-green-600" />{item}</div>)}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 -z-10 -rotate-2 rounded-[2rem] bg-[#262262]/10" />
            <Image src={heroImage} alt="Dietitian Tejal offering personalised online nutrition guidance" className="aspect-[4/4.25] w-full rounded-[1.75rem] object-cover object-top shadow-2xl" priority />
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-white p-4 shadow-xl sm:left-8 sm:right-auto sm:min-w-72">
              <div className="flex items-center gap-3"><span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700"><Video className="h-5 w-5" /></span><div><p className="font-bold text-[#262262]">Online consultation</p><p className="text-sm text-slate-500">Simple, personal and accessible</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">Designed for real schedules</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#262262] sm:text-4xl">Is an online consultation right for you?</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">Online support can be a convenient choice when visiting a clinic is difficult—or when you simply prefer speaking from your own space.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                [Clock3, "Busy routines", "Fit conversations around work, family and travel."],
                [MapPin, "Outside Mumbai", "Connect from another city or state in India."],
                [UserRound, "Comfort of home", "Discuss meals and routines in a familiar setting."],
                [HeartHandshake, "Continued guidance", "Use follow-ups to stay supported and adapt."],
              ].map(([Icon, title, text]) => {
                const IconComponent = Icon as typeof Clock3;
                return <article key={title as string} className="rounded-2xl border border-slate-200 p-5"><IconComponent className="h-6 w-6 text-green-600" /><h3 className="mt-3 font-bold text-[#262262]">{title as string}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text as string}</p></article>;
              })}
            </div>
          </div>
          <div className="rounded-[2rem] bg-[#262262] p-7 text-white shadow-xl sm:p-10">
            <ClipboardList className="h-10 w-10 text-green-300" />
            <h2 className="mt-5 text-3xl font-bold">What to have ready</h2>
            <p className="mt-3 leading-7 text-indigo-100">A little context helps make the conversation more useful. You do not need to prepare anything complicated.</p>
            <ul className="mt-7 space-y-4">
              {["Your main nutrition or wellbeing goal", "A typical day of meals, work, travel and activity", "Food preferences, allergies or dietary restrictions", "Relevant medical information and current medication", "Questions you would like to discuss"].map((item) => <li key={item} className="flex gap-3 rounded-xl bg-white/10 p-3.5"><span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-300 text-[#262262]"><Check className="h-3.5 w-3.5" /></span><span className="text-indigo-50">{item}</span></li>)}
            </ul>
            <p className="mt-5 text-xs leading-5 text-indigo-200">For diagnosed conditions, pregnancy, breastfeeding or medication use, nutrition support should sit alongside advice from your treating clinician.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7faf7] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">Four simple steps</p><h2 className="mt-3 text-3xl font-bold text-[#262262] sm:text-4xl">How online consultation works</h2><p className="mt-4 text-lg leading-8 text-slate-600">A clear process from your first message to ongoing nutrition support.</p></div>
          <ol className="relative mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-9 hidden border-t-2 border-dashed border-green-300 lg:block" aria-hidden="true" />
            {steps.map((step) => { const Icon = step.icon; return <li key={step.number} className="relative rounded-2xl border border-green-100 bg-white p-6 shadow-sm"><div className="relative z-10 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600 text-white shadow-lg shadow-green-600/20"><Icon className="h-7 w-7" /></div><span className="absolute right-5 top-4 text-4xl font-black text-slate-100">{step.number}</span><h3 className="mt-6 text-xl font-bold text-[#262262]">{step.title}</h3><p className="mt-3 leading-7 text-slate-600">{step.text}</p></li>; })}
          </ol>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-green-100" />
            <Image src={supportImage} alt="Healthy food and nutrition planning for online consultations" className="w-full rounded-[1.5rem] object-cover shadow-lg" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">Personal to your goal</p>
            <h2 className="mt-3 text-3xl font-bold text-[#262262] sm:text-4xl">Explore nutrition support online</h2>
            <p className="mt-5 leading-8 text-slate-700">Online consultations are available for DietFiniti’s core nutrition services. Select a goal to understand the programme in more detail.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {goalLinks.map(([title, href]) => <Link key={href} href={href} className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 font-bold text-[#262262] transition hover:border-green-400 hover:bg-green-50"><span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-green-600" />{title}</span><ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>)}
            </div>
            <div className="mt-7 flex items-start gap-3 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-950"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" /><p>Nutrition advice supports your overall care; it does not replace medical diagnosis, treatment or prescribed medication.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7faf7] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">Questions answered</p><h2 className="mt-3 text-3xl font-bold text-[#262262] sm:text-4xl">Online consultation FAQs</h2></div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">{faqs.map(([question, answer]) => <details key={question} className="group border-b border-slate-200 p-5 last:border-0 sm:p-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#262262]"><span>{question}</span><span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-xl text-green-700 transition group-open:rotate-45">+</span></summary><p className="mt-4 max-w-3xl pr-8 leading-7 text-slate-600">{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="bg-[#262262] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center"><Video className="mx-auto h-10 w-10 text-green-300" /><h2 className="mt-5 text-3xl font-bold sm:text-4xl">Ready to discuss your nutrition goals?</h2><p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-indigo-100">Ask about online consultation availability and find the DietFiniti programme that best fits your needs.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href="https://wa.me/919321057899" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3.5 font-bold text-white hover:bg-green-400"><MessageCircle className="h-5 w-5" /> WhatsApp DietFiniti</a><Link href="/services" className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3.5 font-bold text-white hover:bg-white/10">View all programmes</Link></div></div>
      </section>
    </main>
  </>;
}
