"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

/* ================= NAV LINKS ================= */
// Items with ID will highlight when that ID exists on ANY page
const navLinks = [
  { label: "Services", id: "services", href: null },
  { label: "Testimonials", id: "testimonials", href: null },
  { label: "Blogs", id: "blogs", href: null },
  { label: "About Us", id: null, href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  /* ================= SMOOTH SCROLL OR REDIRECT ================= */
  const handleScroll = (id: string) => {
    const navbarHeight = 56;

    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = el.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({ top: yOffset, behavior: "smooth" });
    history.replaceState(null, "", `/#${id}`);

    setMenuOpen(false);
  };

  /* ================= AUTO SCROLL WHEN PAGE LOADED WITH HASH ================= */
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || pathname !== "/") return;

    const id = hash.replace("#", "");
    const navbarHeight = 56;

    let attempts = 0;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top: yOffset, behavior: "smooth" });
        return;
      }

      if (attempts < 20) {
        attempts++;
        setTimeout(tryScroll, 20);
      }
    };

    setTimeout(tryScroll, 50);
  }, [pathname]);

  /* ================= ACTIVE SECTION DETECTION (ALL PAGES) ================= */
  useEffect(() => {
    const sectionElements = navLinks
      .map((item) => item.id)
      .filter(Boolean)
      .map((id) => document.getElementById(id!))
      .filter(Boolean) as HTMLElement[];

    // If this page has no section IDs → clear highlight
    if (sectionElements.length === 0) {
      setActiveSection("");
      return;
    }

    const handleScrollCheck = () => {
      let found = false;

      for (const section of sectionElements) {
        const rect = section.getBoundingClientRect();

        const isVisible =
          rect.top <= window.innerHeight * 0.4 &&
          rect.bottom >= window.innerHeight * 0.3;

        if (isVisible) {
          setActiveSection(section.id);
          found = true;
          break;
        }
      }

      if (!found) setActiveSection("");
    };

    window.addEventListener("scroll", handleScrollCheck);
    handleScrollCheck();

    return () => window.removeEventListener("scroll", handleScrollCheck);
  }, [pathname]);

  /* ================= SCROLL SHADOW DETECTION ================= */
  useEffect(() => {
    const handleScrollListener = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScrollListener);
    return () => window.removeEventListener("scroll", handleScrollListener);
  }, []);

  /* ================= CLOSE MENU ON DESKTOP RESIZE ================= */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ================= RENDER ================= */
  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "py-2 px-3 sm:px-0" : ""
        }`}
      >
        <div
          className={`section-content px-6 transition-all duration-300  ${
            isScrolled
              ? " shadow-lg backdrop-blur-sm rounded-2xl border border-white py-1! bg-dark"
              : "bg-transparent py-0!"
          }`}
        >
          <div className="relative flex items-center justify-between h-14">
            {/* LOGO */}
            <Link href="/" className="relative md:absolute md:left-1/2 md:-translate-x-1/2">
              <Image
                src="/Logo_Synage.png"
                alt="Synage Consultants"
                width={130}
                height={36}
                priority
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10 text-white">
              {navLinks.map((item) => {
                const isActive = item.id && activeSection === item.id;

                return item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group relative text-sm transition-opacity hover:opacity-80"
                  >
                    {item.label}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => handleScroll(item.id!)}
                    className="group relative text-sm transition-opacity hover:opacity-80"
                  >
                    {item.label}

                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 w-full bg-white transform origin-left transition-transform duration-300 ease-out ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* CONTACT BUTTON */}
            <div className="hidden md:block">
              <button
                onClick={() => handleScroll("contact")}
                className="bg-white text-black px-6 cursor-pointer py-2 rounded-full text-sm hover:bg-white/90 transition"
              >
                Contact Us
              </button>
            </div>

            {/* MOBILE MENU TOGGLE */}
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

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-dark text-white transition-transform duration-700 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-full flex flex-col justify-center items-start px-6 gap-8 text-2xl">
          {navLinks.map((item) =>
            item.href ? (
              <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={() => handleScroll(item.id!)}
                className={activeSection === item.id ? "font-semibold" : ""}
              >
                {item.label}
              </button>
            )
          )}

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