import Image from "next/image";
import Link from "next/link";
import medicalNutrition from "@/public/image/MedicalWeightLoss1.jpg";
import { ServiceCtaButtons } from "@/app/components/ServiceCtaButtons";
import { MedicalWeightLossStructuredData } from "./MedicalWeightLossStructuredData";
import { MedicalWeightLossSections } from "./MedicalWeightLossSections";
import { Heart, Activity, TrendingUp, Zap } from "lucide-react";

const medicalConditions = [
  { icon: "🦋", title: "Thyroid Disorders", description: "Nutrition support alongside medical care for hypothyroidism or hyperthyroidism, focusing on practical everyday food routines." },
  { icon: "🩺", title: "Diabetes (Type 1 & 2)", description: "Meal-planning discussions to complement — not replace — your treating clinician's advice on blood-glucose management." },
  { icon: "🌸", title: "PCOS/PCOD", description: "Personalised nutrition guidance to support routines discussed with your gynaecologist or endocrinologist." },
  { icon: "❤️", title: "Hypertension", description: "Everyday food-planning ideas that fit alongside the treatment plan set by your cardiologist or GP." },
  { icon: "🧬", title: "High Cholesterol", description: "Practical food-choice discussions to complement medical monitoring and lipid-profile care from your clinician." },
  { icon: "🔬", title: "Fatty Liver", description: "Nutrition planning that respects the medical care and monitoring already in place with your treating doctor." },
];

const programFeatures = [
  { icon: "🎯", title: "Personalised Nutrition", description: "Meal-planning guidance built around your food preferences, routine and any dietary restrictions shared by your clinician." },
  { icon: "🩺", title: "Coordination with Your Doctor", description: "Where you wish, DietFiniti can align guidance with the direction of your treating clinician — medical decisions remain with them." },
  { icon: "📊", title: "Routine Follow-ups", description: "Regular check-ins to review progress signals and refine your practical nutrition plan over time." },
  { icon: "💊", title: "Medication-Aware Planning", description: "General guidance on meal timing around medication routines you have already been prescribed by your doctor." },
  { icon: "🔬", title: "Lab-Report Awareness", description: "DietFiniti does not interpret lab reports — your clinician does — but nutrition guidance can be shaped to align with them." },
  { icon: "🚨", title: "Sick-Day Guidance", description: "Practical suggestions for managing meals during flare-ups or unwell days, alongside your clinician's advice." },
];

const methodologySteps = [
  { step: "01", title: "Comprehensive Assessment", description: "A discussion of your medical history, current care, medications, dietary restrictions and everyday routine — so nutrition guidance can be considered in context." },
  { step: "02", title: "Condition-Aware Planning", description: "A practical, personalised nutrition direction that respects your clinician's advice, food preferences and daily schedule." },
  { step: "03", title: "Coordination Where Helpful", description: "With your permission, DietFiniti can align nutrition guidance with the direction of your treating doctor or clinical team." },
  { step: "04", title: "Ongoing Follow-Ups", description: "Regular check-ins to review realistic progress, discuss challenges and adjust the plan where appropriate." },
];

const expectedOutcomes = [
  { icon: <TrendingUp className="w-6 h-6" />, title: "A Sustainable Approach", description: "A steady, personalised nutrition approach that fits alongside your medical care. Individual results vary." },
  { icon: <Heart className="w-6 h-6" />, title: "Better Everyday Routine", description: "Practical food habits that are easier to maintain than restrictive rules — supporting the wider care already in place." },
  { icon: <Zap className="w-6 h-6" />, title: "Improved Confidence with Food", description: "Clearer answers to daily food questions, so decisions feel less confusing between clinical appointments." },
  { icon: <Activity className="w-6 h-6" />, title: "Aligned with Your Clinician", description: "Nutrition guidance that complements your treatment plan — medical outcomes remain the responsibility of your doctor." },
];

// Note: Individual results and timelines vary; these reflect general client feedback themes and do not represent guaranteed outcomes.
const successStories = [
  { name: "Client experience", age: "PCOS & Thyroid", condition: "Nutrition support alongside medical care", loss: "Goal met", duration: "Over ~6 months", testimonial: "After years of struggling with PCOS and thyroid-related weight changes, the personalised approach finally helped make sense of everyday meals. Ongoing medical care continued with the treating doctor." },
  { name: "Client experience", age: "Type 2 Diabetes", condition: "Nutrition support alongside medical care", loss: "Goal met", duration: "Over ~4 months", testimonial: "Managing food choices while continuing prescribed treatment felt clearer with practical, personalised guidance. Clinical parameters were monitored by the treating clinician." },
];

const faqs = [
  ["Can nutrition support help when I have a diagnosed health condition?", "Nutrition guidance can support everyday food choices and weight-management goals, but it does not diagnose, treat or cure a condition. Your doctor or treating clinical team remains responsible for medical care, medications and clinical monitoring."],
  ["Do I need to share medical information?", "You can discuss health information that is relevant to your nutrition support. Please bring questions, prescribed dietary restrictions and any guidance from your treating clinician. DietFiniti can explain what information is useful for the consultation."],
  ["Will DietFiniti change my medication or interpret my lab reports?", "No. DietFiniti does not prescribe or change medication, and laboratory results should be interpreted by your treating clinician. Do not change treatment or medication based on nutrition information alone."],
  ["Which goals can I discuss?", "You can ask about weight-management nutrition alongside care for conditions such as PCOS, thyroid disorders, diabetes, blood pressure or cholesterol concerns. Suitability and scope should be discussed during your consultation."],
];

