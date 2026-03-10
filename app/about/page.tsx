import ClientTrust from "@/components/about/ClientTrust";
import Founders from "@/components/about/Founders";
import { GetExpertExecution } from "@/components/about/GetExpertExecution";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import TrustedFor from "@/components/sections/TrustedFor";
import { Metadata } from "next";
import StatsSection from "@/components/about/StatsSection";

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
  title: pageTitle,
  description: pageDescription,

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://www.synageconsultants.com/about",
    type: "website",
    images: [
      {
        url: "/AboutPage/AboutHero.jpg",
        width: 1200,
        height: 630,
        alt: "About Synage Consultants",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/AboutPage/AboutHero.jpg"],
  },
};

/*
  🔥 About Page Component
*/
export default function AboutPage() {
  return (
    <>
      {/* Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Synage Consultants",
            url: "https://www.synageconsultants.com",
            description: pageDescription,
            areaServed: "Delhi NCR",
          }),
        }}
      />

      <div>
        <ClientTrust />
        <Founders />
        <TrustedFor />
        <StatsSection />
        <GetExpertExecution />
        <Footer />
      </div>
    </>
  );
}