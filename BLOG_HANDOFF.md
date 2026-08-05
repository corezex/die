# Blog Status & Instructions for Next Agent

## Project Context

- **Site:** DietFiniti — personalised dietitian & nutrition plans (`https://dietfiniti.com`)
- **Owner/author:** Dietitian Tejal (Mumbai & Thane clinic, online consultations across India)
- **Stack:** Next.js 16 (App Router, TypeScript, Tailwind v4), static JSON data layer, JSON-LD structured data, `npm run build` for verification
- **Working branch:** `arena/019fd150-die` (branched from `main`)
- **Authoritative docs to read first:** `SEO-STRATEGY-AND-PAGE-ROADMAP.md` (blog requirements + guardrails) and `IMAGE_GENERATION_HANDOFF.md` (sibling handoff, image conventions)

---

## Current Blog Status (verified 2026-08-05)

| Item | Status | Notes |
|---|---|---|
| `/blog` listing page | ✅ BUILT | `app/blog/page.tsx` — hero, search, category filter, noindex on filtered states |
| `/blog/[slug]` article pages | ✅ BUILT | `app/blog/[slug]/page.tsx` — 7 posts, SSG via `generateStaticParams` |
| Blog data file | ✅ BUILT | `app/data/posts.json` — 7 published posts (see content list below) |
| Blog nav link | ✅ ADDED | `app/components/Header.tsx` (navigationItems) + Footer quick links |
| Blog URLs in sitemap | ✅ ADDED | `app/sitemap.ts` — `/blog` + 7 post URLs |
| Blog images | 🚫 NONE BY CHOICE | Owner preference (2026-08-05): no images in the blog. Covers were removed, `public/image/blog/` deleted, `coverImage` dropped from `posts.json`. Only sitewide Header/Footer logos remain (on every page). Listing OG meta still uses the pre-existing `public/blog.png` for social sharing (not shown on-page). |
| Phone on CTAs | 🚫 NONE BY CHOICE | Owner preference (2026-08-05): no phone icons or `tel:` details on blog CTAs. Article CTA panel = related-service links only (no icons); listing CTA = single "Book a consultation" button. |
| "Reviewed by" text | 🚫 NONE BY CHOICE | Owner preference (2026-08-05): removed the "Reviewed by Dietitian Tejal" byline badge and the author-card sentence about reviewing content. Byline shows author + credentials + dates only. |
| Articles written | ✅ 7 PUBLISHED | PCOS, thyroid, diabetes, postpartum, BMI guide, consultation guide, meal-planning FAQs |
| `BlogPosting` / `FAQPage` / `BreadcrumbList` schema | ✅ BUILT | Injected on every article page, matching visible content |
| **Remaining work** | ⚠️ | Owner review of medical claims (guardrail: Dietitian Tejal review), then merge to `main` to deploy |

**Published articles (2026-08-05, all `status: "published"`):**
1. `pcos-nutrition-support` — PCOS Nutrition Support: A Practical Indian Diet Guide
2. `thyroid-nutrition-support` — Thyroid Nutrition Support: Diet, Medication Timing & Weight
3. `diabetes-meal-planning` — Diabetes Meal Planning: A Balanced Indian Plate Guide
4. `postpartum-nutrition` — Postpartum Nutrition: Eating Well After Delivery in India
5. `bmi-calculator-guide` — BMI Calculator Guide: What Your BMI Does and Doesn't Mean
6. `what-to-expect-dietitian-consultation` — What to Expect From a Dietitian Consultation
7. `indian-meal-planning-faqs` — Indian Meal Planning FAQs: Building a Healthy Weekly Plate

**Important:** the SEO roadmap guardrail requires Dietitian Tejal to review all medical nutrition content before it is treated as final. The posts were written conservatively (no cure/guarantee claims, sources cited) and are built as `status: "published"` per the request, but plan an owner review pass before promotion to production.

---

## What the blog must include (from `SEO-STRATEGY-AND-PAGE-ROADMAP.md`)

Roadmap item 7, verbatim intent:

