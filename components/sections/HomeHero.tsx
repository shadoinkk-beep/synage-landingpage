import Image from "next/image";
import ArrowDownButton from "../common/ArrowDownButton";
import { Marquee } from "@/registry/magicui/marquee";

export default function HomeHero() {
    return (
        <section
            className="relative overflow-hidden text-white bg-[#0b0b0b]"
            style={{
                backgroundImage: "url('/HomePage/Hero_BG.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundSize: "100% auto",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 flex min-h-screen flex-col">

                {/* ================= TEXT CONTENT ================= */}
                <div className="flex-1 flex flex-col items-center justify-center px-6 pt-24 text-center max-w-6xl mx-auto">

                    {/* Tagline */}
                    <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white">
                        <span className="h-px w-10 bg-[#B8D779]" />
                        Investment Advisory, Property & Portfolio Management
                        <span className="h-px w-10 bg-[#B8D779]" />
                    </p>

                    {/* SEO Primary Heading */}
                    <h1 className="font-body font-semibold leading-tight text-[clamp(1.8rem,4vw,2.8rem)]">
                        Buy and manage luxury real estate with Synage
                    </h1>

                    {/* Secondary Heading */}
                    <h2 className="mt-4 font-heading text-[clamp(2.5rem,5vw,4rem)]">
                        In Gurgaon and South Delhi.
                    </h2>

                    {/* Description */}
                    <p className="absolute
    bottom-24
    left-6
    md:left-12
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
                    <div className="absolute bottom-24 right-6 md:right-12 z-20 flex flex-col items-end gap-3 pointer-events-auto">

                        <div className="group">
                            <ArrowDownButton text="Book A Consultation" link="/contact" />
                        </div>

                        <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/70">
                            Recommended for better communication
                        </p>
                    </div>

                </div>

                {/* ================= BUILDINGS ================= */}
                <div className="relative flex justify-center pb-28">
                    <Image
                        src="/HomePage/hero-buildings.png"
                        alt="Luxury real estate models in Gurgaon and South Delhi"
                        width={600}
                        height={600}
                        priority
                        className="w-[70%] max-w-[560px] h-auto"
                    />
                </div>

                {/* ================= BRANDS MARQUEE (SINGLE IMAGE) ================= */}
                <div className="absolute bottom-6 left-0 w-full overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:35s]">

                        {/* Image 1 */}
                        <Image
                            src="/HomePage/Careerbuilder.svg"
                            alt="CareerBuilder, ABB, Kotak, Genpact, DHL and Samsung logos"
                            width={1200}
                            height={80}
                            className="h-10 md:h-12 w-auto mr-24 opacity-80"
                        />

                        {/* Image 2 (duplicate for smooth loop) */}
                        <Image
                            src="/HomePage/abb_logo.svg"
                            alt=""
                            width={1200}
                            height={80}
                            className="h-10 md:h-12 w-auto opacity-80"
                            aria-hidden
                        />

                        <Image
                            src="/HomePage/Kotak.svg"
                            alt=""
                            width={1200}
                            height={80}
                            className="h-10 md:h-12 w-auto opacity-80"
                            aria-hidden
                        />

                        <Image
                            src="/HomePage/genpact-logo.svg"
                            alt=""
                            width={1200}
                            height={80}
                            className="h-10 md:h-12 w-auto opacity-80"
                            aria-hidden
                        />

                        <Image
                            src="/HomePage/DHL.svg"
                            alt=""
                            width={1200}
                            height={80}
                            className="h-10 md:h-12 w-auto opacity-80"
                            aria-hidden
                        />

                        <Image
                            src="/HomePage/Samsung.svg"
                            alt=""
                            width={1200}
                            height={80}
                            className="h-10 md:h-12 w-auto opacity-80"
                            aria-hidden
                        />

                    </Marquee>
                </div>

            </div>
        </section>
    );
}
