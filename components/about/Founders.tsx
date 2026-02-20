"use client";

import Image from "next/image";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import Textfit from "react-textfit";

import Kunal_Milwani from "@/public/AboutPage/Kunal_Milwani.jpg";
import Ujjwal_Sethi from "@/public/AboutPage/Ujjwal_Sethi.jpg";
import FoundersPage from "@/public/AboutPage/FoundersPage.jpg";

export default function Founders() {
  return (
    <section className="section section-light relative z-10 ">
      <div className="section-content overflow-visible!">

        {/* ================= FOUNDERS HERO ================= */}
        <div className="sticky top-0">

        <Textfit
          mode="single"
          className="font-heading relative z-10"
          max={1000}
          style={{ width: "100%" }}
          >
          FOUNDERS
        </Textfit>
                  {/* ================= HERO IMAGE BLOCK ================= */}
          <div className="relative -mt-12 sm:-mt-42 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-10 gap-12 items-center sm:pl-24">

              {/* IMAGE */}
              <div className="md:col-span-8">
                <div className="relative w-full h-[500px] overflow-hidden rounded-2xl">
                  <Image
                    src={FoundersPage}
                    alt="Synage Founders"
                    fill
                    className="object-cover"
                    placeholder="blur"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="md:col-span-2 space-y-6 text-sm leading-relaxed text-right flex flex-col justify-center text-black max-w-xs ml-auto self-end">
                  Synage Consultants wasn’t built overnight. It exists today
                  because the founders stayed relentless about doing the work
                  properly—even when nobody was watching.
                  Dedication shows up in the details. Discipline, calm execution,
                  structured processes, and clarity are what clients trust for
                  high-value decisions.
                  The founders turned hard work into Synage’s standard of clarity,
                  confidentiality, and control.
              </div>

            </div>
          </div>

          </div>
        <div className="grid gap-12">



          {/* ================= STACKED FOUNDERS SECTION ================= */}
          <div className="relative">

            {/* This creates scroll space */}
            <div className="relative h-[250vh]">

              {/* ================= FOUNDER 1 ================= */}
              <div className="sticky top-0 h-screen flex items-center z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 rounded-2xl overflow-hidden bg-[#02131B] text-[#FBF7F0] w-full max-w-7xl mx-auto shadow-2xl">

                  {/* IMAGE */}
                  <div className="md:col-span-6 relative h-[80vh]">
                    <Image
                      src={Kunal_Milwani}
                      alt="Kunal Milwani"
                      fill
                      className="object-cover"
                      placeholder="blur"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="md:col-span-6 p-12 flex flex-col justify-center space-y-4">
                    <h3 className="font-body font-bold text-6xl">
                      Kunal Milwani
                    </h3>

                    <p className="text-2xl font-body">
                      Co-founder of Synage Consultants
                    </p>

                    <p className="text-lg leading-relaxed max-w-xl">
                      With a private banking background, Kunal understands that real
                      value lies in numbers, structure, and discipline. His approach
                      shaped Synage’s framework around cash flows, pricing discipline,
                      risk assessment, and long-term wealth alignment—helping clients
                      avoid costly surprises.
                    </p>

                    <div className="flex gap-4 text-lg pt-4">
                      <a href="https://www.linkedin.com" target="_blank">
                        <FaLinkedin />
                      </a>
                      <a href="https://www.facebook.com" target="_blank">
                        <FaFacebook />
                      </a>
                      <a href="https://www.instagram.com" target="_blank">
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= FOUNDER 2 ================= */}
              <div className="sticky top-0 h-screen flex items-center z-20">
                <div className="grid grid-cols-1 md:grid-cols-12 rounded-2xl overflow-hidden bg-[#02131B] text-[#FBF7F0] w-full max-w-7xl mx-auto shadow-2xl">

                  {/* CONTENT */}
                  <div className="md:col-span-6 p-12 flex flex-col justify-center space-y-4">
                    <h3 className="font-body font-bold text-6xl">
                      Ujjwal Sethi
                    </h3>

                    <p className="text-2xl font-body">
                      Co-founder of Synage Consultants
                    </p>

                    <p className="text-lg leading-relaxed max-w-xl">
                      With years of hands-on real estate execution, Ujjwal brings
                      on-ground clarity to Synage’s advisory. His discipline ensures
                      smoother closures, fewer risks, and sharper decision-making for
                      high-value transactions.
                    </p>

                    <div className="flex gap-4 text-lg pt-4">
                      <a href="https://www.linkedin.com" target="_blank">
                        <FaLinkedin />
                      </a>
                      <a href="https://www.facebook.com" target="_blank">
                        <FaFacebook />
                      </a>
                      <a href="https://www.instagram.com" target="_blank">
                        <FaInstagram />
                      </a>
                    </div>
                  </div>

                  {/* IMAGE */}
                  <div className="md:col-span-6 relative h-[80vh]">
                    <Image
                      src={Ujjwal_Sethi}
                      alt="Ujjwal Sethi"
                      fill
                      className="object-cover"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}