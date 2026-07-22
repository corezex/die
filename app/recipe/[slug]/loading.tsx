// app/recipe/[slug]/loading.tsx
export default function RecipeLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button skeleton */}
        <div className="mb-8">
          <div className="w-24 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
        
        {/* Tags skeleton */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
          ))}
        </div>
        
        {/* Title skeleton */}
        <div className="mb-8">
          <div className="h-12 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded-lg w-3/4 animate-pulse"></div>
        </div>
        
        {/* Description skeleton */}
        <div className="mb-8">
          <div className="h-6 bg-gray-200 rounded-lg mb-4 w-1/3 animate-pulse"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6"></div>
          </div>
        </div>
        
        {/* Meta cards skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-24 bg-gray-200 rounded-2xl animate-pulse"></div>
          ))}
        </div>
        
        {/* Image skeleton */}
        <div className="h-[400px] md:h-[500px] lg:h-[600px] w-full bg-gray-200 rounded-3xl mb-12 animate-pulse"></div>
        
        {/* Ingredients skeleton */}
        <div className="mb-12">
          <div className="h-8 bg-gray-200 rounded-lg mb-6 w-1/4 animate-pulse"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-12 bg-gray-200 rounded-xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}