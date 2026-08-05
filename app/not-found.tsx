import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found. Browse DietFiniti's services, recipes and nutrition blog instead.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="bg-white px-4 py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-green-700">404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Page not found</h1>
        <p className="mt-4 leading-7 text-slate-600">
          The page you were looking for does not exist or has moved. You can explore our services, browse 500+ healthy
          Indian recipes, or read the nutrition blog instead.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800">
            Go to homepage
          </Link>
          <Link href="/recipe" className="rounded-lg border border-green-700 px-6 py-3 font-semibold text-green-800 transition hover:bg-green-50">
            Browse recipes
          </Link>
          <Link href="/blog" className="rounded-lg border border-green-700 px-6 py-3 font-semibold text-green-800 transition hover:bg-green-50">
            Read the blog
          </Link>
        </div>
      </div>
    </main>
  );
}
