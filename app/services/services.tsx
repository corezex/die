import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Briefcase,
  Check,
  Dumbbell,
  HeartPulse,
  MessageCircle,
  Salad,
  Scale,
  Sparkles,
  Stethoscope,
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
import conditionImg from "@/public/image/condition-nutritionimg1.jpg";
import pcosImg from "@/public/image/pcos-nutritionimg1.jpg";
import thyroidImg from "@/public/image/thyroid-nutritionimg1.jpg";
import diabetesImg from "@/public/image/diabetes-nutritionimg1.jpg";
import fattyLiverImg from "@/public/image/fatty-liver-nutritionimg1.jpg";
import gutImg from "@/public/image/gut-health-nutritionimg1.jpg";
import kidsImg from "@/public/image/kids-nutritionimg1.jpg";
import corpImg from "@/public/image/corporate-wellnessimg1.jpg";

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

const coreServices: Service[] = [
  {
    title: "Weight Loss Program",
    description:
      "A personalised weight loss diet plan built around your routine, preferences, health history and everyday Indian meals.",
    href: "/services/weight-loss",
    image: weightLoss,
    imageAlt: "Balanced nutrition for a personalised weight loss programme",
    icon: Scale,
    features: ["Weight management", "Personalised meal planning"],
    accent: "bg-emerald-600",
  },
  {
    title: "Medical Weight Loss",
    description:
      "Dietitian support for weight management when PCOS, thyroid, diabetes or another health condition is part of the picture.",
    href: "/services/medical-weight-loss",
    image: medicalWeightLoss,
    imageAlt: "Nutrition support alongside medical weight management care",
    icon: HeartPulse,
    features: ["Works alongside medical care", "Condition-aware planning"],
    accent: "bg-green-600",
  },
  {
    title: "Pregnancy Diet Plan",
    description:
      "Practical pregnancy nutrition support for changing energy, protein and meal-planning needs across each stage of pregnancy.",
    href: "/services/pregnancy-diet",
    image: pregnancy,
    imageAlt: "Nutritious food for pregnancy diet planning",
    icon: Baby,
    features: ["Pregnancy nutrition", "Trimester-aware guidance"],
    accent: "bg-green-600",
  },
  {
    title: "Weight Gain Program",
    description:
      "A structured healthy weight gain diet plan with attention to appetite, energy, strength and sustainable food routines.",
    href: "/services/weight-gain",
    image: weightGain,
    imageAlt: "Healthy meal for a personalised weight gain programme",
    icon: Dumbbell,
    features: ["Healthy weight gain", "Strength-focused nutrition"],
    accent: "bg-green-600",
  },
  {
    title: "Sports Nutrition Plan",
    description:
      "Sports nutrition guidance for performance, hydration, training-day meals and recovery — whether you are active casually or seriously.",
    href: "/services/sports-nutrition",
    image: sports,
    imageAlt: "Sports nutrition meal planning for performance and recovery",
    icon: Trophy,
    features: ["Sports diet plan", "Hydration and recovery"],
    accent: "bg-green-600",
  },
  {
    title: "Bridal Diet Plan",
    description:
      "A realistic bridal nutrition plan focused on steady energy, confidence, routine and a timeline that works before the wedding.",
    href: "/services/bridal-diet",
    image: bridal,
    imageAlt: "Bridal nutrition planning with balanced healthy food",
    icon: Sparkles,
    features: ["Bridal nutrition", "Timeline-based support"],
    accent: "bg-violet-600",
  },
];

