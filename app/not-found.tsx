import Link from "next/link";
import type { Metadata } from "next";

/*
  ✅ Important:
  We do NOT want Google indexing 404 pages
*/
export const metadata: Metadata = {
  title: "Page Not Found | Synage Consultants",
  robots: {
    index: false, // 🚫 Prevent indexing
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-950 to-gray-900 px-6">
      <div className="text-center max-w-2xl">

        {/* 404 Number */}
        <h1 className="text-7xl md:text-8xl font-bold text-white tracking-tight">
          404
        </h1>

        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto my-8" />

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-200">
          This Page Doesn’t Exist
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-400 leading-relaxed">
          The page you are looking for may have been moved, removed,
          or is temporarily unavailable.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <Link
            href="/"
            className="group inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 transition-all duration-300"
          >
            <span className="text-sm font-medium tracking-wide">
              Return to Homepage
            </span>

            <span className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-full transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-12 text-xs text-gray-600">
          © {new Date().getFullYear()} Synage Consultants
        </p>

      </div>
    </main>
  );
}
