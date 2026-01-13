"use client";

import { useEffect, useState, useRef, ElementType } from "react";
import Image from "next/image";
import {
  NewspaperIcon,
  ArticleIcon,
  VideoIcon,
  QuotesIcon,
  UserIcon,
  EnvelopeSimpleIcon,
  ArrowRightIcon,
  SparkleIcon,
} from "@phosphor-icons/react";

const RESOURCES: {
  icon: ElementType;
  title: string;
  description: string;
  cta: string;
}[] = [
  {
    icon: NewspaperIcon,
    title: "Tax Updates",
    description:
      "Stay current with the latest BIR rulings, tax circulars, and regulatory changes.",
    cta: "View Updates",
  },
  {
    icon: ArticleIcon,
    title: "Blog",
    description:
      "Insightful articles and expert analyses on Philippine tax trends, best practices, and AI applications in tax management.",
    cta: "Read Articles",
  },
  {
    icon: VideoIcon,
    title: "Webinars",
    description:
      "Exclusive sessions with industry experts discussing strategic tax management and leveraging technology.",
    cta: "Watch Now",
  },
];

// TODO: Replace with real testimonials later
const TESTIMONIALS = [
  {
    quote:
      "IgniteTaxAI has transformed how I handle tax research. What used to take hours now takes minutes.",
    author: "Maria Santos",
    role: "Tax Professional",
  },
  {
    quote:
      "As a freelancer, understanding tax compliance was overwhelming. IgniteTaxAI makes it simple and accessible.",
    author: "Juan Dela Cruz",
    role: "Freelance Developer",
  },
  {
    quote:
      "The AI-powered learning hub has been invaluable for teaching my students about Philippine tax laws.",
    author: "Dr. Ana Reyes",
    role: "Tax Educator",
  },
] as const;

const FEATURED_IN = [
  {
    name: "BitPinas",
    logo: "/bitpinas-logo.png",
  },
] as const;

const Resources = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
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

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitStatus("success");
    setEmail("");

    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  return (
    <section
      id="resources"
      ref={sectionRef}
      className="relative overflow-hidden bg-white dark:bg-slate-900 py-20 lg:py-32"
      aria-labelledby="resources-heading"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`max-w-3xl mb-20 ${animationBase} ${visibleClass}`}
          style={{ transitionDelay: "0ms" }}
        >
          <p className="text-[#2B7FFF] font-semibold text-sm uppercase tracking-wider mb-4">
            Resources
          </p>
          <h2
            id="resources-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-6"
          >
            Stay ahead with{" "}
            <span className="text-[#2B7FFF]">expert insights</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Access our rich library of tax updates, articles, and educational
            content designed to keep you informed and competitive.
          </p>
        </div>

        {/* Resources - Alternating Layout */}
        <div className="space-y-16 lg:space-y-24 mb-24">
          {RESOURCES.map((resource, index) => {
            const Icon = resource.icon;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={index}
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 lg:gap-16 ${animationBase} ${visibleClass}`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Visual / Icon Side */}
                <div className="flex-1 w-full">
                  <div
                    className={`relative bg-gradient-to-br ${isReversed ? "from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-800/50" : "from-slate-50 to-blue-50 dark:from-slate-800/50 dark:to-slate-800"} rounded-3xl p-8 lg:p-12`}
                  >
                    <div className="absolute -inset-4 bg-gradient-to-br from-[#2B7FFF]/5 to-transparent rounded-3xl pointer-events-none" />
                    <div className="relative flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-2xl bg-[#2B7FFF] flex items-center justify-center mb-6 shadow-lg shadow-[#2B7FFF]/20">
                        <Icon size={40} weight="fill" className="text-white" />
                      </div>
                      <span className="text-7xl lg:text-8xl font-bold text-[#2B7FFF]/10">
                        0{index + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 w-full">
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                    {resource.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-6">
                    {resource.description}
                  </p>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 text-[#2B7FFF] font-semibold hover:gap-3 transition-all duration-300"
                  >
                    <span>{resource.cta}</span>
                    <ArrowRightIcon
                      size={20}
                      weight="bold"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div
          className={`mb-20 ${animationBase} ${visibleClass}`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-3">
              Why our users{" "}
              <span className="text-[#2B7FFF]">love IgniteTaxAI</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Hear from tax professionals, business owners, and educators on how
              our AI solutions are transforming their workflows.
            </p>
          </div>

          {/* Testimonials - Masonry-ish Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className={`group p-6 lg:p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-[#2B7FFF]/30 transition-all duration-300 ${index === 1 ? "md:-translate-y-4" : ""}`}
              >
                <QuotesIcon
                  size={32}
                  weight="fill"
                  className="text-[#2B7FFF]/30 mb-4"
                  aria-hidden="true"
                />
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="w-10 h-10 rounded-full bg-[#2B7FFF]/10 flex items-center justify-center">
                    <UserIcon
                      size={20}
                      weight="duotone"
                      className="text-[#2B7FFF]"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-100 text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* As Seen On */}
        <div
          className={`mb-20 ${animationBase} ${visibleClass}`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="flex flex-col items-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-8">
              <SparkleIcon
                size={16}
                weight="fill"
                className="text-[#2B7FFF] dark:text-blue-400"
              />
              <span className="text-[#2B7FFF] dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
                As Seen On
              </span>
            </div>

            {/* Heading */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 mb-12 text-center max-w-3xl">
              IgniteTaxAI has been recognized by industry leaders and media
              outlets
            </h3>

            {/* Logo Cards */}
            <div className="flex flex-wrap justify-center items-center gap-6">
              {FEATURED_IN.map((featured, index) => (
                <div
                  key={index}
                  className="group w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-[#2B7FFF]/50 transition-all duration-300 flex items-center justify-center p-6 shadow-sm hover:shadow-lg"
                >
                  <Image
                    src={featured.logo}
                    alt={`${featured.name} logo`}
                    width={120}
                    height={120}
                    className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter - Full Width Banner */}
        <div
          className={`${animationBase} ${visibleClass}`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2B7FFF] to-blue-600 p-8 lg:p-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-center lg:text-left">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4 mx-auto lg:mx-0">
                  <EnvelopeSimpleIcon
                    size={28}
                    weight="fill"
                    className="text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  Subscribe to our Newsletter
                </h3>
                <p className="text-white/80">
                  Get the latest tax updates, tips, and AI insights delivered to
                  your inbox.
                </p>
              </div>

              <div className="flex-1 w-full max-w-md">
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-grow px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-white text-[#2B7FFF] font-semibold rounded-xl hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 whitespace-nowrap"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </button>
                </form>

                {submitStatus === "success" && (
                  <p className="mt-3 text-white/90 text-sm text-center sm:text-left">
                    Thank you for subscribing!
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="mt-3 text-red-200 text-sm text-center sm:text-left">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#2B7FFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#2B7FFF]/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Resources;
