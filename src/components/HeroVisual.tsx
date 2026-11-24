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
  const pausedRef = useRef(false);

  // Continuously spin the carousel; pause while the pointer is over it
  useEffect(() => {
    let animationFrameId: number;
    let last = performance.now();
    const SPEED = 30; // degrees per second
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!pausedRef.current) {
        setRotation((prev) => (prev + SPEED * dt) % 360);
      }
      animationFrameId = requestAnimationFrame(tick);
    };
    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const cards: CardData[] = [
    {
      id: "ai-automation",
      title: "AI & AUTOMATION",
      badge: "AI-First",
      accent: "green",
      description: "Intelligent systems that automate workflows, accelerate innovation, and enhance business productivity.",
      graphic: (
        <div className="relative h-28 w-28 rounded-full bg-accent/10 flex items-center justify-center">
          <svg className="h-14 w-14 text-accent animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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
          <div className="w-3.5 bg-[#efefef] rounded-t h-8" />
          <div className="w-3.5 bg-[#efefef] rounded-t h-12" />
          <div className="w-3.5 bg-[#404040]/30 rounded-t h-18" />
          <div className="w-3.5 bg-[#404040] rounded-t h-22" />
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
          <div className="w-4 bg-[#efefef] rounded-t h-8" />
          <div className="w-4 bg-[#efefef] rounded-t h-14" />
          <div className="w-4 bg-muted/30 rounded-t h-20" />
          <div className="w-4 bg-muted rounded-t h-24" />
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
        <div className="relative h-28 w-28 rounded-full bg-accent/10 flex items-center justify-center">
          <svg className="h-14 w-14 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
      )
    },
    {
      id: "mobile-app",
      title: "MOBILE APP DEVELOPMENT",
      badge: "Cross-Platform",
      accent: "brown",
      description: "Native-quality iOS and Android apps with seamless performance and engaging user experiences.",
      graphic: (
        <div className="relative h-28 w-28 rounded-full bg-[#404040]/10 flex items-center justify-center">
          <svg className="h-14 w-14 text-[#404040]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
      )
    }
  ];

  const radius = 210; // Cylinder radius in pixels
  const angleStep = 360 / cards.length;

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
      className="relative mx-auto w-full max-w-xl h-140 flex items-center justify-center overflow-visible select-none"
      style={{
        perspective: "1400px",
      }}
    >
      {/* 3D Cylinder Carousel */}
      <div
        className="relative w-full h-100 flex items-center justify-center"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${rotation}deg)`,
        }}
      >


        {/* Cylindrical Cards */}
        {cards.map((card, idx) => {
          const cardAngle = idx * angleStep;
          return (
            <div
              key={card.id}
              className="absolute w-60 h-92.5 rounded-[28px] border border-white bg-white/95 p-6 shadow-xl backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
              style={{
                transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                backfaceVisibility: "hidden",
              }}
            >
              <div>
                <span
                  className={`text-[9px] font-bold uppercase tracking-wider ${
                    card.accent === "green" ? "text-accent" : "text-muted"
                  }`}
                >
                  {card.badge}
                </span>
                <h3 className="mt-2 text-md font-bold text-foreground font-serif leading-tight">
                  {card.title}
                </h3>
                <p className="mt-3 text-[10px] leading-relaxed text-muted">
                  {card.description}
                </p>
              </div>

              {/* Graphic element */}
              <div className="flex items-center justify-center my-2">
                {card.graphic}
              </div>

              <span className="text-[8px] font-bold text-muted uppercase tracking-wider">
                FULL STACK SOLUTIONS
              </span>
            </div>
          );
        })}


      </div>
    </div>
  );
}
