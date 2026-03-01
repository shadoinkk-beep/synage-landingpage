"use client";

import Image from "next/image";
import ArrowDownButton from "../common/ArrowDownButton";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroBg from "@/public/HomePage/Hero_BG.png";
import HeroPhoneBg from "@/public/HomePage/HeroPhone.jpeg";
import HeroTabBg from "@/public/HomePage/HeroTab.jpeg";


export default function HomeHero() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 640);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return (
        <section className="relative overflow-hidden text-white bg-[#0b0b0b]">

{/* Desktop */}
<Image
  src={HeroBg}
  alt="Luxury real estate models in Gurgaon and South Delhi"
  fill
  priority
  className="object-cover hidden lg:block"
/>

{/* Tablet */}
<Image
  src={HeroTabBg}
  alt="Luxury real estate models in Gurgaon and South Delhi"
  fill
  priority
  className="object-cover hidden sm:block lg:hidden"
/>

{/* Mobile */}
<Image
  src={HeroPhoneBg}
  alt="Luxury real estate models in Gurgaon and South Delhi"
  fill
  priority
  className="object-cover block sm:hidden"
/>

            <div className="absolute inset-0 bg-black/60 sm:hidden" />

            <div className="relative z-10 flex min-h-screen flex-col section-content py-0!">

                {/* ================= TEXT CONTENT ================= */}
                <motion.div
                    className="sm:flex-1 flex flex-col items-center justify-start pt-24 text-center mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >

                    {/* Tagline with SVGs */}
                    <motion.p
                        className="mb-6 flex items-center gap-3 text-xs tracking-wide  text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {/* LEFT SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="81" height="6" viewBox="0 0 81 6" fill="none">
                            <path d="M80.6686 2.66663C80.6686 1.19387 79.4747 -4.07696e-05 78.002 -4.07696e-05C76.5292 -4.07696e-05 75.3353 1.19387 75.3353 2.66663C75.3353 4.13939 76.5292 5.33329 78.002 5.33329C79.4747 5.33329 80.6686 4.13939 80.6686 2.66663ZM78.002 2.66663V2.16663L0.000350952 2.16663V2.66663V3.16663L78.002 3.16663V2.66663Z" fill="#B8D779"/>
                        </svg>

                        Investment Advisory, Property & Portfolio Management

                        {/* RIGHT SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="81" height="6" viewBox="0 0 81 6" fill="none">
                            <path d="M0.000325441 2.66663C0.000325441 4.13939 1.19423 5.33329 2.66699 5.33329C4.13975 5.33329 5.33366 4.13939 5.33366 2.66663C5.33366 1.19387 4.13975 -4.07696e-05 2.66699 -4.07696e-05C1.19423 -4.07696e-05 0.000325441 1.19387 0.000325441 2.66663ZM2.66699 2.66663V3.16663H80.6686V2.66663V2.16663H2.66699V2.66663Z" fill="#B8D779"/>
                        </svg>
                    </motion.p>

                    {/* Primary Heading */}
                    <motion.h1
                        className="font-body leading-tight text-xl md:text-2xl lg:text-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Buy and manage luxury real estate with Synage
                    </motion.h1>

                    {/* Secondary Heading */}
                    <motion.h2
                        className="mt-4 font-heading text-5xl md:text-7xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        In Gurgaon and South Delhi.
                    </motion.h2>

                    <div className="grid gap-4 mt-16">

                        {/* Description */}
                        <motion.p
                            className="md:absolute grid bottom-24 sm:left-6 lg:left-8 max-w-md text-sm md:text-base text-white/80 text-center sm:text-justify leading-relaxed"
                            initial={{
                                opacity: 0,
                                y: isMobile ? 60 : 0,
                                x: isMobile ? 0 : -40
                            }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            transition={{
                                delay: isMobile ? 1.6 : 1.2,
                                duration: isMobile ? 1.2 : 0.8,
                                ease: [0.22, 1, 0.36, 1] // luxury easing
                            }}
                        >
                            Synage helps HNIs and NRIs buy, sell, lease, and manage premium assets
                            across condos, villas, farmhouses, and pre-rented properties with a
                            resale-first approach and end-to-end ownership support.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            className="md:absolute bottom-24 sm:right-6 lg:right-8 z-20 flex flex-col gap-3 pointer-events-auto"
                            initial={{
                                opacity: 0,
                                y: isMobile ? 60 : 0,
                                x: isMobile ? 0 : 40
                            }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            transition={{
                                delay: isMobile ? 1.9 : 1.2,
                                duration: isMobile ? 1.2 : 0.8,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <ArrowDownButton
                                className="w-full"
                                text="Book A Consultation"
                                link="/#contact"
                            />

                            <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/70">
                                Recommended for better communication
                            </p>
                        </motion.div>

                    </div>
                </motion.div>

                {/* Marquee */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                >
                    <Marquee
                        className="sm:bg-black text-black text-2xl py-1 flex-1 sm:flex-none"
                        autoFill
                    >
                        {companeis.map((item, index) => (
                            <img key={index} className="px-6 sm:px-16 py-4 h-12 sm:h-16"  src={item} alt="" />
                        ))}
                    </Marquee>
                </motion.div>

            </div>
        </section>
    );
}

const companeis = [
    "/clientCompany/Logo 1.png",
    "/clientCompany/Logo 2.png",
    "/clientCompany/Logo 3.png",
    "/clientCompany/Logo 4.png",
    "/clientCompany/Logo 5.png",
    "/clientCompany/Logo 6.png",
    "/clientCompany/Logo 7.png",
    "/clientCompany/Logo 8.png",
    "/clientCompany/Logo 9.png",
    "/clientCompany/Logo 10.png",
    "/clientCompany/Logo 11.png",
    "/clientCompany/Logo 12.png",
    "/clientCompany/Logo 13.png",
    "/clientCompany/Logo 14.png",
    "/clientCompany/Logo 15.png",
    "/clientCompany/Logo 16.png",  

];