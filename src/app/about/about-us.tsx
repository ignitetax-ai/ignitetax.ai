"use client";

import { useEffect, useState, useRef } from "react";
import {
  TargetIcon,
  RocketIcon,
  RobotIcon,
  LightningIcon,
  ChartLineUpIcon,
} from "@phosphor-icons/react";

const STATS = [
  { label: "AI-Powered", value: "100%", icon: RobotIcon },
  { label: "Reduce Research Time", value: "99%", icon: LightningIcon },
  { label: "Productivity Boost", value: "10x", icon: ChartLineUpIcon },
] as const;

const HighlightedText = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#2B7FFF] font-semibold">{children}</span>
);

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const animationBase = "transition-all duration-700";
  const visibleClass = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10";

  return (
    <section
      id="about_us"
      ref={sectionRef}
      className="relative overflow-hidden bg-white dark:bg-slate-900 py-20 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Left aligned */}
        <div
          className={`max-w-3xl mb-20 ${animationBase} ${visibleClass}`}
          style={{ transitionDelay: "0ms" }}
        >
          <p className="text-[#2B7FFF] font-semibold text-sm uppercase tracking-wider mb-4">
            About Us
          </p>
          <h2
            id="about-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-6"
          >
            Empowering tax management through{" "}
            <span className="text-[#2B7FFF]">AI innovation</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            IgniteTaxAI empowers{" "}
            <HighlightedText>tax professionals</HighlightedText>,{" "}
            <HighlightedText>business owners</HighlightedText>,{" "}
            <HighlightedText>freelancers</HighlightedText>,{" "}
            <HighlightedText>students</HighlightedText> and{" "}
            <HighlightedText>educators</HighlightedText> in the Philippines
            through innovative AI solutions.
          </p>
        </div>

        {/* Mission - Right aligned content */}
        <div
          className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 ${animationBase} ${visibleClass}`}
          style={{ transitionDelay: "150ms" }}
        >
          {/* Visual Element */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#2B7FFF]/10 to-transparent rounded-3xl" />
              <div className="relative bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-800/50 rounded-3xl p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#2B7FFF] flex items-center justify-center">
                    <TargetIcon
                      size={28}
                      weight="fill"
                      className="text-white"
                    />
                  </div>
                  <span className="text-6xl lg:text-7xl font-bold text-[#2B7FFF]/20">
                    01
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                  Our Mission
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  To simplify tax compliance and enhance productivity through
                  cutting-edge AI-driven solutions that make complex tax
                  processes accessible to everyone.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex-1 order-1 lg:order-2 w-full">
            <div className="grid grid-cols-1 gap-6">
              {STATS.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-6 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-[#2B7FFF]/30 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#2B7FFF]/10 flex items-center justify-center flex-shrink-0">
                      <Icon
                        size={24}
                        weight="duotone"
                        className="text-[#2B7FFF]"
                      />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-[#2B7FFF]">
                        {stat.value}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Vision - Left aligned content */}
        <div
          className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${animationBase} ${visibleClass}`}
          style={{ transitionDelay: "300ms" }}
        >
          {/* Text Content */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-bl from-[#2B7FFF]/10 to-transparent rounded-3xl" />
              <div className="relative bg-gradient-to-bl from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-800/50 rounded-3xl p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#2B7FFF] flex items-center justify-center">
                    <RocketIcon
                      size={28}
                      weight="fill"
                      className="text-white"
                    />
                  </div>
                  <span className="text-6xl lg:text-7xl font-bold text-[#2B7FFF]/20">
                    02
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                  Our Vision
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  To become the leading AI-powered platform transforming tax
                  management by making compliance effortless, accurate, and
                  efficient for all Filipinos.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Element - Feature List */}
          <div className="flex-1 w-full">
            <div className="space-y-4">
              {[
                "Streamline research & calculations",
                "Enhance client communications",
                "Ensure seamless compliance",
                "Drive productivity & accuracy",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#2B7FFF] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#2B7FFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#2B7FFF]/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default AboutUs;
