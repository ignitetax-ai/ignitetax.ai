"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { SectionHeader, FeatureCard } from "../components/ui";

const RESOURCES = [
  {
    emoji: "📰",
    title: "Tax Updates",
    description:
      "Stay current with the latest BIR rulings, tax circulars, and regulatory changes.",
  },
  {
    emoji: "📝",
    title: "Blog",
    description:
      "Insightful articles and expert analyses on Philippine tax trends, best practices, and AI applications in tax management.",
  },
  {
    emoji: "🎓",
    title: "Webinars",
    description:
      "Exclusive sessions with industry experts discussing strategic tax management and leveraging technology.",
  },
] as const;

const TESTIMONIALS = [
  {
    quote:
      "IgniteTaxAI has transformed how I handle tax research. What used to take hours now takes minutes.",
    author: "Maria Santos",
    role: "Tax Professional",
    avatar: "👩‍💼",
  },
  {
    quote:
      "As a freelancer, understanding tax compliance was overwhelming. IgniteTaxAI makes it simple and accessible.",
    author: "Juan Dela Cruz",
    role: "Freelance Developer",
    avatar: "👨‍💻",
  },
  {
    quote:
      "The AI-powered learning hub has been invaluable for teaching my students about Philippine tax laws.",
    author: "Dr. Ana Reyes",
    role: "Tax Educator",
    avatar: "👩‍🏫",
  },
] as const;

const FEATURED_IN = [
  {
    name: "BitPinas",
    logo: "/logo/bitpinas-logo.png",
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

  const getAnimationClass = (delay: number = 0) =>
    `transition-all duration-700 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`;

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitStatus("success");
    setEmail("");

    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  return (
    <section
      id="resources"
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-slate-900 py-20 lg:py-24"
      aria-labelledby="resources-heading"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-16">
          {/* Header */}
          <div className={getAnimationClass()}>
            <SectionHeader
              title="Resources"
              id="resources-heading"
              description="Stay ahead in the world of taxation with IgniteTaxAI's rich resource library"
            />
          </div>

          {/* Resource Cards */}
          <div
            className={`w-full grid grid-cols-1 md:grid-cols-3 gap-6 ${getAnimationClass(100)}`}
            style={{ transitionDelay: "100ms" }}
            role="list"
            aria-label="Resource types"
          >
            {RESOURCES.map((resource, index) => (
              <div key={index} role="listitem">
                <FeatureCard
                  title={resource.title}
                  description={resource.description}
                  emoji={resource.emoji}
                />
              </div>
            ))}
          </div>

          {/* Testimonials Section */}
          <div
            className={`w-full ${getAnimationClass(200)}`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 dark:text-slate-100 mb-4">
              Why Our Users{" "}
              <span className="text-[#2B7FFF]">Love IgniteTaxAI</span>
            </h3>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              Hear directly from tax professionals, business owners,
              freelancers, students, and educators on how our AI solutions are
              simplifying compliance, supercharging productivity, and
              transforming their workflows.
            </p>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              role="list"
              aria-label="User testimonials"
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <div
                  key={index}
                  role="listitem"
                  className="card p-6 flex flex-col"
                >
                  <div className="flex-grow">
                    <div
                      className="text-4xl mb-4 text-[#2B7FFF]"
                      aria-hidden="true"
                    >
                      "
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div
                      className="w-10 h-10 rounded-full bg-blue-50 dark:bg-slate-700 flex items-center justify-center text-xl"
                      aria-hidden="true"
                    >
                      {testimonial.avatar}
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

          {/* As Seen In Section */}
          <div
            className={`w-full text-center ${getAnimationClass(300)}`}
            style={{ transitionDelay: "300ms" }}
          >
            <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-6">
              As Seen In
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {FEATURED_IN.map((featured, index) => (
                <div
                  key={index}
                  className="card px-8 py-4 flex items-center justify-center"
                >
                  <span className="text-lg font-bold text-slate-600 dark:text-slate-400">
                    {featured.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div
            className={`w-full max-w-2xl ${getAnimationClass(400)}`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="card-hover p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                Subscribe to our{" "}
                <span className="text-[#2B7FFF]">Newsletter</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Get the latest tax updates, tips, and AI insights delivered to
                your inbox.
              </p>

              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-grow px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent transition-all duration-200"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </form>

              {submitStatus === "success" && (
                <p className="mt-4 text-green-600 dark:text-green-400 text-sm">
                  Thank you for subscribing!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="mt-4 text-red-600 dark:text-red-400 text-sm">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
