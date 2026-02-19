"use client";

import Script from "next/script";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Synage Consultants",
    url: "https://www.synageconsultants.com",
    areaServed: [
      { "@type": "City", name: "Gurgaon" },
      { "@type": "City", name: "South Delhi" }
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurgaon",
      addressRegion: "Haryana",
      addressCountry: "IN"
    },
    description:
      "Luxury residential and commercial real estate advisory firm in Delhi NCR."
  };

  return (
    <Script
      id="realestate-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}