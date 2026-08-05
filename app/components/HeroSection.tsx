import Image from "next/image";
import tejalPortrait from "@/public/image/homeimage1.jpg";
import { CalendarCheck, MessageCircle, CheckCircle2, MapPin, MonitorSmartphone, Award } from "lucide-react";

/**
 * Home page banner — one layout for all devices.
 * Uses the same light-mint brand green as the online-dietitian-consultation
 * page (#f4faf5 base + green-100 glow), with dark text and green accents.
 * Text on the left; the dietitian's portrait on the right inside an
 * aspect-matched card. On mobile the photo stacks below the text.
 */
export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f4faf5]">
      {/* Light green glow, matching the online consultation page hero */}
      <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-br from-green-100/80 to-transparent" aria-hidden="true" />
      <div className="absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-green-100/50 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid lg:grid-cols-[1.05fr_.95fr]">
        {/* ---- Left: content ---- */}
        <div className="order-2 lg:order-1">
          <p className="inline-block max-w-full rounded-full border border-green-200 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase leading-snug text-green-800 shadow-sm sm:text-xs">
            <MapPin className="-mt-0.5 mr-1.5 inline-block h-3.5 w-3.5 align-middle text-green-600" aria-hidden="true" />
            DietFiniti by Dietitian Tejal · Mumbai, Thane &amp; online across India
          </p>

          <h1 className="mt-5 text-3xl font-bold leading-tight text-[#262262] sm:text-4xl md:text-5xl">
            Personalised dietitian support for{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              sustainable weight management
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Practical nutrition support shaped around your routine, preferences, goals and health
            history — not a generic meal chart. In-person in Mumbai and Thane, or online from anywhere in India.
          </p>

          <ul className="mt-6 space-y-2.5">
            {[
              "Personalised plans built around everyday Indian food",
              "Weekly support and plan adjustments as you progress",
              "Clear, honest guidance — no medicines, powders or guaranteed numbers",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" aria-hidden="true" />
                <span className="text-sm leading-6 text-slate-700 sm:text-base">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-7 py-3.5 font-semibold text-white shadow-lg shadow-green-700/20 transition hover:bg-green-800 hover:shadow-xl"
            >
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              Book a consultation
            </a>
            <a
              href="https://wa.me/919321057899"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#262262] bg-white px-7 py-3.5 font-semibold text-[#262262] transition hover:bg-[#262262] hover:text-white"
            >
              <MessageCircle className="h-5 w-5 text-green-600" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-green-200 pt-5">
            <span className="text-sm font-semibold text-[#262262]">Tejal Parulkar</span>
            <span className="text-sm text-slate-600">MSc Dietetics · Certified Diabetic Educator</span>
            <span className="inline-flex items-center gap-1.5 text-sm text-slate-600">
              <MonitorSmartphone className="h-4 w-4 text-green-600" aria-hidden="true" />
              In-person &amp; online
            </span>
          </div>
        </div>

        {/* ---- Right: dietitian portrait — shown FIRST on mobile so it is never hidden ---- */}
        <div className="relative order-1 mx-auto w-full max-w-[320px] sm:max-w-sm lg:order-2 lg:max-w-none">
          <div className="relative aspect-[7/9] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-green-200">
            <Image
              src={tejalPortrait}
              alt="Dietitian Tejal at the DietFiniti nutrition consultation clinic"
              fill
              priority
              sizes="(max-width: 1024px) 60vw, 40vw"
              quality={80}
              className="object-cover"
            />
            {/* Soft bottom fade for the badge legibility only */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#262262]/60 to-transparent" aria-hidden="true" />
            <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-green-800 ring-1 ring-green-200 backdrop-blur-sm">
              <Award className="h-3.5 w-3.5 text-green-600" aria-hidden="true" />
              Dietitian Tejal · MSc Dietetics
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
