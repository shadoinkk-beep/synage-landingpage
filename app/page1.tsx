import AboutLead from "@/components/sections/AboutLead";
import { Metadata } from "next";

/*
  🔹 Change these anytime
*/
const pageTitle =
  "Luxury Real Estate Advisory in Gurgaon & South Delhi | Synage Consultants";

const pageDescription =
  "Synage Consultants offers premium residential and commercial real estate advisory services across Gurgaon and South Delhi. Trusted expertise. Proven results.";

/*
  🔥 SEO Metadata for Homepage
*/
export const metadata: Metadata = {
  title: pageTitle, // 🔁 Change title anytime
  description: pageDescription, // 🔁 Change description anytime

  alternates: {
    canonical: "/", // 🔁 Change if route changes
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/", // 🔁 Change if domain/route changes
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

/*
  🔥 Homepage Component
*/
export default function HomePage() {
  return (
    <>
      {/* 
        🔥 Local Business Structured Data
        Helps with Gurgaon / Delhi NCR ranking
        🔁 Update if business details change
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",

            name: "Synage Consultants", // 🔁 Change if brand changes
            url: "https://www.synageconsultants.com", // 🔁 Change if domain changes

            areaServed: [
              {
                "@type": "City",
                name: "Gurgaon", // 🔁 Add more cities if needed
              },
              {
                "@type": "City",
                name: "South Delhi",
              },
            ],

            description: pageDescription, // 🔁 Keep synced with meta description

            address: {
              "@type": "PostalAddress",
              addressLocality: "Gurgaon", // 🔁 Update if office location changes
              addressRegion: "Haryana",
              addressCountry: "IN",
            },
          }),
        }}
      />

      {/* 
        🏠 Landing Page UI Goes Here
        🔁 Replace with Hero, Services, CTA, etc.
      */}
      <main>
        {/* Homepage sections */}
        {/* Home */}
        {/* <p className="font-heading"> Stylish Mother </p> */}
        {/* <p className="font-body"  > Spline Sans </p> */}
        <AboutLead/>
      </main>
    </>
  );
}
