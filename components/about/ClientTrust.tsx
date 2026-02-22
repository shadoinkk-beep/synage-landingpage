"use client";

import Image from "next/image";
import ArrowSlideButton from "@/components/common/ArrowSlideButton";
import { Textfit } from "react-textfit";
import Marquee from "react-fast-marquee";
import ArrowDownButton from "../common/ArrowDownButton";

import AboutHero from "@/public/AboutPage/AboutHero.jpg";


export default function ClientTrust() {
  return (
    <>
    <section id="about" className="section section-dark relative  max-w-full">

      {/* ================= CONTENT ================= */}
      <div className="section-content relative z-15 max-w-full overflow-x-hidden">

        {/* ================= FULL WIDTH HEADING ================= */}
        <Textfit mode="single" className="font-heading" max={200} style={{ width: "100%" }}>
          Built On Client&apos;s Trust
        </Textfit>
        

        {/* ================= CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-full">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-6 space-y-6 max-w-full">
            <p className="text-sm md:text-base leading-relaxed max-w-xl">
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

            <ArrowDownButton
            className="max-w-85"
              text="Book A Consultation"
              link="/contact"
            />
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-6 relative z-10 max-w-full">
            <div className="relative w-full h-105  overflow-hidden">
              <Image
                src={AboutHero}
                alt="Client Trust"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ================= MARQUEE (HARD-CLIPPED) ================= */}
      {/* <Marquee className="bg-white text-black text-2xl py-6 absolute bottom-0 -mb-6 -rotate-3 z-15" >
  I can be a React component, multiple React components, or just some text.
</Marquee> */}
      {/* <div className="relative w-full overflow-hidden">

        <div
          className="bg-[#FBF7F0] py-4 shadow-xl"
          style={{ transform: "rotate(-2deg)" }}
        >
          <div
            className="
              flex
              whitespace-nowrap
              text-xs
              font-semibold
              tracking-wide
              animate-marquee
              px-4
              text-black
            "
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="mx-6 flex items-center gap-4">
                YOUR BESPOKE REAL ESTATE FAMILY OFFICE
                <span>✺</span>
              </span>
            ))}
          </div>
        </div>

      </div> */}

          <div className="-rotate-[1.8deg] z-40 absolute translate-y-[-50%] origin-center shadow-2xl">

          <Marquee className="bg-white text-black text-xl sm:text-2xl  py-6 " autoFill >
  <div className="flex gap-6 uppercase font-semibold items-center px-2 sm:px-6">
    Your bespoke real estate family office 
    <img src="./AboutPage/Star.svg" alt="" />
  </div>
</Marquee>
    </div>

    </section>

</>
  );
}
