import Image from "next/image";
import Link from "next/link";
import weightLossFood from "@/public/image/weightlossimg2.png";
import weightLossPlan from "@/public/image/weightgainimg1.jpg";
import { ServiceCtaButtons } from "@/app/components/ServiceCtaButtons";
import { WeightLossStructuredData } from "./WeightLossStructuredData";
import { WeightLossSections } from "./WeightLossSections";

const faqs = [
  ["What is included in a personalised weight-loss nutrition plan?", "The process starts by discussing your goal, routine, food preferences and relevant health history. If you enrol, DietFiniti explains the plan, follow-up and support that apply to your selected programme."],
  ["Do I need to eat special foods or use supplements?", "DietFiniti aims to build practical food choices around your preferences and routine. Ask during your consultation about what is appropriate for your circumstances; do not start supplements or make major dietary changes without appropriate professional advice."],
  ["Can I get support if I have a health condition?", "Nutrition guidance can support your overall routine, but it does not replace medical diagnosis, treatment or medication. If you have a diagnosed condition, are pregnant or breastfeeding, or take medication, continue to work with your doctor or treating clinician."],
  ["Do you guarantee a certain amount of weight loss?", "No. Weight and health outcomes vary between individuals. DietFiniti focuses on realistic, personalised nutrition habits rather than promising a particular result."],
];

export default function WeightLossProgram() {
  return <div className="service-page">
    <WeightLossStructuredData />
    <section className="bg-[#262262] px-4 py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
        <div>
          <p className="mb-4 font-semibold uppercase tracking-[0.18em] text-emerald-100 text-sm">Mumbai, Thane & online across India</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Personalised weight-loss nutrition support that fits your life</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50 md:text-xl">Work with DietFiniti to build practical eating habits around your routine, food preferences, goals and relevant health history. There are no generic meal charts and no promised outcomes—just a thoughtful starting point and ongoing guidance where appropriate.</p>
          <div className="mt-9"><ServiceCtaButtons contactColorClass="text-emerald-800" /></div>
        </div>
        <aside className="rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm">
          <h2 className="text-2xl font-bold">A consultation can help you explore</h2>
          <ul className="mt-5 space-y-4 leading-7 text-emerald-50"><li>• A nutrition approach shaped around everyday meals and your schedule</li><li>• Questions about eating patterns, planning and realistic routines</li><li>• How to approach progress without crash diets or one-size-fits-all rules</li><li>• Whether online or in-person support is a suitable next step</li></ul>
        </aside>
      </div>
    </section>

    <main>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-20">
        <div>
          <p className="font-semibold text-emerald-700">Weight-loss dietitian in Mumbai and online</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">A weight-loss plan should work with your routine, not against it</h2>
          <p className="mt-5 leading-8 text-slate-700">Many people have already tried restrictive rules, skipped meals or copied plans that were never designed for them. DietFiniti begins with the context that matters: your meals, work pattern, activity, preferences, goals and relevant health information.</p>
          <p className="mt-4 leading-8 text-slate-700">The focus is on practical nutrition changes you can understand and use in everyday life. If a medical condition is part of the picture, nutrition guidance should complement—not replace—your treating clinician’s advice.</p>
        </div>
        <Image src={weightLossFood} alt="Balanced meal with fruit and vegetables for practical nutrition planning" className="h-auto w-full rounded-2xl shadow-lg" />
      </section>

      <section className="bg-slate-50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-3xl text-3xl font-bold text-slate-900 md:text-4xl">How DietFiniti approaches personalised weight management</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-4">{[
            ["1", "Start with your context", "Discuss your goal, everyday meals, schedule, preferences and relevant health history."],
            ["2", "Agree a practical direction", "Choose nutrition actions that are realistic for your home, work, travel and food culture."],
            ["3", "Use feedback", "Bring questions and real-life challenges to follow-ups so guidance can remain relevant."],
            ["4", "Build lasting skills", "Focus on planning, portions and eating habits you can continue to use beyond a short-term target."],
          ].map(([number, title, text]) => <article key={number} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700 font-bold text-white">{number}</span><h3 className="mt-4 text-xl font-bold text-slate-900">{title}</h3><p className="mt-3 leading-7 text-slate-700">{text}</p></article>)}</div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-20">
        <Image src={weightLossPlan} alt="Diet plan and balanced meal used for nutrition consultation planning" className="order-2 h-auto w-full rounded-2xl shadow-lg md:order-1" />
        <div className="order-1 md:order-2"><h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Choose the support that suits you</h2><p className="mt-5 leading-8 text-slate-700">Meet DietFiniti in Mumbai or Thane, or ask about an online consultation from elsewhere in India. The consultation is the right place to clarify availability, what is included, communication preferences and whether the service is appropriate for your needs.</p><div className="mt-7 flex flex-wrap gap-3"><Link href="/online-dietitian-consultation" className="rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800">Explore online consultations</Link><Link href="/contact" className="rounded-lg border border-emerald-700 px-5 py-3 font-semibold text-emerald-800 hover:bg-emerald-50">Contact DietFiniti</Link></div></div>
      </section>

      <WeightLossSections />

      <section className="bg-emerald-50 px-4 py-16 md:py-20"><div className="mx-auto max-w-4xl"><h2 className="text-3xl font-bold text-slate-900">Weight-loss nutrition FAQs</h2><div className="mt-7 divide-y divide-emerald-100 rounded-xl border border-emerald-100 bg-white">{faqs.map(([question, answer]) => <details key={question} className="group p-5"><summary className="cursor-pointer list-none pr-8 font-semibold text-slate-900">{question}<span className="float-right text-emerald-700 group-open:rotate-45">+</span></summary><p className="mt-4 leading-7 text-slate-700">{answer}</p></details>)}</div></div></section>
      <section className="bg-slate-900 px-4 py-16 text-white"><div className="mx-auto max-w-4xl text-center"><h2 className="text-3xl font-bold">Talk through your weight-management goals</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-200">Contact DietFiniti to ask about a personalised consultation in Mumbai, Thane or online across India.</p><div className="mt-7"><a href="https://wa.me/919321057899" target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-300">Message DietFiniti on WhatsApp</a></div></div></section>
    </main>
  </div>;
}
