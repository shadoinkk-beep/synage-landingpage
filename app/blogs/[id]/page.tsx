import { Metadata } from "next";

type Props = {
  params: { id: string };
};

/*
  🔹 Replace this function with:
     - Firebase fetch
     - CMS API
     - Database call
*/
async function getBlog(id: string) {
  return {
    title: "Real Estate Investment Guide 2026", // 🔁 Change: dynamic blog title
    description:
      "Complete guide to investing in Gurgaon real estate in 2026.", // 🔁 Change: dynamic meta description
    image: "https://www.synageconsultants.com/og-image.jpg", // 🔁 Change: blog featured image
    publishedAt: "2026-01-10", // 🔁 Change: publish date
    updatedAt: "2026-01-12", // 🔁 Change: update date
    author: "Synage Consultants", // 🔁 Change: author name
  };
}

/*
  🔥 Dynamic SEO Metadata
  Runs on server before rendering
*/
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const blog = await getBlog(params.id);

  return {
    title: blog.title, // 🔁 Change: dynamic title
    description: blog.description, // 🔁 Change: dynamic description

    alternates: {
      canonical: `/blogs/${params.id}`, // 🔁 Change if you modify blog route
    },

    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `/blogs/${params.id}`, // 🔁 Change if route changes
      type: "article",
      images: [
        {
          url: blog.image, // 🔁 Change: featured image
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.image], // 🔁 Change: featured image
    },
  };
}

/*
  🔥 Blog Page Component
*/
export default async function BlogPage({ params }: Props) {
  const blog = await getBlog(params.id);

  return (
    <>
      {/* 
        🔥 Article Structured Data (SEO Rich Snippet)
        🔁 Update fields dynamically when connected to DB
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",

            headline: blog.title, // 🔁 Change dynamically
            description: blog.description, // 🔁 Change dynamically

            image: blog.image, // 🔁 Change: featured image URL

            datePublished: blog.publishedAt, // 🔁 Change: publish date
            dateModified: blog.updatedAt, // 🔁 Change: update date

            author: {
              "@type": "Organization", // 🔁 Change to "Person" if needed
              name: blog.author, // 🔁 Change: author name
            },

            publisher: {
              "@type": "Organization",
              name: "Synage Consultants", // 🔁 Change if company name changes
              logo: {
                "@type": "ImageObject",
                url: "https://www.synageconsultants.com/logo.png", 
                // 🔁 Change: company logo URL
              },
            },

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.synageconsultants.com/blogs/${params.id}`, 
              // 🔁 Change: if domain or route changes
            },
          }),
        }}
      />

      {/* 
        📝 BLOG CONTENT GOES BELOW
        🔁 Replace with your actual blog UI
      */}
      <div>
        {/* Blog content */}
        {blog.description}
      </div>
    </>
  );
}
