"use client";

import Image from "next/image";
import ArrowSlideButton from "@/components/common/ArrowSlideButton";

export default function ClientTrust() {
  return (
    <section className="section section-dark relative overflow-hidden max-w-full">

      {/* ================= CONTENT ================= */}
      <div className="section-content relative z-10 max-w-full overflow-x-hidden">

        {/* ================= FULL WIDTH HEADING ================= */}
        <h1
          className="
            font-heading
            text-6xl
            md:text-8xl
            leading-tight
            mb-12
            break-words
            max-w-full
          "
        >
          Built On Client&apos;s Trust
        </h1>

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

            <ArrowSlideButton
              text="Book A Consultation"
              link="/contact"
            />
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-6 relative z-10 max-w-full">
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
              <Image
                src="/AboutPage/AboutHero.svg"
                alt="Client Trust"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ================= MARQUEE (HARD-CLIPPED) ================= */}
      <div className="relative w-full overflow-hidden">

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

      </div>

    </section>
  );
}
