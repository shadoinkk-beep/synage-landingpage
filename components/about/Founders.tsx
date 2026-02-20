"use client";

import Image from "next/image";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import Textfit from "react-textfit";

import Kunal_Milwani from "@/public/AboutPage/Kunal_Milwani.jpg";
import Ujjwal_Sethi from "@/public/AboutPage/Ujjwal_Sethi.jpg";
import FoundersPage from "@/public/AboutPage/FoundersPage.jpg";


export default function Founders() {
  return (
    <section className="section section-light z-1!">
      <div className="section-content">

        {/* ================= FOUNDERS HERO ================= */}
          {/* OVERLAPPING HEADING */}
                 <Textfit mode="single" className="font-heading z-10 relative" max={1000} style={{ width: "100%" }}>
                   FOUNDERS
                 </Textfit>
        <div className="relative z-5 -mt-12 sm:-mt-42 mb-12">


          {/* HERO BLOCK */}
          <div className="grid grid-cols-1 md:grid-cols-10 gap-12 items-center sm:pl-24">

            {/* IMAGE (≈80%) */}
            <div className="md:col-span-8">
              <div className="relative w-full h-130 overflow-hidden ">
                <Image
                  src={FoundersPage }
                  alt="Synage Founders"
                  fill
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
            </div>

            {/* TEXT (≈20%) */}
            <div className="md:col-span-2 space-y-6 text-sm leading-relaxed text-right flex flex-col justify-center text-black max-w-xs ml-auto self-end">
              {/* <p> */}
                Synage Consultants wasn’t built overnight. It exists today
                because the founders stayed relentless about doing the work
                properly—even when nobody was watching.
              {/* </p> */}
              {/* <p> */}
                Dedication shows up in the details. Discipline, calm execution,
                structured processes, and clarity are what clients trust for
                high-value decisions.
              {/* </p> */}
              {/* <p> */}
                The founders turned hard work into Synage’s standard of clarity,
                confidentiality, and control.
              {/* </p> */}
            </div>

          </div>
        </div>

        <div className="grid gap-12">
          
        
        {/* ================= FOUNDER 1 ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 rounded-2xl overflow-hidden bg-[#02131B] text-[#FBF7F0] min-h-130">

          {/* IMAGE (50%) */}
          <div className="md:col-span-6 relative h-130 rounded-2xl overflow-hidden">
            <Image
              src={Kunal_Milwani}
              alt="Kunal Milwani"
              fill
              className="object-cover"
              placeholder="blur"
            />
          </div>

          {/* CONTENT (50%) */}
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

            {/* SOCIAL LINKS */}
            <div className="flex gap-4 text-lg pt-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* ================= FOUNDER 2 ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 rounded-2xl overflow-hidden bg-[#02131B] text-[#FBF7F0] min-h-130">

          {/* CONTENT (50%) */}
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

            {/* SOCIAL LINKS */}
            <div className="flex gap-4 text-lg pt-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* IMAGE (50%) */}
          <div className="md:col-span-6 relative h-130 rounded-2xl overflow-hidden">
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
    </section>
  );
}






// "use client";

// import Image from "next/image";
// import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

// export default function Founders() {
//     return (
//         <section className="section section-light">
//             <div className="section-content space-y-28">

//                 {/* ================= FOUNDERS HERO ================= */}
//                 <div className="relative">

//                     {/* OVERLAPPING HEADING */}
//                     <h2
//                         className="
//               font-heading
//               text-6xl md:text-8xl
//               leading-none
//               absolute
//               top-0
//               left-0
//               z-20
//             "
//                     >
//                         FOUNDERS
//                     </h2>

//                     {/* HERO BLOCK */}
//                     <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pt-24">

//                         {/* IMAGE (≈80%) */}
//                         <div className="md:col-span-10">
//                             <div className="relative w-full h-[520px] rounded-2xl overflow-hidden">
//                                 <Image
//                                     src="/AboutPage/FoundersPage.svg"
//                                     alt="Synage Founders"
//                                     fill
//                                     className="object-cover"
//                                     priority
//                                 />
//                             </div>
//                         </div>

//                         {/* TEXT (≈20%) */}
//                         <div className="md:col-span-2 space-y-6 text-sm leading-relaxed text-right flex flex-col justify-center text-black">
//                             <br></br><br></br><br></br>
//                             <p>
//                                 Synage Consultants wasn’t built overnight. It exists today
//                                 because the founders stayed relentless about doing the work
//                                 properly—even when nobody was watching.
//                             </p>
//                             <p>
//                                 Dedication shows up in the details. Discipline, calm execution,
//                                 structured processes, and clarity are what clients trust for
//                                 high-value decisions.
//                             </p>
//                             <p>
//                                 The founders turned hard work into Synage’s standard of clarity,
//                                 confidentiality, and control.
//                             </p>
//                         </div>

//                     </div>

//                 </div>

//                 {/* ================= FOUNDER 1 ================= */}
//                 <div className="grid grid-cols-1 md:grid-cols-12 rounded-2xl overflow-hidden bg-[#02131B] text-[#FBF7F0] min-h-[520px]">

//                     {/* IMAGE (50%) */}
//                     <div className="md:col-span-6 relative h-[520px]">
//                         <Image
//                             src="/AboutPage/Kunal_Milwani.svg"
//                             alt="Kunal Milwani"
//                             fill
//                             className="object-cover"
//                         />
//                     </div>

//                     {/* CONTENT (50%) */}
//                     <div className="md:col-span-6 p-12 flex flex-col justify-center space-y-4">
//                         <h3 className="font-body font-bold text-6xl">
//                             Kunal Milwani
//                         </h3>

//                         <p className="text-2xl font-body">
//                             Co-founder of Synage Consultants
//                         </p>

//                         <p className="text-lg leading-relaxed max-w-xl">
//                             With a private banking background, Kunal understands that real
//                             value lies in numbers, structure, and discipline. His approach
//                             shaped Synage’s framework around cash flows, pricing discipline,
//                             risk assessment, and long-term wealth alignment—helping clients
//                             avoid costly surprises.
//                         </p>

//                         <div className="flex gap-4 text-lg pt-2">
//                             <FaLinkedin />
//                             <FaFacebook />
//                             <FaInstagram />
//                         </div>
//                     </div>
//                 </div>

//                 {/* ================= FOUNDER 2 ================= */}
//                 <div className="grid grid-cols-1 md:grid-cols-12 rounded-2xl overflow-hidden bg-[#02131B] text-[#FBF7F0] min-h-[520px]">

//                     {/* CONTENT (50%) */}
//                     <div className="md:col-span-6 p-12 flex flex-col justify-center space-y-4">
//                         <h3 className="font-body font-bold text-6xl">
//                             Ujjwal Sethi
//                         </h3>

//                         <p className="text-2xl font-body">
//                             Co-founder of Synage Consultants
//                         </p>

//                         <p className="text-lg leading-relaxed max-w-xl">
//                             With years of hands-on real estate execution, Ujjwal brings
//                             on-ground clarity to Synage’s advisory. His discipline ensures
//                             smoother closures, fewer risks, and sharper decision-making for
//                             high-value transactions.
//                         </p>

//                         <div className="flex gap-4 text-lg pt-2">
//                             <FaLinkedin />
//                             <FaFacebook />
//                             <FaInstagram />
//                         </div>
//                     </div>

//                     {/* IMAGE (50%) */}
//                     <div className="md:col-span-6 relative h-[520px]">
//                         <Image
//                             src="/AboutPage/Ujjwal_Sethi.svg"
//                             alt="Ujjwal Sethi"
//                             fill
//                             className="object-cover"
//                         />
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// }
