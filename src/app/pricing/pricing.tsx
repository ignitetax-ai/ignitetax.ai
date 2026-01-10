"use client";

import { useEffect, useState, useRef } from "react";
import {
  SparkleIcon,
  CheckIcon,
  GraduationCapIcon,
  CrownIcon,
} from "@phosphor-icons/react";

const PRICING_PLANS = [
  {
    name: "Starter",
    description: "Perfect for getting started",
    price: "Free",
    period: "",
    features: [
      "Free for 2 weeks",
      "Free consumable credits",
      "Limited features",
    ],
    buttonText: "Get Started",
    buttonStyle: "primary",
    popular: false,
    icon: SparkleIcon,
  },
  {
    name: "Education",
    description: "For students and educators",
    price: "₱499",
    period: "per month",
    features: [
      "Tax research only",
      ".edu email verification required",
      "5 free document analysis",
      "Academic pricing",
    ],
    buttonText: "Choose Plan",
    buttonStyle: "primary",
    popular: false,
    icon: GraduationCapIcon,
  },
  {
    name: "Pro",
    description: "Everything you need",
    price: "₱699",
    period: "per month",
    features: [
      "All features included",
      "Unlimited searches",
      "Chat and email support",
      "Priority assistance",
    ],
    buttonText: "Choose Plan",
    buttonStyle: "secondary",
    popular: true,
    icon: CrownIcon,
  },
] as const;

const PricingCard = ({
  plan,
  isVisible,
  delay,
}: {
  plan: (typeof PRICING_PLANS)[number];
  isVisible: boolean;
  delay: number;
}) => {
  const Icon = plan.icon;
  const animationBase = "transition-all duration-700";
  const visibleClass = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10";

  if (plan.popular) {
    return (
      <div
        className={`relative ${animationBase} ${visibleClass}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="relative bg-[#2B7FFF] rounded-3xl p-8 lg:p-10 shadow-2xl h-full flex flex-col transform lg:scale-105">
          {/* Most Popular Badge */}
          <div className="absolute -top-3 -right-3 z-10">
            <div className="bg-gradient-to-r from-blue-400 to-blue-300 text-slate-900 px-5 py-2 rounded-full text-xs font-bold shadow-lg">
              Most Popular
            </div>
          </div>
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Icon size={24} weight="fill" className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
            </div>
            <p className="text-blue-100 text-sm">{plan.description}</p>
          </div>

          {/* Price */}
          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl lg:text-6xl font-bold text-white">
                {plan.price}
              </span>
            </div>
            {plan.period && (
              <p className="text-blue-100 text-sm mt-1">{plan.period}</p>
            )}
          </div>

          {/* Features */}
          <ul className="space-y-4 mb-8 flex-grow" role="list">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon size={14} weight="bold" className="text-white" />
                </div>
                <span className="text-white text-sm lg:text-base">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <button
            className="w-full py-4 px-6 rounded-xl font-semibold text-[#2B7FFF] bg-white hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            aria-label={`Choose ${plan.name} plan`}
          >
            {plan.buttonText}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${animationBase} ${visibleClass}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#2B7FFF]/10 flex items-center justify-center">
              <Icon size={24} weight="fill" className="text-[#2B7FFF]" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              {plan.name}
            </h3>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            {plan.description}
          </p>
        </div>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100">
              {plan.price}
            </span>
          </div>
          {plan.period && (
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              {plan.period}
            </p>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8 flex-grow" role="list">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#2B7FFF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckIcon size={14} weight="bold" className="text-[#2B7FFF]" />
              </div>
              <span className="text-slate-700 dark:text-slate-300 text-sm lg:text-base">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button
          className="w-full py-4 px-6 rounded-xl font-semibold text-white bg-[#2B7FFF] hover:bg-[#1a6fe6] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          aria-label={`Choose ${plan.name} plan`}
        >
          {plan.buttonText}
        </button>
      </div>
    </div>
  );
};

const Pricing = () => {
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
      id="pricing"
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 py-20 lg:py-32"
      aria-labelledby="pricing-heading"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-6 ${animationBase} ${visibleClass}`}
          style={{ transitionDelay: "0ms" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
            <SparkleIcon
              size={16}
              weight="fill"
              className="text-[#2B7FFF] dark:text-blue-400"
            />
            <span className="text-[#2B7FFF] dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
              Pricing
            </span>
          </div>
          <h2
            id="pricing-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-4"
          >
            Specialized Tax AI, Built for Filipino users
          </h2>
        </div>

        {/* Subtitle */}
        <div
          className={`text-center mb-4 ${animationBase} ${visibleClass}`}
          style={{ transitionDelay: "100ms" }}
        >
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Get 120 AI credits, valid within 14 days.
          </p>
        </div>

        {/* Try for free */}
        <div
          className={`text-center mb-16 ${animationBase} ${visibleClass}`}
          style={{ transitionDelay: "150ms" }}
        >
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Try for free. No credit card required.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              isVisible={isVisible}
              delay={200 + index * 100}
            />
          ))}
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#2B7FFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#2B7FFF]/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Pricing;
