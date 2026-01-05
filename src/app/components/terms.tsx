"use client";

import { useEffect, useState, useRef } from "react";
import { SectionHeader } from "./ui";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react";

const TERMS_SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using IgniteTaxAI's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
  },
  {
    title: "2. Description of Service",
    content:
      "IgniteTaxAI provides AI-powered tax assistance tools designed to help tax professionals, business owners, freelancers, students, and educators in the Philippines. Our services include tax research automation, document analysis, draft communication generation, and educational resources.",
  },
  {
    title: "3. User Responsibilities",
    content:
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to use our services only for lawful purposes and in accordance with these terms. You must not use our services to transmit any harmful, offensive, or illegal content.",
  },
  {
    title: "4. Intellectual Property",
    content:
      "All content, features, and functionality of IgniteTaxAI, including but not limited to text, graphics, logos, and software, are the exclusive property of IgniteTaxAI and are protected by Philippine and international intellectual property laws.",
  },
  {
    title: "5. Disclaimer of Warranties",
    content:
      "IgniteTaxAI is provided on an 'as is' and 'as available' basis. While we strive for accuracy, we make no warranties regarding the completeness, reliability, or accuracy of information provided. Our AI-generated content should not be considered as professional tax advice.",
  },
  {
    title: "6. Limitation of Liability",
    content:
      "IgniteTaxAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services. We recommend consulting with a qualified tax professional for specific tax matters.",
  },
  {
    title: "7. Data Privacy",
    content:
      "Your use of IgniteTaxAI is also governed by our Privacy Policy. We are committed to protecting your personal information and handling it in accordance with applicable data protection laws in the Philippines.",
  },
  {
    title: "8. Modifications to Service",
    content:
      "We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice. We may also update these Terms of Service from time to time, and your continued use constitutes acceptance of any changes.",
  },
  {
    title: "9. Governing Law",
    content:
      "These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of the Philippines, without regard to its conflict of law provisions.",
  },
  {
    title: "10. Contact Information",
    content:
      "If you have any questions about these Terms of Service, please contact us at ignitetaxai@gmail.com.",
  },
] as const;

const Terms = () => {
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
      id="terms"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900 py-20 lg:py-24"
      aria-labelledby="terms-heading"
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-12">
          {/* Header */}
          <div className={getAnimationClass()}>
            <SectionHeader
              title="Terms of Service"
              highlightedWord="Service"
              id="terms-heading"
              description="Please read these terms carefully before using IgniteTaxAI's services."
            />
          </div>

          {/* Terms Sections */}
          <div
            className={`w-full space-y-6 ${getAnimationClass()}`}
            style={{ transitionDelay: "100ms" }}
          >
            {TERMS_SECTIONS.map((section, index) => (
              <article
                key={index}
                className="card p-6 hover:shadow-md transition-all duration-300"
                style={{ transitionDelay: `${(index + 1) * 50}ms` }}
              >
                <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">
                  {section.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {section.content}
                </p>
              </article>
            ))}
          </div>

          {/* Effective Date */}
          <div
            className={`text-center ${getAnimationClass()}`}
            style={{ transitionDelay: "600ms" }}
          >
            <p className="text-sm text-slate-500 dark:text-slate-400">
              These terms are effective as of May 2025.
            </p>
          </div>

          {/* Contact CTA */}
          <div
            className={`card-hover p-8 text-center w-full max-w-2xl ${getAnimationClass()}`}
            style={{ transitionDelay: "700ms" }}
          >
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
              Need Clarification?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              If you have any questions about our Terms of Service, we&apos;re
              here to help.
            </p>
            <a
              href="mailto:ignitetaxai@gmail.com"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <EnvelopeSimpleIcon
                size={20}
                weight="duotone"
                aria-hidden="true"
              />
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
