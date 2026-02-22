import Image from "next/image";
import Link from "next/link";
import ArrowSlideButton from "@/components/common/ArrowSlideButton";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";


export default function Footer() {
    return (
        <footer>
            {/* MAIN FOOTER */}
            <section className="section section-light">
                <div className="section-content">

                    {/* INNER GRID (ONLY HERE) */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                        {/* LEFT BRAND */}
                        <div className="md:col-span-4 space-y-6">
                            <Image
                                src="/Logo_Synage_Colored_WithTagline.png"
                                alt="Synage Consultants"
                                width={220}
                                height={70}
                                priority
                            />

                            <p className="text-sm max-w-sm">
                                Bespoke Family Office for Real Estate
                            </p>

                            <ArrowSlideButton
                                text="Contact Us Now"
                                link="/#contact"
                            />
                        </div>

                        {/* SERVICES */}
                        <div className="md:col-span-3 space-y-4">
                            <h4 className="font-bold text-lg">Services</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/#services">Luxury Villas</Link></li>
                                <li><Link href="/#services">Luxury Condos</Link></li>
                                <li><Link href="/#services">Portfolio Management</Link></li>
                                <li><Link href="/#services">NRI End-to-End Execution</Link></li>
                                <li><Link href="/#services">Luxury Investment Advisory</Link></li>
                                <li><Link href="/#services">Luxury Transaction Advisory</Link></li>
                                <li><Link href="/#services">Leasing & Property Management</Link></li>
                            </ul>
                        </div>

                        {/* COMPANY */}
                        <div className="md:col-span-2 space-y-4">
                            <h4 className="font-bold text-lg">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/#blogs">Blogs</Link></li>
                                <li><Link href="/#about">About</Link></li>
                                <li><Link href="/#contact">Contact</Link></li>
                                <li><Link href="/#testimonials">Testimonials / Proof</Link></li>
                                <li><Link href="/#why-us">Why work with Synage</Link></li>
                            </ul>
                        </div>

                        {/* SOCIALS */}
                        <div className="md:col-span-1 space-y-4">
                            <h4 className="font-bold text-lg">Socials</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="#">LinkedIn</Link></li>
                                <li><Link href="#">Facebook</Link></li>
                                <li><Link href="#">Instagram</Link></li>
                            </ul>
                        </div>

                        {/* CONTACT */}
                        <address className="md:col-span-2 not-italic space-y-4">
                            <h4 className="font-bold text-lg">Contact Us</h4>
                            <ul className="space-y-2 text-sm">
                                <li>+91 98113 12400</li>
                                <li>+91 98111 76892</li>
                                <li>
                                    <Link href="mailto:info@synageconsultants.com">
                                        info@synageconsultants.com
                                    </Link>
                                </li>
                            </ul>
                        </address>

                    </div>
                </div>
            </section>

            {/* BOTTOM BAR */}

            {/* BOTTOM BAR */}
            <section className="bg-black">
                <div className="w-full px-6">
                    <div className="h-14 flex items-center justify-between text-xs text-white">
                        <p>
                            © 2026 Synage Consultants Pvt. Ltd. All rights reserved.
                        </p>

                        <div className="flex gap-4 text-base">
                            <Link href="#" aria-label="LinkedIn"><FaLinkedin /></Link>
                            <Link href="#" aria-label="Facebook"><FaFacebook /></Link>
                            <Link href="#" aria-label="Instagram"><FaInstagram /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}
