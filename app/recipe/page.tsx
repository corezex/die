"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import {
  Search,
  Clock,
  Users,
  ChefHat,
  ArrowRight,
  Flame,
  UtensilsCrossed,
} from "lucide-react";

// Types based on your API response
interface Recipe {
  _id: string;
  title: string;
  slug: string;
  content: string;
  ingredients: string[];
  tags: string[];
  cookingTime: number | null;
  difficulty: string;
  servings: number;
  coverImage: string | null;
  images:
    | string
    | Array<{ url: string; filename: string; _id: string; uploadedAt: string }>;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface RecipeResponse {
  status: boolean;
  message: string;
  data: Recipe[];
}

// API function to fetch recipes
const getRecipes = async (): Promise<RecipeResponse> => {
  try {
    const response = await fetch("https://api.dietfiniti.com/api/getrecipe");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return {
      status: false,
      message: "Failed to fetch recipes",
      data: [],
    };
  }
};

// Function to extract first image from content
const getFirstImageFromContent = (content: string): string | null => {
  const imgRegex = /<img[^>]+src="([^">]+)"/g;
  const match = imgRegex.exec(content);
  return match ? match[1] : null;
};

// Function to get featured image from recipe data
const getFeaturedImage = (recipe: Recipe): string | null => {
  // Priority 1: Cover image
  if (recipe.coverImage) return recipe.coverImage;

  // Priority 2: Handle images field (can be string or array)
  if (recipe.images) {
    if (typeof recipe.images === "string") {
      return recipe.images;
    } else if (Array.isArray(recipe.images) && recipe.images.length > 0) {
      // Handle array of image objects or strings
      const firstImage = recipe.images[0];
      return typeof firstImage === "string" ? firstImage : firstImage.url;
    }
  }

  // Priority 3: First image from content
  const contentImage = getFirstImageFromContent(recipe.content);
  if (contentImage) return contentImage;

  return null;
};

// Function to construct proper image URL
const constructImageUrl = (imagePath: string | null): string | null => {
  if (!imagePath) return null;

  // If it's already a full URL, return as is
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  // If it's a data URL, return as is
  if (imagePath.startsWith("data:")) {
    return imagePath;
  }

  // If it starts with /, prepend your API domain
  if (imagePath.startsWith("/")) {
    return `https://api.dietfiniti.com${imagePath}`;
  }

  // If none of the above, return as is (might be a relative path)
  return imagePath;
};

// Function to strip HTML tags for excerpt
const stripHtml = (html: string): string => {
  const text = html.replace(/<[^>]*>/g, "");
  return text.length > 120 ? text.substring(0, 120) + "..." : text;
};

// Function to format cooking time
const formatCookingTime = (minutes: number | null): string => {
  if (!minutes) return "Not specified";
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
};

// Difficulty badge styling
const difficultyStyles: Record<string, string> = {
  easy: "bg-green-50 text-green-700 border-green-200",
  medium: "bg-amber-50 text-amber-700 border-amber-200",
  hard: "bg-red-50 text-red-700 border-red-200",
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

// Custom Image component that handles image URLs properly
const RecipeImage = ({
  src,
  alt,
  className,
}: {
  src: string | null;
  alt: string;
  className?: string;
}) => {
  const [imageError, setImageError] = useState(false);

  // If no src or image error, show placeholder
  if (!src || imageError) {
    return (
      <div className={`relative ${className}`}>
        <div className="w-full h-full bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <ChefHat className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm">No Image</p>
          </div>
        </div>
      </div>
    );
  }

  // Construct the full image URL
  const imageUrl = constructImageUrl(src);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setImageError(true)}
          unoptimized={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
    </div>
  );
};

