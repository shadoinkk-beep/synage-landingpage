"use client";

import ArrowSlideButton from "../common/ArrowSlideButton";
import { motion } from "framer-motion";

export const GetExpertExecution = () => {
  return (
    <>
      <section className="section section-dark">
        <div className="section-content">

          {/* ================= CTA ================= */}
          <motion.div
            className="text-center max-w-3xl mx-auto space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }} // replay every time
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h2
              className="font-heading text-4xl md:text-5xl"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Get Expert Execution.
            </motion.h2>

            <motion.p
              className="text-sm md:text-base opacity-80"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              If you&apos;re an HNI, NRI, corporate, or expat navigating buying,
              selling, leasing, or managing luxury property in Gurgaon or South
              Delhi, speak with Synage. We bring experience, discretion, and
              end-to-end ownership support to handle it properly.
            </motion.p>

            <motion.div
              className="flex justify-center pt-2"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <ArrowSlideButton
                className="max-w-80"
                text="Book A Consultation"
                link="/#contact"
              />
            </motion.div>
          </motion.div>

        </div>
      </section>
    </>
  );
};