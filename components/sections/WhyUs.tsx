"use client";

import Image from "next/image";
import ArrowSlideButton from "@/components/common/ArrowSlideButton";
import { FaCheckCircle, FaUsers } from "react-icons/fa";
import { HiCurrencyRupee } from "react-icons/hi";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { MdCurrencyRupee } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";

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

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent " />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full grid justify-center">
              <div className="flex items-center gap-2  rounded-full px-4 py-2 text-sm font-body shadow-md">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-black">
                  <GoShieldCheck size={14} />
                </span>
                <span className="bg-white px-12 py-2 rounded-2xl">
                  Established Legacy
                </span>
                
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

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent "  />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full grid justify-center">
              <div className="flex items-center gap-2  rounded-full px-4 py-2 text-sm font-body shadow-md">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-black">
                  {/* <FaUsers size={14} /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 p-2" width="25" height="21" viewBox="0 0 25 21" fill="none">
<path d="M12.375 7.875L8.4375 3.9375L12.375 0L16.3125 3.9375L12.375 7.875ZM0 20.25V15.75C0 15.1125 0.220312 14.5781 0.660937 14.1469C1.10156 13.7156 1.63125 13.5 2.25 13.5H5.93437C6.30937 13.5 6.66562 13.5938 7.00312 13.7812C7.34062 13.9688 7.6125 14.2219 7.81875 14.5406C8.3625 15.2719 9.03281 15.8438 9.82969 16.2563C10.6266 16.6687 11.475 16.875 12.375 16.875C13.2937 16.875 14.1516 16.6687 14.9484 16.2563C15.7453 15.8438 16.4062 15.2719 16.9312 14.5406C17.175 14.2219 17.4609 13.9688 17.7891 13.7812C18.1172 13.5938 18.4594 13.5 18.8156 13.5H22.5C23.1375 13.5 23.6719 13.7156 24.1031 14.1469C24.5344 14.5781 24.75 15.1125 24.75 15.75V20.25H16.875V17.6906C16.2188 18.1594 15.5109 18.5156 14.7516 18.7594C13.9922 19.0031 13.2 19.125 12.375 19.125C11.5687 19.125 10.7812 18.9984 10.0125 18.7453C9.24375 18.4922 8.53125 18.1313 7.875 17.6625V20.25H0ZM3.375 12.375C2.4375 12.375 1.64062 12.0469 0.984375 11.3906C0.328125 10.7344 0 9.9375 0 9C0 8.04375 0.328125 7.24219 0.984375 6.59531C1.64062 5.94844 2.4375 5.625 3.375 5.625C4.33125 5.625 5.13281 5.94844 5.77969 6.59531C6.42656 7.24219 6.75 8.04375 6.75 9C6.75 9.9375 6.42656 10.7344 5.77969 11.3906C5.13281 12.0469 4.33125 12.375 3.375 12.375ZM21.375 12.375C20.4375 12.375 19.6406 12.0469 18.9844 11.3906C18.3281 10.7344 18 9.9375 18 9C18 8.04375 18.3281 7.24219 18.9844 6.59531C19.6406 5.94844 20.4375 5.625 21.375 5.625C22.3312 5.625 23.1328 5.94844 23.7797 6.59531C24.4266 7.24219 24.75 8.04375 24.75 9C24.75 9.9375 24.4266 10.7344 23.7797 11.3906C23.1328 12.0469 22.3312 12.375 21.375 12.375Z" fill="black"/>
</svg>
                </span>
                <span className="bg-white px-12 py-2 rounded-2xl">
                  Client Trust
                </span>
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

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full grid justify-center">
              <div className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-body shadow-md">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-black">
                  <MdCurrencyRupee size={16} />
                </span>
                <span className="bg-white px-12 py-2 rounded-2xl">
                Deal Value
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