export default function MedicalWeightLossProgram() {
  return <div className="service-page">
    <MedicalWeightLossStructuredData />
    <section className="bg-[#262262] px-4 py-16 text-white md:py-24"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center"><div><p className="mb-4 font-semibold uppercase tracking-[0.18em] text-blue-100 text-sm">Mumbai, Thane & online across India</p><h1 className="text-4xl font-bold tracking-tight md:text-6xl">Weight-management nutrition support alongside medical care</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50 md:text-xl">If a health condition is part of your weight-management journey, you deserve nutrition guidance that respects your medical care. DietFiniti can help you discuss practical food routines while you continue to work with your doctor or treating clinical team.</p><div className="mt-9"><ServiceCtaButtons contactColorClass="text-blue-800" /></div></div><aside className="rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm"><h2 className="text-2xl font-bold">Important to know</h2><ul className="mt-5 space-y-4 leading-7 text-blue-50"><li>• This service is nutrition support, not medical diagnosis or treatment.</li><li>• Do not start, stop or alter medication without your treating clinician.</li><li>• Share relevant medical guidance so nutrition advice can be considered in context.</li><li>• For urgent symptoms or emergencies, contact your doctor or emergency services.</li></ul></aside></div></section>

    <main><section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-20"><div><p className="font-semibold text-blue-700">A careful, coordinated approach</p><h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Nutrition guidance should fit the wider care you receive</h2><p className="mt-5 leading-8 text-slate-700">A condition, medication, dietary restriction or changing health situation can make generic weight-loss advice inappropriate. A consultation gives you space to discuss the food and routine questions that matter to you, while keeping medical decisions with the clinician responsible for your care.</p><p className="mt-4 leading-8 text-slate-700">DietFiniti can support practical meal planning and nutrition habits. If specialist therapeutic nutrition or medical monitoring is required, the team can help you understand when to seek appropriate clinical advice.</p></div><Image src={medicalNutrition} alt="Balanced vegetables and meal ingredients for personalised nutrition planning" className="h-auto w-full rounded-2xl shadow-lg" /></section>

    <section className="bg-slate-50 px-4 py-16 md:py-20"><div className="mx-auto max-w-6xl"><h2 className="max-w-3xl text-3xl font-bold text-slate-900 md:text-4xl">What you can discuss in a consultation</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{[["Your day-to-day routine", "Meal timing, food preferences, travel, work and practical barriers to eating regularly."], ["Relevant health context", "Your goals, prescribed dietary advice, medications and questions for your treating clinician."], ["A realistic nutrition direction", "Food habits and planning ideas that can sit alongside the medical care you already receive."]].map(([title, text]) => <article key={title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><h3 className="text-xl font-bold text-slate-900">{title}</h3><p className="mt-3 leading-7 text-slate-700">{text}</p></article>)}</div></div></section>

    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20"><div className="grid gap-10 lg:grid-cols-2"><div><h2 className="text-3xl font-bold text-slate-900">When to contact your doctor first</h2><p className="mt-5 leading-8 text-slate-700">Please seek guidance from your doctor or treating clinical team before changing your diet if you have a new or worsening symptom, an eating disorder, are pregnant or breastfeeding, have kidney disease, use insulin or other glucose-lowering medication, or have been prescribed a therapeutic diet.</p><p className="mt-4 leading-8 text-slate-700">Nutrition support is not for emergencies. If you think you have an emergency, contact local emergency services immediately.</p></div><div className="rounded-2xl bg-blue-50 p-7 ring-1 ring-blue-100"><h2 className="text-2xl font-bold text-slate-900">Choose how to speak with DietFiniti</h2><p className="mt-4 leading-7 text-slate-700">Ask about an in-person consultation in Mumbai or Thane, or online support from elsewhere in India. The team can explain scope, availability and the information that will be helpful before you book.</p><div className="mt-7 flex flex-wrap gap-3"><Link href="/contact" className="rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800">Contact DietFiniti</Link><Link href="/online-dietitian-consultation" className="rounded-lg border border-blue-700 px-5 py-3 font-semibold text-blue-800 hover:bg-blue-50">Online consultations</Link></div></div></div></section>

    <MedicalWeightLossSections
      medicalConditions={medicalConditions}
      programFeatures={programFeatures}
      methodologySteps={methodologySteps}
      expectedOutcomes={expectedOutcomes}
      successStories={successStories}
    />

    <section className="bg-blue-50 px-4 py-16 md:py-20"><div className="mx-auto max-w-4xl"><h2 className="text-3xl font-bold text-slate-900">Medical nutrition support FAQs</h2><div className="mt-7 divide-y divide-blue-100 rounded-xl border border-blue-100 bg-white">{faqs.map(([question, answer]) => <details key={question} className="group p-5"><summary className="cursor-pointer list-none pr-8 font-semibold text-slate-900">{question}<span className="float-right text-blue-700 group-open:rotate-45">+</span></summary><p className="mt-4 leading-7 text-slate-700">{answer}</p></details>)}</div></div></section>
    </main>
  </div>;
}
