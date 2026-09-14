import React from 'react';

export default function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Pink rounded square icon with DS text */}
      <div className="w-8 h-8 rounded-lg bg-[#E0287D] flex items-center justify-center text-white font-black text-xs tracking-tighter shadow-sm">
        DS
      </div>
      <span className="text-lg font-bold tracking-tight text-slate-900">
        Dev<span className="text-[#E0287D]">Stack</span>
      </span>
    </div>
  );
}
