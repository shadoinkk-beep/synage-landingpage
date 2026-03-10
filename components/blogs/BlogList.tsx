"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
  DocumentData,
  QueryDocumentSnapshot,
  where,
} from "firebase/firestore";
import { db } from "../../lib/firebaseconfig";
import BlogCard from "./BlogCard";

interface Post {
  id: string;
  heading: string;
  coverImage: string;
  content: string;
  excerpt: string;
  createdAt: any;
  tags?: string[];
  status?: "active" | "archived";
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 20 } },
};

const PAGE_SIZE = 6;

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async (nextPage = 1) => {
    setLoading(true);
    try {
      // Total pages calculation (only active posts)
      const activePostsQuery = query(
        collection(db, "posts"),
        where("status", "==", "active")
      );

      const allSnapshot = await getDocs(activePostsQuery);
      const totalCount = allSnapshot.size;
      setTotalPages(Math.ceil(totalCount / PAGE_SIZE));

      // Pagination query (only active posts)
      let q;
      if (nextPage === 1) {
        q = query(
          collection(db, "posts"),
          where("status", "==", "active"),
          orderBy("createdAt", "desc"),
          limit(PAGE_SIZE)
        );
      } else if (lastDoc) {
        q = query(
          collection(db, "posts"),
          where("status", "==", "active"),
          orderBy("createdAt", "desc"),
          startAfter(lastDoc),
          limit(PAGE_SIZE)
        );
      }

      if (!q) return;

      const snapshot = await getDocs(q);
      const fetchedPosts = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          heading: data.heading,
          coverImage: data.coverImage,
          content: data.content,
          excerpt: data.content.replace(/<[^>]+>/g, "").slice(0, 120) + "...",
          createdAt: data.createdAt,
          tags: data.tags || [],
          status: data.status,
        };
      });

      setPosts(fetchedPosts);
      setLastDoc(snapshot.docs[snapshot.docs.length - 1] || null);
      setPage(nextPage);
    } catch (err) {
      console.error("Error fetching posts:", err);
    } finally {
      setLoading(false);
    }
  };

  const handlePrev = () => {
    if (page <= 1) return;
    fetchPosts(page - 1);
  };

  const handleNext = () => {
    if (page >= totalPages) return;
    fetchPosts(page + 1);
  };

  return (
    <div className="section-content section-dark py-24!">
      <h1 className="text-2xl font-bold mb-8">All blog posts</h1>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(PAGE_SIZE)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-300 rounded animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <BlogCard
                id={post.id}
                image={post.coverImage}
                title={post.heading}
                author="Admin"
                date={post.createdAt}
                content={post.content}
                tags={post.tags || []}
                excerpt={post.excerpt}
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-between items-center gap-3 mt-10">
        <button
          onClick={handlePrev}
          disabled={page <= 1}
          className="px-3 py-1 text-white  flex items-center gap-1 disabled:opacity-50"
        >
          <ArrowLeft /> Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={page >= totalPages}
          className="px-3 py-1 text-white flex items-center gap-1 disabled:opacity-50"
        >
          Next <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BlogList;
