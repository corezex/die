"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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

const servicesSections: MenuSection[] = [
  {
    title: "Start here",
    description: "Choose a starting point if you are comparing services or consultation format.",
    items: [
      { name: "All Services", path: "/services", icon: Utensils },
      { name: "Online Consultation", path: "/online-dietitian-consultation", icon: PhoneCall },
      { name: "GLP-1 Nutrition Hub", path: "/glp-1-medications", icon: Pill },
    ],
  },
  {
    title: "Weight & body goals",
    description: "Personalised nutrition for body-composition and weight-management goals.",
    items: [
      { name: "Weight Loss Program", path: "/services/weight-loss", icon: Scale },
      { name: "Medical Weight Loss", path: "/services/medical-weight-loss", icon: HeartPulse },
      { name: "Weight Gain Program", path: "/services/weight-gain", icon: Dumbbell },
    ],
  },
  {
    title: "Condition support",
    description: "Food guidance that works alongside medical care and routine follow-up.",
    items: [
      { name: "Condition Nutrition", path: "/services/condition-nutrition", icon: Stethoscope },
      { name: "PCOS Nutrition", path: "/services/pcos-nutrition", icon: Sparkles },
      { name: "Thyroid Nutrition", path: "/services/thyroid-nutrition", icon: HeartPulse },
      { name: "Diabetes Nutrition", path: "/services/diabetes-nutrition", icon: Activity },
      { name: "Fatty Liver Nutrition", path: "/services/fatty-liver-nutrition", icon: HeartPulse },
      { name: "Gut Health & IBS", path: "/services/gut-health-nutrition", icon: Salad },
    ],
  },
  {
    title: "Family & specialist support",
    description: "Nutrition support for life stage, performance and workplace needs.",
    items: [
      { name: "Pregnancy Diet Plan", path: "/services/pregnancy-diet", icon: Baby },
      { name: "Bridal Diet Plan", path: "/services/bridal-diet", icon: Sparkles },
      { name: "Sports Nutrition", path: "/services/sports-nutrition", icon: Trophy },
      { name: "Kids Nutrition", path: "/services/kids-nutrition", icon: Baby },
      { name: "Corporate Wellness", path: "/services/corporate-wellness", icon: Briefcase },
    ],
  },
  {
    title: "GLP-1 support: commonly asked pages",
    description: "Most-visited medication pages for people looking for practical diet support.",
    items: [
      { name: "Ozempic", path: "/glp-1-medications/ozempic", icon: Pill },
      { name: "Wegovy", path: "/glp-1-medications/wegovy", icon: Pill },
      { name: "Rybelsus", path: "/glp-1-medications/rybelsus", icon: Pill },
      { name: "Mounjaro", path: "/glp-1-medications/mounjaro", icon: Pill },
      { name: "Zepbound", path: "/glp-1-medications/zepbound", icon: Pill },
      { name: "Saxenda", path: "/glp-1-medications/saxenda", icon: Pill },
    ],
  },
  {
    title: "GLP-1 support: complete medication list",
    description: "Additional medication pages available in the GLP-1 section.",
    items: [
      { name: "Victoza", path: "/glp-1-medications/victoza", icon: Pill },
      { name: "Trulicity", path: "/glp-1-medications/trulicity", icon: Pill },
      { name: "Byetta", path: "/glp-1-medications/byetta", icon: Pill },
      { name: "Bydureon BCise", path: "/glp-1-medications/bydureon-bcise", icon: Pill },
      { name: "Adlyxin", path: "/glp-1-medications/adlyxin", icon: Pill },
      { name: "Foundayo", path: "/glp-1-medications/foundayo", icon: Pill },
    ],
  },
];

const resourceLinks: MenuLink[] = [
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
    description: "A simple tool for weight and health context.",
  },
  {
    name: "Testimonials",
    path: "/testimonials",
    icon: Star,
    description: "Client experiences and feedback.",
  },
];

const primaryLinks: MenuLink[] = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: Users },
  { name: "Blog", path: "/blog", icon: BookOpen },
  { name: "Contact", path: "/contact", icon: PhoneCall },
];

type OpenDesktopMenu = "services" | "resources" | null;

