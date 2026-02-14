import { Metadata } from "next";

/*
  🔹 Change these values anytime
*/
const pageTitle =
  "Real Estate Blog | Gurgaon Property Insights & Investment Guides";

const pageDescription =
  "Explore expert insights, market trends, and investment guides for Gurgaon and Delhi NCR real estate by Synage Consultants.";

/*
  🔥 Static SEO Metadata for Blog Landing Page
*/
export const metadata: Metadata = {
  title: pageTitle, // 🔁 Change title anytime
  description: pageDescription, // 🔁 Change description anytime

  alternates: {
    canonical: "/blogs", // 🔁 Change if route changes
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/blogs", // 🔁 Change if route changes
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

/*
  🔥 Blog Landing Page
*/
export default function BlogsLandingPage() {
  return (
    <>
      {/* 
        🔥 Blog Listing Structured Data
        Helps Google understand this is a collection of articles
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: pageTitle, // 🔁 Change if title changes
            description: pageDescription, // 🔁 Change if description changes
            url: "https://www.synageconsultants.com/blogs", 
            // 🔁 Change if domain changes
            publisher: {
              "@type": "Organization",
              name: "Synage Consultants", // 🔁 Change if brand changes
              logo: {
                "@type": "ImageObject",
                url: "https://www.synageconsultants.com/logo.png",
                // 🔁 Change: company logo URL
              },
            },
          }),
        }}
      />

      {/* 
        📝 Blog listing UI goes here
        🔁 Replace with your blog grid component later
      */}
      <div>
        {/* Blog list component */}
        Blogs
      </div>
    </>
  );
}
