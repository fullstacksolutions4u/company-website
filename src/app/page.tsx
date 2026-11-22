"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import HeroVisual from "@/components/HeroVisual";

const heroSlides = [
  {
    badge: "Our Company",
    description: "We empower businesses of all sizes to thrive by building robust software solutions that drive innovation and scale modern digital enterprise systems."
  },
  {
    badge: "Welcome to Full Stack Solutions",
    description: "We empower businesses of all sizes to thrive by building robust software solutions that drive innovation and scale modern digital enterprise systems."
  }
];

const rotatingServices = [
  "AI Solutions.",
  "Custom Software.",
  "Web Development.",
  "Mobile App Development.",
  "Cloud Solutions.",
  "DevOps.",
  "UI/UX Design.",
  "Data Analytics.",
  "QA & Testing."
];

const whyChooseUs = [
  {
    id: "why-1",
    title: "Innovation",
    description: "Building future-ready software using modern technologies and AI-driven solutions.",
    icon: (
      <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: "why-2",
    title: "Expert Team",
    description: "Highly skilled engineers delivering enterprise-grade software with deep, hands-on experience across industries.",
    icon: (
      <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: "why-3",
    title: "Agile Delivery",
    description: "Fast, transparent and customer-focused development cycles that ensure your product hits the market sooner.",
    icon: (
      <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    id: "why-4",
    title: "Latest Tech",
    description: "Modern AI, Cloud, DevOps and scalable architectures built on the world's most stable stacks.",
    icon: (
      <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: "why-5",
    title: "Scalable Solutions",
    description: "Applications designed to grow with your business, supporting millions of users without missing a beat.",
    icon: (
      <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: "why-6",
    title: "24/7 Support & Partnership",
    description: "Reliable long-term partnership with continuous maintenance, monitoring and technical support. We act as an extension of your own team.",
    icon: (
      <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  }
];

const solutionsShowcase = [
  {
    title: "Enterprise Software",
    description: "Scalable, secure, and future-ready enterprise applications.",
    tags: ["Architecture", "APIs", "Integration", "Performance"],
    accent: "green",
    url: "/solutions/custom-software"
  },
  {
    title: "AI & Automation",
    description: "Intelligent solutions that automate workflows and accelerate innovation.",
    tags: ["AI", "Automation", "Analytics", "Innovation"],
    accent: "brown",
    url: "/solutions/ai-solutions"
  },
  {
    title: "Cloud & DevOps",
    description: "Reliable cloud infrastructure with seamless deployment and continuous delivery.",
    tags: ["Cloud", "DevOps", "CI/CD", "Kubernetes"],
    accent: "green",
    url: "/solutions/cloud-solutions"
  },
  {
    title: "UI/UX Excellence",
    description: "Beautiful, intuitive experiences designed for engagement and usability.",
    tags: ["UX", "UI", "Prototyping", "Accessibility"],
    accent: "brown",
    url: "/solutions/ui-ux-design"
  }
];

const caseStudies = [
  {
    id: "case-1",
    title: "AI-Powered Enterprise Automation",
    category: "Artificial Intelligence",
    type: "Enterprise AI",
    description: "A scalable AI-powered digital ecosystem designed to automate complex business workflows, improve operational visibility, and accelerate enterprise decision-making.",
    metrics: "40% Faster Operations",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=90",
    tags: ["Artificial Intelligence", "React", "Cloud"]
  },
  {
    id: "case-2",
    title: "Cloud Infrastructure Modernization",
    category: "Cloud Solutions",
    type: "Cloud Transformation",
    description: "Modernized legacy infrastructure with a secure cloud-native architecture designed for scalability, reliability, and improved application performance.",
    metrics: "65% Faster Deployment",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=90",
    tags: ["AWS", "Cloud", "DevOps"]
  },
  {
    id: "case-3",
    title: "Digital Healthcare Experience",
    category: "Healthcare",
    type: "Digital Platform",
    description: "A modern healthcare platform focused on creating seamless patient experiences, secure digital workflows, and real-time operational insights.",
    metrics: "3X User Engagement",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=90",
    tags: ["Healthcare", "UI/UX", "Analytics"]
  }
];

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    const serviceInterval = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % rotatingServices.length);
    }, 2800);

    return () => {
      clearInterval(slideInterval);
      clearInterval(serviceInterval);
    };
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setFormStatus("error");
      setFormMessage("Please fill in all fields.");
      return;
    }
    setFormStatus("sending");
    // Simulate contact submission
    setTimeout(() => {
      setFormStatus("success");
      setFormMessage("Message Sent Successfully!");
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden bg-foreground text-white py-20 px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 grayscale bg-cover bg-center transition-all duration-1000 opacity-30 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80')]" />
          <div className="absolute inset-0 bg-linear-to-tr from-accent/20 via-[#404040]/25 to-black/80 mix-blend-multiply" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl w-full grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1] min-h-40 sm:min-h-35">
              Building Intelligent{" "}
              <span className="text-[#d4d4d4]">Solutions</span>{" "}
              <span className="block sm:inline text-white/95">
                with {rotatingServices[serviceIndex]}
              </span>
            </h1>

            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-white/80 font-medium transition-all duration-500">
              {heroSlides[slideIndex].description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative flex items-center justify-between gap-5 rounded-full border border-[#262626] bg-linear-to-b from-[#404040] to-[#000000] pl-7 pr-3 py-2.5 text-xs font-bold text-white tracking-wide shadow-[inset_0_1px_2px_rgba(255,255,255,0.45),0_10px_25px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                Free Consultation
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#000000] shadow-sm transition-transform duration-300 group-hover:translate-x-0.5">
                  <svg className="h-4 w-4 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>

              <button
                onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 px-7 py-3.5 text-xs font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Services
              </button>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5 relative w-full h-full min-h-120">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-[#f6f6f6] text-foreground px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center flex flex-col items-center gap-3">
            <span className="glass-pill text-[11px] font-bold uppercase tracking-wider text-[#262626]">
              <span className="h-2 w-2 rounded-full bg-[#737373]" />
              Why Full Stack Solutions
            </span>
            <h2 className="mt-2 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              Why Businesses Choose <span className="italic text-accent">Full Stack Solutions</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              We combine innovation, technical excellence, and customer-first thinking to build digital solutions that help businesses move faster and scale with confidence.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-4xl border border-white bg-white/40 p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/65 hover:shadow-md cursor-pointer"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Showcase */}
      <section id="solutions" className="py-24 bg-background text-foreground px-6 lg:px-8 border-t border-[#efefef]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="flex flex-col gap-3">
              <span className="glass-pill text-[11px] font-bold uppercase tracking-wider text-[#262626] max-w-max">
                <span className="h-2 w-2 rounded-full bg-[#737373]" />
                Our Solutions
              </span>
              <h2 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
                Engineering <span className="italic text-accent">Beyond</span> Technology
              </h2>
            </div>
            <Link
              href="/solutions"
              className="glass-button-secondary max-w-max"
            >
              Explore Solutions
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutionsShowcase.map((sol, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-4xl border border-white/60 bg-white/20 p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md"
              >
                <div>
                  <h3 className="text-lg font-bold text-foreground">{sol.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted">{sol.description}</p>
                </div>
                <div className="mt-8 flex flex-wrap gap-1.5">
                  {sol.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-full bg-[#efefef] px-3 py-1 text-[10px] font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section id="case-studies" className="py-24 bg-[#f6f6f6] text-foreground px-6 lg:px-8 border-t border-[#efefef]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center flex flex-col items-center gap-3 mb-16">
            <span className="glass-pill text-[11px] font-bold uppercase tracking-wider text-[#262626]">
              <span className="h-2 w-2 rounded-full bg-[#737373]" />
              Featured Case Studies
            </span>
            <h2 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              Real Projects. <span className="italic text-accent">Real Business Impact.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              Explore how Full Stack Solutions transforms complex business challenges into scalable, secure, and high-performing digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {caseStudies.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col overflow-hidden rounded-[36px] border border-white bg-white/30 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold text-foreground">
                    {project.category}
                  </span>
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                      {project.type}
                    </span>
                    <h3 className="mt-2 text-base font-bold text-foreground">{project.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted">{project.description}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-[#efefef] pt-4">
                    <span className="text-xs font-bold text-[#404040]">{project.metrics}</span>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-accent">
                      View Case Study
                      <svg className="h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-24 bg-[#f6f6f6] text-foreground px-6 lg:px-8 border-t border-[#efefef]">
        <div className="mx-auto max-w-3xl">
          <div className="text-center flex flex-col items-center gap-3 mb-12">
            <span className="glass-pill text-[11px] font-bold uppercase tracking-wider text-[#262626]">
              <span className="h-2 w-2 rounded-full bg-[#737373]" />
              Contact Us
            </span>
            <h2 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              Get a Free <span className="italic text-accent">Consultation</span>
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              Have a project in mind? Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="glass-card p-8 sm:p-12 flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="form-name" className="text-xs font-semibold text-foreground">Full Name</label>
                <input
                  type="text"
                  id="form-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-2xl border border-[#efefef] bg-white/70 px-4 py-3 text-xs outline-none focus:border-accent transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="form-email" className="text-xs font-semibold text-foreground">Email Address</label>
                <input
                  type="email"
                  id="form-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-2xl border border-[#efefef] bg-white/70 px-4 py-3 text-xs outline-none focus:border-accent transition-all"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="form-message" className="text-xs font-semibold text-foreground">Your Message</label>
              <textarea
                id="form-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="rounded-2xl border border-[#efefef] bg-white/70 px-4 py-3 text-xs outline-none focus:border-accent transition-all resize-none"
                placeholder="Tell us about your project"
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === "sending"}
              className="mt-2 flex items-center justify-center gap-3 rounded-full bg-linear-to-b from-[#404040] to-[#000000] py-3.5 text-xs font-bold text-white shadow-md transition hover:-translate-y-0.5"
            >
              {formStatus === "sending" ? "Sending..." : "Send Message"}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            {formStatus !== "idle" && (
              <div
                className={`mt-4 text-center text-xs font-bold ${
                  formStatus === "success" ? "text-accent" : "text-[#404040]"
                }`}
              >
                {formMessage}
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
