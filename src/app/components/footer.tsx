"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about_us" },
      { label: "Product", href: "#product" },
      { label: "Resources", href: "#resources" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact Us", href: "mailto:ignitetaxai@gmail.com" },
      { label: "Support", href: "mailto:ignitetaxai@gmail.com" },
    ],
  },
] as const;

const DEMO_FEATURES = [
  "Interactively explore our intuitive AI interface.",
  "Discover personalized features tailored to your business.",
  "See real-time examples of how IgniteTaxAI enhances accuracy and efficiency.",
] as const;

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      {/* Demo Section */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div
          className={`transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="card-hover p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Description */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                    Schedule your free{" "}
                    <span className="text-[#2B7FFF]">demo</span> now!
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Experience firsthand how IgniteTaxAI can revolutionize your
                  tax workflow. Request a demo today to:
                </p>

                <ul className="space-y-3" role="list">
                  {DEMO_FEATURES.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div
                        className="flex-shrink-0 w-5 h-5 rounded-full bg-[#2B7FFF] flex items-center justify-center mt-0.5"
                        aria-hidden="true"
                      >
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: CTA */}
              <div className="flex items-center justify-center lg:justify-end">
                <a
                  href="mailto:ignitetaxai@gmail.com?subject=Demo%20Request%20for%20IgniteTaxAI"
                  className="btn-primary px-8 py-4 text-base sm:text-lg inline-flex items-center space-x-3"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Request a Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative w-full border-t border-slate-200 dark:border-slate-800">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <a
                href="/"
                className="flex items-center space-x-3 transition-transform duration-200 hover:scale-105"
                aria-label="IgniteTaxAI Home"
              >
                <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                  <Image
                    src="/logo/Ignite-Tax-Ai-4.png"
                    alt=""
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">
                    <span className="text-slate-800 dark:text-slate-100">
                      Ignite
                    </span>
                    <span className="text-[#2B7FFF]">Tax AI</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 -mt-0.5">
                    Philippine Tax Co-Pilot
                  </p>
                </div>
              </a>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
                Empowering tax professionals, business owners, freelancers,
                students and educators with cutting-edge AI technology for
                simplified compliance and enhanced productivity.
              </p>
              {/* Social Links */}
              <div className="flex items-center space-x-3 pt-2">
                <a
                  href="mailto:ignitetaxai@gmail.com"
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-[#2B7FFF] transition-all duration-200"
                  aria-label="Email us"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {FOOTER_LINKS.map((section) => (
              <nav
                key={section.title}
                className="space-y-4"
                aria-label={section.title}
              >
                <h4 className="text-base font-bold text-slate-800 dark:text-slate-100">
                  {section.title}
                </h4>
                <ul className="space-y-2" role="list">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-[#2B7FFF] transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative w-full border-t border-slate-200 dark:border-slate-800">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-slate-600 dark:text-slate-400 text-center sm:text-left">
              © {currentYear} IgniteTaxAI. All rights reserved.
            </p>

            {/* Quick Links */}
            <nav
              className="flex items-center space-x-4 text-sm"
              aria-label="Quick links"
            >
              <a
                href="mailto:ignitetaxai@gmail.com"
                className="text-slate-600 dark:text-slate-400 hover:text-[#2B7FFF] transition-colors duration-200"
              >
                Contact
              </a>
              <span
                className="text-slate-400 dark:text-slate-600"
                aria-hidden="true"
              >
                •
              </span>
              <a
                href="/terms"
                className="text-slate-600 dark:text-slate-400 hover:text-[#2B7FFF] transition-colors duration-200"
              >
                Terms
              </a>
              <span
                className="text-slate-400 dark:text-slate-600"
                aria-hidden="true"
              >
                •
              </span>
              <a
                href="/privacy"
                className="text-slate-600 dark:text-slate-400 hover:text-[#2B7FFF] transition-colors duration-200"
              >
                Privacy
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
