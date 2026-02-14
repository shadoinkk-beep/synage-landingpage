import { Metadata } from "next";

const siteUrl = "https://www.synageconsultants.com";

/*
  🔹 Update these later when full site launches
*/
const pageTitle =
  "Synage Consultants | Luxury Real Estate Advisory in Delhi NCR";

const pageDescription =
  "Synage Consultants is enhancing its digital presence. We continue to offer bespoke residential and commercial real estate advisory services across Gurgaon and South Delhi.";

/*
  ✅ SEO Metadata (Keep index TRUE while live)
*/
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: pageTitle, // 🔁 Update when full homepage launches
  description: pageDescription, // 🔁 Update later

  alternates: {
    canonical: "/", // 🔁 Keep root canonical
  },

  robots: {
    index: true, // ✅ Keep TRUE (do NOT disable indexing)
    follow: true,
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: pageTitle,
    description: pageDescription,
    siteName: "Synage Consultants",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function InProgressDarkPage() {
  return (
    <>
      {/* 
        🔥 Structured Data – Keeps Brand Authority Strong
        🔁 Update address/brand details if needed
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Synage Consultants",
            url: siteUrl,
            description: pageDescription,
            areaServed: [
              { "@type": "City", name: "Gurgaon" },
              { "@type": "City", name: "South Delhi" },
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Gurgaon",
              addressRegion: "Haryana",
              addressCountry: "IN",
            },
          }),
        }}
      />

      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-950 to-gray-900 px-6">
        <div className="relative max-w-2xl w-full text-center bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-3xl shadow-2xl p-12">

          {/* Subtle Glow */}
          <div className="absolute inset-0 rounded-3xl border border-blue-900/30 pointer-events-none" />

          {/* Brand Name */}
          <img src="./Logo_Synage.png" alt="" />

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto my-8" />

          {/* Main Message */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-200">
            Elevating Our Digital Experience
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed text-base md:text-lg">
            We are currently refining our online presence to better reflect
            our bespoke real estate advisory services across Gurgaon and
            South Delhi. Our commitment to excellence continues uninterrupted.
          </p>

          {/* Elegant Animated Dots */}
          <div className="flex justify-center mt-10">
            <div className="flex space-x-3">
              <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
              <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-150" />
              <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-300" />
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 text-sm text-gray-400">
            <p className="text-gray-500">For immediate inquiries:</p>
            <p className="mt-3 text-gray-200 font-medium">
              +91 98111 76892
            </p>
            <p>info@synageconsultants.com</p>
          </div>

          {/* Footer */}
          <p className="mt-10 text-xs text-gray-600">
            © {new Date().getFullYear()} Synage Consultants. All Rights Reserved.
          </p>
        </div>
      </main>
    </>
  );
}
