"use client";

import { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { servicesData } from "@/testings/sampleData/services";

export default function Services() {
  const carouselRef = useRef<Carousel>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="section section-dark">
      <div className="section-content space-y-10">

        {/* HEADER */}

                        <div className="grid gap-4 sm:flex justify-between pb-12">

                    {/* LEFT: HEADING */}
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white">
                        Services built for<br />luxury ownership
                    </h2>

                    {/* RIGHT: PARAGRAPH (SLIGHTLY PUSHED RIGHT) */}
                    <p className="font-body sm:text-right text-sm md:text-base text-white/70 max-w-md lg:ml-6">
                        Synage supports ₹10Cr–₹500Cr decisions in Gurgaon and South Delhi.
            Luxury investment execution, end-to-end ownership support, and
            discreet representation for HNIs and NRIs.
                    </p>

                </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap gap-3">
          {servicesData.map((group, index) => (
            <button
              key={group.serviceType}
              onClick={() => {
                setActiveIndex(index);
                carouselRef.current?.goToSlide(index);
              }}
              className={`px-5 py-2 rounded-full text-sm transition
                ${
                  activeIndex === index
                    ? "bg-white text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
            >
              {group.serviceType}
            </button>
          ))}
        </div>

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
            <div key={group.serviceType} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {group.services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/5 rounded-2xl overflow-hidden h-156 sm:h-auto"
                >
                  <Image
                    src={service.image}
                    alt={service.servicename}
                    width={600}
                    height={400}
                    className="w-full h-96 object-cover"
                  />

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
                </div>
              ))}
            </div>
          ))}
        </Carousel>

      </div>
    </section>
  );
}