export default function RecipeListPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getRecipes();

        if (response.status && Array.isArray(response.data)) {
          setRecipes(response.data);
        } else {
          setError(response.message || "Invalid data format");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load recipes");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  // Save recipes to localStorage for access on individual recipe page
  useEffect(() => {
    if (recipes.length > 0) {
      localStorage.setItem("recipesData", JSON.stringify(recipes));
    }
  }, [recipes]);

  // Get unique categories from tags
  const categories = [
    "All",
    ...new Set(recipes.flatMap((recipe) => recipe.tags)),
  ];

  // Filter recipes based on category and search
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory =
      selectedCategory === "All" || recipe.tags.includes(selectedCategory);
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      recipe.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  // Function to handle recipe click
  const handleViewRecipe = (recipe: Recipe) => {
    router.push(`/recipe/${recipe.slug || recipe._id}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading recipes...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Error Loading Recipes
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/50 via-white to-amber-50/50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 py-20 md:py-28">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-44 h-44 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-6 border border-white/30">
              <ChefHat className="w-4 h-4 mr-2" />
              Everyday Recipe Ideas
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Healthy Indian Recipe Ideas
            </h1>
            <p className="text-lg md:text-2xl text-orange-50 max-w-2xl mx-auto font-light">
              Practical recipe ideas for balanced everyday eating. Adapt recipes to your own dietary needs and medical advice.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search published recipes or ingredients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-5 py-4 rounded-2xl border-0 bg-white shadow-xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-white/70 focus:outline-none"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      {categories.length > 1 && (
        <section className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 py-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recipe Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredRecipes.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl shadow-sm border border-gray-100">
            <ChefHat className="w-14 h-14 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No recipes found
            </h3>
            <p className="text-gray-600">
              {searchQuery || selectedCategory !== "All"
                ? "Try adjusting your search terms or category filter"
                : "No recipes published yet"}
            </p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredRecipes.map((recipe) => {
              const featuredImage = getFeaturedImage(recipe);
              const difficultyClass =
                difficultyStyles[recipe.difficulty?.toLowerCase()] ||
                "bg-gray-50 text-gray-700 border-gray-200";

              return (
                <motion.article
                  key={recipe._id}
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  onClick={() => handleViewRecipe(recipe)}
                  className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 flex flex-col h-full cursor-pointer"
                >
                  {/* Image with difficulty badge */}
                  <div className="relative">
                    <RecipeImage
                      src={featuredImage}
                      alt={recipe.title}
                      className="h-52 w-full"
                    />
                    {recipe.difficulty && (
                      <span
                        className={`absolute top-3 right-3 z-10 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border capitalize shadow-sm bg-white/95 ${difficultyClass}`}
                      >
                        <Flame className="w-3 h-3 mr-1" />
                        {recipe.difficulty}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Title */}
                    <h2 className="font-bold text-gray-900 text-lg mb-3 line-clamp-2 group-hover:text-orange-700 transition-colors">
                      {recipe.title}
                    </h2>

                    {/* Recipe Meta Info */}
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
                      {recipe.cookingTime && (
                        <span className="flex items-center gap-1.5 bg-orange-50 px-2.5 py-1 rounded-lg">
                          <Clock className="w-4 h-4 text-orange-500" />
                          {formatCookingTime(recipe.cookingTime)}
                        </span>
                      )}
                      <span className="flex items-center gap-1.5 bg-orange-50 px-2.5 py-1 rounded-lg">
                        <Users className="w-4 h-4 text-orange-500" />
                        {recipe.servings} serving
                        {recipe.servings !== 1 ? "s" : ""}
                      </span>
                    </div>

                    {/* Ingredients Preview */}
                    {recipe.ingredients.length > 0 && (
                      <div className="mb-4 flex items-start gap-2">
                        <UtensilsCrossed className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {recipe.ingredients.slice(0, 3).join(", ")}
                          {recipe.ingredients.length > 3 && "..."}
                        </p>
                      </div>
                    )}

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                      {stripHtml(recipe.content)}
                    </p>

                    {/* View Recipe Button */}
                    <div className="mt-auto w-full inline-flex items-center justify-center px-4 py-2.5 bg-orange-50 text-orange-700 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-white text-sm font-medium rounded-xl transition-all">
                      View Recipe
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        )}
      </section>

      {/* Stats */}
      {recipes.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 shadow-xl"
          >
            <div className="grid grid-cols-3 gap-8 text-center text-white">
              <div>
                <div className="text-3xl font-bold">{recipes.length}</div>
                <div className="text-sm text-orange-50 mt-1">Total Recipes</div>
              </div>
              <div>
                <div className="text-3xl font-bold">
                  {new Set(recipes.flatMap((recipe) => recipe.tags)).size}
                </div>
                <div className="text-sm text-orange-50 mt-1">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold">
                  {
                    recipes.filter(
                      (recipe) => recipe.difficulty?.toLowerCase() === "easy"
                    ).length
                  }
                </div>
                <div className="text-sm text-orange-50 mt-1">Easy Recipes</div>
              </div>
            </div>
          </motion.div>
        </section>
      )}
    </div>
  );
}
