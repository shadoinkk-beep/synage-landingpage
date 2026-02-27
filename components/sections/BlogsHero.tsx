"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { blogsData } from "@/testings/sampleData/blogs";
import ArrowSlideButton from "@/components/common/ArrowSlideButton";
import Arrow from "../common/Arrow";

/* ---------------- ANIMATION VARIANTS ---------------- */

const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BlogsHero() {
  const total = blogsData.length;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
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
    <motion.section
      id="blogs"
      className="section section-light"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="section-content">

        {/* ================= HEADER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl md:text-5xl lg:text-6xl max-w-lg"
          >
            Insights for luxury real estate decisions
          </motion.h2>

          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="space-y-4 max-w-md ml-auto text-center sm:text-right"
          >
            <p className="font-body text-sm md:text-base text-black/70">
              We publish practical notes on resales, pre-rented assets, leasing,
              and NRI ownership across Gurgaon and South Delhi.
            </p>

            <ArrowSlideButton text="View All Blogs" link="/#blogs" />
          </motion.div>
        </div>

        {/* ================= MAIN ================= */}
        <div className="mt-16 grid sm:grid-cols-[20%_1fr] sm:gap-36 items-stretch">

          {/* LEFT SIDE */}
          <div className="flex sm:flex-col justify-between h-32 sm:h-105">
            
            {/* Counter Animation */}
            <div className="flex items-baseline gap-2 translate-y-px overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-6xl font-semibold leading-none"
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>

              <span className="text-xl opacity-60 leading-none">
                / {total}
              </span>
            </div>

            {/* Arrows */}
            <div className="flex gap-6">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={prev}
                className="w-20 h-20 p-4 cursor-pointer rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <Arrow className="rotate-180" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={next}
                className="w-20 h-20 p-4 cursor-pointer rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <Arrow />
              </motion.button>
            </div>
          </div>

          {/* ================= CAROUSEL ================= */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {blogsData.map((blog, i) => (
                <div
                  key={i}
                  className="min-w-[100%] md:min-w-[50%] flex"
                >
                  <div className="w-full px-2 sm:pl-6">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.6 }}
                    >
                      <BlogCard blog={blog} />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}

/* ================= BLOG CARD ================= */

function BlogCard({ blog }: { blog: any }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="relative rounded-3xl overflow-hidden bg-black h-105 flex flex-col justify-end"
    >
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
          <button className="w-full cursor-pointer bg-[#B8D779] text-black rounded-full py-2 text-sm font-semibold hover:opacity-90 transition">
            Read Now
          </button>
        </Link>
      </div>
    </motion.div>
  );
}