import React from 'react';

export default function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Gradient rounded square icon with DS text matching exact Figma screenshot */}
      <div
        style={{
          background: 'linear-gradient(135deg, #8A2BE2 0%, #D946EF 50%, #FF2A85 100%)',
        }}
        className="w-8 h-8 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center text-white font-extrabold text-xs tracking-tight shadow-sm shrink-0"
      >
        DS
      </div>
      <span className="text-lg font-bold tracking-tight text-slate-900">
        Dev<span className="text-[#E0287D]">Stack</span>
      </span>
    </div>
  );
}
