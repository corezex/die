import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Check,
  Dumbbell,
  HeartPulse,
  MessageCircle,
  Scale,
  Sparkles,
  Target,
  Trophy,
  Utensils,
  Video,
} from "lucide-react";

import hero from "@/public/image/Servicesimg1.jpg";
import weightLoss from "@/public/image/weightlossimg1.jpg";
import medicalWeightLoss from "@/public/image/MedicalWeightLoss1.jpg";
import pregnancy from "@/public/image/pregnancy-diet-img1.jpg";
import weightGain from "@/public/image/weightgainimg1.jpg";
import sports from "@/public/image/sports-nutritionimg1.jpg";
import bridal from "@/public/image/bridal-dietimg1.jpg";

type Service = {
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
  imageAlt: string;
  icon: typeof Scale;
  features: string[];
  accent: string;
};

const services: Service[] = [
  {
    title: "Weight Loss Program",
    description: "A practical, personalised approach to weight management—built around your routine, preferences and everyday Indian meals.",
    href: "/services/weight-loss",
    image: weightLoss,
    imageAlt: "Balanced nutrition for a personalised weight loss programme",
    icon: Scale,
    features: ["Personalised meal planning", "Habit and progress support"],
    accent: "bg-emerald-600",
  },
  {
    title: "Medical Weight Loss",
    description: "Nutrition support designed to work alongside your doctor’s care when a diagnosed health condition is part of the picture.",
    href: "/services/medical-weight-loss",
    image: medicalWeightLoss,
    imageAlt: "Nutrition support alongside medical weight management care",
    icon: HeartPulse,
    features: ["Health-aware planning", "Supports clinical care"],
    accent: "bg-rose-600",
  },
  {
    title: "Pregnancy Diet Plan",
    description: "Thoughtful meal-planning support for changing nutrition needs during pregnancy, alongside your antenatal care.",
    href: "/services/pregnancy-diet",
    image: pregnancy,
    imageAlt: "Nutritious food for pregnancy diet planning",
    icon: Baby,
    features: ["Trimester-aware guidance", "Practical everyday meals"],
    accent: "bg-pink-600",
  },
  {
    title: "Weight Gain Program",
    description: "Structured food planning for healthy weight-gain goals, with attention to energy, strength and sustainable routines.",
    href: "/services/weight-gain",
    image: weightGain,
    imageAlt: "Healthy meal for a personalised weight gain programme",
    icon: Dumbbell,
    features: ["Balanced calorie planning", "Strength-focused nutrition"],
    accent: "bg-amber-600",
  },
  {
    title: "Sports Nutrition Plan",
    description: "Personalised nutrition and hydration guidance shaped around your training schedule, performance and recovery needs.",
    href: "/services/sports-nutrition",
    image: sports,
    imageAlt: "Sports nutrition meal planning for performance and recovery",
    icon: Trophy,
    features: ["Training-day nutrition", "Recovery and hydration"],
    accent: "bg-blue-600",
  },
  {
    title: "Bridal Diet Plan",
    description: "Realistic pre-wedding nutrition support that prioritises steady energy, confidence and routines you can actually follow.",
    href: "/services/bridal-diet",
    image: bridal,
    imageAlt: "Bridal nutrition planning with balanced healthy food",
    icon: Sparkles,
    features: ["Timeline-based planning", "Energy and wellbeing focus"],
    accent: "bg-violet-600",
  },
];

