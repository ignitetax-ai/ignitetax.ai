"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const ProductNew = () => {
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

  const features = [
    {
      title: "Tax Research Automation",
      description:
        "Instantly access Philippine tax laws, rulings, and updates.",
      icon: "/logo/icon-3.png",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Automate Tax Computations",
      description:
        "Quickly and accurately calculate corporate, individual, and VAT tax obligations.",
      icon: "/logo/icon-4.png",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Real-time Tax Guidance",
      description:
        "Obtain instant clarifications on tax regulations, updates, and compliance requirements.",
      icon: "/logo/icon-5.png",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      title: "Client Communication",
      description:
        "Automate responses to common client queries and generate professional emails.",
      icon: "/logo/icon-9.png",
      gradient: "from-purple-600 to-blue-500",
    },
    {
      title: "Compliance and Planning",
      description:
        "Ensure adherence to Philippine tax regulations and optimize tax strategies.",
      icon: "/logo/icon-1.png",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Document Management",
      description:
        "Securely upload and analyze tax documents with AI-driven insights.",
      icon: "/logo/icon-2.png",
      gradient: "from-cyan-400 to-blue-500",
    },
  ];

  return (
    <section
      id="product"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-blue-50/50 dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 dark:bg-blue-500/20 rounded-full blur-3xl" />

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
                Product
              </h2>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-500 rounded-full" />
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              IgniteTaxAI is an{" "}
              <span className="font-semibold text-blue-600 dark:text-cyan-400">
                AI-powered assistant
              </span>{" "}
              designed to streamline tax research, client communication, and
              compliance for tax professionals and businesses.
            </p>
          </div>

          {/* Key Features Label */}
          <div
            className={`transition-all duration-1000 ${
              isVisible && mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex items-center space-x-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500 dark:to-cyan-500" />
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-cyan-400 uppercase tracking-wider">
                Key Features
              </h3>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500 dark:to-cyan-500" />
            </div>
          </div>

          {/* Features Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible && mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="group relative h-full">
                  {/* Glow effect */}
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                  />

                  {/* Card content */}
                  <div className="relative h-full flex flex-col bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-blue-200 dark:border-cyan-500/30 hover:border-blue-400 dark:hover:border-cyan-400 transition-all duration-300 shadow-md hover:shadow-cyber dark:hover:shadow-cyber-lg group-hover:-translate-y-1">
                    {/* Icon Container */}
                    <div className="flex justify-center mb-6">
                      <div
                        className={`relative w-20 h-20 rounded-xl bg-gradient-to-r ${feature.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="w-full h-full bg-blue-50 dark:bg-gray-700 rounded-xl flex items-center justify-center p-3">
                          <Image
                            src={feature.icon}
                            alt={feature.title}
                            width={64}
                            height={64}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 text-center mb-3 min-h-[3.5rem] flex items-center justify-center">
                      {feature.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 text-center leading-relaxed flex-grow">
                      {feature.description}
                    </p>

                    {/* Decorative elements */}
                    <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-blue-400 dark:border-cyan-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-blue-400 dark:border-cyan-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

                    {/* Hover shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className={`transition-all duration-1000 ${
              isVisible && mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="glass rounded-2xl p-8 text-center max-w-3xl">
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6">
                Experience the future of tax management with IgniteTaxAI's
                comprehensive suite of AI-powered tools.
              </p>
              <button
                className="btn-cyber text-sm sm:text-base"
                aria-label="Explore all IgniteTaxAI features"
              >
                <span className="flex items-center space-x-2">
                  <span>Explore All Features</span>
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductNew;
