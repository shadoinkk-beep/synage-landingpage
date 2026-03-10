import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import AboutLead from "@/components/sections/AboutLead";
import BlogsHero from "@/components/sections/BlogsHero";
import ContactUs from "@/components/sections/ContactUs";
import HomeHero from "@/components/sections/HomeHero";
import Services from "@/components/sections/Services";
import TrustedFor from "@/components/sections/TrustedFor";
import WhyUs from "@/components/sections/WhyUs";
import { Metadata } from "next";

/*
  🔹 Change these anytime
*/
const pageTitle =
  "Synage Consultants";

const pageDescription =
  "Synage Consultants offers premium residential  andcommercial real estate advisory services across Gurgaon  andSouth Delhi. Trusted expertise. Proven results.";

/*
  🔥 SEO Metadata for Homepage
*/
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://www.synageconsultants.com",
    type: "website",
    images: [
      {
        url: "/HomePage/Hero_BG.png",
        width: 1200,
        height: 630,
        alt: "Synage Consultants",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/HomePage/Hero_BG.png"],
  },
};

/*
  🔥 Homepage Component
*/
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Synage Consultants",
            url: "https://www.synageconsultants.com",

            areaServed: [
              {
                "@type": "City",
                name: "Gurgaon",
              },
              {
                "@type": "City",
                name: "South Delhi",
              },
            ],

            description: pageDescription,

            address: {
              "@type": "PostalAddress",
              addressLocality: "Gurgaon",
              addressRegion: "Haryana",
              addressCountry: "IN",
            },
          }),
        }}
      />

      <main>
        <HomeHero />
        <WhyUs />
        <Services />
        <AboutLead />
        <TrustedFor />
        <BlogsHero />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}