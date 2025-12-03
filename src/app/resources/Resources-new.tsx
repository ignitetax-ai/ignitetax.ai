"use client";
import { useEffect, useState, useRef } from "react";

const ResourcesNew = () => {
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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-slate-900 py-20 lg:py-24"
    >
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-12">
          {/* Header */}
          <div
            className={`text-center space-y-4 transition-all duration-700 ${
              isVisible && mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-slate-100">
              <span className="text-[#2B7FFF]">Resources</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Stay ahead in the world of taxation with IgniteTaxAI's rich
              resource library
            </p>
          </div>

          {/* Resource Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible && mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="card-hover h-full p-6 text-center">
                  <div className="text-5xl mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {resource.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Blog Section */}
          <div
            className={`w-full max-w-4xl transition-all duration-700 ${
              isVisible && mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="card p-8 text-center">
              <div className="mb-4">
                <span className="text-4xl font-bold text-[#2B7FFF]">Blog</span>
              </div>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Insightful articles and expert analyses on Philippine tax
                trends, best practices, and AI applications in tax management.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div
            className={`transition-all duration-700 ${
              isVisible && mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <button
              className="btn-primary"
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
    </section>
  );
};

export default ResourcesNew;