> `/blog` — expert bylines, publication/updated dates, citations where medical claims are made, and clear links back to relevant services.

Plus the AEO / AI Overview approach:

- Concise, direct answer immediately below each H1 (before long-form content).
- Answer comparison and process questions visibly on the page, not only in schema.
- Named author/reviewer (Dietitian Tejal), credentials, editorial dates, source citations for health statements, and transparent limitations.
- Structured data only when it matches visible, factual page content.
- Build topical coverage and internal linking around **practical Indian nutrition** — not generic content volume.

## Guardrails (non-negotiable, from the roadmap)

1. **No cure/reverse claims.** Medical nutrition content must not claim to cure, reverse, or replace medical treatment.
2. **Review gate:** every article must be reviewed by Dietitian Tejal before publication. Use a `draft` / `published` flag in the data file; do not ship unreviewed medical claims as published.
3. **No doorway pages** — do not mass-produce near-identical articles per suburb/condition.
4. **Only verifiable facts:** testimonials, ratings, client counts, credentials, awards, addresses, and prices only where accurate and visible to users.
5. **No ranking/health guarantees** in copy or schema.

## Suggested first articles (topics from the roadmap)

1. PCOS nutrition support (links → `/services/medical-weight-loss`, `/online-dietitian-consultation`)
2. Thyroid nutrition support
3. Diabetes meal-planning support
4. Postpartum nutrition support
5. BMI calculator guide (links → `/bmi-calculator`)
6. What to expect from a dietitian consultation (links → `/online-dietitian-consultation`, `/contact`)
7. Indian meal-planning FAQs (FAQ page can be turned into an article)

Each article should end with a conversion CTA linking to a relevant service page (follow the "Book Consultation CTA" placement pattern used on recipe pages).

---

## SEO / AEO / GEO / AI-Overview requirements (full audit)

**Read `BLOG_SEO_AEO_GEO_AUDIT.md` before building** — it is the complete audit (verified 2026-08-05) with sources. Condensed spec every post must satisfy:

