import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Clock, ChefHat } from "lucide-react";
import recipesData from "@/app/data/recipes.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "300 Healthy Indian Recipes & Diet Food Ideas",
  description: "Browse our comprehensive collection of 300 healthy Indian recipes. From low-calorie breakfasts to protein-packed dinners and guilt-free snacks, designed by a nutritionist.",
  alternates: {
    canonical: "https://dietfiniti.com/recipe"
  }
};

const RECIPES_PER_PAGE = 24;

export default async function RecipeListPage(props: { searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = await props.searchParams;
  const pageParam = searchParams?.page;
  const currentPage = typeof pageParam === "string" ? parseInt(pageParam, 10) : 1;
  const page = isNaN(currentPage) || currentPage < 1 ? 1 : currentPage;
  
  const totalRecipes = recipesData.length;
  const totalPages = Math.ceil(totalRecipes / RECIPES_PER_PAGE);
  const startIndex = (page - 1) * RECIPES_PER_PAGE;
  const endIndex = startIndex + RECIPES_PER_PAGE;
  
  const currentRecipes = recipesData.slice(startIndex, endIndex);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section optimized for AEO/GEO */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            300 Healthy Indian Recipes
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Looking for <strong>healthy Indian food options</strong>? We've compiled 300 nutritious, low-calorie, and high-protein recipes. 
            Whether you need a <strong>weight loss diet plan</strong>, a diabetic-friendly meal, or just wholesome family food, our collection replaces refined carbs and excessive fats with millets, pulses, and lean proteins.
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentRecipes.map((recipe) => (
            <Link href={`/recipe/${recipe.slug}`} key={recipe.slug} className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
                <div className="relative w-full h-48 bg-gray-200">
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
            {page > 1 && (
              <Link 
                href={`/recipe?page=${page - 1}`}
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
                  (pageNum >= page - 2 && pageNum <= page + 2)
                ) {
                  return (
                    <Link
                      key={pageNum}
                      href={`/recipe?page=${pageNum}`}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-colors ${
                        page === pageNum
                          ? "bg-green-600 text-white border-green-600 font-semibold"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-green-50 hover:text-green-700 hover:border-green-300"
                      }`}
                    >
                      {pageNum}
                    </Link>
                  );
                } else if (
                  pageNum === page - 3 || 
                  pageNum === page + 3
                ) {
                  return <span key={pageNum} className="px-1 text-gray-500">...</span>;
                }
                return null;
              })}
            </div>

            {page < totalPages && (
              <Link 
                href={`/recipe?page=${page + 1}`}
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
