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
    },
    {
      title: "Vision",
      content:
        "To become the leading AI-powered platform transforming tax management by making compliance effortless, accurate, and efficient.",
      icon: "🚀",
    },
  ];

  const stats = [
    { label: "AI-Powered", value: "100%", icon: "🤖" },
    { label: "Tax Accuracy", value: "99.9%", icon: "✓" },
    { label: "Time Saved", value: "70%", icon: "⚡" },
  ];

  return (
    <section
      id="about_us"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900 py-20 lg:py-24"
    >
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-12 lg:space-y-16">
          {/* Header */}
          <div
            className={`text-center space-y-4 transition-all duration-700 ${
              isVisible && mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-slate-100">
              About <span className="text-[#2B7FFF]">Us</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              IgniteTaxAI empowers{" "}
              <span className="font-semibold text-[#2B7FFF]">
                tax professionals
              </span>{" "}
              and{" "}
              <span className="font-semibold text-[#2B7FFF]">businesses</span>{" "}
              across the Philippines with cutting-edge AI technology.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl">
            {cards.map((card, index) => (
              <div
                key={card.title}
                className={`transition-all duration-700 ${
                  isVisible && mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="card-hover h-full p-8">
                  {/* Icon */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-xl bg-blue-50 dark:bg-slate-700/50 flex items-center justify-center">
                      <span className="text-3xl">{card.icon}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-center mb-4 text-slate-800 dark:text-slate-100">
                    {card.title}
                  </h3>

                  {/* Content */}
                  <p className="text-base text-slate-600 dark:text-slate-400 text-center leading-relaxed">
                    {card.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div
            className={`w-full grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl transition-all duration-700 ${
              isVisible && mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card text-center p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-bold text-[#2B7FFF] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
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
