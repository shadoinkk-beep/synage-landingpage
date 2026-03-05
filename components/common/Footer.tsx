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
                   <div className="grid lg:grid-cols-[1fr_2fr] gap-20 sm:gap-40">

  {/* LEFT BRAND */}
  <div className="space-y-6">
    <Image
      src="/Logo_Synage_Colored_WithTagline.png"
      alt="Synage Consultants"
      width={220}
      height={70}
      priority
    />

    <ArrowSlideButton
      text="Contact Us Now"
      link="/#contact"
    />
  </div>

  {/* RIGHT SECTIONS */}
  <div className="grid grid-cols-2 md:grid-cols-[1.2fr_0.8fr_0.5fr_1fr] gap-6">

    {/* SERVICES */}
    <div>
      <h4 className="font-bold text-lg mb-4">Services</h4>
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
    <div>
      <h4 className="font-bold text-lg mb-4">Company</h4>
      <ul className="space-y-2 text-sm">
        <li><Link href="/#blogs">Blogs</Link></li>
        <li><Link href="/#about">About</Link></li>
        <li><Link href="/#contact">Contact</Link></li>
        <li><Link href="/#testimonials">Testimonials</Link></li>
        <li><Link href="/#why-us">Why Synage</Link></li>
      </ul>
    </div>

    {/* SOCIAL */}
    <div>
      <h4 className="font-bold text-lg mb-4">Socials</h4>
      <ul className="space-y-2 text-sm">
        <li><Link target="_blank" href="https://www.linkedin.com/company/synageconsultants/">LinkedIn</Link></li>
        <li><Link href="#">Facebook</Link></li>
        <li><Link target="_blank" href="https://www.instagram.com/synage_consultants/">Instagram</Link></li>
      </ul>
    </div>

    {/* CONTACT */}
    <div>
      <h4 className="font-bold text-lg mb-4">Contact Us</h4>
      <ul className="space-y-2 text-sm">
        <li>+91 98113 12400</li>
        <li>+91 98111 76892</li>
        <li>
          <Link href="mailto:info@synageconsultants.com">
            info@synageconsultants.com
          </Link>
        </li>
      </ul>
    </div>

  </div>

</div>
                </div>
            </section>

            {/* BOTTOM BAR */}

            {/* BOTTOM BAR */}
            <section className="bg-dark">
                <div className="w-full px-6">
                    <div className="h-14 flex items-center justify-between text-xs text-white">
                        <p>
                            © 2026 Synage Consultants Pvt. Ltd. All rights reserved.
                        </p>

                        <div className="flex gap-4 text-base">
                            <Link target="_blank" href="https://www.linkedin.com/company/synageconsultants/" aria-label="LinkedIn"><FaLinkedin /></Link>
                            <Link href="#" aria-label="Facebook"><FaFacebook /></Link>
                            <Link target="_blank" href="https://www.instagram.com/synage_consultants/" aria-label="Instagram"><FaInstagram /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}
