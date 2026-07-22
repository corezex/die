import Link from "next/link";

const links = [
  { href: "/services/weight-loss", title: "Weight-loss nutrition support", text: "for people who want a practical plan built around everyday Indian food and routine." },
  { href: "/services/medical-weight-loss", title: "Nutrition support alongside medical care", text: "for people managing a health condition with their treating clinician." },
  { href: "/services/pregnancy-diet", title: "Pregnancy and postpartum nutrition", text: "with guidance that can be tailored to each stage and individual needs." },
  { href: "/services/sports-nutrition", title: "Sports nutrition", text: "for training, performance and recovery goals." },
];

export default function HomeSearchAnswers() {
  return (
    <section aria-labelledby="dietitian-mumbai-heading" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <div>
            <p className="mb-3 font-semibold uppercase tracking-wider text-teal-700 text-sm">Mumbai, Thane & online across India</p>
            <h2 id="dietitian-mumbai-heading" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Looking for a dietitian in Mumbai or an online nutrition consultation?</h2>
            <div className="mt-4 rounded-xl bg-teal-50 border border-teal-200 p-5 text-base leading-7 text-slate-800">
              <strong>Quick answer:</strong> DietFiniti is a personalised nutrition clinic led by Dietitian Tejal (MSc Dietetics, Certified Diabetic Educator) with clinics in Mumbai (Lower Parel) and Thane, plus online consultations across India. Services include weight loss, medical weight management, pregnancy nutrition, sports nutrition, weight gain and bridal plans—designed around Indian food, routine and health history rather than generic meal charts.
            </div>
            <p className="mt-5 text-lg leading-8 text-slate-700">DietFiniti offers personalised nutrition consultations for people in Mumbai and Thane, as well as online consultations across India. Your plan is shaped around your goals, health history, routine and food preferences—not a generic meal chart.</p>
            <p className="mt-4 leading-7 text-slate-700">A consultation is a chance to discuss what is getting in the way, ask questions and decide whether the service is right for you. For diagnosed conditions, nutrition guidance supports—not replaces—care from your doctor.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/online-dietitian-consultation" className="rounded-lg bg-teal-700 px-5 py-3 font-semibold text-white transition hover:bg-teal-800">Explore online consultations</Link>
              <Link href="/contact" className="rounded-lg border border-teal-700 px-5 py-3 font-semibold text-teal-800 transition hover:bg-teal-50">Contact DietFiniti</Link>
            </div>
          </div>
          <aside className="rounded-2xl border border-teal-100 bg-teal-50 p-7" aria-label="Who DietFiniti can help">
            <h3 className="text-xl font-bold text-slate-900">How DietFiniti can help</h3>
            <ul className="mt-5 space-y-4">
              {links.map((item) => <li key={item.href} className="leading-6 text-slate-700"><Link href={item.href} className="font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950">{item.title}</Link> {item.text}</li>)}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
