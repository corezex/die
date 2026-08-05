# WEBSITE — Full SEO / AEO / AI Overviews / GEO / E-E-A-T Audit

**Audited:** 2026-08-05 · **Scope:** entire site (home, about, 6 service pages, online consultation, contact, BMI, testimonials, legal, 537 recipe pages, 87 blog posts) · **Base:** `arena/019fd150-die` (source + built-output audit)
**Related docs:** `BLOG_SEO_AEO_GEO_AUDIT.md`, `RECIPE_SEO_AEO_GEO_AUDIT.md` (earlier passes — blog & recipe pages are already fixed)

---

## 1. Executive summary

The site is in strong shape for technical SEO and structured data, with three genuine issues found in this pass — all **fixed**:

| # | Severity | Finding | Fix |
|---|---|---|---|
| 1 | 🔴 High | **Duplicate JSON-LD on all 6 service pages** — each page emitted its `Service`+`BreadcrumbList`+`FAQPage` schema **twice** (once from the page component, once from `page.tsx`). | Removed the duplicate render + import from each `page.tsx`; verified 1 schema block per page in the build. |
| 2 | 🔴 High | **NAP inconsistency** — the sitewide `LocalBusiness` schema listed only the Lower Parel address, while the footer, contact page and VisitUs section display **two clinics** (Lower Parel + Thane). Thane was invisible to local-search/GEO entity extraction. | Added both clinics as `MedicalClinic` `location` nodes in the entity graph (`/contact` visible NAP used verbatim). |
| 3 | 🟠 Medium | **Contact page FAQPage schema didn't match visible FAQ** — schema had 3 paraphrased Q&As; the visible "Contact FAQs" section has 8 different Q&As (schema-visible mismatch = rich-result risk). | Schema now emits the exact 8 visible Q&As. |

Also fixed: **sports & bridal service pages had a visible FAQ with no FAQPage schema** (added, matching exactly); **bridal page had two H1s** (duplicate section H1 demoted to H2 — now every page sitewide has exactly one H1); **no custom 404** (added a branded, `noindex` 404).

---

## 2. Technical SEO

| Check | Status | Notes |
|---|---|---|
| `metadataBase` | ✅ | `https://dietfiniti.com` in `app/layout.tsx` — relative OG/Twitter images resolve absolute |
| Title template | ✅ | `%s \| DietFiniti` on all pages; each page sets its own title |
| Canonicals | ✅ | Every static page, blog post and recipe page has `alternates.canonical` |
| Sitemap | ✅ | `app/sitemap.ts` — 645 URLs: ~26 static + 537 recipes + 87 blog posts (all status:published) |
| Robots | ✅ | Allow all, disallow `/api/` `/_next/`, sitemap + host |
| Thin duplicate handling | ✅ | `/recipe?page=&category=&q=` and blog filtered states → `noindex, follow` + canonical |
| SSG / performance | ✅ | Blog + recipes statically generated; `next/image` with sizes; no heavy client JS on content pages |
| H1 uniqueness | ✅ **fixed** | Bridal page had 2 H1s → demoted section H1 to H2; audited every built page = exactly 1 H1 |
| Custom 404 | ✅ **added** | Branded 404 with internal links + `noindex, follow` |
| Image optimisation | ⚠️ | `PRODUCTION_RESCAN_REPORT.md` flagged 3840px hero images; recommend compressing `public/image/*.jpg` (next/image resizes at serve-time, so LCP is served optimised, but file size in repo is large) |

---

## 3. Structured data / GEO (generative engine optimisation)

### Entity graph (sitewide) — `SiteStructuredData.tsx`
✅ `WebSite` → `Organization`/`LocalBusiness`/`DietNutrition` `@id`s used consistently by service, recipe and blog schema (linked data, not orphan blocks)
✅ NAP, geo, opening hours, `areaServed` (Mumbai, Thane, India), `availableLanguage`, `sameAs` (FB/IG/Pinterest), `makesOffer` (6 services), `founder` Person
✅ **Fixed:** both clinics now in the graph as `MedicalClinic` `location` nodes (Thane was missing)

### Service pages (6)
✅ Each: `Service` + `BreadcrumbList` (+ FAQPage where visible FAQs exist)
✅ **Fixed:** duplicate JSON-LD (was 2× per page) → exactly 1×
✅ **Fixed:** sports & bridal now have `FAQPage` schema matching their visible FAQs (weight-loss, medical-weight-loss, pregnancy, weight-gain already matched)
⚠️ Visible FAQ ≠ schema FAQ was checked on every page: all now match exactly

### Recipe pages (537)
✅ `Recipe` (name, image, Person author, dates, keywords, times, yield, category, cuisine, nutrition, ingredients, HowToSteps) + `FAQPage` + `BreadcrumbList` — from earlier pass
✅ No fabricated `aggregateRating` (removed earlier)

### Blog posts (87)
✅ `BlogPosting` (Person author → `/about`, `datePublished`/`dateModified`, keywords) + `FAQPage` + `BreadcrumbList` + OG article meta — from earlier pass

