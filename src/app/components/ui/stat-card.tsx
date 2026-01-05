"use client";

interface StatCardProps {
  value: string;
  label: string;
  emoji?: string;
  delay?: number;
  className?: string;
}

const StatCard = ({
  value,
  label,
  emoji,
  delay = 0,
  className = "",
}: StatCardProps) => {
  return (
    <div
      className={`card text-center p-6 hover:shadow-md transition-all duration-300 ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {emoji && (
        <div className="text-3xl mb-3" aria-hidden="true">
          {emoji}
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
