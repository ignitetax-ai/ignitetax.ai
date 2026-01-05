"use client";

interface FeaturePillProps {
  emoji: string;
  text: string;
  className?: string;
}

const FeaturePill = ({ emoji, text, className = "" }: FeaturePillProps) => {
  return (
    <div
      className={`flex items-center space-x-2 px-4 py-2 sm:px-5 sm:py-3 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm ${className}`}
    >
      <span className="text-xl" aria-hidden="true">
        {emoji}
      </span>
      <span className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200">
        {text}
      </span>
    </div>
  );
};

export default FeaturePill;
