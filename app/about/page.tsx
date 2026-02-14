import { Metadata } from "next";

/*
  🔹 Change these anytime
*/
const pageTitle =
  "About Synage Consultants | Real Estate Experts in Gurgaon";

const pageDescription =
  "Learn about Synage Consultants, a trusted real estate advisory firm serving Gurgaon and South Delhi with premium residential and commercial expertise.";

/*
  🔥 SEO Metadata for About Page
*/
export const metadata: Metadata = {
  title: pageTitle, // 🔁 Change anytime
  description: pageDescription, // 🔁 Change anytime

  alternates: {
    canonical: "/about", // 🔁 Change if route changes
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/about", // 🔁 Change if domain/route changes
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

/*
  🔥 About Page Component
*/
export default function AboutPage() {
  return (
    <>
      {/* 
        🔥 Organization Structured Data
        🔁 Update if business info changes
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",

            name: "Synage Consultants", // 🔁 Change if brand changes
            url: "https://www.synageconsultants.com", // 🔁 Change if domain changes

            description: pageDescription, // 🔁 Keep synced with meta description

            areaServed: "Delhi NCR", // 🔁 Modify if service area expands
          }),
        }}
      />

      {/* 
        🏢 About Page Content Goes Here
        🔁 Replace with team info, mission, values, etc.
      */}
      <div>
       About
      </div>
    </>
  );
}
