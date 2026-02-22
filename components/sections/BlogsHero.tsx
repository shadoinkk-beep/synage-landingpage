"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { blogsData } from "@/testings/sampleData/blogs";
import ArrowSlideButton from "@/components/common/ArrowSlideButton";
import Arrow from "../common/Arrow";

export default function BlogsHero() {
  const total = blogsData.length;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps", // ⭐ IMPORTANT FIX
  });

  const [index, setIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const prev = () => emblaApi && emblaApi.scrollPrev();
  const next = () => emblaApi && emblaApi.scrollNext();

  return (
    <section id="blogs" className="section section-light">
      <div className="section-content">

        {/* ================= HEADER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl max-w-lg">
            Insights for luxury real estate decisions
          </h2>

          <div className="space-y-4 max-w-md ml-auto text-center sm:text-right">
            <p className="font-body text-sm md:text-base text-black/70">
              We publish practical notes on resales, pre-rented assets, leasing,
              and NRI ownership across Gurgaon and South Delhi.
            </p>

            <ArrowSlideButton text="View All Blogs" link="/blogs" />
          </div>
        </div>

        {/* ================= MAIN ================= */}
        <div className="mt-16 grid sm:grid-cols-[20%_1fr] sm:gap-36 items-stretch">

          {/* LEFT SIDE (Counter + Arrows) */}
          <div className="flex sm:flex-col justify-between h-32 sm:h-105">
            <div className="flex items-baseline gap-2 translate-y-px">
              <span className="text-6xl font-semibold leading-none">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xl opacity-60 leading-none">/ {total}</span>
            </div>

            <div className="flex gap-6">
              <button
                onClick={prev}
                className="w-20 h-20 p-4 cursor-pointer rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <Arrow className="rotate-180" />
              </button>

              <button
                onClick={next}
                className="w-20 h-20 p-4 cursor-pointer rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <Arrow />
              </button>
            </div>
          </div>

          {/* ================= CAROUSEL ================= */}
          <div ref={emblaRef} className="overflow-hidden ">
            <div className="flex">
              {blogsData.map((blog, i) => (
                <div
                  key={i}
                  className="
                    min-w-[100%] md:min-w-[50%]
                    flex
                    
                  "
                >
                  {/* ⭐ Embla-safe spacing inside slide */}
                  <div className="w-full px-2 sm:pl-6">
                    <BlogCard blog={blog} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= BLOG CARD ================= */

function BlogCard({ blog }: { blog: any }) {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-black h-105 flex flex-col justify-end">
      <Image src={blog.img} alt={blog.title} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 p-6 text-white space-y-4">
        <h3 className="font-body text-lg font-semibold">{blog.title}</h3>

        <p className="text-sm opacity-80 line-clamp-3">{blog.description}</p>

        <Link href={blog.url}>
          <button className="w-full bg-[#B8D779] text-black rounded-full py-2 text-sm font-semibold hover:opacity-90 transition">
            Read Now
          </button>
        </Link>
      </div>
    </div>
  );
}