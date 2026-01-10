"use client";

import { useEffect, useState, useRef } from "react";
import { useDraggable } from "@neodrag/react";
import {
  RobotIcon,
  SealCheckIcon,
  FileTextIcon,
  FileMagnifyingGlassIcon,
  GraduationCapIcon,
} from "@phosphor-icons/react";

const FEATURES = [
  {
    id: "ai-copilot",
    title: "AI powered tax co-pilot",
    icon: RobotIcon,
    position: "top-left" as const,
  },
  {
    id: "vetted-sources",
    title: "Vetted Sources",
    icon: SealCheckIcon,
    position: "top-right" as const,
  },
  {
    id: "memo-composer",
    title: "Memo Composer",
    icon: FileTextIcon,
    position: "middle-left" as const,
  },
  {
    id: "document-analysis",
    title: "Document Analysis",
    icon: FileMagnifyingGlassIcon,
    position: "middle-right" as const,
  },
  {
    id: "tax-accelerator",
    title: "Academe Tax Accelerator",
    icon: GraduationCapIcon,
    position: "bottom" as const,
  },
] as const;

const DraggableWrapper = ({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className: string;
  delay: number;
}) => {
  const draggableRef = useRef<HTMLDivElement>(null);

  useDraggable(draggableRef, {
    applyUserSelectHack: true,
    gpuAcceleration: false,
    defaultPosition: { x: 0, y: 0 },
    onDragEnd: () => {
      // Smooth spring-back animation on drag end
      if (draggableRef.current) {
        draggableRef.current.style.transition =
          "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
        draggableRef.current.style.transform = "translate3d(0px, 0px, 0px)";

        // Remove transition after animation completes
        setTimeout(() => {
          if (draggableRef.current) {
            draggableRef.current.style.transition = "";
          }
        }, 600);
      }
    },
  });

  return (
    <div
      ref={draggableRef}
      className={className}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const FeatureCard = ({
  feature,
  isVisible,
  delay,
}: {
  feature: (typeof FEATURES)[number];
  isVisible: boolean;
  delay: number;
}) => {
  const Icon = feature.icon;

  return (
    <div
      className={`flex items-center gap-3 px-5 py-3 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:border-[#2B7FFF]/50 transition-all duration-500 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-10 h-10 rounded-xl bg-[#2B7FFF] flex items-center justify-center flex-shrink-0">
        <Icon size={20} weight="fill" className="text-white" />
      </div>
      <span className="text-[#2B7FFF] dark:text-blue-400 font-semibold text-sm sm:text-base whitespace-nowrap">
        {feature.title}
      </span>
    </div>
  );
};

const FeaturesDiagram = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full max-w-6xl mx-auto py-20 px-4"
    >
      {/* SVG Lines connecting to center - Hidden on mobile */}
      <svg
        className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      >
        {/* Top Left Line */}
        <line
          x1="20%"
          y1="20%"
          x2="50%"
          y2="50%"
          stroke="currentColor"
          strokeWidth="2"
          className={`text-slate-300 dark:text-slate-700 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          strokeDasharray="5,5"
        />
        {/* Top Right Line */}
        <line
          x1="80%"
          y1="20%"
          x2="50%"
          y2="50%"
          stroke="currentColor"
          strokeWidth="2"
          className={`text-slate-300 dark:text-slate-700 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          strokeDasharray="5,5"
        />
        {/* Middle Left Line */}
        <line
          x1="10%"
          y1="50%"
          x2="50%"
          y2="50%"
          stroke="currentColor"
          strokeWidth="2"
          className={`text-slate-300 dark:text-slate-700 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          strokeDasharray="5,5"
        />
        {/* Middle Right Line */}
        <line
          x1="90%"
          y1="50%"
          x2="50%"
          y2="50%"
          stroke="currentColor"
          strokeWidth="2"
          className={`text-slate-300 dark:text-slate-700 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          strokeDasharray="5,5"
        />
        {/* Bottom Line */}
        <line
          x1="50%"
          y1="80%"
          x2="50%"
          y2="50%"
          stroke="currentColor"
          strokeWidth="2"
          className={`text-slate-300 dark:text-slate-700 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          strokeDasharray="5,5"
        />
      </svg>

      {/* Desktop Layout - Hidden on mobile */}
      <div className="hidden md:block relative" style={{ minHeight: "600px" }}>
        {/* Central Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <div
            className={`w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-[#2B7FFF] to-blue-500 shadow-2xl flex flex-col items-center justify-center transition-all duration-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          >
            <h3 className="text-white font-bold text-xl sm:text-2xl text-center px-6">
              IgniteTax
              <br />
              Co-Pilot
            </h3>
          </div>
        </div>

        {/* Top Left - AI powered tax co-pilot */}
        <DraggableWrapper
          className="absolute top-0 left-0 sm:left-8 z-20 cursor-grab active:cursor-grabbing"
          delay={200}
        >
          <FeatureCard
            feature={FEATURES[0]}
            isVisible={isVisible}
            delay={200}
          />
        </DraggableWrapper>

        {/* Top Right - Vetted Sources */}
        <DraggableWrapper
          className="absolute top-0 right-0 sm:right-8 z-20 cursor-grab active:cursor-grabbing"
          delay={300}
        >
          <FeatureCard
            feature={FEATURES[1]}
            isVisible={isVisible}
            delay={300}
          />
        </DraggableWrapper>

        {/* Middle Left - Memo Composer */}
        <DraggableWrapper
          className="absolute top-1/2 -translate-y-1/2 left-0 z-20 cursor-grab active:cursor-grabbing"
          delay={400}
        >
          <FeatureCard
            feature={FEATURES[2]}
            isVisible={isVisible}
            delay={400}
          />
        </DraggableWrapper>

        {/* Middle Right - Document Analysis */}
        <DraggableWrapper
          className="absolute top-1/2 -translate-y-1/2 right-0 z-20 cursor-grab active:cursor-grabbing"
          delay={500}
        >
          <FeatureCard
            feature={FEATURES[3]}
            isVisible={isVisible}
            delay={500}
          />
        </DraggableWrapper>

        {/* Bottom - Academe Tax Accelerator */}
        <DraggableWrapper
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 cursor-grab active:cursor-grabbing"
          delay={600}
        >
          <FeatureCard
            feature={FEATURES[4]}
            isVisible={isVisible}
            delay={600}
          />
        </DraggableWrapper>
      </div>

      {/* Mobile Layout - Clean stacked list */}
      <div className="md:hidden space-y-6">
        {/* Central Circle for Mobile */}
        <div className="flex justify-center mb-8">
          <div
            className={`w-40 h-40 rounded-full bg-gradient-to-br from-[#2B7FFF] to-blue-500 shadow-2xl flex flex-col items-center justify-center transition-all duration-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          >
            <h3 className="text-white font-bold text-lg text-center px-6">
              IgniteTax
              <br />
              Co-Pilot
            </h3>
          </div>
        </div>

        {/* Features Stacked */}
        {FEATURES.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
            isVisible={isVisible}
            delay={(index + 1) * 100}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesDiagram;
