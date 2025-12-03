"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const ResourcesNew = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [displayed1, setDisplayed1] = useState("");
  const [displayed2, setDisplayed2] = useState("");
  const [charIndex1, setCharIndex1] = useState(0);
  const [charIndex2, setCharIndex2] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const title1 = "How AI is Transforming Tax Preparation";
  const title2 = "Understanding Philippine Tax Laws";

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

  useEffect(() => {
    if (!isVisible) return;

    let timeout: NodeJS.Timeout;

    if (charIndex1 < title1.length) {
      timeout = setTimeout(() => {
        setDisplayed1((prev) => prev + title1[charIndex1]);
        setCharIndex1((prev) => prev + 1);
      }, 50);
    } else if (charIndex2 < title2.length) {
      timeout = setTimeout(
        () => {
          setDisplayed2((prev) => prev + title2[charIndex2]);
          setCharIndex2((prev) => prev + 1);
        },
        charIndex2 === 0 ? 700 : 50,
      );
    } else {
      timeout = setTimeout(() => {
        setDisplayed1("");
        setDisplayed2("");
        setCharIndex1(0);
        setCharIndex2(0);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [charIndex1, charIndex2, isVisible, title1, title2]);

  const resources = [
    {
      icon: "📚",
      title: "Tax Updates",
      description:
        "Stay current with the latest BIR rulings, tax circulars, and regulatory changes.",
    },
    {
      icon: "📰",
      title: "Blog Articles",
      description:
        "Insightful articles and expert analyses on Philippine tax trends, best practices, and AI applications.",
    },
    {
      icon: "🎓",
      title: "Learning Center",
      description:
        "Comprehensive guides and tutorials to maximize your use of IgniteTaxAI.",
    },
  ];

  return (
    <section
      id="resources"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-gray-900 py-20"
    >
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 dark:via-cyan-500 to-transparent" />

      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />

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
                Resources
              </h2>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-500 rounded-full" />
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 italic">
              Stay ahead in the world of taxation with IgniteTaxAI's rich
              resource library
            </p>
          </div>

          {/* Resource Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible && mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="group relative h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-cyan-400 dark:to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="relative h-full flex flex-col bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-blue-200 dark:border-cyan-500/30 hover:border-blue-400 dark:hover:border-cyan-400 transition-all duration-300 shadow-md hover:shadow-cyber dark:hover:shadow-cyber-lg group-hover:-translate-y-1">
                    <div className="text-5xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                      {resource.icon}
                    </div>
                    <h3 className="text-xl font-bold text-blue-600 dark:text-cyan-400 text-center mb-3">
                      {resource.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Blog Section */}
          <div
            className={`w-full max-w-5xl transition-all duration-1000 ${
              isVisible && mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 dark:from-cyan-400 dark:via-blue-500 dark:to-cyan-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative glass rounded-3xl p-8 lg:p-12 border-4 border-blue-200 dark:border-cyan-500/50">
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
                      Blog
                    </div>
                  </div>
                  <div className="h-px lg:h-20 w-full lg:w-px bg-gradient-to-r lg:bg-gradient-to-b from-blue-500 to-cyan-500 dark:from-cyan-400 dark:to-blue-500" />
                  <div className="flex-grow">
                    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 text-center lg:text-left leading-relaxed">
                      Insightful articles and expert analyses on Philippine tax
                      trends, best practices, and AI applications in tax
                      management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Typing Animation Section */}
          <div
            className={`w-full flex flex-col items-center space-y-4 min-h-[12rem] transition-all duration-1000 ${
              isVisible && mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="text-center space-y-3 px-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
                {displayed1}
                {charIndex1 < title1.length && (
                  <span className="inline-block w-0.5 h-8 sm:h-10 bg-blue-600 dark:bg-cyan-400 ml-1 animate-pulse" />
                )}
              </h3>
              {charIndex1 === title1.length && (
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 animate-slide-down">
                  {displayed2}
                  {charIndex2 < title2.length && (
                    <span className="inline-block w-0.5 h-8 sm:h-10 bg-blue-600 dark:bg-cyan-400 ml-1 animate-pulse" />
                  )}
                </h3>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div
            className={`transition-all duration-1000 ${
              isVisible && mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <button
              className="btn-cyber text-sm sm:text-base"
              aria-label="Explore tax resources and learning materials"
            >
              <span className="flex items-center space-x-2">
                <span>Explore Resources</span>
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 dark:via-cyan-500 to-transparent" />
    </section>
  );
};

export default ResourcesNew;
