"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { testimonialsData } from "@/testings/sampleData/testimonials";

/* ---------------- ANIMATION VARIANTS ---------------- */

const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const columnVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const cardHover = {
  hover: {
    scale: 1.03,
    transition: { duration: 0.3 },
  },
};

/* ---------------- VIDEO CARD ---------------- */

function VideoCard({ item }: { item: any }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
  };

  return (
    <motion.div
      variants={cardHover}
      whileHover="hover"
      className="relative h-full rounded-2xl overflow-hidden bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster={item.thumbnail}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <source src={item.videoUrl} type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
        <Image
          src={item.avatar}
          alt={item.name}
          width={36}
          height={36}
          className="rounded-full"
        />
        <div>
          <p className="text-sm font-semibold">{item.name}</p>
          <p className="text-xs opacity-80">
            {item.role} at {item.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- TEXT CARD ---------------- */

function TextCard({ item }: { item: any }) {
  return (
    <motion.div
      variants={cardHover}
      whileHover="hover"
      className="h-full rounded-2xl bg-white p-6 flex flex-col justify-between"
    >
      <div className="flex items-center gap-3">
        <Image
          src={item.avatar}
          alt={item.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="text-sm text-black font-bold">{item.name}</p>
          <p className="text-xs text-black">
            {item.role} at {item.company}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm text-black/80 leading-relaxed">
        {item.message}
      </p>
    </motion.div>
  );
}

/* ---------------- MAIN SECTION ---------------- */

export default function TrustedFor() {
  const col1 = [testimonialsData[0], testimonialsData[1]];
  const col2 = [testimonialsData[2], testimonialsData[3]];
  const col3 = [testimonialsData[4], testimonialsData[5]];

  return (
    <motion.section
      id="testimonials"
      className="section section-dark"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="section-content">

        {/* HEADER */}
        <div className="grid gap-4 sm:flex justify-between pb-12">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl text-white"
          >
            Trusted for high-<br />stakes real estate
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            className="font-body sm:text-right text-sm md:text-base text-white/70 max-w-md lg:ml-6"
          >
            Synage supports ₹100Cr+ - ₹1000Cr+ decisions in Gurgaon and South Delhi.
            Clients choose us for real execution, discreet representation, and
            end-to-end ownership support that continues after the deal closes.
          </motion.p>

        </div>

        {/* 3 COLUMN STAGGERED LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* COLUMN 1 */}
          <motion.div
            variants={columnVariant}
            className="flex flex-col gap-8"
          >
            <div className="h-[40%] min-h-[180px]">
              <TextCard item={col1[0]} />
            </div>
            <div className="h-[60%] min-h-[260px]">
              <VideoCard item={col1[1]} />
            </div>
          </motion.div>

          {/* COLUMN 2 */}
          <motion.div
            variants={columnVariant}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="h-[60%] min-h-[260px]">
              <VideoCard item={col2[0]} />
            </div>
            <div className="h-[40%] min-h-[180px]">
              <TextCard item={col2[1]} />
            </div>
          </motion.div>

          {/* COLUMN 3 */}
          <motion.div
            variants={columnVariant}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-8"
          >
            <div className="h-[40%] min-h-[180px]">
              <TextCard item={col3[0]} />
            </div>
            <div className="h-[60%] min-h-[260px]">
              <VideoCard item={col3[1]} />
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}