import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Clock, ChefHat, Users, CheckCircle2, ChevronRight } from "lucide-react";
import recipesData from "@/app/data/recipes.json";

const SITE_URL = "https://dietfiniti.com";

interface Recipe {
  slug: string;
  title: string;
  category: string;
  description: string;
  why_healthy: string;
  who_for: string;
  prep_time: number;
  cook_time?: number;
  total_time: number;
  servings: number;
  difficulty: string;
  ingredients: string[];
  instructions: string[];
  nutrition: {
    calories: string;
    protein: string;
    carbohydrates: string;
    fat: string;
    fiber: string;
  };
  tags: string[];
  coverImage: string;
  intro_content: string;
}

export async function generateStaticParams() {
  return recipesData.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const recipe = recipesData.find((r) => r.slug === params.slug);

  if (!recipe) return {};

  const canonical = `${SITE_URL}/recipe/${recipe.slug}`;

  return {
    title: `${recipe.title} Recipe - Healthy Indian Food | DietFiniti`,
    description: recipe.description,
    alternates: {
      canonical
    },
    openGraph: {
      title: `${recipe.title} - Healthy Indian Recipe`,
      description: recipe.description,
      type: "article",
      url: canonical,
      siteName: "DietFiniti",
      images: [{ url: `${SITE_URL}${recipe.coverImage}`, alt: recipe.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${recipe.title} - Healthy Indian Recipe`,
      description: recipe.description,
      images: [`${SITE_URL}${recipe.coverImage}`],
    },
  };
}

function sentenceCase(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default async function RecipePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const recipe = recipesData.find((r) => r.slug === params.slug) as Recipe | undefined;

  if (!recipe) {
    notFound();
  }

  // Unique, non-generic keywords for schema (dedupe and drop overly generic terms)
  const keywords = [...new Set(recipe.tags)].filter(t => t.toLowerCase() !== "healthy").join(", ") || recipe.category;

  // ---- FAQ data (visible on page AND in FAQPage schema, always grounded in visible content) ----
  const faqs = [
    {
      question: `How many calories are in ${recipe.title}?`,
      answer: `Each serving of ${recipe.title} contains ${recipe.nutrition.calories}, with ${recipe.nutrition.protein} protein, ${recipe.nutrition.carbohydrates} carbohydrates, ${recipe.nutrition.fat} fat and ${recipe.nutrition.fiber} fibre.`,
    },
    {
      question: `How long does it take to make ${recipe.title}?`,
      answer: recipe.cook_time
        ? `${sentenceCase(recipe.title)} takes about ${recipe.total_time} minutes in total: ${recipe.prep_time} minutes of preparation and ${recipe.cook_time} minutes of cooking. It makes ${recipe.servings} servings.`
        : `${sentenceCase(recipe.title)} takes about ${recipe.total_time} minutes to make and serves ${recipe.servings} people.`,
    },
    {
      question: `Is ${recipe.title} healthy?`,
      answer: recipe.why_healthy,
    },
    {
      question: `Who is ${recipe.title} good for?`,
      answer: recipe.who_for,
    },
  ];

  // ---- Related recipes (internal links across the recipe hub) ----
  const relatedRecipes = recipesData
    .filter((r) => r.category === recipe.category && r.slug !== recipe.slug)
    .slice(0, 4);
  const relatedFallback = relatedRecipes.length >= 2
    ? relatedRecipes
    : recipesData.filter((r) => r.slug !== recipe.slug).slice(0, 4);

  // ---- Structured data ----
  const recipeSchema: Record<string, unknown> = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": recipe.title,
    "image": [`${SITE_URL}${recipe.coverImage}`],
    "author": {
      "@type": "Person",
      "name": "Dietitian Tejal",
      "jobTitle": "Dietitian",
      "url": `${SITE_URL}/about`,
      "worksFor": { "@id": `${SITE_URL}/#organization` },
    },
    "datePublished": "2026-08-05",
    "description": recipe.description,
    "keywords": keywords,
    "prepTime": `PT${recipe.prep_time}M`,
    "totalTime": `PT${recipe.total_time}M`,
    "recipeYield": `${recipe.servings} servings`,
    "recipeCategory": recipe.category,
    "recipeCuisine": "Indian",
    "nutrition": {
      "@type": "NutritionInformation",
      "servingSize": "1 serving",
      "calories": recipe.nutrition.calories,
      "proteinContent": recipe.nutrition.protein,
      "carbohydrateContent": recipe.nutrition.carbohydrates,
      "fatContent": recipe.nutrition.fat,
      "fiberContent": recipe.nutrition.fiber,
    },
    "recipeIngredient": recipe.ingredients,
    "recipeInstructions": recipe.instructions.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "text": step.replace(/Step \d+: /, ""),
    })),
  };

  // Only include cookTime when the data actually exists (50 recipes lack it)
  if (recipe.cook_time) {
    recipeSchema["cookTime"] = `PT${recipe.cook_time}M`;
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Recipes", item: `${SITE_URL}/recipe` },
      { "@type": "ListItem", position: 3, name: recipe.title, item: `${SITE_URL}/recipe/${recipe.slug}` },
    ],
  };

  return (
    <article className="bg-white min-h-screen pb-16">
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <div className="bg-green-50 py-8 md:py-12 border-b border-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Visible breadcrumb (matches BreadcrumbList schema) */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-green-700 transition-colors">Home</Link>
              </li>
              <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
              <li>
                <Link href="/recipe" className="hover:text-green-700 transition-colors">Recipes</Link>
              </li>
              <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
              <li aria-current="page" className="font-medium text-gray-800 line-clamp-1">{recipe.title}</li>
            </ol>
          </nav>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
              {recipe.category}
            </span>
            {recipe.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            {recipe.title}
          </h1>

          <p className="text-lg text-gray-700 mb-4 max-w-3xl leading-relaxed">
            {recipe.description}
          </p>

          {/* Quick answer callout — direct answer within the first ~200 words (AEO / AI Overviews) */}
          <div className="mb-6 max-w-3xl rounded-xl border border-green-200 bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-green-700">Quick answer</p>
            <p className="mt-1.5 text-md text-gray-700 leading-relaxed">
              {recipe.intro_content}
            </p>
          </div>

          {/* Byline — E-E-A-T */}
          <p className="mb-6 text-sm text-gray-600">
            <span className="font-semibold text-gray-800">Recipe by Dietitian Tejal</span>
            <span className="mx-2 text-gray-400">·</span>
            MSc Dietetics, Certified Diabetic Educator
          </p>

          <div className="flex flex-wrap gap-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100 inline-flex">
            <div className="flex items-center">
              <div className="bg-orange-100 p-2 rounded-lg mr-3">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">TOTAL TIME</p>
                <p className="text-sm font-bold text-gray-900">{recipe.total_time} Mins</p>
              </div>
            </div>

            <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>

            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">SERVINGS</p>
                <p className="text-sm font-bold text-gray-900">{recipe.servings} People</p>
              </div>
            </div>

            <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>

            <div className="flex items-center">
              <div className="bg-purple-100 p-2 rounded-lg mr-3">
                <ChefHat className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">DIFFICULTY</p>
                <p className="text-sm font-bold text-gray-900">{recipe.difficulty}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Main Content Area */}
          <div className="md:col-span-2 space-y-10">
            {/* Image */}
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg mb-8">
              <Image
                src={recipe.coverImage}
                alt={recipe.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* AEO / GEO Section (Answers specific questions for search engines) */}
            <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Why is {recipe.title} healthy?</h2>
                <p className="text-gray-700 leading-relaxed">{recipe.why_healthy}</p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Who is this recipe for?</h2>
                <p className="text-gray-700 leading-relaxed">{recipe.who_for}</p>
              </div>
            </section>

            {/* Ingredients */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                Ingredients Required
              </h2>
              <ul className="space-y-3 bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                {recipe.ingredients.map((ingredient, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Instructions */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Instructions</h2>
              <div className="space-y-6">
                {recipe.instructions.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed pt-1">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ — visible questions mirror the FAQPage schema */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group rounded-xl border border-gray-200 bg-slate-50 open:bg-white">
                    <summary className="cursor-pointer list-none rounded-xl px-5 py-4 font-semibold text-gray-900 transition hover:text-green-800">
                      <span className="flex items-center justify-between gap-3">
                        {faq.question}
                        <span className="text-green-600 transition group-open:rotate-45" aria-hidden="true">
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" d="M12 5v14M5 12h14" /></svg>
                        </span>
                      </span>
                    </summary>
                    <p className="px-5 pb-5 leading-7 text-gray-700">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Call to Action for Consultation (Moved below content for mobile/desktop flow) */}
            <div className="bg-green-600 text-white rounded-2xl p-8 shadow-md text-center mt-12">
              <h3 className="text-2xl font-bold mb-4">Want a personalized diet plan?</h3>
              <p className="text-green-50 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Consult with Dietitian Tejal to get a custom meal plan tailored to your health goals, medical history, and lifestyle.
              </p>
              <Link href="/contact" className="inline-block bg-white text-green-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                Book Your Consultation Now
              </Link>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="md:col-span-1 space-y-8">
            {/* Nutrition Facts */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-4">
                Nutrition Facts <span className="text-sm font-normal text-gray-500">(Per Serving)</span>
              </h3>

              <ul className="space-y-4">
                <li className="flex justify-between items-center text-gray-700">
                  <span className="font-medium">Calories</span>
                  <span className="font-bold text-gray-900">{recipe.nutrition.calories}</span>
                </li>
                <li className="flex justify-between items-center text-gray-700">
                  <span className="font-medium">Protein</span>
                  <span className="font-bold text-gray-900">{recipe.nutrition.protein}</span>
                </li>
                <li className="flex justify-between items-center text-gray-700">
                  <span className="font-medium">Carbohydrates</span>
                  <span className="font-bold text-gray-900">{recipe.nutrition.carbohydrates}</span>
                </li>
                <li className="flex justify-between items-center text-gray-700">
                  <span className="font-medium">Fat</span>
                  <span className="font-bold text-gray-900">{recipe.nutrition.fat}</span>
                </li>
                <li className="flex justify-between items-center text-gray-700 border-t border-gray-100 pt-4">
                  <span className="font-medium">Dietary Fiber</span>
                  <span className="font-bold text-green-600">{recipe.nutrition.fiber}</span>
                </li>
              </ul>

              <div className="mt-8 bg-orange-50 rounded-xl p-4 border border-orange-100">
                <p className="text-xs text-orange-800 text-center leading-relaxed">
                  <strong>Disclaimer:</strong> Nutritional values are estimates. Actual values may vary based on specific ingredients and portion sizes used.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Related Recipes — internal links across the recipe hub */}
        {relatedFallback.length > 0 && (
          <section className="mt-16 border-t border-gray-100 pt-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              More {recipe.category} Recipes
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedFallback.map((rel) => (
                <Link key={rel.slug} href={`/recipe/${rel.slug}`} className="group">
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
                    <div className="relative w-full h-32 bg-gray-200 overflow-hidden">
                      <Image
                        src={rel.coverImage}
                        alt={rel.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                        {rel.title}
                      </h3>
                      <div className="flex items-center text-xs text-gray-500 mt-auto">
                        <Clock className="w-3.5 h-3.5 mr-1 text-orange-500" />
                        <span>{rel.total_time} mins</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
