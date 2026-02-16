"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import ArrowSlideButton from "@/components/common/ArrowSlideButton";

export default function ExpertExecution() {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  /* ================= VIEWPORT DETECTION ================= */
  useEffect(() => {
    if (!triggerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.3,
        rootMargin: "-80px 0px -40% 0px",
      }
    );

    observer.observe(triggerRef.current);

    return () => observer.disconnect();
  }, []);

  /* ================= FAST START → SLOW END ================= */
  const easeOutCubic = (t: number, b: number, c: number, d: number) => {
    const p = t / d - 1;
    return c * (p * p * p + 1) + b;
  };

  return (
    <section className="section section-dark">
      {/* 👇 OBSERVER TARGET */}
      <div ref={triggerRef} />

      <div className="section-content space-y-16">

        {/* ================= METRICS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* CARD 1 */}
          <div className="rounded-2xl bg-[#FBF7F0] text-[#02131B] p-6 shadow-sm">
            <h3 className="text-3xl font-semibold">
              {inView && (
                <CountUp
                  key={`area-${inView}`}
                  start={0}
                  end={1.5}
                  decimals={1}
                  duration={2.5}
                  easingFn={easeOutCubic}
                />
              )}{" "}
              Lakh+
            </h3>
            <p className="text-sm mt-2">Area Leased Cumulatively</p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-2xl bg-[#FBF7F0] text-[#02131B] p-6 shadow-sm">
            <h3 className="text-3xl font-semibold">
              {inView && (
                <CountUp
                  key={`value-${inView}`}
                  start={0}
                  end={2000}
                  duration={2.8}
                  separator=","
                  easingFn={easeOutCubic}
                />
              )}{" "}
              Cr+
            </h3>
            <p className="text-sm mt-2">Transaction Value Delivered</p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-2xl bg-[#FBF7F0] text-[#02131B] p-6 shadow-sm">
            <h3 className="text-3xl font-semibold">
              {inView && (
                <CountUp
                  key={`clients-${inView}`}
                  start={0}
                  end={500}
                  duration={2.2}
                  easingFn={easeOutCubic}
                />
              )}
              +
            </h3>
            <p className="text-sm mt-2">Clients Served</p>
          </div>

          {/* CARD 4 */}
          <div className="rounded-2xl bg-[#FBF7F0] text-[#02131B] p-6 shadow-sm">
            <h3 className="text-3xl font-semibold">
              {inView && (
                <CountUp
                  key={`mandates-${inView}`}
                  start={0}
                  end={5}
                  duration={1.6}
                  easingFn={easeOutCubic}
                />
              )}
              +
            </h3>
            <p className="text-sm mt-2">Fortune 500 Mandates</p>
          </div>

        </div>

        {/* ================= CTA ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="font-heading text-4xl md:text-5xl">
            Get Expert Execution.
          </h2>

          <p className="text-sm md:text-base opacity-80">
            If you&apos;re an HNI, NRI, corporate, or expat navigating buying,
            selling, leasing, or managing luxury property in Gurgaon or South
            Delhi, speak with Synage. We bring experience, discretion, and
            end-to-end ownership support to handle it properly.
          </p>

          <div className="flex justify-center pt-2">
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
