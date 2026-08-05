import Image from "next/image";
import homeimage from "@/public/image/homeimage.jpg";
import { CalendarCheck, MessageCircle, CheckCircle2, MapPin, MonitorSmartphone } from "lucide-react";

/**
 * Home page banner — a single layout with one background image that works
 * identically on every device (no desktop/mobile split).
 * Server component: no client JS, no animation library needed.
 */
export default function HeroSection() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-teal-950">
      {/* Single background image used on all devices */}
      <Image
        src={homeimage}
        alt="Dietitian Tejal at the DietFiniti nutrition consultation clinic"
        fill
        priority
        sizes="100vw"
        quality={80}
        className="object-cover"
      />

      {/* Consistent legibility overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/65 to-slate-900/30" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-transparent to-teal-950/40" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-100 ring-1 ring-white/20 backdrop-blur-sm sm:text-sm">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            DietFiniti by Dietitian Tejal · Mumbai, Thane &amp; online across India
          </p>

          {/* H1 */}
          <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Personalised dietitian support for{" "}
            <span className="bg-gradient-to-r from-teal-300 to-emerald-200 bg-clip-text text-transparent">
              sustainable weight management
            </span>
          </h1>

          {/* Sub copy */}
          <p className="mt-4 max-w-xl text-base leading-7 text-teal-50/90 sm:text-lg">
            Practical nutrition support shaped around your routine, preferences, goals and health
            history — not a generic meal chart. In-person in Mumbai and Thane, or online from anywhere in India.
          </p>

          {/* Trust points — same on all devices */}
          <ul className="mt-6 space-y-2.5">
            {[
              "Personalised plans built around everyday Indian food",
              "Weekly support and plan adjustments as you progress",
              "Clear, honest guidance — no medicines, powders or guaranteed numbers",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-300" aria-hidden="true" />
                <span className="text-sm leading-6 text-teal-50 sm:text-base">{point}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-teal-900/30 transition hover:from-teal-400 hover:to-emerald-400 hover:shadow-xl"
            >
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              Book a consultation
            </a>
            <a
              href="https://wa.me/919321057899"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-teal-800 shadow-lg transition hover:bg-teal-50"
            >
              <MessageCircle className="h-5 w-5 text-green-600" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Credentials strip — visible on every device */}
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/15 pt-5">
            <span className="text-sm font-semibold text-white">Tejal Parulkar</span>
            <span className="text-sm text-teal-100/90">MSc Dietetics · Certified Diabetic Educator</span>
            <span className="inline-flex items-center gap-1.5 text-sm text-teal-100/80">
              <MonitorSmartphone className="h-4 w-4" aria-hidden="true" />
              In-person &amp; online
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
