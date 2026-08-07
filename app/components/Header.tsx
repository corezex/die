"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Baby,
  BookOpen,
  Briefcase,
  ChefHat,
  ChevronDown,
  Dumbbell,
  HeartPulse,
  Home,
  Menu,
  Phone,
  PhoneCall,
  Pill,
  Salad,
  Scale,
  Sparkles,
  Star,
  Stethoscope,
  Trophy,
  Users,
  Utensils,
  X,
} from "lucide-react";

import logoMark from "@/public/image/logo2.png";
import logoWordmark from "@/public/image/logo.png";

type MenuLink = {
  name: string;
  path: string;
  icon: LucideIcon;
  description?: string;
};

type MenuSection = {
  title: string;
  description: string;
  items: MenuLink[];
};

type OpenMenu = "services" | "resources" | null;

const mainLinks: MenuLink[] = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: Users },
  { name: "Articles", path: "/blog", icon: BookOpen },
  { name: "Contact", path: "/contact", icon: PhoneCall },
];

const servicesSections: MenuSection[] = [
  {
    title: "Get Started",
    description: "Start here if you want an overview, online consultation or direct help choosing the right service.",
    items: [
      { name: "Services Overview", path: "/services", icon: Utensils },
      { name: "Online Consultation", path: "/online-dietitian-consultation", icon: PhoneCall },
      { name: "Talk to DietFiniti", path: "/contact", icon: PhoneCall },
    ],
  },
  {
    title: "Popular Programmes",
    description: "Personalised nutrition plans for weight goals, performance and major life stages.",
    items: [
      { name: "Weight Loss Program", path: "/services/weight-loss", icon: Scale },
      { name: "Medical Weight Loss", path: "/services/medical-weight-loss", icon: HeartPulse },
      { name: "Weight Gain Program", path: "/services/weight-gain", icon: Dumbbell },
      { name: "Pregnancy Diet Plan", path: "/services/pregnancy-diet", icon: Baby },
      { name: "Bridal Diet Plan", path: "/services/bridal-diet", icon: Sparkles },
      { name: "Sports Nutrition", path: "/services/sports-nutrition", icon: Trophy },
    ],
  },
  {
    title: "Condition-Based Nutrition",
    description: "Practical food guidance that works alongside routine medical care and long-term health goals.",
    items: [
      { name: "Condition Nutrition Hub", path: "/services/condition-nutrition", icon: Stethoscope },
      { name: "PCOS Nutrition", path: "/services/pcos-nutrition", icon: Sparkles },
      { name: "Thyroid Nutrition", path: "/services/thyroid-nutrition", icon: HeartPulse },
      { name: "Diabetes Nutrition", path: "/services/diabetes-nutrition", icon: Activity },
      { name: "Fatty Liver Nutrition", path: "/services/fatty-liver-nutrition", icon: HeartPulse },
      { name: "Gut Health & IBS", path: "/services/gut-health-nutrition", icon: Salad },
    ],
  },
  {
    title: "Family & Workplace Nutrition",
    description: "Support for children, families and teams who want better everyday eating habits.",
    items: [
      { name: "Kids Nutrition", path: "/services/kids-nutrition", icon: Baby },
      { name: "Corporate Wellness", path: "/services/corporate-wellness", icon: Briefcase },
    ],
  },
  {
    title: "GLP-1 Medication Support",
    description: "Popular GLP-1 pages for clients who want practical meal guidance while using these medications.",
    items: [
      { name: "GLP-1 Nutrition Hub", path: "/glp-1-medications", icon: Pill },
      { name: "Ozempic", path: "/glp-1-medications/ozempic", icon: Pill },
      { name: "Wegovy", path: "/glp-1-medications/wegovy", icon: Pill },
      { name: "Rybelsus", path: "/glp-1-medications/rybelsus", icon: Pill },
      { name: "Mounjaro", path: "/glp-1-medications/mounjaro", icon: Pill },
      { name: "Zepbound", path: "/glp-1-medications/zepbound", icon: Pill },
    ],
  },
  {
    title: "Other GLP-1 Medications",
    description: "Additional medication pages for clients using other GLP-1 brands.",
    items: [
      { name: "Saxenda", path: "/glp-1-medications/saxenda", icon: Pill },
      { name: "Victoza", path: "/glp-1-medications/victoza", icon: Pill },
      { name: "Trulicity", path: "/glp-1-medications/trulicity", icon: Pill },
      { name: "Byetta", path: "/glp-1-medications/byetta", icon: Pill },
      { name: "Bydureon BCise", path: "/glp-1-medications/bydureon-bcise", icon: Pill },
      { name: "Adlyxin", path: "/glp-1-medications/adlyxin", icon: Pill },
      { name: "Foundayo", path: "/glp-1-medications/foundayo", icon: Pill },
    ],
  },
];

