# BLOG — SEO, AEO, GEO & AI Overviews Audit

**Audited:** 2026-08-05 · **Scope:** `/blog` plan (see `BLOG_HANDOFF.md`) vs. the four visibility disciplines · **Base:** `arena/019fd150-die` (source audit of `app/`, `public/`, docs)
**Bottom line:** the blog is greenfield. The site already has strong technical-SEO foundations to reuse (canonicals, sitemap, robots, entity schema, FAQ schema, a home-page quick-answer block), but **none of the AEO/GEO/AI-Overview requirements exist yet for blog content**, and several are missing sitewide. Everything below is implementable when the blog is built.

---

## 1. What the audit checked (verified from source)

| Area | Existing site signal | Where |
|---|---|---|
| Canonicals + metadata | ✅ Per-page `alternates.canonical`, OG, Twitter | every page + recipe pages |
| Sitemap / robots | ✅ `sitemap.ts` (includes all 538 recipe URLs), `robots.ts` with sitemap + host | `app/sitemap.ts`, `app/robots.ts` |
| Entity schema | ✅ `WebSite` + `Organization`/`LocalBusiness` graph with address, geo, hours, `areaServed`, `sameAs`, founder | `app/components/SiteStructuredData.tsx` |
| FAQ schema | ✅ `FAQPage` JSON-LD | `app/components/FAQStructuredData.tsx` |
| Recipe schema | ✅ `Recipe` JSON-LD with image, author, keywords | `app/recipe/[slug]/page.tsx` |
| AEO quick-answer block | ✅ "Quick answer:" callout under H1 on homepage | `app/components/HomeSearchAnswers.tsx` |
| Direct answer under H1 (service pages) | ⚠️ Partial — answer paragraphs exist, not a labeled quick-answer block | service pages |
| Blog pages, posts data, nav, sitemap entries | ❌ **Nothing** — `public/blog.png` is the only blog asset | — |
| Author bylines / credentials / reviewer on content | ❌ Missing on all content (author exists only in schema as `founder`) | — |
| Citations/references sections | ❌ Missing sitewide | — |
| Freshness dates (published/updated) | ❌ Missing on all content | — |

---

## 2. SEO (traditional) — blog requirements

