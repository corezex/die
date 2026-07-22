// app/recipe/[slug]/actions.ts
"use server";

export async function getRecipeBySlug(slug: string) {
  try {
    console.log("slug",slug)
    const response = await fetch(
      `https://api.dietfiniti.com/api/getRecipeBySlug/${slug}`,
      { 
        next: { revalidate: 3600 }, // Cache for 1 hour
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.status && data.data) {
      return data.data;
    }
    
    return null;
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return null;
  }
}