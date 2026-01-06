"use client";

import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  highlightedWord?: string;
  description?: ReactNode;
  id?: string;
  className?: string;
}

const SectionHeader = ({
  title,
  highlightedWord,
  description,
  id,
  className = "",
}: SectionHeaderProps) => {
  const renderTitle = () => {
    if (!highlightedWord) {
      return <span className="text-[#2B7FFF]">{title}</span>;
    }

    const parts = title.split(highlightedWord);
    return (
      <>
        <span className="text-slate-800 dark:text-slate-100">{parts[0]}</span>
        <span className="text-[#2B7FFF]">{highlightedWord}</span>
        {parts[1] && (
          <span className="text-slate-800 dark:text-slate-100">{parts[1]}</span>
        )}
      </>
    );
  };

  return (
    <div className={`text-center space-y-4 ${className}`}>
      <h2
        id={id}
        className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-slate-100"
      >
        {renderTitle()}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