- **Quick answer** block in the first 100–200 words (reuse the `HomeSearchAnswers.tsx` "Quick answer:" callout pattern). Answer first, depth after.
- **Question-phrased H2s** with 40–80 word direct answers under each; sections open with a **definition-first sentence**; self-contained passages of ~134–167 words; scannable bullets/lists/tables.
- **1,000–2,000 words** per post (not 5,000-word guides).
- **1 "stat + source + implication" per major section** + **3–5 inline-cited authoritative sources** per article (PubMed, ICMR-NIN, WHO, FSSAI). Uncited health claims = failure.
- **Author byline + credentials** ("Dietitian Tejal, MSc Dietetics, Certified Diabetic Educator") linking to `/about`, plus **visible Published/Updated dates** — YMYL/E-E-A-T non-negotiables for this niche.
- **Stacked schema:** `BlogPosting` (with `datePublished`/`dateModified`/`author` `Person`) + `FAQPage` (matching visible text) + `BreadcrumbList`. Reuse existing schema components for conventions.
- **Internal links:** ≥2 service pages + sibling posts + `/recipe`; conversion CTA near the end.
- **No guarantees/cure claims; medical disclaimer** (nutrition supports, not replaces, medical care) — same tone as the existing FAQ/BMI copy.
- **Freshness:** quarterly review, update `updatedAt`; AI Overviews favor content updated in the last 12 months.
- **Noindex** filtered/paginated listing states (`?category=`, `?page=`) to avoid thin duplicate archives.
- **Measurement:** after launch, track blog queries in Search Console + monthly AI citation checks across Google AI Overviews/AI Mode, ChatGPT, Perplexity, Gemini (citation share across positions 2–11, not just #1).

---

## Step-by-step instructions for the next agent

### 1. Create the blog data layer
Create `app/data/posts.json` following the shape of `app/data/recipes.json` (plain JSON, one array, camelCase fields). Suggested fields per post:

```json
{
  "slug": "pcos-nutrition-support",
  "title": "PCOS Nutrition Support: A Practical Indian Meal-Planning Guide",
  "excerpt": "A dietitian's practical guide to eating well with PCOS...",
  "category": "Condition Support",
  "tags": ["PCOS", "women's health", "Indian diet"],
  "author": "Dietitian Tejal",
  "publishedAt": "2026-08-05",
  "updatedAt": "2026-08-05",
  "readingTime": "6 min read",
  "status": "draft",
  "coverImage": "/image/blog/pcos-nutrition-support.jpg",
  "sections": [
    { "heading": "Short answer", "body": "..." },
    { "heading": "Why this matters", "body": "..." },
    { "heading": "Practical Indian meal-planning tips", "body": "..." }
  ],
  "faqs": [
    { "question": "Can diet cure PCOS?", "answer": "No — nutrition supports symptom management but does not cure PCOS..." }
  ],
  "relatedServices": ["/services/medical-weight-loss", "/online-dietitian-consultation"]
}
```

### 2. Build the listing page — `app/blog/page.tsx`
Copy the patterns from `app/recipe/page.tsx` (server component, `Metadata` export with canonical `https://dietfiniti.com/blog`, category filter, pagination). Show only `status === "published"` posts. Cards: cover image, category, title, excerpt, author + date + reading time, link to `/blog/{slug}`.

### 3. Build the article page — `app/blog/[slug]/page.tsx`
Copy the patterns from `app/recipe/[slug]/page.tsx`:
- `generateStaticParams()` over posts
- `generateMetadata()` → title template `... | DietFiniti`, description, `alternates.canonical` = `https://dietfiniti.com/blog/{slug}`, Open Graph (type `article`, image, `article.published_time` / `article.modified_time` if supported)
- `notFound()` for unknown slugs
- Render: H1, byline block (author, credentials line, published/updated dates), direct-answer block under the H1, sections, visible FAQ, related-services links, conversion CTA, disclaimer footer line
- Inject `BlogPosting` + `FAQPage` JSON-LD (reference `app/components/FAQStructuredData.tsx` and the recipe schema block for the injection pattern). Never emit schema that contradicts visible text.

### 4. Wire navigation and sitemap
- `app/components/Header.tsx` → add `{ name: "Blog", path: "/blog", icon: ... }` to `navigationItems` (place next to Recipes)
- `app/components/Footer.tsx` → add Blog link to the quick-links section
- `app/sitemap.ts` → add `["/blog", "weekly", 0.8]` and a `blogRoutes` array (`/blog/{slug}`, `monthly`, priority `0.6`) — mirror the recipe route block
- `app/robots.ts` — no change needed (crawling is already enabled), just confirm

### 5. Images — NOT used
- **Owner decision (2026-08-05): the blog does not use images.** Do not add cover images to listing cards or article pages, and do not generate/post `public/image/blog/` assets. If this changes, see `IMAGE_GENERATION_HANDOFF.md` for conventions.

### 6. Verify
```bash
npm run lint
npm run build
```
Check: canonical URLs use `https://dietfiniti.com`, all internal links resolve, JSON is valid, and the static export includes `/blog` + every article slug.

### 7. Commit and push
```bash
git add app/blog/ app/data/posts.json app/components/Header.tsx app/components/Footer.tsx app/sitemap.ts BLOG_HANDOFF.md
git commit -m "Add blog listing and article pages with SEO/AEO schema"
git push origin arena/019fd150-die
```
Commit only to the current active branch (`arena/019fd150-die`); never switch branches — this session is tracked by that branch.

---

## Useful reference facts

- Site URL used everywhere: `https://dietfiniti.com` (see `app/layout.tsx`, `app/sitemap.ts`)
- Recipe DB: 538 recipes in `app/data/recipes.json`, all 538 now mapped to images in `public/image/recipes/`
- Existing structured-data conventions: `app/components/SiteStructuredData.tsx` (sitewide), `app/components/FAQStructuredData.tsx`, `app/services/*/*StructuredData.tsx`
- Contact: WhatsApp float + tel `+919321057899`, email `dietfiniti@gmail.com` (from layout/Footer)
- After blog ships, update this handoff: flip statuses to ✅ and note remaining draft articles.
