"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fetchRecentPosts } from "@/lib/fetchRecentPosts";
import { Post } from "@/lib/fetchPostByTitle";
import Link from "next/link";
import { formatFirebaseDate } from "@/lib/formatdate";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 20 } },
};

const RecentPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecentPosts()
      .then((data) => setPosts(data))
      .finally(() => setLoading(false));
  }, []);



  if (loading) {
    return (
      <section className="text-white py-12 relative px-6">

        <div className="max-w-7xl mx-auto px-6 py-36 z-20 space-y-6">
          <div className="h-10 w-64 bg-gray-700 rounded animate-pulse" />
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Main post skeleton */}
            <div className="h-96 bg-gray-800 animate-pulse rounded-lg overflow-hidden">
              <div className="h-56 bg-gray-700 w-full" />
              <div className="p-6 space-y-2">
                <div className="h-4 w-32 bg-gray-600 rounded" />
                <div className="h-6 w-48 bg-gray-600 rounded" />
                <div className="h-4 w-full bg-gray-600 rounded" />
              </div>
            </div>

            {/* Side posts skeleton */}
            <div className="flex flex-col gap-6">
              {[1, 2].map((i) => (
                <div key={i} className="flex h-44 gap-4 animate-pulse">
                  <div className="w-1/2 h-full bg-gray-700 rounded" />
                  <div className="w-1/2 flex flex-col justify-start gap-2">
                    <div className="h-3 w-24 bg-gray-600 rounded" />
                    <div className="h-4 w-32 bg-gray-600 rounded" />
                    <div className="h-3 w-full bg-gray-600 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!posts.length)
    return <p className="text-center text-gray-400 py-12">No posts found.</p>;

  const [mainPost, ...sidePosts] = posts;

  return (
    <section className="text-white py-12 relative px-6">


<div className="py-36 mx-auto  max-w-7xl px-4 md:px-6 xl:px-0">
        <h1 className="text-4xl  mb-6">Recent Blogs</h1>

  <div className="grid grid-cols-1 lg:grid-cols-3  gap-6" >
    {/* Main post spans 2 columns */}
    <motion.div
      variants={itemVariants}
      className="lg:col-span-2 grid grid-flow-row overflow-hidden  text-white cursor-pointer"
    >
      <Link
        href={`/insights/${encodeURIComponent(mainPost.heading)}`}
        className="h-full w-full"
      >
        <img
          src={mainPost.coverImage}
          alt={mainPost.heading}
          className="w-full object-cover h-56 lg:h-72"
        />
        <div className="p-6 flex flex-col justify-end ">
          <p className="text-sm text-[#FF0004] mb-1 flex justify-between">
            <span>admin • {formatFirebaseDate(mainPost.createdAt)}</span>
            <span className="text-white">
              <ArrowUpRight />
            </span>
          </p>
          <h3 className="text-xl font-semibold mb-2">{mainPost.heading}</h3>
          <div
            className="text-sm text-gray-200"
            dangerouslySetInnerHTML={{
              __html: mainPost.content.slice(0, 120) + "...",
            }}
          />
        </div>
      </Link>
    </motion.div>

    {/* Side posts */}
    <motion.div
      className="flex flex-col gap-6"
      variants={containerVariants}
    >
      {sidePosts.map((post) => (
        <motion.div
          key={post.id}
          variants={itemVariants}
          className="overflow-hidden text-white flex h-44"
        >
          <Link
            href={`/insights/${encodeURIComponent(post.heading)}`}
            className="flex h-full w-full"
          >
            <div className="w-1/2 h-full relative">
              <img
                src={post.coverImage}
                alt={post.heading}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 px-4 flex flex-col justify-start">
              <p className="text-xs text-[#FF0004] flex justify-between">
                <span>admin • {formatFirebaseDate(post.createdAt)}</span>
                <span className="text-white">
                  <ArrowUpRight />
                </span>
              </p>
              <h4 className="text-base font-semibold mt-1">{post.heading}</h4>
              <div
                className="text-xs text-gray-200 mt-1"
                dangerouslySetInnerHTML={{
                  __html: post.content.slice(0, 60) + "...",
                }}
              />
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  </div>
</div>

    </section>
  );
};

export default RecentPosts;
