"use client";
import { useEffect, useState, useRef } from "react";

const AboutUsNew = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

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

  const cards = [
    {
      title: "Mission",
      content:
        "To simplify tax compliance and enhance productivity for tax professionals and businesses in the Philippines through cutting-edge AI-driven solutions.",
      icon: "🎯",
      gradient: "from-blue-500 to-cyan-500",
      glowColor: "blue",
    },
    {
      title: "Vision",
      content:
        "To become the leading AI-powered platform transforming tax management by making compliance effortless, accurate, and efficient.",
      icon: "🚀",
      gradient: "from-cyan-500 to-blue-600",
      glowColor: "cyan",
    },
  ];

  return (
    <section
      id="about_us"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900 py-20 lg:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-12 lg:space-y-16">
          {/* Header */}
          <div
            className={`text-center space-y-6 transition-all duration-1000 ${
              isVisible && mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-gray-100 dark:via-cyan-400 dark:to-gray-100 bg-clip-text text-transparent mb-4">
                About Us
              </h2>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-500 rounded-full" />
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              IgniteTaxAI empowers{" "}
              <span className="font-semibold text-blue-600 dark:text-cyan-400">
                tax professionals
              </span>{" "}
              and{" "}
              <span className="font-semibold text-blue-600 dark:text-cyan-400">
                businesses
              </span>{" "}
              across the Philippines with cutting-edge AI technology. Simplify
              tax research, client communication, and compliance while boosting
              productivity and ensuring accuracy.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl">
            {cards.map((card, index) => (
              <div
                key={card.title}
                className={`transition-all duration-1000 ${
                  isVisible && mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="group relative h-full">
                  {/* Glow effect */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition-opacity duration-500`}
                  />

                  {/* Card content */}
                  <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-10 border-2 border-blue-200 dark:border-cyan-500/30 hover:border-blue-400 dark:hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyber dark:hover:shadow-cyber-lg">
                    {/* Icon */}
                    <div className="flex items-center justify-center mb-6">
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r ${card.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className="text-3xl sm:text-4xl">
                          {card.icon}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-2xl sm:text-3xl font-bold text-center mb-6 bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}
                    >
                      {card.title}
                    </h3>

                    {/* Content */}
                    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                      {card.content}
                    </p>

                    {/* Decorative corner elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-400 dark:border-cyan-400 opacity-50" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-blue-400 dark:border-cyan-400 opacity-50" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div
            className={`w-full grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl transition-all duration-1000 ${
              isVisible && mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            {[
              { label: "AI-Powered", value: "100%", icon: "🤖" },
              { label: "Tax Accuracy", value: "99.9%", icon: "✓" },
              { label: "Time Saved", value: "70%", icon: "⚡" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 text-center hover:shadow-glow-blue dark:hover:shadow-cyber transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl sm:text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsNew;
