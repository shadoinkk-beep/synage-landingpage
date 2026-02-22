"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function StatsSection() {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [triggerCount, setTriggerCount] = useState(0);
  const [scrollDirDown, setScrollDirDown] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  /* ================= DETECT SCROLL DIRECTION ================= */
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrollDirDown(currentY > lastScrollY); // 🔥 true if scrolling down
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* ================= VIEWPORT DETECTION ================= */
  useEffect(() => {
    if (!triggerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && scrollDirDown) {
          // 🔥 restart animation ONLY when scrolling down
          setTriggerCount((prev) => prev + 1);
        }
      },
      {
        threshold: 0.7,
      }
    );

    observer.observe(triggerRef.current);

    return () => observer.disconnect();
  }, [scrollDirDown]);

  /* ================= EASING FUNCTION ================= */
  const easeOutCubic = (t: number, b: number, c: number, d: number) => {
    const p = t / d - 1;
    return c * (p * p * p + 1) + b;
  };

  return (
    <section className="section section-light bg-white!">
      <div ref={triggerRef} />

      <div className="section-content space-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* CARD 1 */}
          <div className="rounded-2xl bg-[#FBF7F0] text-[#02131B] p-6 shadow-sm border border-black py-12">
            <h3 className="text-4xl font-semibold">
              <CountUp
                key={`area-${triggerCount}`}
                start={0}
                end={1.5}
                decimals={1}
                duration={2.5}
                easingFn={easeOutCubic}
              />{" "}
              Lakh+
            </h3>
            <p className="text-lg mt-2">Area Leased Cumulatively</p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-2xl bg-[#FBF7F0] text-[#02131B] p-6 shadow-sm border border-black py-12">
            <h3 className="text-4xl font-semibold">
              <CountUp
                key={`value-${triggerCount}`}
                start={0}
                end={2000}
                duration={2.8}
                separator=","
                easingFn={easeOutCubic}
              />{" "}
              Cr+
            </h3>
            <p className="text-lg mt-2">Transaction Value Delivered</p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-2xl bg-[#FBF7F0] text-[#02131B] p-6 shadow-sm border border-black py-12">
            <h3 className="text-4xl font-semibold">
              <CountUp
                key={`clients-${triggerCount}`}
                start={0}
                end={500}
                duration={2.2}
                easingFn={easeOutCubic}
              />
              +
            </h3>
            <p className="text-lg mt-2">Clients Served</p>
          </div>

          {/* CARD 4 */}
          <div className="rounded-2xl bg-[#FBF7F0] text-[#02131B] p-6 shadow-sm border border-black py-12">
            <h3 className="text-4xl font-semibold">
              <CountUp
                key={`mandates-${triggerCount}`}
                start={0}
                end={5}
                duration={1.6}
                easingFn={easeOutCubic}
              />
              +
            </h3>
            <p className="text-lg mt-2">Fortune 500 Mandates</p>
          </div>

        </div>
      </div>
    </section>
  );
}