const conditionServices: Service[] = [
  {
    title: "Condition Nutrition",
    description:
      "One place to explore nutrition support for PCOS, thyroid, diabetes, fatty liver and gut health, alongside your doctor’s care.",
    href: "/services/condition-nutrition",
    image: conditionImg,
    imageAlt: "Condition-specific nutrition planning with balanced food",
    icon: Stethoscope,
    features: ["Condition-specific support", "PCOS, thyroid, diabetes and more"],
    accent: "bg-green-700",
  },
  {
    title: "PCOS Nutrition Support",
    description:
      "A PCOS dietitian approach for regular meals, better protein and fibre intake, and practical Indian food choices.",
    href: "/services/pcos-nutrition",
    image: pcosImg,
    imageAlt: "Dietitian discussing a food diary during a PCOS nutrition consultation",
    icon: HeartPulse,
    features: ["PCOS dietitian", "Hormonal health support"],
    accent: "bg-green-600",
  },
  {
    title: "Thyroid Nutrition Support",
    description:
      "Meal-planning guidance that works alongside thyroid medication, routine blood tests and day-to-day energy management.",
    href: "/services/thyroid-nutrition",
    image: thyroidImg,
    imageAlt: "Nutrition support for thyroid health with everyday Indian meals",
    icon: HeartPulse,
    features: ["Thyroid dietitian", "Meal timing and balance"],
    accent: "bg-green-600",
  },
  {
    title: "Diabetes Nutrition Support",
    description:
      "Indian meal planning for better blood sugar management, portion structure and a more practical diabetes food routine.",
    href: "/services/diabetes-nutrition",
    image: diabetesImg,
    imageAlt: "Balanced Indian meal planning for diabetes nutrition support",
    icon: HeartPulse,
    features: ["Diabetes diet plan", "Blood-sugar-friendly meals"],
    accent: "bg-green-600",
  },
  {
    title: "Fatty Liver Nutrition Support",
    description:
      "Food planning for fatty liver management with attention to weight, routine, protein intake and realistic home meals.",
    href: "/services/fatty-liver-nutrition",
    image: fattyLiverImg,
    imageAlt: "Fatty liver nutrition support with balanced home food",
    icon: HeartPulse,
    features: ["Fatty liver diet", "Routine-based support"],
    accent: "bg-green-600",
  },
  {
    title: "Gut Health & IBS Nutrition",
    description:
      "Guidance for bloating, IBS and gut comfort with a practical food-diary approach and meals that feel easier to follow.",
    href: "/services/gut-health-nutrition",
    image: gutImg,
    imageAlt: "Gut health nutrition support with simple Indian food options",
    icon: HeartPulse,
    features: ["Gut health dietitian", "IBS-friendly food support"],
    accent: "bg-green-600",
  },
];

const lifestyleServices: Service[] = [
  {
    title: "Kids Nutrition",
    description:
      "Support for fussy eating, lunch boxes, family meals and teen nutrition without turning everyday eating into a fight.",
    href: "/services/kids-nutrition",
    image: kidsImg,
    imageAlt: "Healthy family meals for kids nutrition support",
    icon: Salad,
    features: ["Kids nutritionist support", "Lunch boxes and fussy eating"],
    accent: "bg-green-600",
  },
  {
    title: "Corporate Wellness",
    description:
      "Corporate nutrition sessions, workplace wellness talks and practical habit-focused support for teams and organisations.",
    href: "/services/corporate-wellness",
    image: corpImg,
    imageAlt: "Corporate wellness nutrition program for teams and workplaces",
    icon: Briefcase,
    features: ["Corporate nutrition", "Workshops and webinars"],
    accent: "bg-green-600",
  },
];

const allServices = [...coreServices, ...conditionServices, ...lifestyleServices];

const process = [
  ["01", "Tell us about you", "Share your goal, routine, food preferences and relevant health information."],
  ["02", "Meet your dietitian", "Choose an in-person consultation in Mumbai or Thane, or connect online."],
  ["03", "Get a practical direction", "Receive guidance designed around your real schedule—not a copied diet chart."],
  ["04", "Review and adapt", "Use follow-ups to discuss progress, obstacles and useful adjustments."],
] as const;

