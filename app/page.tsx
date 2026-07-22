import type { Metadata } from "next";
import Homepage from "@/app/components/HeroSection";
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
  title: "Personalised Dietitian & Nutrition Plans",
  description: "Personalised diet plans and nutrition consultations from Dietitian Tejal. Practical Indian meal guidance for clients in Mumbai, Thane and online across India.",
};

export default function Home() {
  return (
    <>
      <Homepage />
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
