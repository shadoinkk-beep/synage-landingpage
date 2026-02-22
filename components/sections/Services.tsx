"use client";

import { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { servicesData } from "@/testings/sampleData/services";

/* ---------------- ANIMATION VARIANTS ---------------- */

const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const headerVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardHover = {
  hover: { scale: 1.03, transition: { duration: 0.3 } },
};

export default function Services() {
  const carouselRef = useRef<Carousel>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.section
      id="services"
      className="section section-dark"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}   // runs every time in view
    >
      <div className="section-content space-y-10">

        {/* HEADER */}
        <div className="grid gap-4 sm:flex justify-between pb-12">

          <motion.h2
            variants={headerVariant}
            className="font-heading text-3xl md:text-4xl lg:text-5xl text-white"
          >
            Services built for<br />luxury ownership
          </motion.h2>

          <motion.p
            variants={headerVariant}
            transition={{ delay: 0.2 }}
            className="font-body sm:text-right text-sm md:text-base text-white/70 max-w-md lg:ml-6"
          >
            Synage supports ₹10Cr–₹500Cr decisions in Gurgaon and South Delhi.
            Luxury investment execution, end-to-end ownership support, and
            discreet representation for HNIs and NRIs.
          </motion.p>

        </div>

        {/* FILTER BUTTONS */}
        <motion.div
          className="flex flex-wrap gap-3"
          variants={staggerContainer}
        >
          {servicesData.map((group, index) => (
            <motion.button
              key={group.serviceType}
              variants={fadeUpItem}
              onClick={() => {
                setActiveIndex(index);
                carouselRef.current?.goToSlide(index);
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm transition
                ${
                  activeIndex === index
                    ? "bg-white text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
            >
              {group.serviceType}
            </motion.button>
          ))}
        </motion.div>

        {/* CAROUSEL */}
        <Carousel
          ref={carouselRef}
          arrows={false}
          showDots
          swipeable
          draggable
          infinite={false}
          afterChange={(_, state) => setActiveIndex(state.currentSlide)}
          responsive={{
            all: {
              breakpoint: { max: 4000, min: 0 },
              items: 1,
            },
          }}
          containerClass="services-carousel-container"
          dotListClass="services-dot-list"
        >
          {servicesData.map((group) => (
            <motion.div
              key={group.serviceType}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
            >
              {group.services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={fadeUpItem}
                  whileHover="hover"
                  animate="show"
                  initial="hidden"
                  className="bg-white/5 rounded-2xl overflow-hidden h-156 sm:h-auto"
                >
                  <motion.div variants={cardHover}>
                    <Image
                      src={service.image}
                      alt={service.servicename}
                      width={600}
                      height={400}
                      className="w-full h-96 object-cover"
                    />
                  </motion.div>

                  <div className="p-6 space-y-4">
                    <h4 className="text-lg font-semibold text-white">
                      {service.servicename}
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-white/10 text-xs text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-white/70">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </Carousel>

      </div>
    </motion.section>
  );
}