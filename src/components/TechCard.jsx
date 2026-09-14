import React from 'react';
import { Star, Check } from 'lucide-react';

export default function TechCard({ tech, isAdded, onAddToStack }) {
  // Pastel badge colors matching Figma design
  const getBadgeStyle = (badge) => {
    switch (badge?.toLowerCase()) {
      case 'popular':
      case 'essential':
      case 'top sql':
      case 'robust':
      case 'containers':
      case 'full-stack':
        return 'bg-[#E0F2FE] text-[#0284C7]';
      case 'versatile':
      case 'standard':
        return 'bg-[#DCFCE7] text-[#16A34A]';
      case 'fast':
        return 'bg-[#FFEDD5] text-[#EA580C]';
      case 'cache':
        return 'bg-[#FEE2E2] text-[#DC2626]';
      case 'ubiquitous':
        return 'bg-[#FEF9C3] text-[#CA8A04]';
      case 'modern':
        return 'bg-[#CFFAFE] text-[#0891B2]';
      default:
        return 'bg-slate-100 text-slate-600';
    }
  };

  return (
    <div className="ui-card p-5 flex flex-col justify-between hover:shadow-md transition-all duration-200">
      <div>
        {/* Top Header: Icon & Badge */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="w-8 h-8 flex items-center justify-center">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-7 h-7 object-contain"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
              }}
            />
          </div>

          {tech.badge && (
            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${getBadgeStyle(tech.badge)}`}>
              {tech.badge}
            </span>
          )}
        </div>

        {/* Tech Title */}
        <h3 className="text-base font-bold text-slate-900 mb-1.5">
          {tech.name}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-500 leading-relaxed mb-4 min-h-[32px] line-clamp-2">
          {tech.description}
        </p>

        {/* Meta row: Category, Difficulty, Star Rating */}
        <div className="flex items-center justify-between text-xs mb-4 pt-1">
          <span className="px-2 py-0.5 rounded border border-slate-200 text-[11px] text-slate-600 bg-slate-50/50">
            {tech.category}
          </span>
          <span className="text-[11px] text-slate-500">
            {tech.difficulty}
          </span>
          <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-700">
            <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
            <span>{tech.rating?.toFixed(1) || '4.9'}</span>
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAddToStack(tech)}
        className={`w-full py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
          isAdded
            ? 'bg-slate-100 text-emerald-600 border border-emerald-200 cursor-not-allowed font-medium'
            : 'btn-card-dark cursor-pointer'
        }`}
      >
        {isAdded ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
            <span>✓ Added to Stack</span>
          </>
        ) : (
          <span>Add to Stack</span>
        )}
      </button>
    </div>
  );
}
