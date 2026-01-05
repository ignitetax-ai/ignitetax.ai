"use client";

import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string;
  emoji?: string;
  delay?: number;
  className?: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  emoji,
  delay = 0,
  className = "",
}: FeatureCardProps) => {
  return (
    <div
      className={`card-hover h-full p-6 flex flex-col ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon Container */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-xl bg-blue-50 dark:bg-slate-700/50 flex items-center justify-center">
          {icon ? (
            <Image
              src={icon}
              alt=""
              width={40}
              height={40}
              className="object-contain"
              aria-hidden="true"
            />
          ) : emoji ? (
            <span className="text-3xl" aria-hidden="true">
              {emoji}
            </span>
          ) : null}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 text-center mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-600 dark:text-slate-400 text-center leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
