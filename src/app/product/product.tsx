"use client";

import { useEffect, useState, useRef, ElementType } from "react";
import {
  RobotIcon,
  FileMagnifyingGlassIcon,
  PencilLineIcon,
  UserGearIcon,
  GraduationCapIcon,
  BookBookmarkIcon,
  CheckCircleIcon,
  BooksIcon,
  EnvelopeSimpleIcon,
  PuzzlePieceIcon,
  TimerIcon,
  TargetIcon,
  ShieldCheckIcon,
  FileTextIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react";

const PRODUCTS = [
  {
    title: "AI Co-Pilot",
    description:
      "Reduce tax research by 99% with your personalized AI tax assistant. Get instant, and accurate answers to complex tax questions, draft polished tax memos, solve complex tax problems with ease and analyze various tax forms with deep insights",
    icon: RobotIcon,
    highlight: true,
  },
  {
    title: "Document Analysis",
    description:
      "Securely upload and analyze various tax documents or forms with AI-driven insights for faster decision-making.",
    icon: FileMagnifyingGlassIcon,
  },
  {
    title: "Draft Communication",
    description:
      "Generate polished and professional replies to standard BIR correspondence in seconds.",
    icon: PencilLineIcon,
  },
  {
    title: "Agent Andy",
    description:
      "Automate expert-level reviews of various tax forms or documents with our intelligent AI agent.",
    icon: UserGearIcon,
  },
  {
    title: "AI-Powered Tax Learning Hub",
    description:
      "Solve complex tax problems while delivering clear and easy to understand explanations of tax laws and regulations.",
    icon: GraduationCapIcon,
  },
  {
    title: "Vetted Sources",
    description:
      "Rely on trusted and verified references from tax laws, regulations and memorandums for accurate compliance.",
    icon: BookBookmarkIcon,
  },
] as const;

const FEATURES: { icon: ElementType; title: string }[] = [
  { icon: CheckCircleIcon, title: "Accurate Answers" },
  { icon: BooksIcon, title: "Vetted Sources" },
  { icon: EnvelopeSimpleIcon, title: "Draft Communications" },
  { icon: PuzzlePieceIcon, title: "Solve Complex Problems" },
  { icon: TimerIcon, title: "Saves Time" },
  { icon: TargetIcon, title: "Tailored Responses" },
  { icon: ShieldCheckIcon, title: "Secure & Confidential" },
  { icon: FileTextIcon, title: "Analyze Documents" },
];

const APP_URL =
  "https://app--taxai-pro-b398ec5f.base44.app/login?from_url=https://app--taxai-pro-b398ec5f.base44.app/&app_id=6856685cef268de0b398ec5f";

const Product = () => {
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
      id="product"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F5F7FA] dark:bg-slate-900 py-20 lg:py-32"
      aria-labelledby="product-heading"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Split layout */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 ${animationBase} ${visibleClass}`}
        >
          <div className="lg:max-w-2xl">
            <p className="text-[#2B7FFF] font-semibold text-sm uppercase tracking-wider mb-4">
              Our Products
            </p>
            <h2
              id="product-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100"
            >
              Everything you need for{" "}
              <span className="text-[#2B7FFF]">tax excellence</span>
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 lg:max-w-md lg:text-right">
            Reduce tax research by 99% with your personalized AI tax assistant.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-20 ${animationBase} ${visibleClass}`}
          style={{ transitionDelay: "150ms" }}
        >
          {/* Featured Product - Large Card */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 group">
            <div className="h-full bg-gradient-to-br from-[#2B7FFF] to-blue-600 rounded-3xl p-8 lg:p-10 relative overflow-hidden min-h-[400px]">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <RobotIcon
                    size={32}
                    weight="duotone"
                    className="text-white"
                  />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  AI Tax Co-Pilot
                </h3>
                <p className="text-white/80 text-lg mb-8 max-w-lg">
                  Reduce tax research by 99% with your personalized AI tax
                  assistant. Get instant, and accurate answers to complex tax
                  questions, draft polished tax memos, solve complex tax
                  problems with ease and analyze various tax forms with deep
                  insights
                </p>
                <div className="mt-auto">
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-[#2B7FFF] font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors duration-200"
                  >
                    <span>Try Now</span>
                    <ArrowRightIcon
                      size={20}
                      weight="bold"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Other Products - Smaller Cards */}
          {PRODUCTS.slice(1).map((product, index) => {
            const Icon = product.icon;
            return (
              <div key={index} className="group">
                <div className="h-full bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-[#2B7FFF]/50 hover:shadow-lg hover:shadow-[#2B7FFF]/5 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#2B7FFF]/10 flex items-center justify-center mb-4 group-hover:bg-[#2B7FFF]/20 transition-colors duration-300">
                    <Icon
                      size={24}
                      weight="duotone"
                      className="text-[#2B7FFF]"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features - Horizontal Scroll / Grid */}
        <div
          className={`${animationBase} ${visibleClass}`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-3">
              Why choose <span className="text-[#2B7FFF]">IgniteTaxAI</span>?
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Powerful features designed for modern tax professionals
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col items-center p-4 lg:p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-[#2B7FFF]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2B7FFF]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      size={24}
                      weight="duotone"
                      className="text-[#2B7FFF]"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">
                    {feature.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`mt-16 text-center ${animationBase} ${visibleClass}`}
          style={{ transitionDelay: "450ms" }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-800/50 border border-slate-200 dark:border-slate-700">
            <p className="text-lg font-medium text-slate-700 dark:text-slate-300">
              Ready to transform your tax workflow?
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <span>Get Started Free</span>
              <ArrowRightIcon size={20} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#2B7FFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-[#2B7FFF]/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Product;
