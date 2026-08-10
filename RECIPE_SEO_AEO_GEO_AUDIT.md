# RECIPE — SEO, AEO, GEO & AI Overviews Audit

**Audited:** 2026-08-05 · **Scope:** `/recipe` listing + all 538 `/recipe/[slug]` pages · **Base:** `arena/019fd150-die` (source audit)

---

## 1. Findings

### Critical (fixed)
| # | Finding | Fix |
|---|---|---|
| C1 | **Fabricated `aggregateRating`** — every recipe page injected `ratingValue: "4.8"` with `ratingCount = Math.random()*130+20`. No ratings are collected or displayed. This is misleading structured data — a Google spam-policy violation that can disqualify recipe rich results and cause manual actions. | **Removed entirely.** No rating markup until real, visible user ratings exist. |
| C2 | **Indexable thin duplicates** — `/recipe?page=2..23`, `?category=…`, `?q=…` are all indexable with no canonical, creating ~23 near-duplicate listing pages. | Filtered/paginated states now emit `noindex, follow` + `rel=canonical` to `/recipe` (same pattern as the blog). |
| C3 | **No `datePublished`-type freshness/E-E-A-T signals visible** — no author byline, no credentials, no breadcrumb UI, single hardcoded `datePublished` in schema. | Added visible byline ("Recipe by Dietitian Tejal — MSc Dietetics, Certified Diabetic Educator"), visible breadcrumb UI matching the existing `BreadcrumbList` schema, and moved schema `datePublished` to a single truthful site-launch constant. |

### Important (fixed)
| # | Finding | Fix |
|---|---|---|
| I1 | Author in schema was `Organization` ("DietFiniti"), not the human expert — weaker entity/E-E-A-T for recipe rich results. | Author is now `Person` (Dietitian Tejal) with `jobTitle`, `url` → `/about`, `worksFor` → site `#organization` (links to the sitewide entity graph in `SiteStructuredData.tsx`). |
| I2 | No FAQ content on recipe pages — a key AEO/AI-Overview signal for recipe queries ("how many calories", "how long", "is it healthy"). | Added 4 visible FAQs per recipe + matching `FAQPage` JSON-LD, generated from the recipe's own visible data (nutrition, times, `why_healthy`, `who_for`). Answers always mirror visible page content. |
| I3 | No internal cross-linking between recipes — each page linked only back to `/recipe`. | Added "More {category} recipes" section (up to 4 related recipes, same category) → internal link graph across all 538 pages. |
| I4 | `keywords` contained duplicate/generic tags (`["Healthy","Indian","Healthy"]` in 176 recipes). | Deduped via `Set` before emitting schema keywords. |
| I5 | No Twitter card metadata on recipe pages. | Added `twitter: card=summary_large_image` with absolute image URL. |
| I6 | `intro_content` (the AEO answer paragraph) was visually unstyled. | Styled as a "Quick answer" callout matching the blog pattern — direct answer visible in the first ~200 words (AEO/AI Overviews). |

### Already good (verified, kept)
- ✅ Canonicals + OG metadata on detail pages; `metadataBase` resolves relative OG images to absolute.
- ✅ `Recipe` schema with ingredients, instructions, times, yield, category, cuisine, nutrition — strong GEO/AIO base.
- ✅ `BreadcrumbList` schema on every detail page.
- ✅ Sitemap includes all 538 recipe URLs; robots allows.
- ✅ SSG via `generateStaticParams` (no JS runtime cost; fast LCP).
- ✅ Question-phrased H2s already present: "Why is {title} healthy?", "Who is this recipe for?".
- ✅ Scannable ingredient list + numbered instructions (citation-friendly structures).

### Known limitations (data, not code)
- 50 recipes lack `cook_time` (FAQ generation handles this; schema omits `cookTime` for them).
- `difficulty` is always "Easy" (data); no per-recipe author review dates exist — a single truthful launch date is used.
- No genuine per-recipe ratings exist — intentionally no rating markup (C1) until real user ratings are collected and displayed.

---

## 2. Post-fix checklist

1. `npm run build` — all 538 pages regenerate cleanly.
2. Sample page check: no `aggregateRating` in JSON-LD; `author` is `Person`; `FAQPage` present; FAQ answers match visible text; breadcrumb UI visible.
3. `/recipe?page=2` returns `noindex, follow` + canonical `/recipe`; `/recipe` returns `index, follow`.
4. Related-recipes links resolve to real slugs.

## 3. Future recommendations
- Collect real recipe ratings (visible + schema) once users can rate.
- Add per-recipe `dateModified` on data updates.
- Consider `HowTo` schema only if step-by-step with images/video becomes available (not needed for rich results today).
- Add "reviewed by" medical disclaimer line only on condition-specific recipes if Dietitian Tejal review is confirmed per recipe (owner previously opted out of "reviewed by" claims on the blog — same policy applies here unless changed).

---

## 4. Title audit (2026-08-05, follow-up)

### Finding
12 duplicate titles were shared across **45 recipes** (template-generated content, e.g. "Antioxidant Green/Fruit Smoothie" × 9, "High-Protein Chickpea Pasta" × 6, "Protein-Packed Chia Pudding" × 5). Every affected page emitted an identical `<title>` tag and identical listing card heading, and the copy inside each page referenced the generic template name instead of the actual dish (e.g. a Mango Smoothie page whose text said "Antioxidant Green/Fruit Smoothie").

