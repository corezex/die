// app/recipe/[slug]/page.tsx
import { Metadata } from "next";
import RecipeDetailPage from "./recipe";
import { getRecipeBySlug } from "./actions";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: { [key: string]: string | string[] | undefined };
}

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
  description: string;
  type: string;
  schemaData: object;
  images:
    | string
    | Array<{ url: string; filename: string; _id: string; uploadedAt: string }>;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const recipe = await getRecipeBySlug(slug);
    
    if (!recipe) {
      return {
        title: "Recipe Not Found | DietFiniti",
        description: "The requested recipe could not be found.",
        robots: {
          index: false,
          follow: false,
        }
      };
    }

    const metaDescription = recipe.description || 
      recipe.content.replace(/<[^>]*>/g, '').substring(0, 160);
    
    const imageUrl = recipe.coverImage
      ? recipe.coverImage.startsWith("http")
        ? recipe.coverImage
        : `https://api.dietfiniti.com${recipe.coverImage}`
      : "https://dietfiniti.com/image/logo.png";

    return {
      title: `${recipe.title} | DietFiniti Recipes`,
      description: metaDescription,
      keywords: recipe.tags ? recipe.tags.join(', ') : "recipe, cooking, food, nutrition",
      authors: [{ name: "DietFiniti" }],
      openGraph: {
        title: recipe.title,
        description: metaDescription,
        type: "article",
        url: `https://dietfiniti.com/recipe/${recipe.slug}`,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: recipe.title,
          },
        ],
        publishedTime: recipe.createdAt,
        modifiedTime: recipe.updatedAt || recipe.createdAt,
        authors: ["DietFiniti"],
        tags: recipe.tags,
      },
      twitter: {
        card: "summary_large_image",
        title: recipe.title,
        description: metaDescription,
        images: [imageUrl],
      },
      alternates: {
        canonical: `https://dietfiniti.com/recipe/${recipe.slug}`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Recipe unavailable | DietFiniti",
      description: "The requested recipe is currently unavailable.",
      robots: { index: false, follow: false },
    };
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const recipe = await getRecipeBySlug(slug);
  
  if (!recipe) {
    notFound();
  }

  // Generate all structured data on server side
  const generateStructuredData = (recipe: Recipe) => {
    const imageUrl = recipe.coverImage
      ? recipe.coverImage.startsWith("http")
        ? recipe.coverImage
        : `https://api.dietfiniti.com${recipe.coverImage}`
      : "https://dietfiniti.com/image/logo.png";

    // Calculate prep time (assuming half of cooking time)
    const prepTime = recipe.cookingTime ? Math.ceil(recipe.cookingTime / 2) : 0;
    const totalTime = recipe.cookingTime ? prepTime + recipe.cookingTime : 0;

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://dietfiniti.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Recipes",
              "item": "https://dietfiniti.com/recipe"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": recipe.title,
              "item": `https://dietfiniti.com/recipe/${recipe.slug}`
            }
          ]
        },
        {
          "@type": "Recipe",
          "name": recipe.title,
          "description": recipe.description || recipe.content.replace(/<[^>]*>/g, '').substring(0, 200),
          "image": imageUrl,
          "author": {
            "@type": "Person",
            "name": "DietFiniti",
            "url": "https://dietfiniti.com"
          },
          "prepTime": prepTime > 0 ? `PT${prepTime}M` : "",
          "cookTime": recipe.cookingTime ? `PT${recipe.cookingTime}M` : "",
          "totalTime": totalTime > 0 ? `PT${totalTime}M` : "",
          "recipeYield": `${recipe.servings} servings`,
          "recipeCategory": recipe.type || "General",
          "recipeCuisine": "Indian",
          "recipeIngredient": recipe.ingredients || [],
          "recipeInstructions": recipe.content.replace(/<[^>]*>/g, ''),
          "keywords": recipe.tags?.join(', ') || "",
          "publisher": {
            "@type": "Organization",
            "name": "DietFiniti",
            "logo": {
              "@type": "ImageObject",
              "url": "https://dietfiniti.com/image/logo.png",
              "width": 200,
              "height": 60
            }
          },
          "datePublished": new Date(recipe.createdAt).toISOString().split('T')[0],
          "dateModified": new Date(recipe.updatedAt || recipe.createdAt).toISOString().split('T')[0],
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://dietfiniti.com/recipe/${recipe.slug}`
          }
        }
      ]
    };
  };

  const structuredData = generateStructuredData(recipe);

  return (
    <>
      {/* Add all structured data in the server component */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      {/* Pass recipe data to client component */}
      <RecipeDetailPage initialRecipe={recipe} />
    </>
  );
}