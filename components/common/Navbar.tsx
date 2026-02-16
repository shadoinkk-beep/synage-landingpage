"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Services", id: "services" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Blogs", id: "blogs" },
  { label: "About Us", id: "about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  /* ================= ACTIVE SECTION DETECTION ================= */
  useEffect(() => {
    const sections = navLinks
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -40% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* ================= SMOOTH SCROLL WITH OFFSET ================= */
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const navbarHeight = 56; // h-14
    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    if (window.location.hash !== `#${id}`) {
      history.pushState(null, "", `/#${id}`);
    }

    setMenuOpen(false);
  };

  /* ================= CLOSE MOBILE MENU ON DESKTOP ================= */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="w-full px-6">
          <div className="relative flex items-center justify-between h-14">

            {/* LOGO */}
            <Link
              href="/"
              className="relative md:absolute md:left-1/2 md:-translate-x-1/2"
            >
              <Image
                src="/logo_Synage.png"
                alt="Synage Consultants"
                width={130}
                height={36}
                priority
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10 text-white">
              {navLinks.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleScroll(item.id)}
                    className="group relative text-sm transition-opacity hover:opacity-80"
                  >
                    {item.label}

                    {/* UNDERLINE (HOVER + ACTIVE) */}
                    <span
                      className={`
                        absolute left-0 -bottom-1 h-[2px] w-full bg-white
                        transform origin-left
                        transition-transform duration-300 ease-out
                        ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }
                      `}
                    />
                  </button>
                );
              })}
            </nav>

            {/* CONTACT BUTTON (DESKTOP) */}
            <div className="hidden md:block">
              <button
                onClick={() => handleScroll("contact")}
                className="bg-white text-black px-6 py-2 rounded-full text-sm hover:bg-white/90 transition"
              >
                Contact Us
              </button>
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1 z-50"
              aria-label="Menu"
            >
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-500 ${
                  menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-500 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-500 ${
                  menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-black text-white transition-transform duration-700 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-full flex flex-col justify-center items-start px-6 gap-8 text-2xl">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`relative ${
                activeSection === item.id ? "font-semibold" : ""
              }`}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => handleScroll("contact")}
            className="mt-6 bg-white text-black px-8 py-3 rounded-full text-lg"
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}
