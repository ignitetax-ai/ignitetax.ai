"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const NavbarNew = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Handle escape key to close mobile menu
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about_us", label: "About" },
    { href: "#product", label: "Product" },
    { href: "#resources", label: "Resources" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg border-b border-blue-200/50 dark:border-cyan-500/30"
          : "bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-700/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group">
            <a
              href="/"
              className="flex items-center space-x-3 transition-transform duration-300 hover:scale-105"
              onClick={closeMenu}
              aria-label="IgniteTaxAI Home"
            >
              <div className="relative w-12 h-12 rounded-lg overflow-hidden shadow-md group-hover:shadow-glow-blue transition-shadow duration-300">
                <Image
                  src="/logo/Ignite-Tax-Ai-4.png"
                  alt="IgniteTaxAI Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent hidden sm:block">
                IgniteTaxAI
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-gray-700 dark:text-gray-200 font-medium text-sm uppercase tracking-wide transition-all duration-300 hover:text-blue-600 dark:hover:text-cyan-400 group"
                onClick={closeMenu}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Section - Theme Toggle & Auth Buttons */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="https://app--taxai-pro-b398ec5f.base44.app/login?from_url=https://app--taxai-pro-b398ec5f.base44.app/?fbclid=IwY2xjawLFrn1leHRuA2FlbQIxMABicmlkETFwUGtEQTg4ODNneGxmZ25YAR59fEuWqOkGaKjxJJxi_3tQzbpsqbKzqu2sMwuoxnYdeCAKh_cC7v2hAMJCLg_aem_lwuzbSe-zbWyVLFPt8p6jg&app_id=6856685cef268de0b398ec5f"
                className="px-5 py-2 rounded-lg border-2 border-blue-600 dark:border-cyan-500 text-blue-600 dark:text-cyan-400 font-semibold text-sm uppercase tracking-wide hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-gray-900 transition-all duration-300 hover:shadow-glow-blue dark:hover:shadow-cyber"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign In
              </a>
              <a
                href="https://app--taxai-pro-b398ec5f.base44.app/login?from_url=https://app--taxai-pro-b398ec5f.base44.app/?fbclid=IwY2xjawLFrn1leHRuA2FlbQIxMABicmlkETFwUGtEQTg4ODNneGxmZ25YAR59fEuWqOkGaKjxJJxi_3tQzbpsqbKzqu2sMwuoxnYdeCAKh_cC7v2hAMJCLg_aem_lwuzbSe-zbWyVLFPt8p6jg&app_id=6856685cef268de0b398ec5f"
                className="btn-cyber text-sm uppercase tracking-wide"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign Up
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6 text-gray-700 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-700 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        role="navigation"
        aria-label="Mobile navigation menu"
      >
        <div className="px-4 pt-4 pb-6 space-y-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200/50 dark:border-gray-700/50">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-gray-700 dark:text-gray-200 font-medium text-base uppercase tracking-wide rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500"
              onClick={closeMenu}
              style={{ animationDelay: `${index * 50}ms` }}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col space-y-3 pt-4">
            <a
              href="https://app--taxai-pro-b398ec5f.base44.app/login?from_url=https://app--taxai-pro-b398ec5f.base44.app/?fbclid=IwY2xjawLFrn1leHRuA2FlbQIxMABicmlkETFwUGtEQTg4ODNneGxmZ25YAR59fEuWqOkGaKjxJJxi_3tQzbpsqbKzqu2sMwuoxnYdeCAKh_cC7v2hAMJCLg_aem_lwuzbSe-zbWyVLFPt8p6jg&app_id=6856685cef268de0b398ec5f"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-5 py-3 rounded-lg border-2 border-blue-600 dark:border-cyan-500 text-blue-600 dark:text-cyan-400 font-semibold text-sm uppercase tracking-wide text-center hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500"
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Sign In
            </a>
            <a
              href="https://app--taxai-pro-b398ec5f.base44.app/login?from_url=https://app--taxai-pro-b398ec5f.base44.app/?fbclid=IwY2xjawLFrn1leHRuA2FlbQIxMABicmlkETFwUGtEQTg4ODNneGxmZ25YAR59fEuWqOkGaKjxJJxi_3tQzbpsqbKzqu2sMwuoxnYdeCAKh_cC7v2hAMJCLg_aem_lwuzbSe-zbWyVLFPt8p6jg&app_id=6856685cef268de0b398ec5f"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-cyber text-sm uppercase tracking-wide text-center focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500"
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarNew;
