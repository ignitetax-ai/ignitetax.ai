"use client";

import { ReactNode } from "react";

interface HighlightedTextProps {
  children: ReactNode;
  className?: string;
}

const HighlightedText = ({
  children,
  className = "",
}: HighlightedTextProps) => {
  return (
    <span className={`text-[#2B7FFF] font-semibold ${className}`}>
      {children}
    </span>
  );
};

export default HighlightedText;