export default function Header() {
  const [openDesktopMenu, setOpenDesktopMenu] = useState<OpenDesktopMenu>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const desktopMenuRef = useRef<HTMLDivElement>(null);

  const closeDesktopMenus = () => setOpenDesktopMenu(null);

  const closeAllMenus = () => {
    setOpenDesktopMenu(null);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileResourcesOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (desktopMenuRef.current && !desktopMenuRef.current.contains(event.target as Node)) {
        closeDesktopMenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAllMenus();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleDesktopMenu = (menu: Exclude<OpenDesktopMenu, null>) => {
    setOpenDesktopMenu((current) => (current === menu ? null : menu));
  };

  const desktopLinkClass =
    "flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition duration-300 hover:text-green-700";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between gap-3 lg:h-[72px]">
          <Link href="/" className="flex shrink-0 items-center text-green-700 transition hover:text-green-800" onClick={closeAllMenus}>
            <Image src={logoMark} alt="DietFiniti logo mark" width={40} height={40} className="mr-2 object-contain" priority />
            <Image src={logoWordmark} alt="DietFiniti" width={126} height={40} className="object-contain" priority />
          </Link>

          <div ref={desktopMenuRef} className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center">
            <nav className="flex items-center gap-1">
              {primaryLinks.slice(0, 2).map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.path} href={item.path} className={desktopLinkClass} onClick={closeDesktopMenus}>
                    <Icon className="mr-1.5 h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}

              <div className="relative">
                <div className="flex items-center">
                  <Link href="/services" className={desktopLinkClass} onClick={closeDesktopMenus}>
                    <Utensils className="mr-1.5 h-4 w-4" />
                    Services
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggleDesktopMenu("services")}
                    className="rounded-lg p-2 text-gray-500 transition hover:text-green-700"
                    aria-expanded={openDesktopMenu === "services"}
                    aria-label="Toggle services menu"
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform ${openDesktopMenu === "services" ? "rotate-180" : ""}`} />
                  </button>
                </div>

                {openDesktopMenu === "services" && (
                  <div className="absolute left-1/2 top-full mt-4 max-h-[72vh] w-[1080px] -translate-x-1/2 overflow-y-auto rounded-3xl border border-green-100 bg-white p-6 shadow-2xl">
                    <div className="grid gap-5 xl:grid-cols-3">
                      {servicesSections.map((section) => (
                        <section key={section.title} className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                          <p className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">{section.title}</p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{section.description}</p>
                          <div className="mt-4 grid gap-2">
                            {section.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.path}
                                  href={item.path}
                                  onClick={closeAllMenus}
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
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/blog" className={desktopLinkClass} onClick={closeDesktopMenus}>
                <BookOpen className="mr-1.5 h-4 w-4" />
                Blog
              </Link>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDesktopMenu("resources")}
                  className={desktopLinkClass}
                  aria-expanded={openDesktopMenu === "resources"}
                  aria-label="Toggle resources menu"
                >
                  <BookOpen className="mr-1.5 h-4 w-4" />
                  Resources
                  <ChevronDown className={`ml-1.5 h-4 w-4 transition-transform ${openDesktopMenu === "resources" ? "rotate-180" : ""}`} />
                </button>

                {openDesktopMenu === "resources" && (
                  <div className="absolute right-0 top-full mt-4 w-[380px] rounded-3xl border border-green-100 bg-white p-5 shadow-2xl">
                    <div className="grid gap-3">
                      {resourceLinks.map((item) => {
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
              </div>

              <Link href="/contact" className={desktopLinkClass} onClick={closeDesktopMenus}>
                <PhoneCall className="mr-1.5 h-4 w-4" />
                Contact
              </Link>
            </nav>
          </div>

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

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-white lg:hidden">
          <div className="border-b border-slate-200 bg-white px-4 py-4 shadow-sm">
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
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">DietFiniti</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">Personalised nutrition support in Mumbai, Thane and online across India.</p>
            </div>
          </div>

          <div className="px-4 pb-28 pt-4">
            <nav className="space-y-2">
              {primaryLinks.map((item) => {
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

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((open) => !open)}
                  className="flex w-full items-center justify-between px-4 py-4 text-left"
                  aria-expanded={mobileServicesOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-700 ring-1 ring-green-100">
                      <Utensils className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Services</p>
                      <p className="text-xs text-slate-500">All programmes and GLP-1 pages</p>
                    </div>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>

                {mobileServicesOpen && (
                  <div className="border-t border-slate-200 bg-slate-50 p-3">
                    <div className="space-y-3">
                      {servicesSections.map((section) => (
                        <section key={section.title} className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">{section.title}</p>
                          <p className="mt-1 text-xs leading-5 text-slate-500">{section.description}</p>
                          <div className="mt-3 grid gap-2">
                            {section.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.path}
                                  href={item.path}
                                  onClick={closeAllMenus}
                                  className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-green-50 hover:text-green-700"
                                >
                                  <Icon className="h-4 w-4 text-green-700" />
                                  <span>{item.name}</span>
                                </Link>
                              );
                            })}
                          </div>
                        </section>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <button
                  type="button"
                  onClick={() => setMobileResourcesOpen((open) => !open)}
                  className="flex w-full items-center justify-between px-4 py-4 text-left"
                  aria-expanded={mobileResourcesOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-700 ring-1 ring-green-100">
                      <BookOpen className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Resources</p>
                      <p className="text-xs text-slate-500">Recipes, BMI calculator and testimonials</p>
                    </div>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${mobileResourcesOpen ? "rotate-180" : ""}`} />
                </button>

                {mobileResourcesOpen && (
                  <div className="border-t border-slate-200 bg-slate-50 p-3">
                    <div className="grid gap-2">
                      {resourceLinks.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.path}
                            href={item.path}
                            onClick={closeAllMenus}
                            className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:bg-green-50"
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
                  </div>
                )}
              </div>
            </nav>

            <div className="mt-6">
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