### Fix (applied)
- **43 recipes retitled** to unique, accurate names derived from each recipe's slug (the slug encoded the real dish): e.g. `mango-smoothie` → "Mango Smoothie", `beet-chips` → "Baked Beetroot Chips (Low Oil)", `paneer-wrap` → "Paneer Whole-Wheat Wrap", `walnut-brownie` → "Ragi Walnut Brownie (No Sugar)".
- **Templated copy synced**: `description`, `intro_content`, `why_healthy` and instructions now reference each recipe's own new title.
- **Templated first-ingredient placeholders replaced** with real ingredients for the retitled recipes (e.g. "1 cup primary ingredient for X (e.g., …)" → "1 cup ripe mango, peeled and chopped").
- **1 true duplicate removed**: `garlic-pepper-soup-1` was byte-identical to `garlic-pepper-soup` (same description, ingredients, instructions, nutrition, times). Removed from data + image file deleted. Recipe count: 538 → **537** (site copy says "500+" — unaffected).
- **Title tag bug fixed**: recipe pages previously rendered `… | DietFiniti | DietFiniti` (page metadata already contained "| DietFiniti" and the layout template appended it again). Removed the duplicate from the page metadata → single suffix.
- `sesame-noodle` / `sesame-noodles` were near-duplicates (differed only in nutrition/times); both kept but titles differentiated ("Sesame Zucchini Noodles" / "Sesame Noodles") — flag for consolidation if desired.

### Verification
- ✅ 537 recipes, **537 unique titles** (data + rendered `<title>` tags — checked all built HTML files).
- ✅ `garlic-pepper-soup-1` gone from data, build output and sitemap.
- ✅ `npm run build` clean; all titles render with a single "| DietFiniti" suffix.

### Content cleanup — COMPLETE (2026-08-05, follow-up "fix everything")
All templated content in the recipe database has been replaced with real content:
- **Ingredient placeholders eliminated (498 recipes fixed):** "primary ingredient for X", "primary base for X", "healthy flour blend", "Greek Yogurt Dip base", "primary grain for X", and "{Dish} base (e.g., …)" lines all replaced with real, dish-specific ingredient lines (e.g. `mango-smoothie` now starts "1 cup ripe mango, peeled and chopped"; `methi-thepla-low-oil` starts "1 cup whole wheat flour" + "1 cup fresh methi (fenugreek) leaves"). 0 placeholders remain.
- **Wrong cooking methods fixed (159 recipes):** recipes whose instructions said "Preheat your oven / air-fry" but were actually soups, dals, stir-fries, bhurjis, chutneys, beverages, stovetop desserts or porridges now have correct method-specific steps (soup method for soups, tadka method for dals, tawa method for sabzis, etc.). Genuinely baked items (brownies, muffins, chips, samosas, mathri) kept their oven/air-fryer method.
- **Flatbread instructions personalised (38 recipes):** generic "Sift the required healthy flours (like jowar, bajra…)" replaced with each recipe's actual flour ("Measure out 1 cup bajra…").
- **Templated instruction wording cleaned (361 recipes):** "the primary ingredients for the X" / "primary grain" / "(e.g., brown rice, quinoa, millet, or oats)" parentheticals removed.
- **Double-space artifacts removed.** All instruction steps verified to start with "Step N:".
- **Verified:** 537 recipes, 537 unique titles/slugs, no duplicate content fingerprints among title groups, 0 malformed steps, `npm run build` clean, all 537 pages regenerate with correct instructions in the `Recipe` schema.


---

## 5. Health-claim review — RESOLVED (2026-08-05)

**Outstanding item:** "Get Dietitian Tejal's review of recipe `why_healthy`/`who_for` health claims" — addressed by rewriting the claims to safe, evidence-aware language so they do not require a blocking expert review to publish.

### What was wrong (all 537 recipes)
- `why_healthy` opened with an unsupported authority claim: *"Nutrition experts and clinical dietitians recommend {recipe} because it utilizes {benefit} rather than highly processed alternatives."*
- Shared boilerplate made medical overclaims: *"stabilize blood sugar levels and prevents insulin spikes"*, *"anti-inflammatory spices"*, *"aids digestion, boosts metabolism"*.
- `who_for` (identical on all 537) claimed *"highly recommended for individuals managing PCOS, diabetes…"* with a *"low glycemic index"* universal claim and no medical-care caveat.
- `intro_content` claimed *"Dietitian Tejal recommends this recipe…"* (endorsement attribution she had not confirmed per recipe).
- 140 recipes listed *"turmeric powder (haldi) for anti-inflammatory benefits"* as an ingredient.
- 3 recipes were named with "Detox" ("Cabbage Detox Soup", "Healthy Detox Green Tea", "Mint Coriander Detox").

### What was done
- `why_healthy` → *"This recipe is built around {benefit}."* + safe tail: *"As part of a balanced diet, it supports a pattern of fibre-rich, minimally processed eating. The spices add flavour with little or no extra salt, sugar or fat, and the fibre supports everyday digestion."*
- `who_for` → *"This recipe can suit anyone who enjoys practical, balanced Indian meals — including people managing PCOS, diabetes or weight goals — as part of an overall eating pattern. For a diagnosed condition, follow your doctor's or dietitian's guidance; this recipe is not a treatment for any condition."*
- `intro_content` → removed "Dietitian Tejal recommends…" (now *"It is part of the DietFiniti recipe collection, built for balanced everyday Indian eating."*)
- Turmeric line → *"for colour and flavour"*.
- 3 "Detox" recipe **titles** renamed (slugs/URLs unchanged): "Cabbage Soup", "Healthy Green Tea", "Mint Coriander Drink".

### Verification
- Regex audit across title, description, why_healthy, who_for, intro_content, ingredients, instructions: **0 remaining risky matches** (cure/reverse/treat/prevent-as-claim/anti-inflammatory/detox/boost/guarantee/low-glycemic-index/clinical-dietitians-recommend/Tejal-recommends).
- `npm run build` clean; recipe FAQPage schema now emits the safe text; renamed pages render under their original slugs.
