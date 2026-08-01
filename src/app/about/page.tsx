"use client";

import { useState } from "react";
import Link from "next/link";

const dnaValues = [
  {
    title: "Innovation",
    description: "We challenge ideas and embrace creativity to build what's next.",
    icon: (
      <svg className="h-6 w-6 text-[#4D8B4F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Engineering",
    description: "We write the foundation of digital experiences that scale and last.",
    icon: (
      <svg className="h-6 w-6 text-[#4D8B4F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "Trust",
    description: "We build relationships rooted in transparency, integrity, and respect.",
    icon: (
      <svg className="h-6 w-6 text-[#8B3C24]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

const deliveryProcess = [
  { id: "step-1", num: "01", title: "Discover", description: "Deep immersion into your ecosystem and goals." },
  { id: "step-2", num: "02", title: "Plan", description: "Strategic roadmapping and technical architecture." },
  { id: "step-3", num: "03", title: "Design", description: "Crafting immersive and intuitive human experiences." },
  { id: "step-4", num: "04", title: "Develop", description: "Precision coding with scalable technologies." },
  { id: "step-5", num: "05", title: "Test", description: "Rigorous quality assurance and security audits." },
  { id: "step-6", num: "06", title: "Deploy", description: "Seamless integration and global orchestration." },
  { id: "step-7", num: "07", title: "Support", description: "24/7 technical oversight and adaptive growth." }
];

const leaders = [
  {
    name: "Manikanta Vegirothu",
    role: "Founder & Chief Executive Officer",
    quote: "True leadership inspires innovation, builds strong teams, and transforms ideas into meaningful solutions."
  },
  {
    name: "Meghana",
    role: "PMO Lead",
    quote: "Driving project coordination, tracking milestones, and delivering software on schedule."
  },
  {
    name: "Sneha",
    role: "Solution Architect",
    quote: "Designing secure, high-performance, and scalable software systems for global workloads."
  }
];

export default function AboutPage() {
  const [activeProcessId, setActiveProcessId] = useState("step-1");

  return (
    <div className="bg-[#F7F8F5] text-[#171A17] font-sans antialiased min-h-screen">
      {/* Hero Section */}
      <section className="relative py-28 px-6 lg:px-8 overflow-hidden bg-[radial-gradient(circle_at_8%_18%,rgba(255,255,255,1)_0%,transparent_36%),radial-gradient(circle_at_65%_58%,rgba(188,211,191,0.32)_0%,transparent_38%),radial-gradient(circle_at_92%_12%,rgba(145,77,50,0.18)_0%,transparent_31%)]">
        <div className="mx-auto max-w-5xl text-center">
          <div className="flex justify-center mb-6">
            <span className="glass-pill text-[11px] font-bold uppercase tracking-wider text-[#477B4B]">
              <span className="h-2 w-2 rounded-full bg-[#79C968]" />
              Our Story
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-[#171917] leading-[1.1]">
            Engineering <span className="text-[#4D8B4F]">Beyond</span> Technology
          </h1>

          <p className="mt-8 mx-auto max-w-3xl text-base sm:text-lg leading-relaxed text-[#545B56] font-medium">
            At Full Stack Solutions, we blend innovation, intelligence, and engineering excellence to build digital solutions that create real impact. We don&apos;t just follow technology, we build what&apos;s next.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => document.getElementById("process-section")?.scrollIntoView({ behavior: "smooth" })}
              className="glass-button-primary"
            >
              Our Process
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={() => document.getElementById("dna-section")?.scrollIntoView({ behavior: "smooth" })}
              className="glass-button-secondary"
            >
              Inside Our DNA
            </button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 border-t border-[#F2F5F0] bg-[#FCFDFB] px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="glass-pill text-[11px] font-bold uppercase tracking-wider text-[#477B4B] max-w-max">
              <span className="h-2 w-2 rounded-full bg-[#79C968]" />
              Mission & Vision
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[#191B19]">
              Guided by <span className="text-[#4D8B4F]">Purpose.</span><br />
              Driven by <span className="text-[#8B3C24]">Impact.</span>
            </h2>
            <p className="text-sm leading-relaxed text-[#626963] max-w-md">
              Every solution we build is rooted in our mission and inspired by our vision for a better tomorrow. Together, they shape the value we deliver to our clients and the world.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card p-8 flex flex-col gap-4">
              <span className="text-xs font-bold text-[#4D8B4F] uppercase tracking-widest">Our Mission</span>
              <h3 className="text-xl font-serif font-bold text-[#171a17]">To Accelerate Innovation</h3>
              <p className="text-xs leading-relaxed text-[#525b54]">
                To engineer cutting-edge digital infrastructure and intelligent software solutions that automate operations, lower barriers to growth, and elevate standard business practices.
              </p>
            </div>

            <div className="glass-card p-8 flex flex-col gap-4">
              <span className="text-xs font-bold text-[#8B3C24] uppercase tracking-widest">Our Vision</span>
              <h3 className="text-xl font-serif font-bold text-[#171a17]">Engineering Tomorrow</h3>
              <p className="text-xs leading-relaxed text-[#525b54]">
                To establish ourselves as a global leader in AI-driven software architecture, renowned for technical excellence, engineering integrity, and customer-first partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section id="process-section" className="py-24 border-t border-[#F2F5F0] bg-[#F7F8F5] px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center flex flex-col items-center gap-3 mb-16">
            <span className="glass-pill text-[11px] font-bold uppercase tracking-wider text-[#38573D]">
              <span className="h-2 w-2 rounded-full bg-[#79C968]" />
              Our Process
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[#172019]">
              From Idea to <span className="italic text-[#4D8B4F]">Innovation</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#526057]">
              We combine precision engineering with human-centered design to transform ambitious ideas into scalable digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-center">
            {/* Timeline Stepper */}
            <div className="relative space-y-4 lg:col-span-5">
              <div className="absolute bottom-8 left-[29px] top-8 hidden w-[2px] bg-gradient-to-b from-[#4D8B4F]/20 via-[#4D8B4F]/35 to-[#8B3C24]/25 sm:block" />

              {deliveryProcess.map((step) => {
                const isActive = activeProcessId === step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveProcessId(step.id)}
                    className={`relative z-10 flex w-full items-center gap-5 rounded-[26px] border p-4 text-left cursor-pointer backdrop-blur-md transition-all duration-300 ${
                      isActive
                        ? "border-white/85 bg-white/40 shadow-sm"
                        : "border-transparent bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      isActive ? "bg-[#4D8B4F] text-white" : "bg-white/30 text-[#171a17]"
                    }`}>
                      {step.num}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-[#171A17]">{step.title}</h3>
                      <p className="text-[10px] text-[#525b54] mt-0.5">{step.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Display panel */}
            <div className="lg:col-span-7 glass-card p-10 flex flex-col gap-6">
              {(() => {
                const currentStep = deliveryProcess.find((s) => s.id === activeProcessId);
                return (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="text-5xl font-serif font-black text-[#4D8B4F]/20">{currentStep?.num}</span>
                      <span className="rounded-full bg-[#4D8B4F]/10 px-4 py-1.5 text-xs font-bold text-[#4D8B4F] uppercase tracking-wider">
                        {currentStep?.title} Phase
                      </span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-[#171a17]">
                      Executing the {currentStep?.title} Phase
                    </h3>
                    <p className="text-xs leading-relaxed text-[#525b54]">
                      During the {currentStep?.title.toLowerCase()} stage, our engineering discipline is centered on {currentStep?.description.toLowerCase()} We maintain complete alignment, strict quality control pipelines, and robust communications structure to ensure project requirements are realized flawlessly.
                    </p>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* DNA section */}
      <section id="dna-section" className="py-24 border-t border-[#F2F5F0] bg-[#FCFDFB] px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="glass-pill text-[11px] font-bold uppercase tracking-wider text-[#477B4B] max-w-max">
              <span className="h-2 w-2 rounded-full bg-[#79C968]" />
              Inside Our DNA
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[#171917]">
              Inside Our <span className="text-[#4D8B4F]">DNA.</span><br />
              Built on Values.
            </h2>
            <p className="text-sm leading-relaxed text-[#5E665F] max-w-md">
              Full Stack Solutions is more than a technology company. We are a team of problem solvers, innovators, and engineers who believe in creating digital solutions that transform businesses.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            {dnaValues.map((val, idx) => (
              <div
                key={idx}
                className="group relative flex items-start gap-5 rounded-[28px] border border-white bg-[#F7F8F5]/60 p-6 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/90"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#4D8B4F]/10">
                  {val.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#171A17]">{val.title}</h3>
                  <p className="text-xs text-[#525b54] mt-1.5 leading-relaxed">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-24 border-t border-[#F2F5F0] bg-[#F7F8F5] px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center flex flex-col items-center gap-3 mb-16">
            <span className="glass-pill text-[11px] font-bold uppercase tracking-wider text-[#38573D]">
              <span className="h-2 w-2 rounded-full bg-[#79C968]" />
              Executive Leadership
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[#172019]">
              The Team <span className="italic text-[#4D8B4F]">Steering the Ship</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-[36px] border border-white bg-white/40 p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4D8B4F]/10 text-[#4D8B4F]">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#171A17]">{leader.name}</h3>
                    <p className="text-xs text-[#C59B27] font-semibold mt-1">{leader.role}</p>
                  </div>
                  <blockquote className="mt-2 text-xs leading-relaxed italic text-[#526057]">
                    &ldquo;{leader.quote}&rdquo;
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
