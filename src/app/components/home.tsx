"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FeaturePill } from "./ui";
import {
  LightningIcon,
  ShieldCheckIcon,
  RobotIcon,
  BooksIcon,
  ArrowRightIcon,
  CaretDownIcon,
} from "@phosphor-icons/react";

const FEATURE_PILLS = [
  { icon: LightningIcon, text: "10x Productivity" },
  { icon: ShieldCheckIcon, text: "Secure & Compliant" },
  { icon: RobotIcon, text: "AI-Powered" },
  { icon: BooksIcon, text: "Vetted Sources" },
] as const;

const APP_URL = "https://dev.ignitetax-ai";

const HighlightedText = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#2B7FFF] font-semibold">{children}</span>
);

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getAnimationClass = () =>
    `transition-all duration-700 ${
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F7FA] dark:bg-slate-900"
      aria-labelledby="home-heading"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <div className="flex flex-col items-center text-center space-y-8 mb-20">
          {/* Logo Section */}
          <div
            className={getAnimationClass()}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-6">
              <div className="relative w-full h-full  rounded-2xl p-4">
                <Image
                  src="/logo/logo.png"
                  alt="IgniteTaxAI Logo"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div
            className={getAnimationClass()}
            style={{ transitionDelay: "100ms" }}
          >
            <h1
              id="home-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="text-slate-800 dark:text-slate-100">Ignite</span>
              <span className="text-[#2B7FFF]">Tax AI</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 mt-2">
              Philippine Tax Co-Pilot
            </p>
          </div>

          {/* Subtitle */}
          <div
            className={getAnimationClass()}
            style={{ transitionDelay: "200ms" }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium max-w-4xl leading-relaxed px-4">
              AI-powered tax co-pilot for{" "}
              <HighlightedText>tax professionals</HighlightedText>,{" "}
              <HighlightedText>business owners</HighlightedText>,{" "}
              <HighlightedText>freelancers</HighlightedText>,{" "}
              <HighlightedText>students</HighlightedText> and{" "}
              <HighlightedText>educators</HighlightedText>
            </p>
          </div>

          {/* Description */}
          <div
            className={getAnimationClass()}
            style={{ transitionDelay: "300ms" }}
          >
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl px-4">
              Streamline research, enhance communications, and ensure seamless
              compliance while driving productivity and ensuring accuracy.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 ${getAnimationClass()}`}
            style={{ transitionDelay: "400ms" }}
          >
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center space-x-2 min-w-[160px]"
            >
              <span>Get Started</span>
              <ArrowRightIcon size={20} weight="bold" aria-hidden="true" />
            </a>
            <a
              href="#about_us"
              className="btn-secondary flex items-center justify-center space-x-2 min-w-[160px]"
            >
              <span>Learn More</span>
            </a>
          </div>

          {/* Feature Pills */}
          <div
            className={`flex flex-wrap justify-center gap-3 pt-8 ${getAnimationClass()}`}
            style={{ transitionDelay: "500ms" }}
          >
            {FEATURE_PILLS.map((feature, index) => (
              <FeaturePill
                key={index}
                icon={feature.icon}
                text={feature.text}
              />
            ))}
          </div>

          {/* Chat Interface Preview */}
          <div
            className={`w-full max-w-5xl mt-16 ${getAnimationClass()}`}
            style={{ transitionDelay: "600ms" }}
            role="region"
            aria-label="Application preview"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src="/preview.png"
                  alt="TaxAI Chat Interface showing real-time tax assistance conversation with comprehensive Philippine tax guidance for practitioners, displaying chat history and AI-powered responses"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1400px"
                />
              </div>
              {/* Overlay gradient for better visual appeal */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center animate-bounce">
        <a
          href="#about_us"
          className="flex flex-col items-center space-y-2 text-slate-500 dark:text-slate-400 hover:text-[#2B7FFF] transition-colors duration-300 cursor-pointer"
          aria-label="Scroll to about section"
        >
          <span className="text-xs sm:text-sm font-medium uppercase tracking-wider">
            Scroll
          </span>
          <CaretDownIcon size={20} weight="bold" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default Home;
