import React from 'react';
import TechCard from './TechCard';

export default function TechGrid({
  technologies,
  selectedStackIds,
  onAddToStack,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}) {
  const categories = [
    'All',
    'Frontend',
    'Backend',
    'Database',
    'Language',
    'Styling',
    'DevOps',
  ];

  const filteredTechs = technologies.filter((tech) => {
    const matchesCategory =
      activeCategory === 'All' ||
      tech.category?.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch =
      tech.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.category?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Search & Category Filter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-2">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onCategoryChange(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="w-full sm:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search technologies..."
            className="w-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#E0287D] transition-colors"
          />
        </div>
      </div>

      {/* 3-Column Grid */}
      {filteredTechs.length === 0 ? (
        <div className="py-12 text-center border border-dashed border-slate-200 rounded-xl p-6">
          <p className="text-sm font-medium text-slate-600">No technologies found.</p>
          <button
            type="button"
            onClick={() => {
              onSearchChange('');
              onCategoryChange('All');
            }}
            className="mt-2 text-xs text-[#E0287D] font-semibold underline"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredTechs.map((tech) => (
            <TechCard
              key={tech.id}
              tech={tech}
              isAdded={selectedStackIds.includes(tech.id)}
              onAddToStack={onAddToStack}
            />
          ))}
        </div>
      )}
    </div>
  );
}
