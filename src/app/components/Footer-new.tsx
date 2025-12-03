"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const FooterNew = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const footerLinks = [
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
        { label: "Terms of Service", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Cookie Policy", href: "#" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Contact Us", href: "mailto:ignitetaxai@gmail.com" },
        { label: "Support", href: "mailto:ignitetaxai@gmail.com" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:ignitetaxai@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 border-t border-gray-200 dark:border-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500 dark:via-cyan-500 to-transparent" />

      {/* Demo Section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 dark:from-cyan-400 dark:via-blue-500 dark:to-cyan-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative glass rounded-3xl p-8 lg:p-12 border-2 border-blue-200 dark:border-cyan-500/30">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left: Description */}
                <div className="space-y-6">
                  <div className="inline-block">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent mb-2">
                      Coming Soon...
                    </h2>
                    <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-500 rounded-full" />
                  </div>

                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic">
                    Experience firsthand how IgniteTaxAI can revolutionize your
                    tax workflow. Request a demo today to:
                  </p>

                  <ul className="space-y-4">
                    {[
                      "Interactively explore our intuitive AI interface.",
                      "Discover personalized features tailored to your business.",
                      "See real-time examples of how IgniteTaxAI enhances accuracy and efficiency.",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-3 group/item"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-cyan-400 dark:to-blue-500 flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: CTA */}
                <div className="flex items-center justify-center lg:justify-end">
                  <button
                    disabled
                    className="relative group/btn px-8 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-500 dark:to-blue-600 text-white font-bold text-base sm:text-lg rounded-2xl shadow-lg opacity-60 cursor-not-allowed"
                    aria-label="Schedule demo - Coming soon"
                  >
                    <span className="flex items-center space-x-3">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Schedule your free demo now!</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 w-full border-t border-gray-200 dark:border-gray-800">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-md group-hover:shadow-glow-blue dark:group-hover:shadow-cyber transition-shadow duration-300">
                  <Image
                    src="/logo/Ignite-Tax-Ai-4.png"
                    alt="IgniteTaxAI Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
                  IgniteTaxAI
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
                Empowering tax professionals and businesses with cutting-edge AI
                technology for simplified compliance and enhanced productivity.
              </p>
              {/* Social Links */}
              <div className="flex items-center space-x-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="text-base font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300 inline-flex items-center group"
                      >
                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          →
                        </span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 w-full border-t border-gray-200 dark:border-gray-800">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} IgniteTaxAI. All rights reserved.
            </div>

            {/* Quick Links */}
            <div className="flex items-center space-x-4 text-sm">
              <a
                href="mailto:ignitetaxai@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300"
              >
                Contact
              </a>
              <span className="text-gray-400 dark:text-gray-600">•</span>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300"
              >
                Terms
              </a>
              <span className="text-gray-400 dark:text-gray-600">•</span>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 dark:from-cyan-400 dark:via-blue-500 dark:to-cyan-400" />
    </footer>
  );
};

export default FooterNew;