### Contact
✅ `ContactPage` + `BreadcrumbList` + `FAQPage` — **fixed:** schema now mirrors the 8 visible FAQs exactly

### ⚠️ Verify-with-owner (displayed, so not fabricated — but confirm verifiable per roadmap guardrail)
- `aggregateRating: 5.0 / 250` in the entity graph — "250+ 5★ Reviews" is displayed on the About page (Google-reviews carousel), so it passes the "visible" test; owner should confirm the count is current/verifiable.
- `Award: India 2000 Best MSME Awards (2021)` — displayed on About; confirm verifiable.
- Service-page stat claims: sports "2,00+ athletes", "99% performance improvement", "99% faster recovery"; bridal "99% goal achievement" — visible but strong claims; owner review recommended.

---

## 4. AEO (Answer Engine Optimization)

| Pattern | Status |
|---|---|
| Quick-answer block in first ~200 words | ✅ Home (`HomeSearchAnswers`), blog posts, recipe pages |
| Question-phrased H2s | ✅ Service pages ("A consultation can help you explore…", "Weight-loss nutrition FAQs"), blog, recipes |
| Visible FAQ + matching FAQPage schema | ✅ Home, all 6 services, contact, online-dietitian, blog, recipes |
| Answer-first copy, lists/tables | ✅ Service pages use scannable cards/lists; recipes use ingredient lists + numbered steps |
| Direct answer under service H1s | ⚠️ Partially — service pages open with a clear paragraph but not a labelled "Quick answer" callout (recommendation, not a blocker) |

**Recommended (future):** add labelled quick-answer callouts under service-page H1s, and add 1–2 "stat + source + implication" lines per service page for AI-Overview citation.

---

## 5. AI Overviews

- ✅ QA structure (question H2 → 40–80-word answer) present on blog + recipes (the highest-citation structure)
- ✅ Freshness: blog dates staggered Jan–Aug 2026, `dateModified` in schema
- ✅ Author entity + credentials visible (Person schema → `/about`) — helps YMYL citation
- ⚠️ Health is an incumbent-dominated vertical (Cleveland Clinic ~30% AIO share); DietFiniti's play is the practical-Indian + local angle, which the content now supports
- ⚠️ Recipe `why_healthy`/`who_for` health claims appear in FAQ schema — recommend Dietitian Tejal review (flagged before, still outstanding)

---

## 6. E-E-A-T (YMYL — nutrition is Your Money or Your Life)

| Signal | Status | Evidence |
|---|---|---|
| Named author + credentials | ✅ | Blog + recipe bylines: "Dietitian Tejal, MSc Dietetics, Certified Diabetic Educator"; Person schema on blog/recipe |
| About page (person, qualifications, experience) | ✅ | `/about`: credentials, experience stats, Person schema, alumniOf (Sion Hospital, Bhatia Hospital) |
| Contact / NAP | ✅ | Two clinics + phone + WhatsApp + email + hours on `/contact` and footer |
| Medical disclaimers | ✅ | `/disclaimer` + disclaimers on BMI, service pages, recipes, blogs; "supports—not replaces—medical care" language |
| Testimonials | ✅ | Real client stories; **no fake review schema** (intentionally suppressed — correct) |
| Transparency (no guarantees) | ✅ | "No guaranteed weight loss" FAQ on service pages; honest pace language |
| Editorial review claims | ✅ | "Reviewed by" claims removed from blog per owner (previous turn) — nothing unverifiable claimed |
| ⚠️ Owner action | — | Confirm displayed stats (ratings/award/99%) are verifiable; confirm Tejal reviews recipe health claims |

---

## 7. Fixes applied in this pass (summary)

1. `SiteStructuredData.tsx` — added Thane clinic `MedicalClinic` node to entity graph.
2. `app/contact/page.tsx` — FAQPage schema rebuilt from the 8 exact visible FAQs.
3. `app/services/{sports-nutrition,bridal-diet}/…StructuredData.tsx` — added FAQPage matching visible FAQs.
4. All 6 service `page.tsx` — removed duplicate `<XStructuredData />` render + unused import (schema was emitted twice).
5. `app/services/bridal-diet/BridalDietSections.tsx` — duplicate H1 demoted to H2.
6. `app/not-found.tsx` — added branded 404 (noindex).

**Verified:** build clean; 1 Service schema + 1 FAQPage per service page; exactly 1 H1 on every built page; contact schema questions = visible FAQ questions; Thane clinic present in home-page entity graph.

## 8. Recommendations (owner / future)
- Compress `public/image/*.jpg` (3840px heroes) and consider AVIF.
- Add labelled quick-answer callouts + a sourced stat to each service page.
- Confirm the displayed rating/award/99% claims are verifiable (or remove from visible + schema).
- Get Dietitian Tejal's review of recipe `why_healthy`/`who_for` claims before treating them as final.
- Track GSC + AI citation share per the measurement plan in the blog audit.