Already handled by the framework (reuse, don't rebuild): canonical via `alternates`, XML sitemap, robots, `metadataBase` → absolute OG/Twitter URLs, static generation via `generateStaticParams()`.

**Gaps to close when building:**
1. **Keyword-intent map per post** — one primary intent per post; H1 contains the primary query phrase naturally (e.g. "PCOS Nutrition Support: A Practical Indian Meal-Planning Guide"). No keyword stuffing (roadmap guardrail).
2. **Internal-link hub** — every post links to ≥2 relevant service pages (`/services/medical-weight-loss`, `/online-dietitian-consultation`, etc.), the `/recipe` hub, and sibling posts. Blog listing links to all posts. This mirrors the roadmap's "clear links back to relevant services".
3. **Metadata completeness** — title ≤60 chars, description ≤155 with query phrase, canonical `https://dietfiniti.com/blog/{slug}`, OG `type: article` + `article.published_time`/`article.modified_time` (only if Next's OG metadata passes them through; otherwise add them in the JSON-LD), twitter `summary_large_image` with the post cover.
4. **Heading hierarchy** — exactly one H1; H2s are question-phrased (see AEO); H3s sub-topics; no skipped levels.
5. **Sitemap** — add `/blog` (weekly, 0.8) + `/blog/{slug}` (monthly, 0.6) rows in `app/sitemap.ts`, mirroring the recipe block.
6. **Noindex policies** — filtered/paginated blog-listing states (`?category=`, `?page=`) should be `noindex, follow` or canonicalized back to `/blog`, to avoid thin duplicate archives (matches "no doorway pages" guardrail).
7. **Images** — descriptive alt text, WebP/AVIF compression, `next/image` with proper sizes; covers at `public/image/blog/{slug}.jpg` (see `IMAGE_GENERATION_HANDOFF.md` conventions).
8. **Breadcrumbs** — Home › Blog › Post (visible + `BreadcrumbList` schema — the 2026 AI-Overviews research rates Article + Breadcrumb as sufficient; FAQ/HowTo markup is not a differentiator for AIO but still fine to keep for classic rich results).
9. **Word count** — 1,000–2,000 words for informational posts (not 5,000+ "ultimate guides") — research shows this band wins AI Overview citations ([4](https://llmpulse.ai/blog/optimize-for-google-ai-overviews/), [2](https://www.seerinteractive.com/insights/what-it-takes-to-rank-in-googles-ai-overviews-in-2026-is-not-what-you-think)).
10. **Core Web Vitals** — site uses next/image + Tailwind; keep blog pages light (no heavy client JS on article pages; make them server components).

---

## 3. AEO (Answer Engine Optimization) — "be the quoted answer"

These are the patterns answer engines (and Google's AI Overviews) extract from:

1. **Quick-answer block in the first 100–200 words** of every post — a labeled callout (the site already has this exact pattern: `HomeSearchAnswers.tsx` "Quick answer:" box). AI Overviews cite from the first ~30% of content 55% of the time ([4](https://www.gen-optima.com/geo/generative-engine-optimization-best-practices/)). Reuse the same styling so the blog matches site conventions.
2. **Definition-first sentences** — open every section with a self-contained sentence that defines/concludes the point; GEO research measured +2.1× citation rate for definition-lead structure ([2](https://red-engage.com/blog/generative-engine-optimization)).
3. **Question-phrased headings** — H2s written as the actual query ("What foods help manage PCOS?", "How does a dietitian differ from a nutritionist?"). The model is pattern-matching this QA structure ([4](https://llmpulse.ai/blog/optimize-for-google-ai-overviews/)).
4. **40–80 word direct answers under each question heading** — answer first, depth after. Self-contained passages of ~134–167 words read best for extraction ([2](https://red-engage.com/blog/generative-engine-optimization)).
5. **Visible FAQ section** — 4–8 real questions with answers on the page **and** matching `FAQPage` schema (site pattern exists: `FAQStructuredData.tsx`). Answers must appear visibly; schema must match visible text.
6. **Comparison & process answers visible on-page** — e.g. "PCOS vs. no-PCOS eating", "what happens in an online consultation, step by step" — not only in schema.
7. **Scannable lists, tables, and step-by-step** — answer engines extract list/bullet/table content preferentially ([1](https://seoprofy.com/blog/how-to-rank-in-ai-overviews/), [4](https://llmpulse.ai/blog/optimize-for-google-ai-overviews/)).

---

## 4. GEO (Generative Engine Optimization) — "be the source ChatGPT / Perplexity / Gemini / Claude cite"

The blog is DietFiniti's best GEO lever. Concrete requirements, ranked by measured impact:

1. **Definition-lead architecture** (every section opens with a definition/conclusion sentence) — (+2.1× citation rate) ([2](https://red-engage.com/blog/generative-engine-optimization)).
2. **Stats with named sources** — one "stat + source + implication" per major section. Sourced stats increase citation rates ~+40% ([2](https://red-engage.com/blog/generative-engine-optimization), [4](https://llmpulse.ai/blog/optimize-for-google-ai-overviews/)). Health-niche sources: PubMed, ICMR-NIN, WHO, FSSAI, Indian Council of Medical Research, reputable nutrition bodies. **A claim without a source will not be cited.**
3. **3–5 external authority citations per article**, inline-linked (not just a bibliography at the end) — up to +40% AI visibility ([4](https://www.gen-optima.com/geo/generative-engine-optimization-best-practices/), [3](https://gofishdigital.com/blog/generative-engine-optimization-strategies/)).
4. **Expert quotations** — Dietitian Tejal's own quotes inside posts ("In my practice…"). Quotations boosted citation rates up to +115% in the Princeton GEO research ([2](https://red-engage.com/blog/generative-engine-optimization)).
5. **Stacked schema** — `Article`/`BlogPosting` + `FAQPage` + `Organization` (or the site's `@graph` reference) + `BreadcrumbList` + `Person` author with `jobTitle` and credentials. Pages with the fuller schema stack measured ~1.8× more citations than Article alone ([1](https://www.gen-optima.com/blog/generative-engine-optimization-best-practices-complete-2026-playbook/)).
6. **Entity consistency** — every post bylines "Dietitian Tejal" with her credentials and a link to `/about` (the existing `Person` entity in `SiteStructuredData.tsx`). Consistent naming across site, schema, and external profiles (sameAs: Facebook/Instagram/Pinterest already wired). AI engines ground on entity clarity ([3](https://www.stackmatix.com/blog/google-ai-overviews-impact-seo-2026)).
7. **Freshness signals** — visible `Published`/`Updated` dates on every post; refresh posts every 90 days (un-updated pages lose citations at ~3× the rate); AI Overviews heavily favor content updated within the last 12 months ([4](https://www.gen-optima.com/geo/generative-engine-optimization-best-practices/), [4](https://llmpulse.ai/blog/optimize-for-google-ai-overviews/)).
8. **Unique first-party data points** — DietFiniti's differentiator vs. incumbents: client-observed patterns in Indian diets (e.g., common gaps in Indian meal patterns, typical portioning mistakes) presented as practice observations, not universal claims. Unique data/frameworks get cited when generic content doesn't ([3](https://www.stackmatix.com/blog/google-ai-overviews-impact-seo-2026)).
9. **Platform-specific distribution** — only ~11% of citations overlap across platforms ([5](https://thestacc.com/blog/generative-engine-optimization-guide/)): ChatGPT favors Wikipedia-adjacent clarity → strong entity + definition posts; Perplexity favors Reddit-style Q&A → the FAQ sections and genuine community-guideline posts; AI Overviews favor schema + inner-page content. Publish real answers under a real account on relevant subreddits/Q&A platforms if the owner approves.
10. **Human, not AI-flavored copy** — AI engines deprioritize AI-sounding text ([5](https://thestacc.com/blog/generative-engine-optimization-guide/)). Drafts must carry Dietitian Tejal's voice, experience ("in my practice…", case examples without PII), and specific Indian food references.

---

## 5. Google AI Overviews (and AI Mode)

2026 findings applied to this blog ([4](https://llmpulse.ai/blog/optimize-for-google-ai-overviews/), [3](https://www.stackmatix.com/blog/google-ai-overviews-impact-seo-2026), [2](https://www.seerinteractive.com/insights/what-it-takes-to-rank-in-googles-ai-overviews-in-2026-is-not-what-you-think)):

1. **Restructure posts as question–answer pairs, answer first, depth after.** This is the single most-cited structure.
2. **Write the three citation-winning patterns:**
   - *definition + bullets + table*
   - *stat + source + implication* (one per section)
   - *FAQ-anchored sections*
3. **74% of AIO citations come from top-10 organic results** → traditional SEO fundamentals (sections 2–3) directly feed AI Overview wins; don't skip them.
4. **AIO cites ~11 sources per query (positions 2–11 are real exposure)** → the goal is citation share across a topic cluster, not one #1 slot. Publish a cluster (PCOS, thyroid, diabetes, postpartum, BMI, what-to-expect) and measure across it.
5. **Health is an incumbent-dominated AIO vertical** (Cleveland Clinic holds ~30% AIO share in health ([2](https://www.seerinteractive.com/insights/what-it-takes-to-rank-in-googles-ai-overviews-in-2026-is-not-what-you-think))). DietFiniti wins by being *the obvious source for the specific Indian-food question inside each topic* — local + practical-Indian angle, unique data points — not by out-comprehensiving the clinics.
6. **Freshness is decisive** — dated posts, quarterly updates, no evergreen-claiming stale content.
7. **Schema + bylines: don't over-invest, don't skip** — Article + Breadcrumb + author bios suffice; they aren't the differentiator, but missing author/date signals is disqualifying for YMYL (below).

---

## 6. YMYL / E-E-A-T — non-negotiable for this niche

Nutrition advice is a *Your Money or Your Life* topic; Google holds it to the highest standards ([2](https://outreachmonks.com/what-is-ymyl/), [5](https://seoscore.tools/blog/eeat-optimization/), [4](https://www.1digitalagency.com/blog/e-e-a-t-for-beauty-wellness-brands-the-2026-guide-to-ymyl-ecommerce-seo/)):

1. **Named author on every post** — "Dietitian Tejal" + credentials ("MSc Dietetics, Certified Diabetic Educator") + link to `/about`. Anonymous content is treated as low-E-E-A-T.
2. **Reviewer line** — "Reviewed by Dietitian Tejal, <date>" where a second person (or Tejal reviewing a drafted post) fact-checks; visible on the page.
3. **Credentials must be verifiable** — only real credentials, linkable to LinkedIn/professional listings. The about page already carries them; keep in sync.
4. **Citations to authoritative sources** for every medical/health claim — PubMed, ICMR-NIN, WHO, FSSAI. Uncited health claims are the top YMYL failure mode.
5. **Visible disclaimer** — nutrition guidance supports, not replaces, medical care; not a cure (site already models this language in FAQ answers and BMI page — copy the tone).
6. **Published + updated dates visible** — both in content and `BlogPosting.datePublished`/`dateModified`.
7. **No guarantees** — no "guaranteed weight loss", no cure claims (roadmap guardrails; site already refuses guarantees in FAQ schema — keep consistent).
8. **Editorial gate** — `status: "draft"` until Tejal reviews; do not publish unreviewed posts (already in `BLOG_HANDOFF.md`).

---

## 7. Post template (single spec that satisfies all four disciplines)

```
<H1> Primary query phrase + context (one H1 only)
[Quick answer callout — ≤80 words, direct answer, definition-first]
[Byline: Dietitian Tejal, MSc Dietetics, Certified Diabetic Educator · Published <date> · Updated <date>]
[TL;DR bullets — 3–5 scannable take-aways]

<H2> "What is <topic>?" → definition-lead para (40–80 words), then depth
   - bullets / table where a comparison exists
   - stat + source + implication (1 per major section)

<H2> "How does <topic> affect Indian diets specifically?" → unique practice insight
<H2> "What are practical steps for <audience>?" → numbered steps, self-contained
<H2> "When should you see a dietitian/doctor for <topic>?" → red flags + safety
<H2> FAQs (4–8) → question H2s with 40–80 word visible answers (mirrored in FAQPage schema)

[CTA: "Get a personalised plan" → /online-dietitian-consultation or relevant service]
[References: 3–5 inline-cited authoritative sources]
[Author bio card → /about]
[Disclaimer line]
[JSON-LD: BlogPosting (+datePublished/dateModified/author Person) + FAQPage + BreadcrumbList]
```

---

## 8. Priority matrix

| Priority | Item | Discipline |
|---|---|---|
| P0 | Quick-answer block in first 200 words, definition-first | AEO/AIO |
| P0 | Question-phrased H2s with 40–80 word answers | AEO/AIO/GEO |
| P0 | Author byline + credentials + published/updated dates | SEO/YMYL |
| P0 | BlogPosting + FAQPage schema matching visible content | SEO/GEO |
| P0 | Canonical, metadata, sitemap, nav links, noindex archives | SEO |
| P0 | 3–5 sourced citations + stat+source+implication per post | GEO/AIO |
| P1 | Visible FAQ + reviewer line + disclaimer | AEO/YMYL |
| P1 | Internal links to services + sibling posts; breadcrumbs | SEO |
| P1 | 1,000–2,000 word posts; quarterly freshness updates | AIO |
| P2 | Expert quotes from Dietitian Tejal; unique practice data | GEO |
| P2 | Third-party presence (Reddit/Q&A under real account) | GEO/AIO |
| P2 | Citation-share measurement across cluster | All |

---

## 9. Measurement plan (after launch)

- **Google Search Console:** monitor `/blog*` impressions/clicks; track which queries show the blog in AI Overviews (AIO presence is visible per-query in GSC); submit `sitemap.xml`.
- **AIO citation share:** monthly manual check of ~10 cluster prompts on Google (AI Overviews/AI Mode), ChatGPT, Perplexity, Gemini; record whether dietfiniti.com is cited and at which position (AIO cites ~11 sources — count positions 2–11, not just #1).
- **Refresh cadence:** quarterly review of every post (update `updatedAt` + content); monitor citation loss on untouched pages (3× faster loss baseline).
- **Conversion:** track blog → service-page → consultation CTA path in analytics.

---

## 10. Sources consulted (2026)

- llmpulse.ai — *How to Optimize for Google AI Overviews in 2026* (Jul 2026)
- Seer Interactive — *What It Takes To Rank In Google's AI Overviews in 2026* (May 2026)
- Stackmatix — *Google AI Overviews Impact on SEO: What Changed and How to Adapt* (Apr 2026)
- GenOptima — *GEO Best Practices: Complete 2026 Playbook* (Mar 2026)
- Red Engage — *Generative Engine Optimization (GEO): Complete 2026 Guide* (Jun 2026)
- Go Fish Digital — *GEO Strategies for 2026* (Jan 2026)
- The Stacc — *Generative Engine Optimization (2026): Guide* (Jul 2026)
- Outreach Monks — *What Is YMYL and How Is It Important for SEO in 2026?* (Jan 2026)
- SEOScore.tools — *E-E-A-T Optimization 2026: 15 Signals Google Actually Checks* (Mar 2026)
- 1Digital — *E-E-A-T for Wellness: 2026 YMYL SEO Guide* (Aug 2026)