const process = [
  ["01", "Tell us about you", "Share your goal, routine, food preferences and relevant health information."],
  ["02", "Meet your dietitian", "Choose an in-person consultation in Mumbai or Thane, or connect online."],
  ["03", "Get a practical direction", "Receive guidance designed around your real schedule—not a copied diet chart."],
  ["04", "Review and adapt", "Use follow-ups to discuss progress, obstacles and useful adjustments."],
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <section className="relative isolate bg-[#f5fbf6]">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[42%] bg-[#e5f4e8] lg:block" />
        <div className="absolute -left-24 top-20 -z-10 h-72 w-72 rounded-full bg-green-200/40 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-green-800 shadow-sm">
              <Utensils className="h-4 w-4" /> Mumbai, Thane & online across India
            </div>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-[#262262] sm:text-5xl lg:text-6xl">
              Nutrition support designed around <span className="text-green-600">your real life</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Your body, schedule and food preferences are personal. Choose a DietFiniti programme that starts with your context and helps turn nutrition advice into realistic everyday action.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://wa.me/919321057899" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700">
                <MessageCircle className="h-5 w-5" /> Find my programme
              </a>
              <Link href="/online-dietitian-consultation" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#262262] bg-white px-6 py-3 font-bold text-[#262262] transition hover:bg-[#262262] hover:text-white">
                <Video className="h-5 w-5" /> Online consultation
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
              {["12+ years of experience", "2,000+ clients served", "Online & in-person"].map((item) => <span key={item} className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" />{item}</span>)}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 -z-10 rotate-2 rounded-[2rem] bg-green-200/60" />
            <Image src={hero} alt="DietFiniti dietitian providing a personalised nutrition consultation" className="aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-2xl" priority />
            <div className="absolute -bottom-6 left-4 rounded-2xl bg-white p-4 shadow-xl sm:left-8 sm:p-5">
              <p className="text-sm text-slate-500">DietFiniti approach</p>
              <p className="mt-1 font-bold text-[#262262]">Personalised • Practical • Supportive</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">Our specialised programmes</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#262262] sm:text-4xl">Choose support for your health goal</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">Every programme begins with a conversation. Explore what each service covers and find the right starting point for you.</p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.href} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
                    <span className={`absolute bottom-4 left-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.accent} text-white shadow-lg`}><Icon className="h-6 w-6" /></span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#262262]">{service.title}</h3>
                    <p className="mt-3 min-h-[84px] leading-7 text-slate-600">{service.description}</p>
                    <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-sm font-medium text-slate-700">
                      {service.features.map((feature) => <li key={feature} className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" />{feature}</li>)}
                    </ul>
                    <Link href={service.href} className="mt-6 inline-flex items-center gap-2 font-bold text-green-700 transition group-hover:gap-3" aria-label={`Learn more about ${service.title}`}>
                      Explore programme <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#262262] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-300">One clear process</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">How your DietFiniti journey works</h2>
            <p className="mt-5 max-w-xl leading-8 text-indigo-100">No confusing rules and no one-size-fits-all charts. We begin by understanding what is realistic for you.</p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {process.map(([number, title, description]) => (
              <li key={number} className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <div className="flex gap-4">
                  <span className="text-2xl font-black text-green-300">{number}</span>
                  <div><h3 className="text-lg font-bold text-white">{title}</h3><p className="mt-2 leading-6 text-indigo-100">{description}</p></div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#f7faf7] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-green-100 bg-white p-6 shadow-sm md:p-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl bg-green-50 p-7 sm:p-9">
            <Target className="h-10 w-10 text-green-600" />
            <h2 className="mt-5 text-3xl font-bold text-[#262262]">Not sure which programme is right?</h2>
            <p className="mt-4 leading-8 text-slate-700">You do not need to decide alone. Tell us your primary goal and preferred consultation format; the team can help you identify the most relevant service and explain what it includes.</p>
          </div>
          <div className="lg:px-6">
            <h3 className="text-2xl font-bold text-[#262262]">Start with a simple conversation</h3>
            <div className="mt-5 space-y-4 text-slate-700">
              <p className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-green-600" />Ask questions before choosing a programme.</p>
              <p className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-green-600" />Choose online support or clinic appointments in Mumbai and Thane.</p>
              <p className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-green-600" />Understand the next steps, availability and suitability.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/919321057899" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 font-bold text-white hover:bg-green-700"><MessageCircle className="h-5 w-5" /> WhatsApp DietFiniti</a>
              <Link href="/contact" className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3.5 font-bold text-[#262262] hover:border-[#262262]">Visit our clinics</Link>
            </div>
            <p className="mt-6 text-xs leading-5 text-slate-500">Nutrition guidance does not replace medical diagnosis, treatment or medication. Continue to work with your treating clinician where relevant.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
