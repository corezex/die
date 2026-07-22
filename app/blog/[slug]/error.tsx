// app/blog/[slug]/error.tsx
'use client';

import { useEffect } from 'react';
import { Home, RefreshCw } from 'lucide-react';

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Blog loading error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-red-100 to-orange-100 flex items-center justify-center">
          <div className="text-4xl">⚠️</div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-600 mb-8">
          We&apos;re having trouble loading this article. This might be due to a network issue or the article might not be available right now.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 font-medium flex items-center justify-center gap-2"
          >
            <RefreshCw size={20} />
            Try Again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-all duration-300 font-medium flex items-center justify-center gap-2"
          >
            <Home size={20} />
            Go Home
          </button>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          If the problem persists, please contact support.
        </p>
      </div>
    </div>
  );
}