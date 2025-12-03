"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const closeNavbar = () => {
    setIsClick(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-10 top-0 shadow-sm">
      <div className="w-full flex justify-center bg-white py-4 border-b border-gray-200">
        <div className="w-[90%] max-w-6xl flex items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <a href="/" className="text-gray-900" onClick={closeNavbar}>
              <Image
                src="/logo/Ignite-Tax-Ai-4.png"
                alt="logo"
                width={50}
                height={40}
              />
            </a>
            <h1 className="hidden sm:block text-xl font-bold text-gray-900">
              IgniteTaxAI
            </h1>
          </div>
          {/* Navigation links - LEFT */}
          <div className="hidden md:flex items-center space-x-8 ml-12">
            <a
              href="#about_us"
              className="text-gray-700 font-medium hover:text-blue-600 transition relative group"
              onClick={closeNavbar}
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#product"
              className="text-gray-700 font-medium hover:text-blue-600 transition relative group"
              onClick={closeNavbar}
            >
              Product
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#resources"
              className="text-gray-700 font-medium hover:text-blue-600 transition relative group"
              onClick={closeNavbar}
            >
              Resources
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          {/* Spacer */}
          <div className="flex-1" />
          {/* Sign In / Sign Up buttons on the right */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://app--taxai-pro-b398ec5f.base44.app/login?from_url=https://app--taxai-pro-b398ec5f.base44.app/?fbclid=IwY2xjawLFrn1leHRuA2FlbQIxMABicmlkETFwUGtEQTg4ODNneGxmZ25YAR59fEuWqOkGaKjxJJxi_3tQzbpsqbKzqu2sMwuoxnYdeCAKh_cC7v2hAMJCLg_aem_lwuzbSe-zbWyVLFPt8p6jg&app_id=6856685cef268de0b398ec5f"
              className="px-6 py-2 rounded-lg border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white transition font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign In
            </a>
            <a
              href="https://app--taxai-pro-b398ec5f.base44.app/login?from_url=https://app--taxai-pro-b398ec5f.base44.app/?fbclid=IwY2xjawLFrn1leHRuA2FlbQIxMABicmlkETFwUGtEQTg4ODNneGxmZ25YAR59fEuWqOkGaKjxJJxi_3tQzbpsqbKzqu2sMwuoxnYdeCAKh_cC7v2hAMJCLg_aem_lwuzbSe-zbWyVLFPt8p6jg&app_id=6856685cef268de0b398ec5f"
              className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up
            </a>
          </div>
          {/* Hamburger for mobile */}
          <div className="md:hidden ml-auto">
            <button
              className="inline-flex p-3 rounded-md text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden bg-white">
          <div className="px-6 pt-6 pb-10 space-y-4 border-t border-gray-200">
            <a
              href="#home"
              className="text-gray-700 font-medium text-lg leading-10 block transition duration-300 hover:text-blue-600"
              onClick={closeNavbar}
            >
              HOME
            </a>
            <a
              href="#about_us"
              className="text-gray-700 font-medium text-lg leading-10 block transition duration-300 hover:text-blue-600"
              onClick={closeNavbar}
            >
              ABOUT
            </a>
            <a
              href="#product"
              className="text-gray-700 font-medium text-lg leading-10 block transition duration-300 hover:text-blue-600"
              onClick={closeNavbar}
            >
              PRODUCT
            </a>
            <a
              href="#resources"
              className="text-gray-700 font-medium text-lg leading-10 block transition duration-300 hover:text-blue-600"
              onClick={closeNavbar}
            >
              RESOURCES
            </a>
            <div className="flex flex-col gap-3 pt-4">
              <a
                href="https://app--taxai-pro-b398ec5f.base44.app/login?from_url=https://app--taxai-pro-b398ec5f.base44.app/?fbclid=IwY2xjawLFrn1leHRuA2FlbQIxMABicmlkETFwUGtEQTg4ODNneGxmZ25YAR59fEuWqOkGaKjxJJxi_3tQzbpsqbKzqu2sMwuoxnYdeCAKh_cC7v2hAMJCLg_aem_lwuzbSe-zbWyVLFPt8p6jg&app_id=6856685cef268de0b398ec5f"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white transition font-semibold text-center"
                onClick={closeNavbar}
              >
                SIGN IN
              </a>
              <a
                href="https://app--taxai-pro-b398ec5f.base44.app/login?from_url=https://app--taxai-pro-b398ec5f.base44.app/?fbclid=IwY2xjawLFrn1leHRuA2FlbQIxMABicmlkETFwUGtEQTg4ODNneGxmZ25YAR59fEuWqOkGaKjxJJxi_3tQzbpsqbKzqu2sMwuoxnYdeCAKh_cC7v2hAMJCLg_aem_lwuzbSe-zbWyVLFPt8p6jg&app_id=6856685cef268de0b398ec5f"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-semibold text-center"
                onClick={closeNavbar}
              >
                SIGN UP
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
