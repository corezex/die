import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Clock, ChefHat, Search, Filter } from "lucide-react";
import recipesData from "@/app/data/recipes.json";
import { Metadata } from "next";

const SITE_URL = "https://dietfiniti.com";

export async function generateMetadata(
  props: { searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }
): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const filtered = searchParams?.page || searchParams?.category || searchParams?.q;

  const base: Metadata = {
    title: "500+ Healthy Indian Recipes & Diet Food Ideas",
    description: "Browse our comprehensive collection of 500+ healthy Indian recipes. From low-calorie breakfasts to protein-packed dinners and guilt-free snacks, designed by a nutritionist.",
    alternates: { canonical: `${SITE_URL}/recipe` },
    openGraph: {
      title: "500+ Healthy Indian Recipes & Diet Food Ideas | DietFiniti",
      description: "Low-calorie breakfasts, protein-packed dinners, dals, millets and snacks — 500+ healthy Indian recipes by Dietitian Tejal.",
      type: "website",
      url: `${SITE_URL}/recipe`,
      siteName: "DietFiniti",
      images: [{ url: `${SITE_URL}/recipes.png`, alt: "Healthy Indian recipes collection" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "500+ Healthy Indian Recipes | DietFiniti",
      description: "500+ healthy Indian recipes by Dietitian Tejal.",
      images: [`${SITE_URL}/recipes.png`],
    },
  };

  // Filtered/paginated states are thin duplicates of the main listing —
  // keep them crawlable but out of the index, canonical pointing to /recipe.
  if (filtered) {
    return { ...base, robots: { index: false, follow: true }, alternates: { canonical: `${SITE_URL}/recipe` } };
  }
  return base;
}

const RECIPES_PER_PAGE = 24;
const CATEGORIES = [
  "All", 
  "Healthy Breakfast", 
  "Dals & Legumes", 
  "Vegetable Curries", 
  "Healthy Grains", 
  "Snacks & Soups", 
  "Beverages & Desserts"
];

export default async function RecipeListPage(props: { searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = await props.searchParams;
  
  const pageParam = searchParams?.page;
  const currentPage = typeof pageParam === "string" ? parseInt(pageParam, 10) : 1;
  const page = isNaN(currentPage) || currentPage < 1 ? 1 : currentPage;
  
  const q = typeof searchParams?.q === "string" ? searchParams.q : "";
  const category = typeof searchParams?.category === "string" ? searchParams.category : "All";

  // Filter recipes based on search query and category
  let filteredRecipes = recipesData;
  
  if (category && category !== "All") {
    filteredRecipes = filteredRecipes.filter(r => r.category === category);
  }
  
  if (q) {
    const lowerQ = q.toLowerCase();
    filteredRecipes = filteredRecipes.filter(r => 
      r.title.toLowerCase().includes(lowerQ) || 
      r.description.toLowerCase().includes(lowerQ) ||
      r.ingredients.some(i => i.toLowerCase().includes(lowerQ))
    );
  }
  
  const totalRecipes = filteredRecipes.length;
  const totalPages = Math.max(1, Math.ceil(totalRecipes / RECIPES_PER_PAGE));
  const validPage = Math.min(page, totalPages);
  
  const startIndex = (validPage - 1) * RECIPES_PER_PAGE;
  const endIndex = startIndex + RECIPES_PER_PAGE;
  
  const currentRecipes = filteredRecipes.slice(startIndex, endIndex);

  // Helper for pagination URLs
  const buildUrl = (p: number) => {
    const params = new URLSearchParams();
    if (p > 1) params.set("page", p.toString());
    if (q) params.set("q", q);
    if (category !== "All") params.set("category", category);
    const queryString = params.toString();
    return `/recipe${queryString ? `?${queryString}` : ""}`;
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            500+ Healthy Indian Recipes
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Looking for <strong>healthy Indian food options</strong>? We&apos;ve compiled 500+ nutritious, low-calorie, and high-protein recipes. 
            Filter below to find weight loss diet plans, diabetic-friendly meals, or wholesome family food.
          </p>
        </div>

        {/* Filter & Search Bar Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-10">
          <form method="GET" action="/recipe" className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                name="q"
                defaultValue={q}
                placeholder="Search recipes or ingredients (e.g. Oats, Paneer)..."
                className="block w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              />
            </div>
            
            {/* Category Dropdown */}
            <div className="md:w-72 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                name="category"
                aria-label="Filter recipes by category"
                defaultValue={category}
                className="block w-full pl-11 pr-10 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 appearance-none transition-colors"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-700 text-white py-3 px-8 rounded-xl font-medium hover:bg-green-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Search
            </button>
          </form>

          {/* Quick Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-6 pt-5 border-t border-gray-100">
            <span className="text-sm text-gray-500 font-medium mr-2">Quick Filters:</span>
            {CATEGORIES.map(cat => {
              const isSelected = category === cat;
              const params = new URLSearchParams();
              if (q) params.set("q", q);
              if (cat !== "All") params.set("category", cat);
              const queryString = params.toString();
              const href = `/recipe${queryString ? `?${queryString}` : ""}`;
              
              return (
                <Link
                  key={cat}
                  href={href}
                  className={`text-xs px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    isSelected 
                      ? "bg-green-700 text-white shadow-sm" 
                      : "bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-800"
                  }`}
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Empty State */}
        {currentRecipes.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No recipes found</h3>
            <p className="text-gray-500 mb-6">We couldn&apos;t find any recipes matching your criteria.</p>
            <Link 
              href="/recipe" 
              className="inline-block bg-green-700 text-white font-medium py-2.5 px-6 rounded-lg hover:bg-green-800 transition-colors"
            >
              Clear Filters
            </Link>
          </div>
        )}

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentRecipes.map((recipe) => (
            <Link href={`/recipe/${recipe.slug}`} key={recipe.slug} className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
                <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
                  <Image
                    src={recipe.coverImage}
                    alt={recipe.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-semibold text-green-700">
                    {recipe.category}
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                    {recipe.title}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-grow">
                    {recipe.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100 mt-auto">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1.5 text-orange-500" />
                      <span>{recipe.total_time} mins</span>
                    </div>
                    <div className="flex items-center">
                      <ChefHat className="w-4 h-4 mr-1.5 text-green-500" />
                      <span>{recipe.difficulty}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Server-Side Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-12">
            {validPage > 1 && (
              <Link 
                href={buildUrl(validPage - 1)}
                className="p-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-green-50 hover:text-green-700 hover:border-green-300 transition-colors flex items-center"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5" />
              </Link>
            )}
            
            <div className="flex items-center space-x-1">
              {Array.from({ length: totalPages }).map((_, idx) => {
                const pageNum = idx + 1;
                // Show first, last, and pages around current
                if (
                  pageNum === 1 || 
                  pageNum === totalPages || 
                  (pageNum >= validPage - 2 && pageNum <= validPage + 2)
                ) {
                  return (
                    <Link
                      key={pageNum}
                      href={buildUrl(pageNum)}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-colors ${
                        validPage === pageNum
                          ? "bg-green-700 text-white border-green-700 font-semibold"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-green-50 hover:text-green-700 hover:border-green-300"
                      }`}
                    >
                      {pageNum}
                    </Link>
                  );
                } else if (
                  pageNum === validPage - 3 || 
                  pageNum === validPage + 3
                ) {
                  return <span key={pageNum} className="px-1 text-gray-500">...</span>;
                }
                return null;
              })}
            </div>

            {validPage < totalPages && (
              <Link 
                href={buildUrl(validPage + 1)}
                className="p-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-green-50 hover:text-green-700 hover:border-green-300 transition-colors flex items-center"
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5" />
              </Link>
            )}
          </div>
        )}

      </div>
    </div>
  );
}