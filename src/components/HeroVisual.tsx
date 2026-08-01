"use client";

import { useState, useEffect, useRef } from "react";

type CardData = {
  id: string;
  title: string;
  badge: string;
  description: string;
  accent: string; // green or brown
  graphic: React.ReactNode;
};

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [targetRotation, setTargetRotation] = useState(0);

  // Mouse move listener to update target rotation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerCenterX = rect.left + rect.width / 2;
      const deltaX = e.clientX - containerCenterX;
      // Map mouse delta to a larger rotation range (-180deg to +180deg) so we can see all 7 cards!
      const maxDelta = window.innerWidth / 2;
      const angle = (deltaX / maxDelta) * 180;
      setTargetRotation(angle);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth lerp for rotation
  useEffect(() => {
    let animationFrameId: number;
    const updateRotation = () => {
      setRotation((prev) => {
        const diff = targetRotation - prev;
        // Smoothly lerp towards target rotation
        return prev + diff * 0.08;
      });
      animationFrameId = requestAnimationFrame(updateRotation);
    };
    animationFrameId = requestAnimationFrame(updateRotation);
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetRotation]);

  const cards: CardData[] = [
    {
      id: "ai-automation",
      title: "AI & AUTOMATION",
      badge: "AI-First",
      accent: "green",
      description: "Intelligent systems that automate workflows, accelerate innovation, and enhance business productivity.",
      graphic: (
        <div className="relative h-28 w-28 rounded-full bg-[#4D8B4F]/10 flex items-center justify-center">
          <svg className="h-14 w-14 text-[#4D8B4F] animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
      )
    },
    {
      id: "cloud-devops",
      title: "CLOUD & DEVOPS",
      badge: "Infrastructure",
      accent: "brown",
      description: "Scalable cloud platforms with seamless deployment, automation, and continuous delivery.",
      graphic: (
        <div className="relative h-28 w-28 rounded-full bg-[#6B2D1A]/10 flex items-center justify-center">
          <svg className="h-14 w-14 text-[#6B2D1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        </div>
      )
    },
    {
      id: "ui-ux",
      title: "UI/UX DESIGN",
      badge: "Human-Centered",
      accent: "green",
      description: "Designing intuitive experiences that engage and inspire users across all screens.",
      graphic: (
        <div className="relative h-28 w-28 rounded-full bg-[#4D8B4F]/10 flex items-center justify-center">
          <svg className="h-14 w-14 text-[#4D8B4F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
      )
    },
    {
      id: "data-analytics",
      title: "DATA ANALYTICS",
      badge: "Intelligence",
      accent: "brown",
      description: "Turning data into insights that drive smarter, faster business decisions.",
      graphic: (
        <div className="h-28 w-full flex items-end justify-center gap-1.5 pb-4">
          <div className="w-3.5 bg-[#F2F5F0] rounded-t h-8" />
          <div className="w-3.5 bg-[#F2F5F0] rounded-t h-12" />
          <div className="w-3.5 bg-[#6B2D1A]/30 rounded-t h-18" />
          <div className="w-3.5 bg-[#6B2D1A] rounded-t h-22" />
        </div>
      )
    },
    {
      id: "digital-growth",
      title: "DIGITAL GROWTH SOLUTIONS",
      badge: "Strategy",
      accent: "brown",
      description: "Strategic digital solutions that accelerate growth and optimize operations.",
      graphic: (
        <div className="h-28 w-full flex items-end justify-center gap-2 pb-4">
          <div className="w-4 bg-[#F2F5F0] rounded-t h-8" />
          <div className="w-4 bg-[#F2F5F0] rounded-t h-14" />
          <div className="w-4 bg-[#8B3C24]/30 rounded-t h-20" />
          <div className="w-4 bg-[#8B3C24] rounded-t h-24" />
        </div>
      )
    },
    {
      id: "software-engineering",
      title: "SOFTWARE ENGINEERING",
      badge: "Development",
      accent: "green",
      description: "Building robust, scalable, and future-ready enterprise applications.",
      graphic: (
        <div className="relative h-28 w-28 rounded-full bg-[#4D8B4F]/10 flex items-center justify-center">
          <svg className="h-14 w-14 text-[#4D8B4F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
      )
    },
    {
      id: "backend-api",
      title: "BACKEND API DEVELOPMENT",
      badge: "API-First",
      accent: "brown",
      description: "Robust APIs powering scalable platforms with secure and reliable integrations.",
      graphic: (
        <div className="relative h-28 w-28 rounded-full bg-[#6B2D1A]/10 flex items-center justify-center">
          <svg className="h-14 w-14 text-[#6B2D1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
      )
    }
  ];

  const radius = 340; // Cylinder radius in pixels
  const angleStep = 360 / cards.length;

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-xl h-[560px] flex items-center justify-center overflow-visible select-none"
      style={{
        perspective: "1400px",
      }}
    >
      {/* 3D Cylinder Carousel */}
      <div
        className="relative w-full h-[400px] flex items-center justify-center"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${rotation}deg)`,
        }}
      >


        {/* 7 Cylindrical Cards */}
        {cards.map((card, idx) => {
          const cardAngle = idx * angleStep;
          return (
            <div
              key={card.id}
              className="absolute w-[240px] h-[370px] rounded-[28px] border border-white bg-white/95 p-6 shadow-xl backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
              style={{
                transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                backfaceVisibility: "hidden",
              }}
            >
              <div>
                <span
                  className={`text-[9px] font-bold uppercase tracking-wider ${
                    card.accent === "green" ? "text-[#4D8B4F]" : "text-[#8B3C24]"
                  }`}
                >
                  {card.badge}
                </span>
                <h3 className="mt-2 text-md font-bold text-[#171A17] font-serif leading-tight">
                  {card.title}
                </h3>
                <p className="mt-3 text-[10px] leading-relaxed text-[#526057]">
                  {card.description}
                </p>
              </div>

              {/* Graphic element */}
              <div className="flex items-center justify-center my-2">
                {card.graphic}
              </div>

              <span className="text-[8px] font-bold text-[#526057] uppercase tracking-wider">
                FULL STACK SOLUTIONS
              </span>
            </div>
          );
        })}


      </div>
    </div>
  );
}
