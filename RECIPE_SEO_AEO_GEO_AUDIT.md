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
