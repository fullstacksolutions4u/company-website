"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const solutions = [
  { title: "AI Solutions", slug: "ai-solutions", desc: "AI-powered applications and automation." },
  { title: "Web Development", slug: "web-development", desc: "Scalable web systems." },
  { title: "Mobile Development", slug: "mobile-development", desc: "Cross-platform mobile apps." },
  { title: "Digital Marketing", slug: "digital-marketing", desc: "SEO, social media and online growth." },
];

const WHATSAPP_URL = "https://wa.me/918848118585";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
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
          ? "border-b border-white/60 bg-white/20 backdrop-blur-[25px] py-3 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
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
          <span className="text-xl font-bold tracking-tight text-[#0a0a0a]">
            Full Stack<span className="text-[#111111]"> Solutions</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-[#111111] ${
              pathname === "/" ? "text-[#111111]" : "text-[#525252]"
            }`}
          >
            Home
          </Link>

          {solutions.map((sol) => (
            <Link
              key={sol.slug}
              href={`/solutions/${sol.slug}`}
              className={`text-sm font-medium transition-colors hover:text-[#111111] ${
                pathname === `/solutions/${sol.slug}` ? "text-[#111111]" : "text-[#525252]"
              }`}
            >
              {sol.title}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-3 rounded-full bg-[#25D366] px-6 py-2.5 text-xs font-semibold text-white shadow-[0_10px_25px_rgba(37,211,102,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe5a]"
          >
            Connect on WhatsApp
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center rounded-full border border-white bg-white/30 p-2.5 text-[#0a0a0a] lg:hidden backdrop-blur-md shadow-sm"
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
              className="text-sm font-semibold text-[#0a0a0a] hover:text-[#111111]"
            >
              Home
            </Link>
            {solutions.map((sol) => (
              <Link
                key={sol.slug}
                href={`/solutions/${sol.slug}`}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-[#0a0a0a] hover:text-[#111111]"
              >
                {sol.title}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-bold text-white shadow-md hover:bg-[#1ebe5a]"
            >
              Connect on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
