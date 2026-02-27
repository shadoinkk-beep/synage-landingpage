// app/insights/[title]/page.tsx
import PostClient from "./PostClient";
import { fetchPostByTitle } from "@/lib/fetchPostByTitle";
import { Eye, ThumbsUp } from "lucide-react";
import { notFound } from "next/navigation";
import Script from "next/script";

interface Props {
  params: Promise<{ title: string | string[] }>;
}

// Metadata generator
export async function generateMetadata({ params }: Props) {
  const { title } = await params;
  const titleParam = Array.isArray(title) ? title[0] : title;
  console.log(titleParam);
  const decodedTitle = decodeURIComponent(titleParam || "");
  console.log(decodedTitle);
  const post = await fetchPostByTitle(decodedTitle);

  if (!post) {
    return { title: "Post Not Found", description: "The requested blog post does not exist." };
  }

  const excerpt = post.content.replace(/<[^>]+>/g, "").slice(0, 160);

  return {
    title: post.heading,
    description: excerpt,
    openGraph: {
      title: post.heading,
      description: excerpt,
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.heading,
      description: excerpt,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

// Server component for the dynamic post page
export default async function PostPage({ params }: Props) {
  // Normalize params.title
  const { title } = await params;
  const titleParam = Array.isArray(title) ? title[0] : title;
  const decodedTitle = decodeURIComponent(titleParam || "");

  // Fetch post data
  const post = await fetchPostByTitle(decodedTitle);
  if (!post) return notFound();

  const postId = post.id;
const formattedDate = post.createdAt?.seconds
  ? new Date(post.createdAt.seconds * 1000).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
  : new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  // JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.heading,
    image: post.coverImage || undefined,
    author: { "@type": "Person", name: "Admin" },
    datePublished: formattedDate,
    dateModified: formattedDate,
    publisher: {
      "@type": "Organization",
      name: "Authcor.com",
      logo: { "@type": "ImageObject", url: "/logo.png" },
    },
    description: post.content.replace(/<[^>]+>/g, "").slice(0, 160),
  };

  const serverRenderedPost = {
    ...post,
    postId,
    formattedDate,
    excerpt: post.content.replace(/<[^>]+>/g, "").slice(0, 160),
  };

  return (
    <article className="section-content py-20!">
      <Script type="application/ld+json" id="blog-json-ld">
        {JSON.stringify(jsonLd)}
      </Script>

      {serverRenderedPost.coverImage && (
        <img
          src={serverRenderedPost.coverImage}
          alt={serverRenderedPost.heading}
          className="w-full rounded shadow-md"
        />
      )}

      <h1 className="text-4xl font-bold py-3">{serverRenderedPost.heading}</h1>

      <div className="flex flex-wrap gap-6 justify-between sm:justify-start text-sm text-gray-500">
        <div className="flex gap-2">

        <span>Admin</span>
        <span>{serverRenderedPost.formattedDate}</span>
        </div>
        <div className="flex gap-2">

        <div className="flex items-center gap-1">{serverRenderedPost.interactions.like} <ThumbsUp className="-mt-1" size={16} />  </div>
        <div className="flex gap-1 items-center">{serverRenderedPost.interactions.views} <Eye  size={16} />  </div>
        </div>
      </div>

      {serverRenderedPost.tags && (
        <div className="flex flex-wrap gap-2 mt-2">
          {serverRenderedPost.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div
        className="prose  leading-relaxed [&_p]:my-2 [&_h1]:my-3 [&_h2]:my-2 [&_ul]:my-2"
        dangerouslySetInnerHTML={{ __html: serverRenderedPost.content }}
      />

      <PostClient post={{ postId: serverRenderedPost.id, interactions: serverRenderedPost.interactions }} />
    </article>
  );
}
