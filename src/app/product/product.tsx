"use client";

import { useEffect, useState, useRef, ElementType } from "react";
import { SectionHeader, FeatureCard } from "../components/ui";
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
      "Supercharge your tax workflows and drive productivity by 10x with our Tax AI co-pilot. Get instant, accurate answers to complex tax questions.",
    icon: RobotIcon,
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

const FEATURES: { icon: ElementType; title: string; description: string }[] = [
  {
    icon: CheckCircleIcon,
    title: "Accurate Answers",
    description:
      "Bid farewell to generic tax advice. Deliver accurate and reliable up to date answers to even the most complex tax queries.",
  },
  {
    icon: BooksIcon,
    title: "Vetted Sources",
    description:
      "Rely on trusted and verified references from tax laws, regulations and memorandums.",
  },
  {
    icon: EnvelopeSimpleIcon,
    title: "Draft Communications",
    description:
      "Effortlessly generate polished and professional replies to BIR notices.",
  },
  {
    icon: PuzzlePieceIcon,
    title: "Solve Complex Problems",
    description:
      "Tackle challenging tax scenarios with step-by-step AI guidance, ideal for educators and students alike.",
  },
  {
    icon: TimerIcon,
    title: "Saves Time",
    description:
      "Eliminate endless internet searches and outdated resources. IgniteTaxAI delivers instant and accurate answers.",
  },
  {
    icon: TargetIcon,
    title: "Tailored Responses",
    description:
      "Receive customized and context-aware solutions that adapt to your unique tax compliance needs.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Secure & Confidential",
    description:
      "Protect your sensitive data with robust encryption and privacy measures, ensuring complete confidentiality.",
  },
  {
    icon: FileTextIcon,
    title: "Analyze Documents",
    description:
      "Securely upload and analyze tax forms or documents for deep AI-driven insights.",
  },
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

  const getAnimationClass = () =>
    `transition-all duration-700 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`;

  return (
    <section
      id="product"
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center overflow-hidden bg-[#F5F7FA] dark:bg-slate-900 py-20 lg:py-24"
      aria-labelledby="product-heading"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-12">
          {/* Header */}
          <div className={getAnimationClass()}>
            <SectionHeader
              title="Our Products"
              highlightedWord="Products"
              id="product-heading"
              description={
                <>
                  Reduce tax research by 99% with your personalized AI tax
                  assistant. Get instant, and accurate answers to complex tax
                  questions, draft polished tax memos, solve complex tax
                  problems with ease and analyze various tax forms with deep
                  insights.
                </>
              }
            />
          </div>

          {/* Products Grid */}
          <div
            className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${getAnimationClass()}`}
            style={{ transitionDelay: "100ms" }}
            role="list"
            aria-label="Products"
          >
            {PRODUCTS.map((product, index) => (
              <div
                key={index}
                role="listitem"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <FeatureCard
                  title={product.title}
                  description={product.description}
                  icon={product.icon}
                />
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div
            className={`w-full pt-8 ${getAnimationClass()}`}
            style={{ transitionDelay: "700ms" }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 dark:text-slate-100 mb-8">
              Key <span className="text-[#2B7FFF]">Features</span>
            </h3>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              role="list"
              aria-label="Features"
            >
              {FEATURES.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    role="listitem"
                    className="card p-5 text-center hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-slate-700/50 flex items-center justify-center">
                        <Icon
                          size={24}
                          weight="duotone"
                          className="text-[#2B7FFF]"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div
            className={getAnimationClass()}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="card p-8 text-center max-w-3xl">
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6">
                Experience the future of tax management with IgniteTaxAI&apos;s
                comprehensive suite of AI-powered tools.
              </p>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Try IgniteTaxAI Now</span>
                <ArrowRightIcon size={20} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
