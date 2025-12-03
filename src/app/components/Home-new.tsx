"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const HomeNew = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F7FA] dark:bg-slate-900"
    >
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo Section */}
          <div
            className={`transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-6">
              <div className="relative w-full h-full bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-md border border-slate-200 dark:border-slate-700">
                <Image
                  src="/logo/Ignite-Tax-Ai-4.png"
                  alt="IgniteTaxAI Logo"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div
            className={`transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-slate-800 dark:text-slate-100">Ignite</span>
              <span className="text-[#2B7FFF]">Tax AI</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 mt-2">
              Philippine Tax Assistant
            </p>
          </div>

          {/* Subtitle */}
          <div
            className={`transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium max-w-3xl leading-relaxed px-4">
              AI tax assistant for{" "}
              <span className="text-[#2B7FFF] font-semibold">
                tax professionals
              </span>{" "}
              and{" "}
              <span className="text-[#2B7FFF] font-semibold">businesses</span>
            </p>
          </div>

          {/* Description */}
          <div
            className={`transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl px-4">
              Streamline your workflow from research and calculations to
              compliance and client advisory.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <button
              className="btn-primary flex items-center justify-center space-x-2 min-w-[160px]"
              aria-label="Get started with IgniteTaxAI"
            >
              <span>Get Started</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
            <button
              className="btn-secondary flex items-center justify-center space-x-2 min-w-[160px]"
              aria-label="Learn more about IgniteTaxAI"
            >
              <span>Learn More</span>
            </button>
          </div>

          {/* Feature Pills */}
          <div
            className={`flex flex-wrap justify-center gap-3 pt-8 transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {[
              { icon: "⚡", text: "Fast & Accurate" },
              { icon: "🔒", text: "Secure & Compliant" },
              { icon: "🤖", text: "AI-Powered" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 px-4 py-2 sm:px-5 sm:py-3 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm"
              >
                <span className="text-xl">{feature.icon}</span>
                <span className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about_us"
          className="flex flex-col items-center space-y-2 text-slate-500 dark:text-slate-400 hover:text-[#2B7FFF] transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <span className="text-xs sm:text-sm font-medium uppercase tracking-wider">
            Scroll
          </span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HomeNew;
