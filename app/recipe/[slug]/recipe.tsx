"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { 
  ChevronLeft, 
  Clock, 
  Users, 
  TrendingUp, 
  Bookmark, 
  Share2, 
  Home, 
  ChefHat,
  UtensilsCrossed,
  Calendar,
  Printer,
  Scale,
  Timer,
  BookOpen,
  Sparkles
} from "lucide-react";
import DOMPurify from "dompurify";

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
  description?: string;
  type?: string;
}

interface RecipeDetailPageProps {
  initialRecipe?: Recipe | null;
}

export default function RecipeDetailPage({ initialRecipe }: RecipeDetailPageProps) {
  const params = useParams();
  const router = useRouter();
  const [recipe, setRecipe] = useState<Recipe | null>(initialRecipe || null);
  const [loading, setLoading] = useState(!initialRecipe);
  const [imageError, setImageError] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [servingSize, setServingSize] = useState(1);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadRecipeData = async () => {
      if (initialRecipe) {
        setRecipe(initialRecipe);
        setServingSize(initialRecipe.servings || 1);
        setLoading(false);
        return;
      }

      try {
        const bookmarks = JSON.parse(localStorage.getItem('recipeBookmarks') || '[]');
        setIsBookmarked(bookmarks.includes(params.slug));

        const recipesData = localStorage.getItem('recipesData');
        if (recipesData) {
          const recipes = JSON.parse(recipesData);
          const foundRecipe = recipes.find(
            (r: Recipe) => r.slug === params.slug || r._id === params.slug
          );
          
          if (foundRecipe) {
            setRecipe(foundRecipe);
            setServingSize(foundRecipe.servings || 1);
          } else {
            await fetchRecipe();
          }
        } else {
          await fetchRecipe();
        }
      } catch (error) {
        console.error("Error loading recipe:", error);
        await fetchRecipe();
      } finally {
        setLoading(false);
      }
    };

    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          `https://api.dietfiniti.com/api/getrecipe/${params.slug}`
        );
        if (response.ok) {
          const data = await response.json();
          if (data.status && data.data) {
            setRecipe(data.data);
            setServingSize(data.data.servings || 1);
          }
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    loadRecipeData();
  }, [params.slug, initialRecipe]);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatCookingTime = (minutes: number | null): string => {
    if (!minutes) return "Not specified";
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'hard':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getFeaturedImage = (recipe: Recipe): string | null => {
    if (recipe.coverImage) return recipe.coverImage;
    if (recipe.images) {
      if (typeof recipe.images === "string") return recipe.images;
      if (Array.isArray(recipe.images) && recipe.images.length > 0) {
        return recipe.images[0].url;
      }
    }
    
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    const match = imgRegex.exec(recipe.content);
    return match ? match[1] : null;
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe?.title,
        text: `Check out this delicious recipe: ${recipe?.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Recipe link copied to clipboard!");
    }
  };

  const handleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('recipeBookmarks') || '[]');
    if (isBookmarked) {
      const newBookmarks = bookmarks.filter((id: string) => id !== params.slug);
      localStorage.setItem('recipeBookmarks', JSON.stringify(newBookmarks));
    } else {
      bookmarks.push(params.slug);
      localStorage.setItem('recipeBookmarks', JSON.stringify(bookmarks));
    }
    setIsBookmarked(!isBookmarked);
  };

  const handlePrint = () => {
    window.print();
  };

  const adjustIngredients = (ingredient: string) => {
    if (recipe) {
      const originalServings = recipe.servings || 1;
      const ratio = servingSize / originalServings;
      
      return ingredient.replace(/(\d+(?:\.\d+)?)/g, (match) => {
        const num = parseFloat(match);
        return (num * ratio).toFixed(1).replace(/\.0$/, '');
      });
    }
    return ingredient;
  };

  const sanitizeContent = (content: string) => {
    return DOMPurify.sanitize(content, {
      ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'strong', 'em', 'u', 's', 
                     'blockquote', 'code', 'pre', 'br', 'hr', 'ul', 'ol', 'li', 'a', 'img',
                     'div', 'span', 'table', 'thead', 'tbody', 'tr', 'th', 'td'],
      ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'style', 'target', 'rel'],
      ADD_ATTR: ['loading']
    });
  };

  const calculateTotalTime = () => {
    if (!recipe?.cookingTime) return null;
    const prepTime = Math.ceil(recipe.cookingTime / 2);
    const totalTime = prepTime + recipe.cookingTime;
    return formatCookingTime(totalTime);
  };

  const totalTime = calculateTotalTime();
  const featuredImage = recipe ? getFeaturedImage(recipe) : null;
  const imageSrc = featuredImage
    ? featuredImage.startsWith("http")
      ? featuredImage
      : `https://api.dietfiniti.com${featuredImage}`
    : null;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-orange-600 rounded-full animate-pulse"></div>
            </div>
          </div>
          <p className="text-gray-600 font-medium animate-pulse">Preparing recipe...</p>
        </div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
            <UtensilsCrossed size={40} className="text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Recipe Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            This recipe doesn&apos;t exist or may have been removed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => router.back()}
              className="px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-all duration-300 font-medium flex items-center justify-center gap-2"
            >
              <ChevronLeft size={20} />
              Go Back
            </button>
            <button
              onClick={() => router.push('/recipes')}
              className="px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-all duration-300 font-medium flex items-center justify-center gap-2"
            >
              <Home size={20} />
              Browse Recipes
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Recipe Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {recipe.tags && recipe.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1.5 rounded-full font-medium border border-blue-200"
              >
                #{tag}
              </span>
            ))}
            {recipe.type && (
              <span className="inline-block bg-purple-100 text-purple-800 text-sm px-3 py-1.5 rounded-full font-medium border border-purple-200">
                {recipe.type}
              </span>
            )}
            <span className={`inline-block ${getDifficultyColor(recipe.difficulty)} text-sm px-3 py-1.5 rounded-full font-medium border`}>
              {recipe.difficulty}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            {recipe.title}
          </h1>

          {/* Description */}
          {recipe.description && (
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <BookOpen size={20} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">About This Recipe</h2>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {recipe.description}
                </p>
              </div>
            </div>
          )}

          {/* Recipe Meta Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Total Time */}
            {totalTime && (
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
                    <Timer size={24} className="text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Time</p>
                    <p className="text-lg font-bold text-gray-900">
                      {totalTime}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Cooking Time */}
            {recipe.cookingTime && (
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                    <Clock size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Cooking Time</p>
                    <p className="text-lg font-bold text-gray-900">
                      {formatCookingTime(recipe.cookingTime)}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Difficulty */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <TrendingUp size={24} className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Difficulty</p>
                  <p className="text-lg font-bold text-gray-900 capitalize">
                    {recipe.difficulty}
                  </p>
                </div>
              </div>
            </div>

            {/* Servings */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <Users size={24} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Servings</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setServingSize(Math.max(1, servingSize - 1))}
                      className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    >
                      -
                    </button>
                    <p className="text-lg font-bold text-gray-900 min-w-[80px] text-center">
                      {servingSize} {servingSize === 1 ? 'serving' : 'servings'}
                    </p>
                    <button
                      onClick={() => setServingSize(servingSize + 1)}
                      className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {imageSrc && !imageError && (
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden mb-12 shadow-2xl group">
            <Image
              src={imageSrc}
              alt={recipe.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              onError={() => setImageError(true)}
              unoptimized={true}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <div className={`px-4 py-2 rounded-full ${getDifficultyColor(recipe.difficulty)} font-medium`}>
                {recipe.difficulty.toUpperCase()}
              </div>
            </div>
          </div>
        )}

        {/* Ingredients Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                <Scale size={24} className="text-white" />
              </div>
              Ingredients
            </h2>
            <div className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
              {recipe.ingredients.length} items
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100">
            <div className="grid gap-4">
              {recipe.ingredients.map((ingredient, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-orange-50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-100 group-hover:bg-orange-200 flex items-center justify-center transition-colors">
                    <span className="text-orange-600 font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-700 text-lg flex-1">
                    {adjustIngredients(ingredient)}
                  </span>
                  <button 
                    onClick={() => navigator.clipboard.writeText(ingredient)}
                    className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
                    title="Copy ingredient"
                  >
                    <span className="text-sm">📋</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instructions Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <ChefHat size={24} className="text-white" />
            </div>
            Cooking Instructions
          </h2>

          <div 
            ref={contentRef}
            className="prose prose-lg md:prose-xl max-w-none 
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-lg
              prose-li:text-gray-700 
              prose-strong:text-gray-900
              prose-a:text-orange-600 prose-a:no-underline hover:prose-a:text-orange-700 hover:prose-a:underline
              prose-blockquote:border-l-4 prose-blockquote:border-orange-400 prose-blockquote:bg-orange-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl
              prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded-lg prose-code:text-gray-800
              prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-2xl prose-pre:p-6
              prose-img:rounded-2xl prose-img:shadow-lg
              prose-hr:border-gray-200
              prose-ol:list-decimal prose-ol:pl-6
              prose-ul:list-disc prose-ul:pl-6"
            dangerouslySetInnerHTML={{ __html: sanitizeContent(recipe.content) }}
          />
        </section>

        {/* Nutrition Tips Section */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 mb-12 border border-green-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <Sparkles size={20} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Nutritional Benefits</h3>
          </div>
          <ul className="grid gap-4">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <p className="text-gray-700">Rich in essential vitamins and minerals</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <p className="text-gray-700">Balanced macronutrients for sustained energy</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <p className="text-gray-700">Supports digestive health with natural fiber</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <p className="text-gray-700">Low in saturated fats and processed sugars</p>
            </li>
          </ul>
        </section>
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
        <button
          onClick={handleShare}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          title="Share recipe"
        >
          <Share2 size={24} />
        </button>
        <button
          onClick={handleBookmark}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${
            isBookmarked
              ? 'bg-gradient-to-br from-yellow-500 to-orange-500 text-white'
              : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
          }`}
          title={isBookmarked ? "Remove bookmark" : "Bookmark recipe"}
        >
          <Bookmark size={24} fill={isBookmarked ? "currentColor" : "none"} />
        </button>
      </div>
    </div>
  );
}