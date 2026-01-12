"use client";

import { useEffect, useState, useRef } from "react";
import { useDraggable } from "@neodrag/react";
import {
  RobotIcon,
  SealCheckIcon,
  FileTextIcon,
  FileMagnifyingGlassIcon,
  GraduationCapIcon,
} from "@phosphor-icons/react";

const FEATURES = [
  {
    id: "ai-copilot",
    title: "AI powered tax co-pilot",
    icon: RobotIcon,
  },
  {
    id: "vetted-sources",
    title: "Vetted Sources",
    icon: SealCheckIcon,
  },
  {
    id: "memo-composer",
    title: "Memo Composer",
    icon: FileTextIcon,
  },
  {
    id: "document-analysis",
    title: "Document Analysis",
    icon: FileMagnifyingGlassIcon,
  },
  {
    id: "tax-accelerator",
    title: "Academe Tax Accelerator",
    icon: GraduationCapIcon,
  },
] as const;

const DraggableWrapper = ({
  children,
  className,
  delay,
  onDrag,
  cardRef,
  onDragUpdate,
}: {
  children: React.ReactNode;
  className: string;
  delay: number;
  onDrag: (offsetX: number, offsetY: number) => void;
  cardRef: React.RefObject<HTMLDivElement>;
  onDragUpdate: () => void;
}) => {
  // Warm up GPU acceleration on mount to prevent first drag lag
  useEffect(() => {
    if (cardRef.current) {
      // Force GPU layer creation immediately
      const el = cardRef.current;
      el.style.willChange = "transform";
      el.style.transform = "translate3d(0, 0, 0)";

      // Force a reflow to ensure GPU layer is created
      void el.offsetHeight;

      return () => {
        el.style.willChange = "auto";
      };
    }
  }, [cardRef]);

  const rafId = useRef<number | null>(null);

  const scheduleDragUpdate = (x: number, y: number) => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
    }
    rafId.current = requestAnimationFrame(() => {
      onDrag(x, y);
      onDragUpdate();
    });
  };

  useEffect(
    () => () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    },
    [],
  );

  useDraggable(cardRef, {
    applyUserSelectHack: true,
    gpuAcceleration: true,
    defaultPosition: { x: 0, y: 0 },
    onDragStart: () => {
      if (cardRef.current) {
        cardRef.current.style.transition = "";
        cardRef.current.style.willChange = "transform";
      }
    },
    onDrag: ({ offsetX, offsetY }) => {
      scheduleDragUpdate(offsetX, offsetY);
    },
    onDragEnd: () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
      // Smooth spring-back animation on drag end
      if (cardRef.current) {
        cardRef.current.style.willChange = "transform";
        cardRef.current.style.transition =
          "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
        cardRef.current.style.transform = "translate3d(0px, 0px, 0px)";

        // Reset position after animation
        setTimeout(() => {
          if (cardRef.current) {
            cardRef.current.style.transition = "";
            cardRef.current.style.willChange = "auto";
            onDrag(0, 0);
            onDragUpdate();
          }
        }, 600);
      }
    },
  });

  const handleMouseEnter = () => {
    // Warm up on hover to eliminate first-drag lag
    if (cardRef.current) {
      cardRef.current.style.willChange = "transform";
      // Force a tiny transform to wake up the GPU
      cardRef.current.style.transform = "translate3d(0.001px, 0.001px, 0)";
      requestAnimationFrame(() => {
        if (cardRef.current) {
          cardRef.current.style.transform = "translate3d(0, 0, 0)";
        }
      });
    }
  };

  const handleMouseLeave = () => {
    // Clean up will-change when not hovering
    if (cardRef.current && !cardRef.current.style.transition) {
      cardRef.current.style.willChange = "auto";
    }
  };

  const primeWillChange = () => {
    if (cardRef.current) {
      cardRef.current.style.transition = "";
      cardRef.current.style.willChange = "transform";
    }
  };

  return (
    <div
      ref={cardRef}
      className={`${className} will-change-transform transform-gpu`}
      style={{
        transitionDelay: `${delay}ms`,
        touchAction: "none",
      }}
      onMouseDown={primeWillChange}
      onTouchStart={primeWillChange}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

const FeatureCard = ({
  feature,
  isVisible,
  delay,
}: {
  feature: (typeof FEATURES)[number];
  isVisible: boolean;
  delay: number;
}) => {
  const Icon = feature.icon;

  return (
    <div
      className={`flex items-center gap-3 px-5 py-3 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:border-[#2B7FFF]/50 transition-all duration-500 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-10 h-10 rounded-xl bg-[#2B7FFF] flex items-center justify-center flex-shrink-0">
        <Icon size={20} weight="fill" className="text-white" />
      </div>
      <span className="text-[#2B7FFF] dark:text-blue-400 font-semibold text-sm sm:text-base whitespace-nowrap">
        {feature.title}
      </span>
    </div>
  );
};

const FeaturesDiagram = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Refs for each card
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const card5Ref = useRef<HTMLDivElement>(null);

  // State for line coordinates
  const [lines, setLines] = useState({
    line1: { x1: 20, y1: 20, x2: 50, y2: 50 },
    line2: { x1: 80, y1: 20, x2: 50, y2: 50 },
    line3: { x1: 10, y1: 50, x2: 50, y2: 50 },
    line4: { x1: 90, y1: 50, x2: 50, y2: 50 },
    line5: { x1: 50, y1: 80, x2: 50, y2: 50 },
  });
  const initialAlignRaf = useRef<number | null>(null);

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

  // Calculate line positions based on card positions
  const updateLines = useRef(() => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    if (containerRect.width === 0 || containerRect.height === 0) return;

    const getCardEdge = (
      cardRef: React.RefObject<HTMLDivElement>,
      edge: "top" | "bottom" | "left" | "right",
    ) => {
      if (!cardRef.current) return null;
      const rect = cardRef.current.getBoundingClientRect();
      const containerRect = containerRef.current!.getBoundingClientRect();

      let x, y;

      // Calculate edge point based on which side faces the center
      switch (edge) {
        case "bottom":
          x = rect.left - containerRect.left + rect.width / 2;
          y = rect.bottom - containerRect.top;
          break;
        case "top":
          x = rect.left - containerRect.left + rect.width / 2;
          y = rect.top - containerRect.top;
          break;
        case "right":
          x = rect.right - containerRect.left;
          y = rect.top - containerRect.top + rect.height / 2;
          break;
        case "left":
          x = rect.left - containerRect.left;
          y = rect.top - containerRect.top + rect.height / 2;
          break;
      }

      return { x, y };
    };

    // Get edge points facing the center
    const card1Edge = getCardEdge(card1Ref, "bottom"); // Top left - bottom edge faces center
    const card2Edge = getCardEdge(card2Ref, "bottom"); // Top right - bottom edge faces center
    const card3Edge = getCardEdge(card3Ref, "right"); // Middle left - right edge faces center
    const card4Edge = getCardEdge(card4Ref, "left"); // Middle right - left edge faces center
    const card5Edge = getCardEdge(card5Ref, "top"); // Bottom - top edge faces center

    // Only update if all cards are positioned
    if (!card1Edge || !card2Edge || !card3Edge || !card4Edge || !card5Edge) {
      return;
    }

    setLines({
      line1: {
        x1: (card1Edge.x / containerRect.width) * 100,
        y1: (card1Edge.y / containerRect.height) * 100,
        x2: 50,
        y2: 50,
      },
      line2: {
        x1: (card2Edge.x / containerRect.width) * 100,
        y1: (card2Edge.y / containerRect.height) * 100,
        x2: 50,
        y2: 50,
      },
      line3: {
        x1: (card3Edge.x / containerRect.width) * 100,
        y1: (card3Edge.y / containerRect.height) * 100,
        x2: 50,
        y2: 50,
      },
      line4: {
        x1: (card4Edge.x / containerRect.width) * 100,
        y1: (card4Edge.y / containerRect.height) * 100,
        x2: 50,
        y2: 50,
      },
      line5: {
        x1: (card5Edge.x / containerRect.width) * 100,
        y1: (card5Edge.y / containerRect.height) * 100,
        x2: 50,
        y2: 50,
      },
    });
  }).current;

  // Update lines whenever card positions change (debounced for non-drag updates)
  useEffect(() => {
    updateLines();
  }, [updateLines]);

  // Run an rAF loop on initial reveal to align lines before first interaction
  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    let frames = 0;
    const step = () => {
      updateLines();
      frames += 1;
      if (frames < 8) {
        initialAlignRaf.current = requestAnimationFrame(step);
      } else {
        initialAlignRaf.current = null;
      }
    };

    initialAlignRaf.current = requestAnimationFrame(step);

    return () => {
      if (initialAlignRaf.current !== null) {
        cancelAnimationFrame(initialAlignRaf.current);
        initialAlignRaf.current = null;
      }
    };
  }, [isVisible, updateLines]);

  // Initial line calculation with proper timing
  useEffect(() => {
    if (isVisible && containerRef.current) {
      // Multiple attempts to ensure cards are positioned
      const timeouts = [50, 150, 300];
      const timers = timeouts.map((delay) => setTimeout(updateLines, delay));

      // Add ResizeObserver to handle dynamic updates
      const resizeObserver = new ResizeObserver(() => {
        updateLines();
      });

      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      return () => {
        resizeObserver.disconnect();
        timers.forEach(clearTimeout);
      };
    }
  }, [isVisible, updateLines]);

  return (
    <div
      ref={sectionRef}
      className="relative w-full max-w-6xl mx-auto py-20 px-4"
    >
      {/* SVG Lines connecting to center - Hidden on mobile */}
      <svg
        className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      >
        {/* Top Left Line */}
        <line
          x1={`${lines.line1.x1}%`}
          y1={`${lines.line1.y1}%`}
          x2={`${lines.line1.x2}%`}
          y2={`${lines.line1.y2}%`}
          stroke="currentColor"
          strokeWidth="2"
          className={`text-slate-300 dark:text-slate-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "opacity 1s" }}
          strokeDasharray="5,5"
        />
        {/* Top Right Line */}
        <line
          x1={`${lines.line2.x1}%`}
          y1={`${lines.line2.y1}%`}
          x2={`${lines.line2.x2}%`}
          y2={`${lines.line2.y2}%`}
          stroke="currentColor"
          strokeWidth="2"
          className={`text-slate-300 dark:text-slate-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "opacity 1s" }}
          strokeDasharray="5,5"
        />
        {/* Middle Left Line */}
        <line
          x1={`${lines.line3.x1}%`}
          y1={`${lines.line3.y1}%`}
          x2={`${lines.line3.x2}%`}
          y2={`${lines.line3.y2}%`}
          stroke="currentColor"
          strokeWidth="2"
          className={`text-slate-300 dark:text-slate-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "opacity 1s" }}
          strokeDasharray="5,5"
        />
        {/* Middle Right Line */}
        <line
          x1={`${lines.line4.x1}%`}
          y1={`${lines.line4.y1}%`}
          x2={`${lines.line4.x2}%`}
          y2={`${lines.line4.y2}%`}
          stroke="currentColor"
          strokeWidth="2"
          className={`text-slate-300 dark:text-slate-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "opacity 1s" }}
          strokeDasharray="5,5"
        />
        {/* Bottom Line */}
        <line
          x1={`${lines.line5.x1}%`}
          y1={`${lines.line5.y1}%`}
          x2={`${lines.line5.x2}%`}
          y2={`${lines.line5.y2}%`}
          stroke="currentColor"
          strokeWidth="2"
          className={`text-slate-300 dark:text-slate-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "opacity 1s" }}
          strokeDasharray="5,5"
        />
      </svg>

      {/* Desktop Layout - Hidden on mobile */}
      <div
        ref={containerRef}
        className="hidden md:block relative"
        style={{ minHeight: "600px", touchAction: "none" }}
      >
        {/* Central Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <div
            className={`w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-[#2B7FFF] to-blue-500 shadow-2xl flex flex-col items-center justify-center transition-all duration-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          >
            <h3 className="text-white font-bold text-xl sm:text-2xl text-center px-6">
              IgniteTax AI
              <br />
              Co-Pilot
            </h3>
          </div>
        </div>

        {/* Top Left - AI powered tax co-pilot */}
        <DraggableWrapper
          className="absolute top-0 left-0 sm:left-8 z-20 cursor-grab active:cursor-grabbing"
          delay={200}
          onDrag={() => {}}
          cardRef={card1Ref}
          onDragUpdate={updateLines}
        >
          <FeatureCard
            feature={FEATURES[0]}
            isVisible={isVisible}
            delay={200}
          />
        </DraggableWrapper>

        {/* Top Right - Vetted Sources */}
        <DraggableWrapper
          className="absolute top-0 right-0 sm:right-8 z-20 cursor-grab active:cursor-grabbing"
          delay={300}
          onDrag={() => {}}
          cardRef={card2Ref}
          onDragUpdate={updateLines}
        >
          <FeatureCard
            feature={FEATURES[1]}
            isVisible={isVisible}
            delay={300}
          />
        </DraggableWrapper>

        {/* Middle Left - Memo Composer */}
        <DraggableWrapper
          className="absolute top-1/2 -translate-y-1/2 left-0 z-20 cursor-grab active:cursor-grabbing"
          delay={400}
          onDrag={() => {}}
          cardRef={card3Ref}
          onDragUpdate={updateLines}
        >
          <FeatureCard
            feature={FEATURES[2]}
            isVisible={isVisible}
            delay={400}
          />
        </DraggableWrapper>

        {/* Middle Right - Document Analysis */}
        <DraggableWrapper
          className="absolute top-1/2 -translate-y-1/2 right-0 z-20 cursor-grab active:cursor-grabbing"
          delay={500}
          onDrag={() => {}}
          cardRef={card4Ref}
          onDragUpdate={updateLines}
        >
          <FeatureCard
            feature={FEATURES[3]}
            isVisible={isVisible}
            delay={500}
          />
        </DraggableWrapper>

        {/* Bottom - Academe Tax Accelerator */}
        <DraggableWrapper
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 cursor-grab active:cursor-grabbing"
          delay={600}
          onDrag={() => {}}
          cardRef={card5Ref}
          onDragUpdate={updateLines}
        >
          <FeatureCard
            feature={FEATURES[4]}
            isVisible={isVisible}
            delay={600}
          />
        </DraggableWrapper>
      </div>

      {/* Mobile Layout - Clean stacked list */}
      <div className="md:hidden space-y-6">
        {/* Central Circle for Mobile */}
        <div className="flex justify-center mb-8">
          <div
            className={`w-40 h-40 rounded-full bg-gradient-to-br from-[#2B7FFF] to-blue-500 shadow-2xl flex flex-col items-center justify-center transition-all duration-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          >
            <h3 className="text-white font-bold text-lg text-center px-6">
              IgniteTax
              <br />
              Co-Pilot
            </h3>
          </div>
        </div>

        {/* Features Stacked */}
        {FEATURES.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
            isVisible={isVisible}
            delay={(index + 1) * 100}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesDiagram;
