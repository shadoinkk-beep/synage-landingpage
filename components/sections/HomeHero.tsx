import Image from "next/image";
import ArrowDownButton from "../common/ArrowDownButton";
import Marquee from "react-fast-marquee";
import HeroBg from "@/public/HomePage/Hero_BG.png";


export default function HomeHero() {
    return (
        <section
            className="relative overflow-hidden text-white bg-[#0b0b0b]"
            // style={{
            //     backgroundImage: "url('/HomePage/Hero_BG.png')",
            //     backgroundRepeat: "no-repeat",
            //     backgroundPosition: "top center",
            //     backgroundSize: "100% auto",
            // }}
        >
            <Image
                src={HeroBg}
                alt="Luxury real estate models in Gurgaon and South Delhi"
                fill
                className="object-contain"
                placeholder="blur"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 flex min-h-screen flex-col section-content py-0!">

                {/* ================= TEXT CONTENT ================= */}
                <div className="flex-1 flex flex-col items-center justify-start  pt-24 text-center  mx-auto">

                    {/* Tagline */}
                    <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="81" height="6" viewBox="0 0 81 6" fill="none">
<path d="M80.6686 2.66663C80.6686 1.19387 79.4747 -4.07696e-05 78.002 -4.07696e-05C76.5292 -4.07696e-05 75.3353 1.19387 75.3353 2.66663C75.3353 4.13939 76.5292 5.33329 78.002 5.33329C79.4747 5.33329 80.6686 4.13939 80.6686 2.66663ZM78.002 2.66663V2.16663L0.000350952 2.16663V2.66663V3.16663L78.002 3.16663V2.66663Z" fill="#B8D779"/>
</svg>
                        Investment Advisory, Property & Portfolio Management

                        <svg xmlns="http://www.w3.org/2000/svg" width="81" height="6" viewBox="0 0 81 6" fill="none">
<path d="M0.000325441 2.66663C0.000325441 4.13939 1.19423 5.33329 2.66699 5.33329C4.13975 5.33329 5.33366 4.13939 5.33366 2.66663C5.33366 1.19387 4.13975 -4.07696e-05 2.66699 -4.07696e-05C1.19423 -4.07696e-05 0.000325441 1.19387 0.000325441 2.66663ZM2.66699 2.66663V3.16663H80.6686V2.66663V2.16663H2.66699V2.66663Z" fill="#B8D779"/>
</svg>
                    </p>

                    {/* SEO Primary Heading */}
                    <h1 className="font-body  leading-tight text-[clamp(1.8rem,4vw,2.8rem)]">
                        Buy and manage luxury real estate with Synage
                    </h1>

                    {/* Secondary Heading */}
                    {/* <h2 className="mt-4 text-5xl font-heading text-[clamp(2.5rem,5vw,4rem)]"> */}
                    <h2 className="mt-4  font-heading text-2x md:text-8xl">
                        In Gurgaon and South Delhi.
                    </h2>

                    {/* Description */}
                    <div className="grid gap-4 mt-16">
                    <p className="sm:absolute grid
    bottom-24
    sm:left-6
    lg:left-8
    max-w-md
    text-sm
    md:text-base
    text-white/80
    text-justify
    leading-relaxed">
                        Synage helps HNIs and NRIs buy, sell, lease, and manage premium assets
                        across condos, villas, farmhouses, and pre-rented properties with a
                        resale-first approach and end-to-end ownership support.
                    </p>

                    {/* CTA */}
                    <div className="sm:absolute bottom-24 sm:right-6 lg:right-8 z-20 flex flex-col  gap-3 pointer-events-auto">

                        <div className="group">
                            <ArrowDownButton className="w-full" text="Book A Consultation" link="/contact" />
                        </div> 

                        <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/70">
                            Recommended for better communication
                        </p>
                    </div>
                    </div>

                </div>

                {/* ================= BUILDINGS ================= */}
                {/* <div className="relative flex justify-center pb-28">
                    <Image
                        src="/HomePage/hero-buildings.png"
                        alt="Luxury real estate models in Gurgaon and South Delhi"
                        width={600}
                        height={600}
                        priority
                        className="w-[70%] max-w-140 h-auto"
                    />
                </div> */}

                {/* ================= BRANDS MARQUEE (SINGLE IMAGE) ================= */}
                <Marquee className="bg-black text-black text-2xl py-1" autoFill >
                    {
                        companeis.map((item, index) => <img className="px-12 py-4" src={item} alt="" />   )

                    }
                </Marquee>

            </div>
        </section>
    );
}


const companeis = [
    "/clientCompany/DHL.png",
    "/clientCompany/Samsung.png",
    "/clientCompany/Kotak.png",
    "/clientCompany/Careerbuilder.png",
    "/clientCompany/Genpact.png",
    "/clientCompany/Abb.png",
]