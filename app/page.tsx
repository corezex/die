import type { Metadata } from "next";
import Homepage from "@/app/components/HeroSection";
import BelowHeroSection from "@/app/components/BelowHeroSection";
import DietChallengesSection from "@/app/components/DietChallengesSection";
import ProgramsSection from "@/app/components/ProgramsSection";
import UniqueApproachSection from "@/app/components/UniqueApproachSection";
import TrustSection from "@/app/components/TrustSection";
import HowItWorks from "@/app/components/HowItWorks";
import FAQSection from "@/app/components/FAQSection";
import { FAQStructuredData } from "@/app/components/FAQStructuredData";
import VisitUs from "@/app/components/VisitUs";
import HomeSearchAnswers from "@/app/components/HomeSearchAnswers";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "Dietitian in Mumbai | Personalised Weight Loss & Nutrition Plans",
  description: "Dietitian in Mumbai & Thane: Dietitian Tejal (MSc) provides personalised Indian diet plans for weight loss, PCOS, thyroid, pregnancy, sports nutrition and online consultations across India.",
};

export default function Home() {
  return (
    <>
      <Homepage />
      {/* New high-intent section placed immediately below the hero for AEO / AI Overviews / featured snippets */}
      <BelowHeroSection />
      <HomeSearchAnswers />
      <DietChallengesSection />
      <ProgramsSection />
      <TrustSection />
      <UniqueApproachSection />
      <HowItWorks />
      <VisitUs />
      <FAQSection />
      {/* FAQ markup mirrors the visible FAQ content. */}
      <FAQStructuredData />
    </>
  );
}
