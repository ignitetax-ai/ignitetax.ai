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
    },
    {
      title: "Automate Tax Computations",
      description:
        "Quickly and accurately calculate corporate, individual, and VAT tax obligations.",
      icon: "/logo/icon-4.png",
    },
    {
      title: "Real-time Tax Guidance",
      description:
        "Obtain instant clarifications on tax regulations, updates, and compliance requirements.",
      icon: "/logo/icon-5.png",
    },
    {
      title: "Client Communication",
      description:
        "Automate responses to common client queries and generate professional emails.",
      icon: "/logo/icon-9.png",
    },
    {
      title: "Compliance and Planning",
      description:
        "Ensure adherence to Philippine tax regulations and optimize tax strategies.",
      icon: "/logo/icon-1.png",
    },
    {
      title: "Document Management",
      description:
        "Securely upload and analyze tax documents with AI-driven insights.",
      icon: "/logo/icon-2.png",
    },
  ];

  return (
    <section
      id="product"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F7FA] dark:bg-slate-900 py-20 lg:py-24"
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
              Our <span className="text-[#2B7FFF]">Product</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              IgniteTaxAI is an{" "}
              <span className="font-semibold text-[#2B7FFF]">
                AI-powered assistant
              </span>{" "}
              designed to streamline tax research, client communication, and
              compliance for tax professionals and businesses.
            </p>
          </div>

          {/* Key Features Label */}
          <div
            className={`transition-all duration-700 ${
              isVisible && mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300">
              Key Features
            </h3>
          </div>

          {/* Features Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible && mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="card-hover h-full p-6 flex flex-col">
                  {/* Icon Container */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-xl bg-blue-50 dark:bg-slate-700/50 flex items-center justify-center p-3">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 text-center mb-3">
                    {feature.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className={`transition-all duration-700 ${
              isVisible && mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <div className="card p-8 text-center max-w-3xl">
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6">
                Experience the future of tax management with IgniteTaxAI's
                comprehensive suite of AI-powered tools.
              </p>
              <button
                className="btn-primary"
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
