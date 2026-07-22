// app/blog/[slug]/actions.ts
"use server";

export async function getBlogBySlug(slug: string) {
  try {
    const response = await fetch(
      `https://api.dietfiniti.com/api/getBlogBySlug/${slug}`,
      { 
        next: { revalidate: 3600 },
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
    console.error("Error fetching blog:", error);
    return null;
  }
}