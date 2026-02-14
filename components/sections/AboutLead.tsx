import Link from "next/link";
import ArrowSlideButton from "../common/ArrowSlideButton";

export default function AboutLead() {
  return (

    <section className="section section-light" >
      <div className="section-content">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

          {/* LEFT SMALL PILL */}
          <div className="md:col-span-3">
            <button className="border border-black/30 text-black text-lg px-8 py-1 rounded-full hover:bg-black hover:text-white transition">
              About Us
            </button>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-9 space-y-6">

            {/* MAIN HEADING */}
            <h1 className="text-3xl md:text-5xl leading-tight font-medium ">
              Built on long-term trust and execution, Synage Consultants supports
              HNIs and NRIs across luxury real estate in Gurgaon and South Delhi
              with discretion, clarity, and Luxury Investment Approach.
            </h1>

            {/* DESCRIPTION */}
            <p className="text-sm md:text-base  max-w-2xl">
              We handle more than transactions. From paperwork coordination and
              possession support to leasing and property management, we stay
              accountable through the full ownership cycle.
            </p>

            {/* CTA BUTTON */}
            <ArrowSlideButton
  text="Book A Consultation"
  link="/contact"
/>

          </div>
        </div>
      </div>
    </section>
  );
}
