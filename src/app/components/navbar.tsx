"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { SunIcon, MoonIcon, ListIcon, XIcon } from "@phosphor-icons/react";

const NAV_LINKS = [
  { href: "#about_us", label: "About" },
  { href: "#product", label: "Product" },
  { href: "#resources", label: "Resources" },
] as const;

const APP_URL =
  "https://app--taxai-pro-b398ec5f.base44.app/login?from_url=https://app--taxai-pro-b398ec5f.base44.app/&app_id=6856685cef268de0b398ec5f";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Check for saved theme preference or system preference
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

  const toggleTheme = useCallback(() => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg shadow-sm border-b border-slate-200 dark:border-slate-800"
          : "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50"
      }`}
      role="navigation"
      aria-label="Main navigation"
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
              <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                <Image
                  src="/logo/Ignite-Tax-Ai-4.png"
                  alt=""
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
                  Philippine Tax Co-Pilot
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-slate-700 dark:text-slate-300 font-medium text-sm transition-colors duration-200 hover:text-[#2B7FFF] dark:hover:text-[#2B7FFF] rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800"
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
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <SunIcon
                  size={20}
                  weight="duotone"
                  className="text-amber-400"
                  aria-hidden="true"
                />
              ) : (
                <MoonIcon
                  size={20}
                  weight="duotone"
                  className="text-slate-700"
                  aria-hidden="true"
                />
              )}
            </button>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href={APP_URL}
                className="btn-secondary text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign In
              </a>
              <a
                href={APP_URL}
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
              className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <XIcon
                  size={24}
                  weight="bold"
                  className="text-slate-700 dark:text-slate-200"
                  aria-hidden="true"
                />
              ) : (
                <ListIcon
                  size={24}
                  weight="bold"
                  className="text-slate-700 dark:text-slate-200"
                  aria-hidden="true"
                />
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
        aria-label="Mobile navigation menu"
      >
        <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-slate-700 dark:text-slate-300 font-medium text-base rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[#2B7FFF] transition-all duration-200"
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col space-y-3 pt-4">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-secondary text-sm text-center"
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Sign In
            </a>
            <a
              href={APP_URL}
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

export default Navbar;
