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
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient"
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Animated Orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 dark:bg-cyan-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/20 dark:bg-blue-500/20 rounded-full blur-3xl animate-float animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-400/10 rounded-full blur-3xl animate-pulse-slow" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo Section */}
          <div
            className={`transition-all duration-1000 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse-slow" />
              <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-2xl group-hover:shadow-cyber-lg transition-all duration-300 border-2 border-blue-200 dark:border-cyan-500/50">
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
            className={`transition-all duration-1000 delay-200 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-gray-100 dark:via-cyan-400 dark:to-gray-100 bg-clip-text text-transparent">
                IgniteTax
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent glow-text">
                AI
              </span>
            </h1>

            {/* Animated underline */}
            <div className="h-1 w-32 sm:w-40 mx-auto bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-500 rounded-full animate-pulse" />
          </div>

          {/* Subtitle */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 font-medium max-w-4xl leading-relaxed px-4">
              AI Tax Assistant for{" "}
              <span className="text-blue-600 dark:text-cyan-400 font-semibold">
                Tax Professionals
              </span>{" "}
              and{" "}
              <span className="text-blue-600 dark:text-cyan-400 font-semibold">
                Businesses
              </span>
            </p>
          </div>

          {/* Description */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl px-4">
              Revolutionize your tax workflow with cutting-edge AI technology.
              Simplify compliance, enhance accuracy, and boost productivity.
            </p>
          </div>

          {/* CTA Button */}
          <div
            className={`transition-all duration-1000 delay-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <button
              className="group relative px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-500 dark:to-blue-600 text-white font-bold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-cyber-lg dark:hover:shadow-cyber transition-all duration-300 hover:scale-105 overflow-hidden"
              aria-label="Get started with IgniteTaxAI"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Get Started</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </button>
          </div>

          {/* Feature Pills */}
          <div
            className={`flex flex-wrap justify-center gap-3 sm:gap-4 pt-8 transition-all duration-1000 delay-1000 ${
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
                className="flex items-center space-x-2 px-4 py-2 sm:px-5 sm:py-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-full border border-blue-200 dark:border-cyan-500/30 hover:border-blue-400 dark:hover:border-cyan-400 hover:shadow-glow-blue dark:hover:shadow-cyber transition-all duration-300 cursor-default"
              >
                <span className="text-xl sm:text-2xl">{feature.icon}</span>
                <span className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-200">
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
          className="flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <span className="text-xs sm:text-sm font-medium uppercase tracking-wider">
            Scroll
          </span>
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
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
