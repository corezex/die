import { CalendarDays, ShieldCheck, Stethoscope } from "lucide-react";
import { GLP_REVIEW_DATE_LABEL, GLP_REVIEWER } from "./reviewMeta";

export function GlpReviewPanel({
  title = "Reviewed for practical nutrition guidance",
  compact = false,
}: {
  title?: string;
  compact?: boolean;
}) {
  return (
    <section className={compact ? "px-4 py-10 sm:px-6 lg:px-8" : "px-4 py-12 sm:px-6 lg:px-8 lg:py-14"}>
      <div className="mx-auto max-w-7xl rounded-3xl border border-green-100 bg-green-50 p-6 shadow-sm md:p-7">
        <div className="grid gap-5 md:grid-cols-[1.15fr_.85fr] md:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">DietFiniti review note</p>
            <h2 className="mt-2 text-2xl font-bold text-[#262262] md:text-3xl">{title}</h2>
            <p className="mt-3 leading-7 text-slate-700">
              This content is designed for people who are already taking GLP-1 medication under medical supervision and want practical help with meals, appetite changes and everyday food routines.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            <div className="rounded-2xl bg-white p-4 ring-1 ring-green-100">
              <div className="flex items-start gap-3">
                <Stethoscope className="mt-1 h-5 w-5 shrink-0 text-green-700" />
                <div>
                  <p className="text-sm font-semibold text-slate-500">Reviewed by</p>
                  <p className="font-bold text-slate-900">{GLP_REVIEWER.name}</p>
                  <p className="text-sm leading-6 text-slate-700">{GLP_REVIEWER.credentials}</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-4 ring-1 ring-green-100">
              <div className="flex items-start gap-3">
                <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-green-700" />
                <div>
                  <p className="text-sm font-semibold text-slate-500">Last reviewed</p>
                  <p className="font-bold text-slate-900">{GLP_REVIEW_DATE_LABEL}</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-4 ring-1 ring-green-100 sm:col-span-2 md:col-span-1">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-green-700" />
                <div>
                  <p className="text-sm font-semibold text-slate-500">Important scope</p>
                  <p className="text-sm leading-6 text-slate-700">
                    DietFiniti does not prescribe or sell medication. Medication changes, investigations and treatment decisions stay with your doctor or prescribing clinician.
                  </p>
                  <p className="mt-3 text-xs leading-5 text-slate-500">
                    Useful official references:{" "}
                    <a href="https://www.fda.gov/drugs/drug-safety-and-availability/update-fdas-ongoing-evaluation-reports-suicidal-thoughts-or-actions-patients-taking-certain-type" target="_blank" rel="noopener noreferrer" className="font-semibold text-green-700 hover:underline">FDA GLP-1 information</a>
                    {" "}and{" "}
                    <a href="https://www.niddk.nih.gov/health-information/weight-management/prescription-medications-treat-overweight-obesity" target="_blank" rel="noopener noreferrer" className="font-semibold text-green-700 hover:underline">NIDDK weight-management guidance</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
