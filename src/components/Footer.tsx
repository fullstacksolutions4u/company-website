import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/logo.png"
                alt="Full Stack Solutions Logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg bg-white object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-white">
                Full Stack<span className="text-white"> Solutions</span>
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-white/60 max-w-xs">
              Full Stack Solutions specializes in building intelligent software solutions, custom enterprise applications, and modern digital experiences for global businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-white/60">
              <li>
                <Link href="/" className="transition hover:text-white">Home</Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-white">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-white">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Key Solutions */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Solutions</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-white/60">
              <li>
                <Link href="/solutions/web-development" className="transition hover:text-white">SEO Friendly Websites</Link>
              </li>
              <li>
                <Link href="/solutions/custom-software" className="transition hover:text-white">Custom Web Applications</Link>
              </li>
              <li>
                <Link href="/solutions/mobile-development" className="transition hover:text-white">Mobile Applications</Link>
              </li>
              <li>
                <Link href="/solutions/digital-marketing" className="transition hover:text-white">Digital Marketing</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4 md:-ml-16">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Get in Touch</h4>
            <ul className="flex flex-col gap-3 text-xs text-white/60">
              <li className="flex items-start gap-2">
                <svg className="h-4 w-4 shrink-0 text-white mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:connect@fullstacksolutions.in" className="transition hover:text-white">connect@fullstacksolutions.in</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="h-4 w-4 shrink-0 text-white mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <a href="tel:+918848118585" className="transition hover:text-white">+91 88481 18585</a>
                  <span aria-hidden="true" className="text-white/40">|</span>
                  <a href="tel:+919292113731" className="transition hover:text-white">+91 92921 13731</a>
                </span>
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <svg className="h-4 w-4 shrink-0 text-white mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  <span className="block font-semibold text-white">Dubai</span>
                  Al Qiyadah Metro Station Exit 2, Abu Saif Business Center,
                  <br />
                  Al Kazim Building, Entrance B, Dubai, UAE
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[11px] text-white/60 md:flex-row">
          <span>
            © {currentYear} Full Stack Solutions. All rights reserved.
          </span>
          <span>
            Powered by{" "}
            <a
              href="https://www.sshrconsultancy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 font-semibold text-white"
            >
              <span className="text-yellow-400 underline-offset-4 transition group-hover:underline">SS HR Consultancy</span>
              <span>, Dubai</span>
              <svg className="h-3 w-3 text-yellow-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M8 7h9v9" />
              </svg>
            </a>
          </span>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/full-stack-solutions-4u" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] transition hover:text-[#3b8fe0]">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
