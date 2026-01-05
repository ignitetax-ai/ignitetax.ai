"use client";

import { ElementType } from "react";

interface StatCardProps {
  value: string;
  label: string;
  icon?: ElementType;
  delay?: number;
  className?: string;
}

const StatCard = ({
  value,
  label,
  icon: Icon,
  delay = 0,
  className = "",
}: StatCardProps) => {
  return (
    <div
      className={`card text-center p-6 hover:shadow-md transition-all duration-300 ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {Icon && (
        <div className="flex justify-center mb-3">
          <Icon
            size={32}
            weight="duotone"
            className="text-[#2B7FFF]"
            aria-hidden="true"
          />
        </div>
      )}
      <div className="text-3xl sm:text-4xl font-bold text-[#2B7FFF] mb-2">
        {value}
      </div>
      <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