function ServiceSection({
  eyebrow,
  title,
  description,
  services,
}: {
  eyebrow: string;
  title: string;
  description: string;
  services: Service[];
}) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#262262] sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.href}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
                  <span
                    className={`absolute bottom-4 left-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.accent} text-white shadow-lg`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#262262]">{service.title}</h3>
                  <p className="mt-3 min-h-[108px] leading-7 text-slate-600">{service.description}</p>
                  <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-sm font-medium text-slate-700">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-2 font-bold text-green-700 transition group-hover:gap-3"
                    aria-label={service.title}
                  >
                    Explore programme <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["CollectionPage", "MedicalWebPage"],
        "@id": "https://dietfiniti.com/services#webpage",
        url: "https://dietfiniti.com/services",
        name: "DietFiniti Services",
        description:
          "A collection of DietFiniti dietitian services covering weight loss, medical weight loss, pregnancy nutrition, weight gain, sports nutrition, bridal nutrition, PCOS, thyroid, diabetes, fatty liver, gut health, kids nutrition and corporate wellness.",
        inLanguage: "en-IN",
        isPartOf: { "@id": "https://dietfiniti.com/#website" },
        publisher: { "@id": "https://dietfiniti.com/#organization" },
      },
      {
        "@type": "ItemList",
        itemListElement: allServices.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `https://dietfiniti.com${service.href}`,
          name: service.title,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://dietfiniti.com" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://dietfiniti.com/services" },
        ],
      },
    ],
  };

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative isolate bg-[#f5fbf6]">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[42%] bg-[#e5f4e8] lg:block" />
        <div className="absolute -left-24 top-20 -z-10 h-72 w-72 rounded-full bg-green-200/40 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-green-800 shadow-sm">
              <Utensils className="h-4 w-4" /> Mumbai, Thane & online across India
            </div>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-[#262262] sm:text-5xl lg:text-6xl">
              Dietitian services for <span className="text-green-700">weight loss, PCOS, diabetes, pregnancy and more</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Looking for a dietitian in Mumbai, Thane or online? This page brings together every DietFiniti service — from weight loss, medical weight loss and weight gain to PCOS, thyroid, diabetes, fatty liver, gut health, pregnancy nutrition, kids nutrition, sports nutrition and corporate wellness.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
              Each service is designed around your routine, food preferences and health context so the plan feels practical in everyday Indian life, not just on paper.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/919321057899"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3.5 font-bold text-white shadow-lg shadow-green-700/20 transition hover:bg-green-800"
              >
                <MessageCircle className="h-5 w-5" /> Find my programme
              </a>
              <Link
                href="/online-dietitian-consultation"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#262262] bg-white px-6 py-3 font-bold text-[#262262] transition hover:bg-[#262262] hover:text-white"
              >
                <Video className="h-5 w-5" /> Online consultation
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
              {[
                "12+ years of experience",
                "2,000+ clients served",
                "Mumbai, Thane & online",
                "Indian food-first planning",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 -z-10 rotate-2 rounded-[2rem] bg-green-200/60" />
            <Image
              src={hero}
              alt="DietFiniti dietitian providing a personalised nutrition consultation"
              className="aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-2xl"
              priority
            />
            <div className="absolute -bottom-6 left-4 rounded-2xl bg-white p-4 shadow-xl sm:left-8 sm:p-5">
              <p className="text-sm text-slate-500">DietFiniti approach</p>
              <p className="mt-1 font-bold text-[#262262]">Personalised • Practical • Supportive</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-green-100 bg-green-50 p-6 sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">All services listed clearly</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#262262] sm:text-4xl">
              Explore every DietFiniti service in one place
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              If you are comparing nutrition services, these quick links let you go straight to the support you need — whether that is a weight loss dietitian, PCOS dietitian, thyroid nutrition support, diabetes meal planning, sports nutrition, pregnancy nutrition or kids nutrition.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-xl border border-green-200 bg-white px-4 py-3 font-semibold text-[#262262] transition hover:border-green-400 hover:bg-green-100"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">What people usually come for</p>
            <h2 className="mt-3 text-2xl font-bold text-[#262262] sm:text-3xl">Common nutrition goals we support</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 text-slate-700">
              {[
                "Weight loss diet plan",
                "Medical weight loss nutrition",
                "PCOS dietitian guidance",
                "Thyroid meal planning",
                "Diabetes diet support",
                "Pregnancy diet planning",
                "Healthy weight gain",
                "Sports nutrition and hydration",
                "Fatty liver diet support",
                "Gut health and IBS meal support",
                "Kids and teen nutrition",
                "Corporate wellness sessions",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-green-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">Why the page is arranged this way</p>
            <h2 className="mt-3 text-2xl font-bold text-[#262262] sm:text-3xl">Choose by goal first, then by condition</h2>
            <p className="mt-5 leading-8 text-slate-700">
              Some people start with a broad goal like weight loss, pregnancy nutrition or sports performance. Others are searching for support around a specific condition such as PCOS, thyroid issues, diabetes, fatty liver or gut health. This page separates those paths so it is easier to compare the right service quickly.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              If you are not sure where you fit, start with the broader service page or contact DietFiniti directly — the team can help you choose the right next step.
            </p>
          </article>
        </div>
      </section>

      <ServiceSection
        eyebrow="Core programmes"
        title="Weight, pregnancy, bridal and sports nutrition services"
        description="These are the main programme pages people usually visit first when searching for a dietitian for weight loss, weight gain, pregnancy nutrition, bridal nutrition or sports nutrition in Mumbai or online."
        services={coreServices}
      />

      <ServiceSection
        eyebrow="Condition-specific support"
        title="PCOS, thyroid, diabetes, fatty liver and gut health nutrition services"
        description="Explore the hub plus the dedicated condition pages if you are specifically looking for a PCOS dietitian, thyroid dietitian, diabetes diet plan, fatty liver diet or gut health nutrition support."
        services={conditionServices}
      />

      <ServiceSection
        eyebrow="Family and workplace nutrition"
        title="Kids nutrition and corporate wellness services"
        description="These services support family eating patterns, lunch boxes, fussy eating, teen nutrition and workplace wellness workshops for teams and organisations."
        services={lifestyleServices}
      />

      <section className="bg-[#262262] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-300">One clear process</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">How your DietFiniti journey works</h2>
            <p className="mt-5 max-w-xl leading-8 text-green-100">
              No confusing rules and no one-size-fits-all charts. We begin by understanding what is realistic for you.
            </p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {process.map(([number, title, description]) => (
              <li key={number} className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <div className="flex gap-4">
                  <span className="text-2xl font-black text-green-300">{number}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                    <p className="mt-2 leading-6 text-green-100">{description}</p>
                  </div>
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
            <p className="mt-4 leading-8 text-slate-700">
              You do not need to decide alone. Tell us your primary goal and preferred consultation format; the team can help you identify the most relevant service and explain what it includes.
            </p>
          </div>
          <div className="lg:px-6">
            <h3 className="text-2xl font-bold text-[#262262]">Start with a simple conversation</h3>
            <div className="mt-5 space-y-4 text-slate-700">
              <p className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-green-600" />Ask questions before choosing a programme.</p>
              <p className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-green-600" />Choose online support or clinic appointments in Mumbai and Thane.</p>
              <p className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-green-600" />Understand the next steps, availability and suitability.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/919321057899"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-3.5 font-bold text-white hover:bg-green-800"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp DietFiniti
              </a>
              <Link href="/contact" className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3.5 font-bold text-[#262262] hover:border-[#262262]">
                Visit our clinics
              </Link>
            </div>
            <p className="mt-6 text-xs leading-5 text-slate-500">
              Nutrition guidance does not replace medical diagnosis, treatment or medication. Continue to work with your treating clinician where relevant.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