const resourcesLinks: MenuLink[] = [
  {
    name: "Recipes",
    path: "/recipe",
    icon: ChefHat,
    description: "Healthy Indian recipes and practical meal ideas.",
  },
  {
    name: "BMI Calculator",
    path: "/bmi-calculator",
    icon: Activity,
    description: "A quick tool to understand your weight and health context.",
  },
  {
    name: "Testimonials",
    path: "/testimonials",
    icon: Star,
    description: "Read what clients say about their DietFiniti experience.",
  },
];

function SectionCard({ section, onNavigate }: { section: MenuSection; onNavigate: () => void }) {
  return (
    <section className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">{section.title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{section.description}</p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {section.items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              href={item.path}
              onClick={onNavigate}
              className="flex items-center gap-3 rounded-xl bg-white px-3 py-3 text-sm font-semibold text-slate-800 transition hover:bg-green-50 hover:text-green-700"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-700 ring-1 ring-green-100">
                <Icon className="h-4 w-4" />
              </span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeAllMenus = () => {
    setOpenMenu(null);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAllMenus();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen || openMenu ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen, openMenu]);

  const desktopLinkClass =
    "flex items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:text-green-700";

  const desktopTop = "top-[82px]";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between gap-3 lg:h-[72px]">
          <Link href="/" className="flex shrink-0 items-center text-green-700 transition hover:text-green-800" onClick={closeAllMenus}>
            <Image src={logoMark} alt="DietFiniti logo mark" width={40} height={40} className="mr-2 object-contain" priority />
            <Image src={logoWordmark} alt="DietFiniti" width={126} height={40} className="object-contain" priority />
          </Link>

          <nav className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:gap-1">
            {mainLinks.slice(0, 2).map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.path} href={item.path} className={desktopLinkClass} onClick={() => setOpenMenu(null)}>
                  <Icon className="mr-1.5 h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}

            <button
              type="button"
              onClick={() => setOpenMenu((current) => (current === "services" ? null : "services"))}
              className={`${desktopLinkClass} bg-transparent`}
              aria-expanded={openMenu === "services"}
              aria-label="Toggle services menu"
            >
              <Utensils className="mr-1.5 h-4 w-4" />
              Services
              <ChevronDown className={`ml-1.5 h-4 w-4 transition-transform ${openMenu === "services" ? "rotate-180" : ""}`} />
            </button>

            <Link href="/blog" className={desktopLinkClass} onClick={() => setOpenMenu(null)}>
              <BookOpen className="mr-1.5 h-4 w-4" />
              Articles
            </Link>

            <button
              type="button"
              onClick={() => setOpenMenu((current) => (current === "resources" ? null : "resources"))}
              className={`${desktopLinkClass} bg-transparent`}
              aria-expanded={openMenu === "resources"}
              aria-label="Toggle resources menu"
            >
              <BookOpen className="mr-1.5 h-4 w-4" />
              Resources
              <ChevronDown className={`ml-1.5 h-4 w-4 transition-transform ${openMenu === "resources" ? "rotate-180" : ""}`} />
            </button>

            {mainLinks.slice(3).map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.path} href={item.path} className={desktopLinkClass} onClick={() => setOpenMenu(null)}>
                  <Icon className="mr-1.5 h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex lg:items-center">
            <a href="tel:+919321057899" className="inline-flex items-center rounded-xl bg-green-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800" aria-label="Call DietFiniti">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a href="tel:+919321057899" className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700 transition hover:bg-green-200" aria-label="Call DietFiniti">
              <Phone className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition hover:bg-slate-200"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {openMenu && (
        <>
          <button
            type="button"
            aria-label="Close menu overlay"
            className="fixed inset-0 z-[55] hidden bg-black/20 lg:block"
            onClick={() => setOpenMenu(null)}
          />
          {openMenu === "services" ? (
            <div className={`fixed left-1/2 z-[60] hidden w-[min(1120px,calc(100vw-32px))] max-h-[calc(100dvh-104px)] -translate-x-1/2 overflow-y-auto overscroll-contain rounded-3xl border border-green-100 bg-white p-6 shadow-2xl lg:block ${desktopTop}`}>
              <div className="mb-5 flex items-start justify-between gap-6 border-b border-slate-200 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-green-700">Services menu</p>
                  <h2 className="mt-2 text-2xl font-bold text-[#262262]">Explore DietFiniti services in one place</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                    Browse services by goal, health condition, life stage and GLP-1 medication support. Every page listed below is live and available from this menu.
                  </p>
                </div>
                <Link href="/services" onClick={closeAllMenus} className="shrink-0 rounded-xl border border-green-200 px-4 py-2.5 text-sm font-semibold text-green-800 transition hover:bg-green-50">
                  View all services
                </Link>
              </div>

              <div className="grid gap-5 xl:grid-cols-3">
                {servicesSections.map((section) => (
                  <SectionCard key={section.title} section={section} onNavigate={closeAllMenus} />
                ))}
              </div>
            </div>
          ) : (
            <div className={`fixed left-1/2 z-[60] hidden w-[min(380px,calc(100vw-32px))] max-h-[calc(100dvh-104px)] -translate-x-1/2 overflow-y-auto overscroll-contain rounded-3xl border border-green-100 bg-white p-5 shadow-2xl lg:block ${desktopTop}`}>
              <div className="grid gap-3">
                {resourcesLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={closeAllMenus}
                      className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200 transition hover:bg-green-50 hover:text-green-700 hover:ring-green-100"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-green-700 ring-1 ring-green-100">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="font-semibold text-slate-900">{item.name}</p>
                          {item.description ? <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p> : null}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[70] h-[100dvh] overflow-y-auto overscroll-contain bg-white lg:hidden">
          <div className="sticky top-0 z-10 border-b border-slate-200 bg-white px-4 py-4 shadow-sm">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center" onClick={closeAllMenus}>
                <Image src={logoMark} alt="DietFiniti logo mark" width={40} height={40} className="mr-2 object-contain" priority />
                <Image src={logoWordmark} alt="DietFiniti" width={126} height={40} className="object-contain" priority />
              </Link>
              <button type="button" onClick={closeAllMenus} className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700" aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 rounded-2xl bg-green-50 p-3 ring-1 ring-green-100">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">Website menu</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">Browse services, GLP-1 pages, articles and resources from one full-screen menu.</p>
            </div>
          </div>

          <div className="space-y-5 px-4 pb-28 pt-4">
            <section className="grid grid-cols-2 gap-2">
              {mainLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={closeAllMenus}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-green-50 hover:text-green-700"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-700 ring-1 ring-green-100">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">Services</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">All services and GLP-1 medication pages are visible below for phone, tablet portrait and tablet landscape layouts.</p>
              <div className="mt-4 space-y-4">
                {servicesSections.map((section) => (
                  <SectionCard key={section.title} section={section} onNavigate={closeAllMenus} />
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">Resources</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {resourcesLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={closeAllMenus}
                      className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200 transition hover:bg-green-50"
                    >
                      <Icon className="mt-0.5 h-4 w-4 text-green-700" />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                        {item.description ? <p className="mt-1 text-xs leading-5 text-slate-500">{item.description}</p> : null}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>

            <div>
              <a href="tel:+919321057899" className="block rounded-2xl bg-green-700 px-4 py-3 text-center text-sm font-semibold text-white">
                Call Now: +91 93210 57899
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
