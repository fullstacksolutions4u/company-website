"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const solutions = [
  { title: "AI Solutions", slug: "ai-solutions", desc: "AI-powered applications and automation." },
  { title: "Custom Software", slug: "custom-software", desc: "Tailored enterprise solutions." },
  { title: "Web Development", slug: "web-development", desc: "Scalable web systems." },
  { title: "Mobile Development", slug: "mobile-development", desc: "Cross-platform mobile apps." },
  { title: "Cloud Solutions", slug: "cloud-solutions", desc: "Infrastructure & migration." },
  { title: "DevOps", slug: "devops", desc: "Continuous integration & deployment." },
  { title: "UI/UX Design", slug: "ui-ux-design", desc: "Human-centered digital designs." },
  { title: "Data Analytics", slug: "data-analytics", desc: "Turn raw data into business value." },
  { title: "QA & Testing", slug: "qa-testing", desc: "Quality assurance and test pipelines." }
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/60 bg-white/20 backdrop-blur-[25px] py-3 shadow-[0_10px_30px_rgba(77,139,79,0.04)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Full Stack Solutions Logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg object-contain"
          />
          <span className="text-xl font-bold tracking-tight text-[#171a17]">
            Full Stack<span className="text-[#4D8B4F]"> Solutions</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-[#4D8B4F] ${
              pathname === "/" ? "text-[#4D8B4F]" : "text-[#525b54]"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-[#4D8B4F] ${
              pathname === "/about" ? "text-[#4D8B4F]" : "text-[#525b54]"
            }`}
          >
            About
          </Link>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#4D8B4F] ${
                pathname.startsWith("/solutions") ? "text-[#4D8B4F]" : "text-[#525b54]"
              }`}
            >
              Solutions
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute left-1/2 top-full z-50 mt-2 w-[480px] -translate-x-1/2 rounded-[28px] border border-white/80 bg-white/95 p-4 shadow-[0_20px_50px_rgba(77,139,79,0.08)] backdrop-blur-xl grid grid-cols-2 gap-2">
                {solutions.map((sol) => (
                  <Link
                    key={sol.slug}
                    href={`/solutions/${sol.slug}`}
                    className="flex flex-col gap-1 rounded-[16px] p-3 transition hover:bg-[#F2F5F0]"
                  >
                    <span className="text-xs font-semibold text-[#171a17]">{sol.title}</span>
                    <span className="text-[10px] text-[#525b54] leading-normal">{sol.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/insights"
            className={`text-sm font-medium transition-colors hover:text-[#4D8B4F] ${
              pathname === "/insights" ? "text-[#4D8B4F]" : "text-[#525b54]"
            }`}
          >
            Insights
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="flex items-center justify-between gap-3 rounded-full border border-white/90 bg-white/20 px-6 py-2.5 text-xs font-semibold text-[#426a45] shadow-[inset_3px_3px_5px_white,0_15px_35px_rgba(60,75,62,0.08)] backdrop-blur-[35px] transition duration-300 hover:-translate-y-0.5 hover:bg-white/40"
          >
            Free Consultation
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center rounded-full border border-white bg-white/30 p-2.5 text-[#171a17] lg:hidden backdrop-blur-md shadow-sm"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-x-0 top-[60px] z-45 border-b border-white bg-white/95 p-6 backdrop-blur-xl lg:hidden max-h-[80vh] overflow-y-auto shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-[#171a17] hover:text-[#4D8B4F]"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-[#171a17] hover:text-[#4D8B4F]"
            >
              About
            </Link>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#525b54]">
                Solutions
              </span>
              <div className="grid grid-cols-2 gap-2 pl-2 border-l border-[#F2F5F0]">
                {solutions.map((sol) => (
                  <Link
                    key={sol.slug}
                    href={`/solutions/${sol.slug}`}
                    onClick={() => setOpen(false)}
                    className="text-xs text-[#525b54] hover:text-[#4D8B4F] py-1"
                  >
                    {sol.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/insights"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-[#171a17] hover:text-[#4D8B4F]"
            >
              Insights
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-[#4D8B4F] py-3 text-sm font-bold text-white shadow-md"
            >
              Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
