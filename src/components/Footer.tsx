import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#F2F5F0] bg-[#F7F8F5] py-16 text-[#171A17]">
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
                className="h-8 w-8 rounded-lg object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-[#171a17]">
                Full Stack<span className="text-[#4D8B4F]"> Solutions</span>
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-[#525b54] max-w-xs">
              Full Stack Solutions specializes in building intelligent software solutions, custom enterprise applications, and modern digital experiences for global businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#171a17]">Navigation</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[#525b54]">
              <li>
                <Link href="/" className="transition hover:text-[#4D8B4F]">Home</Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-[#4D8B4F]">About Us</Link>
              </li>
              <li>
                <Link href="/insights" className="transition hover:text-[#4D8B4F]">Insights</Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-[#4D8B4F]">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Key Solutions */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#171a17]">Solutions</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[#525b54]">
              <li>
                <Link href="/solutions/ai-solutions" className="transition hover:text-[#4D8B4F]">AI Solutions</Link>
              </li>
              <li>
                <Link href="/solutions/custom-software" className="transition hover:text-[#4D8B4F]">Custom Software</Link>
              </li>
              <li>
                <Link href="/solutions/cloud-solutions" className="transition hover:text-[#4D8B4F]">Cloud Solutions</Link>
              </li>
              <li>
                <Link href="/solutions/devops" className="transition hover:text-[#4D8B4F]">DevOps & CI/CD</Link>
              </li>
              <li>
                <Link href="/solutions/ui-ux-design" className="transition hover:text-[#4D8B4F]">UI/UX Design</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#171a17]">Get in Touch</h4>
            <ul className="flex flex-col gap-3 text-xs text-[#525b54]">
              <li className="flex items-start gap-2">
                <svg className="h-4 w-4 shrink-0 text-[#4D8B4F] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:fullstacksolutions101@gmail.com" className="transition hover:text-[#4D8B4F]">fullstacksolutions101@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="h-4 w-4 shrink-0 text-[#4D8B4F] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919961618585" className="transition hover:text-[#4D8B4F]">+91 9961618585</a>
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <svg className="h-4 w-4 shrink-0 text-[#4D8B4F] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  Thrikkakkara, Kochi - 682021
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#F2F5F0] pt-8 text-[11px] text-[#525b54] md:flex-row">
          <span>
            © {currentYear} Full Stack Solutions. All rights reserved.
          </span>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/full-stack-solutions-4u" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#4D8B4F]">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
