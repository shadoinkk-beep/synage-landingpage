"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogsData } from "@/testings/sampleData/blogs";
import ArrowSlideButton from "@/components/common/ArrowSlideButton";

export default function BlogsHero() {
  const total = blogsData.length;
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((p) => (p === 0 ? total - 1 : p - 1));
  };

  const next = () => {
    setIndex((p) => (p + 1) % total);
  };

  const firstBlog = blogsData[index];
  const secondBlog = blogsData[(index + 1) % total];

  return (
    <section id="blogs" className="section section-light">
      <div className="section-content">

        {/* ================= HEADER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl max-w-lg">
            Insights for luxury real estate decisions
          </h2>

          <div className="space-y-4 max-w-md ml-auto">
            <p className="font-body text-sm md:text-base text-black/70">
              We publish practical notes on resales, pre-rented assets, leasing,
              and NRI ownership across Gurgaon and South Delhi.
            </p>

            <ArrowSlideButton text="View All Blogs" link="/blogs" />
          </div>
        </div>

        {/* ================= MAIN ROW (REFERENCE LINE) ================= */}
        <div className="mt-16 grid grid-cols-[20%_1fr] gap-10 items-stretch">

          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-between h-[420px]">

            {/* COUNTER — aligned to card top */}
            <div className="flex items-baseline gap-2 translate-y-[1px]">
              <span className="text-6xl font-semibold leading-none">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xl opacity-60 leading-none">
                / {total}
              </span>
            </div>

            {/* ARROWS — same axis as counter */}
            <div className="flex gap-6">
              <button
                onClick={prev}
                className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center text-2xl hover:bg-black hover:text-white transition"
              >
                ←
              </button>
              <button
                onClick={next}
                className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center text-2xl hover:bg-black hover:text-white transition"
              >
                →
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN — BLOG CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BlogCard blog={firstBlog} />
            <BlogCard blog={secondBlog} />
          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= BLOG CARD ================= */

function BlogCard({ blog }: { blog: any }) {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-black h-[420px] flex flex-col justify-end">
      <Image src={blog.img} alt={blog.title} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 p-6 text-white space-y-4">
        <h3 className="font-body text-lg font-semibold">
          {blog.title}
        </h3>

        <p className="text-sm opacity-80 line-clamp-3">
          {blog.description}
        </p>

        <Link href={blog.url}>
          <button className="w-full
    bg-[#B8D779]
    text-black
    rounded-full
    py-2
    text-sm
    font-semibold
    text-center
    cursor-pointer
    hover:opacity-90
    transition">
            Read Now
          </button>
        </Link>
      </div>
    </div>
  );
}
