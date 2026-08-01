"use client";

import Link from "next/link";

const solutions = [
  {
    title: "AI Solutions",
    slug: "ai-solutions",
    description: "Build intelligent, AI-powered applications, cognitive agents, and automation workflows.",
    icon: (
      <svg className="h-6 w-6 text-[#4D8B4F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Custom Software",
    slug: "custom-software",
    description: "Tailored enterprise solutions engineered for your unique business needs and scalability.",
    icon: (
      <svg className="h-6 w-6 text-[#4D8B4F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Web Development",
    slug: "web-development",
    description: "Modern, responsive, and secure web applications built to handle high traffic and retain users.",
    icon: (
      <svg className="h-6 w-6 text-[#4D8B4F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    title: "Mobile Development",
    slug: "mobile-development",
    description: "Native and cross-platform mobile apps featuring smooth animations and offline-first capabilities.",
    icon: (
      <svg className="h-6 w-6 text-[#4D8B4F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description: "Secure cloud migration, serverless architectures, and resource optimization across AWS & GCP.",
    icon: (
      <svg className="h-6 w-6 text-[#4D8B4F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  {
    title: "DevOps",
    slug: "devops",
    description: "Automated CI/CD pipelines, containerized orchestration, infrastructure as code, and fast builds.",
    icon: (
      <svg className="h-6 w-6 text-[#4D8B4F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.22a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description: "Human-centered digital interfaces optimized for high engagement, brand loyalty, and conversion.",
    icon: (
      <svg className="h-6 w-6 text-[#4D8B4F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    title: "Data Analytics",
    slug: "data-analytics",
    description: "Extracting business value from raw metrics, constructing reports, and predicting growth.",
    icon: (
      <svg className="h-6 w-6 text-[#4D8B4F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "QA & Testing",
    slug: "qa-testing",
    description: "Comprehensive software verification, regression automation, and performance benchmark audits.",
    icon: (
      <svg className="h-6 w-6 text-[#4D8B4F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function SolutionsPage() {
  return (
    <div className="bg-[#F7F8F5] text-[#171A17] font-sans antialiased min-h-screen py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="glass-pill text-[11px] font-bold uppercase tracking-wider text-[#38573D]">
            <span className="h-2 w-2 rounded-full bg-[#79C968]" />
            What We Do
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#172019]">
            Technology Solutions Built for <span className="italic text-[#4D8B4F]">Modern Businesses</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#526057]">
            Whichever stage your product is at, our engineering team plugs in with the right discipline, tech stack, and development pipelines to drive business value.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((sol) => (
            <Link
              key={sol.slug}
              href={`/solutions/${sol.slug}`}
              className="group relative flex flex-col justify-between rounded-[32px] border border-white bg-white/40 p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/70 hover:shadow-md cursor-pointer"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4D8B4F]/10 text-[#4D8B4F] mb-6 transition-transform group-hover:scale-105">
                  {sol.icon}
                </div>
                <h3 className="text-lg font-bold text-[#171A17] group-hover:text-[#4D8B4F] transition-colors">{sol.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-[#526057]">{sol.description}</p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-[#F2F5F0] pt-4 text-xs font-semibold text-[#4D8B4F]">
                <span>Learn More</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
