// app/recipe/[slug]/error.tsx
'use client';

import { useEffect } from 'react';
import { Home, RefreshCw, ChefHat } from 'lucide-react';

export default function RecipeError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Recipe loading error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-red-100 to-orange-100 flex items-center justify-center">
          <ChefHat size={48} className="text-orange-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Recipe Loading Error
        </h1>
        <p className="text-gray-600 mb-8">
          We&apos;re having trouble loading this recipe. This might be due to:
        </p>
        <ul className="text-left text-gray-600 mb-8 space-y-2">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Network connectivity issues
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Recipe temporarily unavailable
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Server maintenance
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 font-medium flex items-center justify-center gap-2"
          >
            <RefreshCw size={20} />
            Try Again
          </button>
          <button
            onClick={() => window.location.href = '/recipes'}
            className="px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-all duration-300 font-medium flex items-center justify-center gap-2"
          >
            <Home size={20} />
            Browse Recipes
          </button>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          If the problem persists, please contact support@dietfiniti.com
        </p>
      </div>
    </div>
  );
}