"use client";

import Image from "next/image";
import { useRef } from "react";
import { testimonialsData } from "@/testings/sampleData/testimonials";

/* ---------------- VIDEO CARD ---------------- */

function VideoCard({ item }: { item: any }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        const video = videoRef.current;
        if (!video) return;

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // Ignore AbortError (fast hover)
            });
        }
    };

    const handleMouseLeave = () => {
        const video = videoRef.current;
        if (!video) return;

        video.pause();
        video.currentTime = 0;
    };

    return (
        <div
            className="relative h-full rounded-2xl overflow-hidden bg-black"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <video
                ref={videoRef}
                muted
                loop
                playsInline
                preload="metadata"
                poster={item.thumbnail}
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={item.videoUrl} type="video/mp4" />
            </video>

            {/* overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* footer */}
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
        </div>
    );
}

/* ---------------- TEXT CARD ---------------- */

function TextCard({ item }: { item: any }) {
    return (
        <div className="h-full rounded-2xl bg-white p-6 flex flex-col justify-between">
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
        </div>
    );
}

/* ---------------- MAIN SECTION ---------------- */

export default function TrustedFor() {
    // Fixed distribution (important for layout)
    const col1 = [testimonialsData[0], testimonialsData[1]];
    const col2 = [testimonialsData[2], testimonialsData[3]];
    const col3 = [testimonialsData[4], testimonialsData[5]];

    return (
        <section id="testimonials" className="section section-dark">
            <div className="section-content">

                {/* HEADER */}
                <div className="grid gap-4 sm:flex justify-between pb-12">

                    {/* LEFT: HEADING */}
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white">
                        Trusted for high-<br />stakes real estate
                    </h2>

                    {/* RIGHT: PARAGRAPH (SLIGHTLY PUSHED RIGHT) */}
                    <p className="font-body text-sm md:text-base text-white/70 max-w-md lg:ml-6">
                        Synage supports ₹100Cr+ - ₹1000Cr+ decisions in Gurgaon and South Delhi.
                        Clients choose us for real execution, discreet representation, and
                        end-to-end ownership support that continues after the deal closes.
                    </p>

                </div>


                {/* 3 COLUMN STAGGERED LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* COLUMN 1 (2 / 3) */}
                    <div className="flex flex-col gap-8">
                        <div className="h-[40%] min-h-[180px]">
                            <TextCard item={col1[0]} />
                        </div>
                        <div className="h-[60%] min-h-[260px]">
                            <VideoCard item={col1[1]} />
                        </div>
                    </div>

                    {/* COLUMN 2 (3 / 2) */}
                    <div className="flex flex-col gap-8">
                        <div className="h-[60%] min-h-[260px]">
                            <VideoCard item={col2[0]} />
                        </div>
                        <div className="h-[40%] min-h-[180px]">
                            <TextCard item={col2[1]} />
                        </div>
                    </div>

                    {/* COLUMN 3 (2 / 3) */}
                    <div className="flex flex-col gap-8">
                        <div className="h-[40%] min-h-[180px]">
                            <TextCard item={col3[0]} />
                        </div>
                        <div className="h-[60%] min-h-[260px]">
                            <VideoCard item={col3[1]} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
