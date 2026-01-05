"use client";

import { useEffect, useState, useRef, ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  bgVariant?: "light" | "white";
  ariaLabelledBy?: string;
}

const SectionWrapper = ({
  id,
  children,
  className = "",
  bgVariant = "white",
  ariaLabelledBy,
}: SectionWrapperProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const bgClasses =
    bgVariant === "light"
      ? "bg-[#F5F7FA] dark:bg-slate-900"
      : "bg-white dark:bg-slate-900";

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-24 ${bgClasses} ${className}`}
      aria-labelledby={ariaLabelledBy}
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col items-center space-y-12 lg:space-y-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;
