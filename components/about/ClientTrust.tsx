"use client";

import Image from "next/image";
import { Textfit } from "react-textfit";
import Marquee from "react-fast-marquee";
import ArrowDownButton from "../common/ArrowDownButton";
import { motion } from "framer-motion";

import AboutHero from "@/public/AboutPage/AboutHero.jpg";

export default function ClientTrust() {
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 60, scale: 0.96 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <section id="about" className="section section-dark relative max-w-full">

        <motion.div
          className="section-content relative z-15 max-w-full overflow-x-hidden"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >

          {/* ================= FULL WIDTH HEADING ================= */}
          <motion.div variants={fadeUp}>
            <Textfit
              mode="single"
              className="font-heading"
              max={200}
              style={{ width: "100%" }}
            >
              Built On Client&apos;s Trust
            </Textfit>
          </motion.div>

          {/* ================= CONTENT GRID ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-full">

            {/* LEFT CONTENT */}
            <motion.div
              className="lg:col-span-6 space-y-6 max-w-full"
              variants={slideLeft}
            >
              <p className="text-sm md:text-base leading-relaxed max-w-xl text-center sm:text-left">
                Synage Consultants is built on long-term client relationships and a
                referral-led reputation earned since 2009. We work with HNIs,
                CXOs, business owners, and NRIs across Gurgaon and South Delhi,
                supporting luxury condos, villas, farmhouses, and pre-rented
                assets in the ₹10Cr – ₹100Cr bracket.
                <br /><br />
                Our focus is simple: execute with discretion, coordinate the
                details that protect a deal, and stay accountable through the
                full ownership cycle—from transaction and paperwork to
                possession, leasing, and ongoing management.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: false }}
              >
                <ArrowDownButton
                  className="max-w-85"
                  text="Book A Consultation"
                  link="/#contact"
                />
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              className="lg:col-span-6 relative z-10 max-w-full"
              variants={slideRight}
            >
              <div className="relative w-full h-105 overflow-hidden">
                <Image
                  src={AboutHero}
                  alt="Client Trust"
                  fill
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* ================= MARQUEE ================= */}
        <motion.div
          className="-rotate-[1.8deg] z-40 absolute translate-y-[-50%] origin-center shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <Marquee
            className="bg-white text-black text-xl sm:text-2xl py-6"
            autoFill
          >
            <div className="flex gap-6 uppercase font-semibold items-center px-2 sm:px-6">
              Your bespoke real estate family office
              <img src="./AboutPage/Star.svg" alt="" />
            </div>
          </Marquee>
        </motion.div>

      </section>
    </>
  );
}