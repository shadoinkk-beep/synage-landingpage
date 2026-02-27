"use client";

import React, { useState, useEffect } from "react";
import { ThumbsUp, Eye, Share2 } from "lucide-react";
import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "@/lib/firebaseconfig";
import { Bounce, toast, ToastContainer } from "react-toastify";

interface PostInteractions {
  views: number;
  like: number;
  share: number;
}

interface PostClientProps {
  postId: string;
  interactions: PostInteractions;
}

const PostClient: React.FC<{ post: PostClientProps }> = ({ post }) => {
  const [likes, setLikes] = useState(post.interactions.like);
  const [shares, setShares] = useState(post.interactions.share);
  const [views, setViews] = useState(post.interactions.views);
  const [liked, setLiked] = useState(false);

  // Get today's date in YYYY-MM-DD
  const today = new Date().toLocaleDateString("en-GB").replaceAll('/', '-');

const handleLike = async () => {
  if (liked) return;
  setLiked(true);
  setLikes((prev) => prev + 1);

  const postRef = doc(db, "posts", post.postId);
  const analyticsRef = doc(db, "analytics", "analytics");

  await updateDoc(postRef, { "interactions.like": increment(1) });
  await updateDoc(analyticsRef, { [`interactions.${today}.like`]: increment(1) });
};

const handleShare = async () => {
  const url = window.location.href;
  try {
    await navigator.clipboard.writeText(url);
    toast.success("Link copied to clipboard!");
    setShares((prev) => prev + 1);

    const postRef = doc(db, "posts", post.postId);
    const analyticsRef = doc(db, "analytics", "analytics");

    await updateDoc(postRef, { "interactions.share": increment(1) });
    await updateDoc(analyticsRef, { [`interactions.${today}.share`]: increment(1) });
  } catch (err) {
    toast.error("Failed to copy link.");
  }
};

const handleView = async () => {
  setViews((prev) => prev + 1);

  const postRef = doc(db, "posts", post.postId);
  const analyticsRef = doc(db, "analytics", "analytics");

  await updateDoc(postRef, { "interactions.views": increment(1) });
  await updateDoc(analyticsRef, { [`interactions.${today}.views`]: increment(1) });
};


  useEffect(() => {
    handleView();
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <div className="flex flex-wrap gap-4 mt-6 items-center border-t border-gray-200 pt-4">
        {/* 3D-like Like Button */}
        <button
          onClick={handleLike}
          className={`flex gap-2 items-center cursor-pointer px-4 py-2 rounded-lg font-semibold shadow-md transition-transform transform active:scale-95 active:translate-y-1 ${
            liked ? "bg-red-500 text-white shadow-red-400" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          <ThumbsUp className={`${liked ? "text-white" : "text-gray-800"}`} />
          <span>{likes}</span>
        </button>

        {/* Single Share/Copy Button */}
        <button
          onClick={handleShare}
          className="flex gap-2 items-center cursor-pointer px-4 py-2 rounded-lg font-semibold bg-blue-500 text-white shadow-md hover:bg-blue-600 transition-transform transform active:scale-95 active:translate-y-1"
        >
          <Share2 />
          <span>Share</span>
        </button>

        {/* Views */}
        <div className="flex gap-2 items-center ml-auto text-gray-500">
          {/* <Eye />
          <span>{views}</span> */}
        </div>
      </div>
    </>
  );
};

export default PostClient;
