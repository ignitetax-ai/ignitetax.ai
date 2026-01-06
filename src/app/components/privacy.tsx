"use client";

import { useEffect, useState, useRef } from "react";
import { SectionHeader } from "./ui";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react";

const PRIVACY_SECTIONS = [
  {
    title: "Information Collection",
    content:
      "We only ask for personal information when we truly need it to provide service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.",
  },
  {
    title: "Data Retention",
    content:
      "We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.",
  },
  {
    title: "Data Sharing",
    content:
      "We don't share any personally identifying information publicly or with third parties, except when required to by law.",
  },
  {
    title: "External Links",
    content:
      "Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.",
  },
  {
    title: "Your Rights",
    content:
      "You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.",
  },
  {
    title: "Acceptance",
    content:
      "Your continued use of our website will be regarded as an acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.",
  },
] as const;

const Privacy = () => {
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
      id="privacy"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900 py-20 lg:py-24"
      aria-labelledby="privacy-heading"
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-12">
          {/* Header */}
          <div className={getAnimationClass()}>
            <SectionHeader
              title="Privacy Policy"
              highlightedWord="Policy"
              id="privacy-heading"
              description="Your privacy is important to us. It is IgniteTaxAI's policy to respect your privacy regarding any information we may collect from you across our website and services."
            />
          </div>

          {/* Privacy Sections */}
          <div
            className={`w-full space-y-6 ${getAnimationClass()}`}
            style={{ transitionDelay: "100ms" }}
          >
            {PRIVACY_SECTIONS.map((section, index) => (
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
            style={{ transitionDelay: "400ms" }}
          >
            <p className="text-sm text-slate-500 dark:text-slate-400">
              This policy is effective as of May 2025.
            </p>
          </div>

          {/* Contact CTA */}
          <div
            className={`card-hover p-8 text-center w-full max-w-2xl ${getAnimationClass()}`}
            style={{ transitionDelay: "500ms" }}
          >
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
              Have Questions?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              If you have any questions about our privacy practices, please
              don&apos;t hesitate to reach out.
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

export default Privacy;
