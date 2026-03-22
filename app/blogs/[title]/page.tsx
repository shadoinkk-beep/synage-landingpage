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
  // console.log(titleParam);
  const decodedTitle = decodeURIComponent(titleParam || "");
  // console.log(decodedTitle);
  const post = await fetchPostByTitle(decodedTitle);

  if (!post) {
    return { title: "Post Not Found", description: "The requested blog post does not exist." };
  }

  const excerpt = post.content
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160) + "...";

  const siteUrl = "https://www.synageconsultants.com";
  const absoluteUrl = `${siteUrl}/blogs/${titleParam}`;
  const absoluteImageUrl = post.coverImage
    ? post.coverImage.startsWith("http")
      ? post.coverImage
      : `${siteUrl}${post.coverImage}`
    : undefined;

  return {
    title: post.heading,
    description: excerpt,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      title: post.heading,
      description: excerpt,
      url: absoluteUrl,
      siteName: "Synage Consultants",
      type: "article",
      images: absoluteImageUrl
        ? [
            {
              url: absoluteImageUrl,
              secureUrl: absoluteImageUrl,
              width: 1200,
              height: 630,
              alt: post.heading,
              type: absoluteImageUrl.toLowerCase().includes(".png")
                ? "image/png"
                : "image/jpeg",
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.heading,
      description: excerpt,
      images: absoluteImageUrl ? [absoluteImageUrl] : undefined,
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
        className="w-full max-w-none mt-10 text-[15px] sm:text-base text-white/80 font-body leading-relaxed
          [&_h1]:text-3xl [&_h1]:md:text-4xl [&_h1]:font-heading [&_h1]:font-medium [&_h1]:text-white [&_h1]:mt-8 [&_h1]:mb-4 
          [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-heading [&_h2]:font-medium [&_h2]:text-white [&_h2]:mt-8 [&_h2]:mb-4 
          [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-heading [&_h3]:font-medium [&_h3]:text-white [&_h3]:mt-6 [&_h3]:mb-3 
          [&_p]:mb-4 
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:marker:text-white/40
          [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:marker:text-white/40
          [&_li]:mb-2 [&_li]:pl-1
          [&_a]:text-blue-400 [&_a]:underline [&_a:hover]:text-blue-300
          [&_blockquote]:border-l-4 [&_blockquote]:border-[#B8D779] [&_blockquote]:pl-5 [&_blockquote]:py-2 [&_blockquote]:italic [&_blockquote]:my-6 [&_blockquote]:bg-white/5 [&_blockquote]:rounded-r-lg
          [&_img]:w-full [&_img]:rounded-2xl [&_img]:my-8 [&_img]:shadow-md [&_img]:object-cover
          [&_strong]:font-bold [&_strong]:text-white
          [&_em]:italic
          [&_code]:bg-white/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded-md [&_code]:text-sm [&_code]:font-mono
          [&_pre]:bg-[#0b0b0b] [&_pre]:text-white [&_pre]:p-5 [&_pre]:rounded-xl [&_pre]:overflow-x-auto [&_pre]:my-6 [&_pre]:text-sm
          [&_.ql-align-center]:text-center
          [&_.ql-align-right]:text-right
          [&_.ql-align-justify]:text-justify
          [&_.ql-size-small]:text-sm
          [&_.ql-size-large]:text-lg
          [&_.ql-size-huge]:text-2xl"
        dangerouslySetInnerHTML={{ __html: serverRenderedPost.content }}
      />

      <PostClient post={{ postId: serverRenderedPost.id, interactions: serverRenderedPost.interactions }} />
    </article>
  );
}
