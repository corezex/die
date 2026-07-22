import { CarouselSlide } from "./ImageCarousel";

// Before & after transformations
import beforeafter1 from "@/public/testimonials/beforeafter1.jpg";
import beforeafter2 from "@/public/testimonials/beforeafter2.jpg";
import beforeafter3 from "@/public/testimonials/beforeafter3.jpg";
import beforeafter4 from "@/public/testimonials/beforeafter4.jpg";
import beforeafter5 from "@/public/testimonials/beforeafter5.jpg";
import beforeafter6 from "@/public/testimonials/beforeafter6.jpg";

// Google review screenshots
import Bridalweightloss from "@/public/testimonials/t-Bridalweightloss.jpeg";
import Bridalweightloss1 from "@/public/testimonials/t-Bridalweightloss1.jpeg";
import Bridalweightloss2 from "@/public/testimonials/t-Bridalweightloss2.jpeg";
import Medicalweightloss1 from "@/public/testimonials/t-Medicalweightloss1.jpeg";
import Medicalweightloss2 from "@/public/testimonials/t-Medicalweightloss2.jpeg";
import Medicalweightloss3 from "@/public/testimonials/t-Medicalweightloss3.jpeg";
import Medicalweightloss4 from "@/public/testimonials/t-Medicalweightloss4.jpeg";
import Medicalweightloss5 from "@/public/testimonials/t-Medicalweightloss5.jpeg";
import Sportsnutrition1 from "@/public/testimonials/t-Sportsnutrition1.jpeg";
import WeightLoss1 from "@/public/testimonials/t-Weight-Loss1.jpeg";
import weightloss2 from "@/public/testimonials/t-weightloss2.jpeg";
import weightloss3 from "@/public/testimonials/t-weightloss3.jpeg";
import weightloss4 from "@/public/testimonials/t-weightloss4.jpeg";

export const testimonialSlides: CarouselSlide[] = [
  { src: beforeafter1, alt: "Client before and after transformation 1", label: "Before & After" },
  { src: beforeafter2, alt: "Client before and after transformation 2", label: "Before & After" },
  { src: beforeafter3, alt: "Client before and after transformation 3", label: "Before & After" },
  { src: beforeafter4, alt: "Client before and after transformation 4", label: "Before & After" },
  { src: beforeafter5, alt: "Client before and after transformation 5", label: "Before & After" },
  { src: beforeafter6, alt: "Client before and after transformation 6", label: "Before & After" },
  { src: Bridalweightloss, alt: "Google review - Bridal weight loss", label: "Google Review" },
  { src: Bridalweightloss1, alt: "Google review - Bridal weight loss 2", label: "Google Review" },
  { src: Bridalweightloss2, alt: "Google review - Bridal weight loss 3", label: "Google Review" },
  { src: Medicalweightloss1, alt: "Google review - Medical weight loss", label: "Google Review" },
  { src: Medicalweightloss2, alt: "Google review - Medical weight loss 2", label: "Google Review" },
  { src: Medicalweightloss3, alt: "Google review - Medical weight loss 3", label: "Google Review" },
  { src: Medicalweightloss4, alt: "Google review - Medical weight loss 4", label: "Google Review" },
  { src: Medicalweightloss5, alt: "Google review - Medical weight loss 5", label: "Google Review" },
  { src: Sportsnutrition1, alt: "Google review - Sports nutrition", label: "Google Review" },
  { src: WeightLoss1, alt: "Google review - Weight loss", label: "Google Review" },
  { src: weightloss2, alt: "Google review - Weight loss 2", label: "Google Review" },
  { src: weightloss3, alt: "Google review - Weight loss 3", label: "Google Review" },
  { src: weightloss4, alt: "Google review - Weight loss 4", label: "Google Review" },
];

function shuffleSlides<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Random order that mixes Before & After with Google Review slides */
export function shuffleMixedTestimonialSlides(slides: CarouselSlide[]): CarouselSlide[] {
  const beforeAfter = shuffleSlides(
    slides.filter((s) => s.label === "Before & After")
  );
  const googleReviews = shuffleSlides(
    slides.filter((s) => s.label === "Google Review")
  );

  const mixed: CarouselSlide[] = [];
  let baIndex = 0;
  let grIndex = 0;
  let lastLabel: string | null = null;

  while (baIndex < beforeAfter.length || grIndex < googleReviews.length) {
    const canShowBefore = baIndex < beforeAfter.length;
    const canShowReview = grIndex < googleReviews.length;

    let pickBefore: boolean;
    if (!canShowReview) pickBefore = true;
    else if (!canShowBefore) pickBefore = false;
    else if (lastLabel === "Before & After") pickBefore = Math.random() < 0.35;
    else if (lastLabel === "Google Review") pickBefore = Math.random() < 0.65;
    else pickBefore = Math.random() < 0.5;

    if (pickBefore) {
      mixed.push(beforeAfter[baIndex++]);
      lastLabel = "Before & After";
    } else {
      mixed.push(googleReviews[grIndex++]);
      lastLabel = "Google Review";
    }
  }

  return mixed;
}
