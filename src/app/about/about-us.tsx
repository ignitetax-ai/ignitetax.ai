"use client";

import { useEffect, useState, useRef } from "react";
import {
  SectionHeader,
  FeatureCard,
  StatCard,
  HighlightedText,
} from "../components/ui";

const MISSION_VISION_CARDS = [
  {
    title: "Mission",
    content:
      "To simplify tax compliance and enhance productivity through cutting-edge AI-driven solutions.",
    emoji: "🎯",
  },
  {
    title: "Vision",
    content:
      "To become the leading AI-powered platform transforming tax management by making compliance effortless, accurate, and efficient.",
    emoji: "🚀",
  },
] as const;

const STATS = [
  { label: "AI-Powered", value: "100%", emoji: "🤖" },
  { label: "Reduce Research Time", value: "99%", emoji: "⚡" },
  { label: "Productivity Boost", value: "10x", emoji: "📈" },
] as const;

const AboutUs = () => {
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

  const getAnimationClass = (delay: number = 0) =>
    `transition-all duration-700 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`;

  return (
    <section
      id="about_us"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900 py-20 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-12 lg:space-y-16">
          {/* Header */}
          <div className={getAnimationClass()}>
            <SectionHeader
              title="About Us"
              highlightedWord="Us"
              id="about-heading"
              description={
                <>
                  IgniteTaxAI empowers{" "}
                  <HighlightedText>tax professionals</HighlightedText>,{" "}
                  <HighlightedText>business owners</HighlightedText>,{" "}
                  <HighlightedText>freelancers</HighlightedText>,{" "}
                  <HighlightedText>students</HighlightedText> and{" "}
                  <HighlightedText>educators</HighlightedText> in the
                  Philippines through innovative AI solutions. Streamline
                  research, enhance communications, and ensure seamless
                  compliance while driving productivity and ensuring accuracy.
                </>
              }
            />
          </div>

          {/* Mission & Vision Cards */}
          <div
            className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl"
            role="list"
            aria-label="Mission and Vision"
          >
            {MISSION_VISION_CARDS.map((card, index) => (
              <div
                key={card.title}
                role="listitem"
                className={getAnimationClass((index + 1) * 150)}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <FeatureCard
                  title={card.title}
                  description={card.content}
                  emoji={card.emoji}
                  className="p-8"
                />
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div
            className={`w-full grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl ${getAnimationClass(400)}`}
            style={{ transitionDelay: "400ms" }}
            role="list"
            aria-label="Key statistics"
          >
            {STATS.map((stat, index) => (
              <div key={index} role="listitem">
                <StatCard
                  value={stat.value}
                  label={stat.label}
                  emoji={stat.emoji}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
