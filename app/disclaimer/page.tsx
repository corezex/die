import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Disclaimer",
  description: "Important health and medical information disclaimer for DietFiniti nutrition services.",
  alternates: { canonical: "/disclaimer" },
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  return <article className="mx-auto max-w-4xl px-5 py-16 text-gray-800">
    <h1 className="mb-6 text-3xl font-bold">Health Disclaimer</h1>
    <div className="space-y-5 leading-7">
      <p>DietFiniti provides nutrition education and personalised dietary guidance. Information on this website and in consultations is not a substitute for diagnosis, treatment or advice from a qualified medical doctor.</p>
      <p>Nutrition needs and outcomes vary by person. We do not guarantee weight loss, disease prevention, cure or any particular health outcome. Please consult your physician before changing your diet, exercise routine or medication, especially if you are pregnant, breastfeeding, have a medical condition or are taking medication.</p>
      <p>For urgent or emergency medical concerns, contact your doctor or local emergency services immediately.</p>
      <p>Last updated: July 22, 2026.</p>
    </div>
  </article>;
}
