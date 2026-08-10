import Link from "next/link";

type Feature = [string, string, string]; // icon, title, description
type Step = [string, string, string]; // number, title, description
type Outcome = [string, string, string]; // icon, title, description
type Story = [string, string, string]; // context, duration, testimonial

export function ServiceExtraSections({
  featuresTitle,
  features,
  steps,
  outcomes,
  stories,
}: {
  featuresTitle: string;
  features: Feature[];
  steps: Step[];
  outcomes: Outcome[];
  stories: Story[];
}) {
  return (
    <>
      {/* Program features */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{featuresTitle}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map(([icon, title, description]) => (
              <article key={title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <span className="text-3xl" aria-hidden="true">{icon}</span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology steps */}
      <section className="bg-slate-50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">How it works</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-4">
            {steps.map(([number, title, description]) => (
              <article key={number} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-green-700 font-bold text-white">{number}</span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Expected outcomes */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">What this support focuses on</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Individual results and timelines vary — these reflect the general themes clients describe, not guaranteed outcomes.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {outcomes.map(([icon, title, description]) => (
              <article key={title} className="rounded-xl border border-green-100 bg-green-50 p-6">
                <span className="text-3xl" aria-hidden="true">{icon}</span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Client experiences */}
      <section className="bg-slate-50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">What clients share</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Shared with permission as general themes. Individual results vary; medical care continues with each client&apos;s own clinician.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {stories.map(([context, duration, testimonial]) => (
              <article key={context} className="flex flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-slate-900">{context}</h3>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">{duration}</span>
                </div>
                <p className="mt-4 flex-1 leading-7 text-slate-700">&ldquo;{testimonial}&rdquo;</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-400">Client experience &middot; DietFiniti</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Choose how to speak with DietFiniti */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-20">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Choose how to speak with DietFiniti</h2>
          <p className="mt-5 leading-8 text-slate-700">
            Ask about an in-person consultation in Mumbai or Thane, or online support from elsewhere in India. The team can explain scope, availability and the information that will be helpful before you book.
          </p>
        </div>
        <div className="rounded-2xl bg-green-50 p-7 ring-1 ring-green-100">
          <h3 className="text-2xl font-bold text-slate-900">Start with a consultation</h3>
          <p className="mt-3 leading-7 text-slate-700">
            Share your goals, routine and relevant health context — the team will explain what is appropriate for your situation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-lg bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800">Contact DietFiniti</Link>
            <Link href="/online-dietitian-consultation" className="rounded-lg border border-green-700 px-5 py-3 font-semibold text-green-800 hover:bg-green-50">Online consultations</Link>
          </div>
        </div>
      </section>
    </>
  );
}
