"use client";

import Link from "next/link";
import ArrowSlideButton from "../common/ArrowSlideButton";
import { motion } from "framer-motion";

export default function AboutLead() {
  return (
    <section id="about" className="section section-light">
      <div className="section-content">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

          {/* LEFT SMALL PILL */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <button className="border border-black/30 text-black text-lg px-8 py-1 rounded-full hover:bg-black hover:text-white transition">
              About Us
            </button>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            className="md:col-span-9 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >

            {/* MAIN HEADING */}
            <motion.h1
              className="text-3xl md:text-4xl leading-tight font-medium"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Built on long-term trust and execution, Synage Consultants supports
              HNIs and NRIs across luxury real estate in Gurgaon and South Delhi
              with discretion, clarity, and Luxury Investment Approach.
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              className="text-sm md:text-base max-w-2xl"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              We handle more than transactions. From paperwork coordination and
              possession support to leasing and property management, we stay
              accountable through the full ownership cycle.
            </motion.p>

            {/* CTA BUTTON */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <ArrowSlideButton
                className="max-w-80"
                text="Book A Consultation"
                link="/about"
              />
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}