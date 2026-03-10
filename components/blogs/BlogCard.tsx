"use client";

import { ArrowUpRight } from "lucide-react";
import React from "react";
import parse from "html-react-parser";
import Link from "next/link";
import { formatFirebaseDate } from "@/lib/formatdate";

interface BlogCardProps {
  id: string;
  image: string;
  date?: any; // Firestore Timestamp or string
  title: string;
  content: string;
  tags: string[];
}

const BlogCard: React.FC<BlogCardProps> = ({ id, image, date, title, content, tags }) => {
  // Format Firestore timestamp to DD-MM-YYYY
  console.log({ id, image, date, title, content, tags })
const formattedDate = formatFirebaseDate(date)

  // Create slug for URL
  const slug = encodeURIComponent(title);

  // Extract excerpt from HTML content
  const excerpt = parse(content.slice(0, 120) + "...");

  return (
    <Link className="grid h-full" href={`/insights/${slug}`}>
      <div className="bg-white shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
        {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
        <div className="p-5">
          <div className="text-sm text-[#FF0004] mb-2 flex justify-between">
            <div>
              <span className="font-semibold">Admin</span> • {formattedDate}
            </div>
            <span className="text-black">
              <ArrowUpRight />
            </span>
          </div>
          <h3 className="text-lg font-semibold mb-2 hover:text-blue-600">{title}</h3>
          <div className="text-gray-600 text-sm mb-3">{excerpt}</div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
