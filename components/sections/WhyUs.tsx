"use client";

import Image from "next/image";
import ArrowSlideButton from "@/components/common/ArrowSlideButton";
import { FaCheckCircle, FaUsers } from "react-icons/fa";
import { HiCurrencyRupee } from "react-icons/hi";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function WhyUs() {
  // Detect when WHY-US section enters viewport
  const { ref, inView } = useInView({
    threshold: 0.3,      // 30% visible
    triggerOnce: false,  // 🔁 allow re-trigger on scroll
  });

  // Smooth fast-start, slow-end animation
  const easeOutCubic = (t: number, b: number, c: number, d: number) => {
    const progress = t / d - 1;
    return c * (progress * progress * progress + 1) + b;
  };

  return (
    <section
      id="why-us"
      ref={ref}
      className="section section-light"
    >
      <div className="section-content">

        {/* ================= HEADER ================= */}
        <div className="mx-auto text-center space-y-6 max-w-5xl py-8">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl">
            Why Choose Synage Consultants?
          </h2>

          <p className="font-body text-sm md:text-base opacity-80 max-w-4xl mx-auto">
            Luxury real estate decisions require more than listings. Synage
            brings investment execution, discreet representation, and end-to-end
            ownership support across Gurgaon and South Delhi.
          </p>

          <div className="flex justify-center pt-2">
            <ArrowSlideButton text="Book A Consultation" link="/contact" />
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* STAT 1 */}
          <div className="space-y-4">
            <h4 className="font-body text-lg font-semibold">
              Trusted Over Time
            </h4>
            <div className="h-px bg-black/30 w-full" />

            <p className="font-body font-medium text-3xl md:text-4xl">
              Since 2009
            </p>

            <p className="font-body text-sm">
              Synage has operated through multiple market cycles with a
              referral-led model. Clients stay because the focus is simple:
              discreet execution, clear next steps, and consistent follow-through.
            </p>
          </div>

          {/* STAT 2 */}
          <div className="space-y-4">
            <h4 className="font-body text-lg font-semibold">
              Clients Served
            </h4>
            <div className="h-px bg-black/30 w-full" />

            <p className="font-body font-medium text-3xl md:text-4xl">
              {inView && (
                <CountUp
                  key={`clients-${inView}`}   // 🔁 force restart
                  start={0}
                  end={500}
                  duration={2.5}
                  easingFn={easeOutCubic}
                />
              )}
              +
            </p>

            <p className="font-body text-sm">
              Synage has advised and executed for 500+ clients across Gurgaon
              and South Delhi, including HNIs, CXOs, partners in firms, business
              owners, and NRIs.
            </p>
          </div>

          {/* STAT 3 */}
          <div className="space-y-4">
            <h4 className="font-body text-lg font-semibold">
              Transaction Value Delivered
            </h4>
            <div className="h-px bg-black/30 w-full" />

            <p className="font-body font-medium text-3xl md:text-4xl">
              ₹
              {inView && (
                <CountUp
                  key={`value-${inView}`}     // 🔁 force restart
                  start={0}
                  end={1000}
                  duration={3}
                  easingFn={easeOutCubic}
                />
              )}
              cr+
            </p>

            <p className="font-body text-sm">
              Over ₹1,000+ Cr in cumulative transaction value executed for clients.
              This reflects high-ticket closures where negotiation discipline
              matters as much as the asset itself.
            </p>
          </div>
        </div>

        {/* ================= IMAGE CARDS ================= */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">

          {/* CARD 1 */}
          <div className="relative h-[180px] rounded-2xl overflow-hidden">
            <Image
              src="/HomePage/Hero_BG.png"
              alt="Established Legacy"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm font-body shadow-md">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-white">
                  <FaCheckCircle size={14} />
                </span>
                Established Legacy
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative h-[220px] rounded-2xl overflow-hidden">
            <Image
              src="/HomePage/Hero_BG.png"
              alt="Client Trust"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm font-body shadow-md">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-white">
                  <FaUsers size={14} />
                </span>
                Client Trust
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="relative h-[260px] rounded-2xl overflow-hidden">
            <Image
              src="/HomePage/DealValue.png"
              alt="Deal Value"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm font-body shadow-md">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-white">
                  <HiCurrencyRupee size={16} />
                </span>
                Deal Value
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
