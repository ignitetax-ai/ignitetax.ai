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
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg shadow-sm border-b border-slate-200 dark:border-slate-800"
          : "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <a
              href="/"
              className="flex items-center space-x-3 transition-transform duration-200 hover:scale-105"
              onClick={closeMenu}
              aria-label="IgniteTaxAI Home"
            >
              <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                <Image
                  src="/logo/Ignite-Tax-Ai-4.png"
                  alt="IgniteTaxAI Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold">
                  <span className="text-slate-800 dark:text-slate-100">
                    Ignite
                  </span>
                  <span className="text-[#2B7FFF]">Tax AI</span>
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 -mt-0.5">
                  Philippine Tax Assistant
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-slate-700 dark:text-slate-300 font-medium text-sm transition-colors duration-200 hover:text-[#2B7FFF] dark:hover:text-[#2B7FFF] rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Section - Theme Toggle & Auth Buttons */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg
                  className="w-5 h-5 text-amber-400"
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
                  className="w-5 h-5 text-slate-700"
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
                className="btn-secondary text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign In
              </a>
              <a
                href="https://app--taxai-pro-b398ec5f.base44.app/login?from_url=https://app--taxai-pro-b398ec5f.base44.app/?fbclid=IwY2xjawLFrn1leHRuA2FlbQIxMABicmlkETFwUGtEQTg4ODNneGxmZ25YAR59fEuWqOkGaKjxJJxi_3tQzbpsqbKzqu2sMwuoxnYdeCAKh_cC7v2hAMJCLg_aem_lwuzbSe-zbWyVLFPt8p6jg&app_id=6856685cef268de0b398ec5f"
                className="btn-primary text-sm"
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
              className="lg:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6 text-slate-700 dark:text-slate-200"
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
                  className="w-6 h-6 text-slate-700 dark:text-slate-200"
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
        <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-slate-700 dark:text-slate-300 font-medium text-base rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[#2B7FFF] transition-all duration-200"
              onClick={closeMenu}
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
              className="w-full btn-secondary text-sm text-center"
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Sign In
            </a>
            <a
              href="https://app--taxai-pro-b398ec5f.base44.app/login?from_url=https://app--taxai-pro-b398ec5f.base44.app/?fbclid=IwY2xjawLFrn1leHRuA2FlbQIxMABicmlkETFwUGtEQTg4ODNneGxmZ25YAR59fEuWqOkGaKjxJJxi_3tQzbpsqbKzqu2sMwuoxnYdeCAKh_cC7v2hAMJCLg_aem_lwuzbSe-zbWyVLFPt8p6jg&app_id=6856685cef268de0b398ec5f"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-primary text-sm text-center"
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
