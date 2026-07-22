# Batch 4: Image & Meta Fixes Report
**Date:** 2026-07-22  |  **Repo:** /home/user/diet-repo

---

## MISSING META DESCRIPTIONS (add these in page.tsx Metadata)
| Page | Status | Suggested Description |
|---|---|---|
| `/about/page.tsx` | MISSING | "About DietFiniti and Dietitian Tejal. MSc Dietetics, Certified Diabetic Educator, 12+ years clinical experience in Mumbai and Thane." |
| `/contact/page.tsx` | MISSING | "Contact DietFiniti for personalised nutrition consultations in Mumbai, Thane and online across India. WhatsApp, call or email." |
| `/testimonials/page.tsx` | MISSING | "Client experiences and success stories from DietFiniti's weight loss, pregnancy, sports and bridal nutrition programmes." |
| `/services/page.tsx` | MISSING | "Explore DietFiniti's personalised nutrition programmes: weight loss, medical weight management, pregnancy, sports, weight gain and bridal plans." |
| `/blog/page.tsx` | MISSING | "Health and nutrition articles from DietFiniti covering Indian diets, weight management, pregnancy nutrition and lifestyle tips." |
| `/recipe/page.tsx` | MISSING | "Healthy Indian recipes and meal planning ideas from DietFiniti for sustainable nutrition and everyday eating." |
| `/bmi-calculator/page.tsx` | MISSING | "Calculate your BMI and understand what it means for your weight-management goals with DietFiniti's practical guidance." |

---

## IMAGE COMPRESSION RECOMMENDATIONS
Check `/public/image/` and `/public/` for oversized assets:
- Hero images (`homeimage`, `home-mobile-view`) loaded at 3840px
- Service images (`weightlossimg`, `MedicalWeightLoss1`, etc.) at 1920–3840px
- Certificate images (`CertificateTejal*`) high resolution

**Recommendation:** Compress all images to WebP format, max width 1200px, target <150 KB per image. Use Next.js `Image` component with `priority` only for above-fold images.

---

## EDITS APPLIED IN THIS SESSION
- `app/components/SiteStructuredData.tsx` — AggregateRating, Award, makesOffer
- `app/components/HomeSearchAnswers.tsx` — Quick answer box
- `app/testimonials/page.tsx` — Static fallback cards
- `app/services/*/page.tsx` — All 6 service pages: structured data imports + usage
- `app/services/bridal-diet/page.tsx` — Restored formatting
- `app/services/sports-nutrition/page.tsx` — Restored + added schema
- `app/services/weight-gain/page.tsx` — Restored + added schema
- `app/about/AboutStructuredData.tsx` — Person + credentials schema
- `app/contact/page.tsx` — FAQPage schema added
