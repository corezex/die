// app/blog/[slug]/loading.tsx
export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button skeleton */}
        <div className="mb-8">
          <div className="w-24 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
        
        {/* Title skeleton */}
        <div className="mb-8">
          <div className="h-12 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded-lg w-3/4 animate-pulse"></div>
        </div>
        
        {/* Meta info skeleton */}
        <div className="flex flex-wrap gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
        
        {/* Image skeleton */}
        <div className="h-[400px] md:h-[500px] w-full bg-gray-200 rounded-3xl mb-12 animate-pulse"></div>
        
        {/* Content skeleton */}
        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}