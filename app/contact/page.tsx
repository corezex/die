"use client";

import { FormEvent, useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const locations = [
  {
    name: "Lower Parel clinic, Mumbai",
    address: "Mansi Maternity Home, Ambavat Bhawan, NM Joshi Marg, opposite Marathon Futurex, Lower Parel East, Mumbai 400013",
    map: "https://www.google.com/maps?q=18.9945464,72.8315512",
  },
  {
    name: "Thane clinic",
    address: "1st Floor, Oswal Business Plaza, 109/A, Kolshet Road, above MR D.I.Y, near Kalpataru ParkCity, Dhokali, Thane West, Thane 400607",
    map: "https://www.google.com/maps?q=19.2298596,72.9850993",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", service: "Weight-loss nutrition support", location: "Online consultation", message: "" });
  const [notice, setNotice] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = `Hello DietFiniti, I would like to enquire about a consultation.\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nPreferred option: ${form.location}\nMessage: ${form.message}`;
    setNotice("Opening WhatsApp so you can send your enquiry directly to DietFiniti.");
    window.open(`https://wa.me/919321057899?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "ContactPage", "@id": "https://dietfiniti.com/contact#webpage", url: "https://dietfiniti.com/contact", name: "Contact DietFiniti", about: { "@id": "https://dietfiniti.com/#organization" } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://dietfiniti.com" }, { "@type": "ListItem", position: 2, name: "Contact", item: "https://dietfiniti.com/contact" }] },
      { "@type": "FAQPage", "mainEntity": [
        { "@type":"Question","name":"How is a nutrition plan personalised?","acceptedAnswer":{"@type":"Answer","text":"A plan is shaped around your goal, routine, food preferences, cooking arrangements and relevant health history. It is not a generic meal chart."}},
        { "@type":"Question","name":"Do I need to eat special or expensive foods?","acceptedAnswer":{"@type":"Answer","text":"No. DietFiniti focuses on familiar, everyday food and practical planning."}},
        { "@type":"Question","name":"Can I get support if I have a medical condition?","acceptedAnswer":{"@type":"Answer","text":"Nutrition guidance can support everyday food routines but does not replace medical care."}}
      ]},
    ],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className="bg-gradient-to-br from-teal-950 via-teal-800 to-cyan-700 px-4 py-16 text-white md:py-24">
      <div className="mx-auto max-w-5xl text-center"><p className="font-semibold uppercase tracking-[0.18em] text-teal-100 text-sm">Mumbai, Thane & online across India</p><h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">Contact DietFiniti</h1><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-teal-50 md:text-xl">Ask about a personalised nutrition consultation at our Mumbai or Thane clinics, or an online consultation from anywhere in India.</p></div>
    </section>

    <main className="bg-slate-50 py-16 md:py-20"><div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[.9fr_1.1fr]">
      <aside className="space-y-6">
        <div><h2 className="text-3xl font-bold text-slate-900">Choose a convenient way to connect</h2><p className="mt-4 leading-8 text-slate-700">Tell us what you would like support with and whether you prefer a clinic visit or online consultation. We will use your message to understand your enquiry.</p></div>
        <a href="tel:+919321057899" className="flex gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:ring-teal-400"><Phone className="mt-1 text-teal-700" aria-hidden="true"/><span><strong className="block text-slate-900">Call DietFiniti</strong><span className="mt-1 block text-slate-700">+91 93210 57899</span></span></a>
        <a href="https://wa.me/919321057899" target="_blank" rel="noopener noreferrer" className="flex gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:ring-teal-400"><MessageCircle className="mt-1 text-teal-700" aria-hidden="true"/><span><strong className="block text-slate-900">WhatsApp</strong><span className="mt-1 block text-slate-700">Send a consultation enquiry directly.</span></span></a>
        <a href="mailto:dietfiniti@gmail.com" className="flex gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:ring-teal-400"><Mail className="mt-1 text-teal-700" aria-hidden="true"/><span><strong className="block text-slate-900">Email</strong><span className="mt-1 block text-slate-700">dietfiniti@gmail.com</span></span></a>
        <div className="flex gap-4 rounded-xl bg-teal-50 p-5 ring-1 ring-teal-100"><Clock className="mt-1 text-teal-700" aria-hidden="true"/><span><strong className="block text-slate-900">Clinic hours</strong><span className="mt-1 block text-slate-700">Monday–Friday: 11:00 AM–8:00 PM<br/>Saturday: 11:00 AM–6:00 PM</span></span></div>
      </aside>

      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8" aria-labelledby="enquiry-heading"><h2 id="enquiry-heading" className="text-2xl font-bold text-slate-900">Send a consultation enquiry</h2><p className="mt-2 text-slate-700">This form opens WhatsApp with your enquiry; you can review it before sending.</p><form onSubmit={submit} className="mt-7 grid gap-5"><label className="grid gap-2 font-medium text-slate-800">Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-lg border border-slate-300 px-3 py-3 font-normal outline-none ring-teal-600 focus:ring-2" /></label><label className="grid gap-2 font-medium text-slate-800">Phone number<input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="rounded-lg border border-slate-300 px-3 py-3 font-normal outline-none ring-teal-600 focus:ring-2" /></label><div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 font-medium text-slate-800">What do you need help with?<select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="rounded-lg border border-slate-300 bg-white px-3 py-3 font-normal outline-none ring-teal-600 focus:ring-2">{["Weight-loss nutrition support", "Medical weight-management support", "Pregnancy nutrition", "Weight gain", "Sports nutrition", "Bridal nutrition", "Other"].map((x) => <option key={x}>{x}</option>)}</select></label><label className="grid gap-2 font-medium text-slate-800">Preferred option<select value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="rounded-lg border border-slate-300 bg-white px-3 py-3 font-normal outline-none ring-teal-600 focus:ring-2">{["Online consultation", "Lower Parel clinic, Mumbai", "Thane clinic", "Not sure yet"].map((x) => <option key={x}>{x}</option>)}</select></label></div><label className="grid gap-2 font-medium text-slate-800">Message <span className="font-normal text-slate-500">(optional)</span><textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} className="resize-y rounded-lg border border-slate-300 px-3 py-3 font-normal outline-none ring-teal-600 focus:ring-2" /></label><button type="submit" className="rounded-lg bg-teal-700 px-5 py-3 font-semibold text-white transition hover:bg-teal-800">Continue on WhatsApp</button>{notice && <p role="status" className="text-sm text-teal-800">{notice}</p>}</form></section>
    </div></main>

    <section className="bg-white px-4 py-16 md:py-20"><div className="mx-auto max-w-6xl"><h2 className="text-3xl font-bold text-slate-900">Visit DietFiniti in Mumbai or Thane</h2><p className="mt-3 max-w-3xl leading-7 text-slate-700">Please contact the team before visiting to ask about appointment availability and the most suitable consultation option.</p><div className="mt-8 grid gap-6 md:grid-cols-2">{locations.map((location) => <article key={location.name} className="rounded-xl border border-slate-200 p-6"><MapPin className="text-teal-700" aria-hidden="true"/><h3 className="mt-4 text-xl font-bold text-slate-900">{location.name}</h3><address className="mt-3 not-italic leading-7 text-slate-700">{location.address}</address><a href={location.map} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block font-semibold text-teal-800 underline underline-offset-4">Open in Google Maps</a></article>)}</div></div></section>
    <section className="bg-white px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-slate-900">What happens next</h2>
        <p className="mt-3 max-w-3xl leading-7 text-slate-700">A simple, transparent path from your first enquiry to an ongoing personalised nutrition plan.</p>
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["1", "Enquire", "Message via the form, WhatsApp, phone or email. The team typically responds within one working day."],
            ["2", "Consultation", "Discuss your goal, routine, food preferences and relevant health history so guidance can be considered in context."],
            ["3", "Personalised plan", "If you choose to enrol, receive your personalised nutrition plan shortly after your consultation."],
            ["4", "Ongoing follow-ups", "Use regular check-ins to discuss progress, questions and adjustments over time."],
          ].map(([n, title, text]) => (
            <li key={n} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-700 font-bold text-white">{n}</span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-3 leading-7 text-slate-700">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="bg-slate-50 px-4 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-slate-900">Contact FAQs</h2>
        <div className="mt-7 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {[
            ["How is a nutrition plan personalised?", "A plan is shaped around your goal, routine, food preferences, cooking arrangements and relevant health history. It is not a generic meal chart."],
            ["Do I need to eat special or expensive foods?", "No. DietFiniti focuses on familiar, everyday food and practical planning. Ask during your consultation about what is appropriate for your circumstances."],
            ["How often will I have follow-ups?", "Follow-up frequency depends on the programme you select. The team will explain what is included before you enrol."],
            ["Can I get support if I have a medical condition?", "Nutrition guidance can support everyday food routines but does not replace medical care. Continue to work with your treating clinician for diagnosis, medication and clinical decisions."],
            ["How long does it take to see progress?", "Individual results and timelines vary. DietFiniti focuses on realistic, sustainable habits rather than promising a particular result by a specific date."],
            ["What payment options are available?", "Payment options can be discussed at the time of enrolment. The team will explain the fees and process before you commit."],
            ["What if progress feels slow?", "Follow-ups are the space to discuss what is or is not working. Plans are refined based on realistic feedback from your everyday life."],
            ["Will my results last after the programme?", "The focus is on building food habits you can continue to use. Long-term maintenance depends on ongoing choices; individual outcomes vary."],
          ].map(([q, a]) => (
            <details key={q} className="group p-5">
              <summary className="cursor-pointer list-none pr-8 font-semibold text-slate-900">{q}<span className="float-right text-teal-700 group-open:rotate-45">+</span></summary>
              <p className="mt-4 leading-7 text-slate-700">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-teal-50 px-4 py-14"><div className="mx-auto max-w-4xl"><h2 className="text-2xl font-bold text-slate-900">Before you book</h2><p className="mt-3 leading-7 text-slate-700">DietFiniti provides nutrition education and personalised dietary guidance. It does not replace medical diagnosis, treatment or medication. If you have a medical condition, are pregnant, breastfeeding or take medication, please continue to work with your treating clinician.</p></div></section>
  </>;
}
