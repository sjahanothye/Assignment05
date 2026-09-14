import React from 'react';
import { X, Trash2 } from 'lucide-react';

export default function YourStack({
  stack,
  onRemoveItem,
  onClearAll,
}) {
  const count = stack.length;

  return (
    <div className="ui-card p-5 sm:p-6 bg-white sticky top-24 shadow-xs">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-sm font-bold text-slate-900">Your Stack</h2>
        <p className="text-xs text-slate-500 mt-0.5">
          {count === 0
            ? 'No technologies selected yet.'
            : `${count} ${count === 1 ? 'Technology' : 'Technologies'} Selected`}
        </p>
      </div>

      {/* Empty State */}
      {count === 0 ? (
        <div className="border border-dashed border-slate-200 rounded-xl py-10 px-4 text-center bg-slate-50/50">
          <p className="text-xs text-slate-400 font-medium">
            Your stack is empty.
          </p>
        </div>
      ) : (
        /* Selected Items List */
        <div className="space-y-3">
          <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 bg-slate-50/70 hover:bg-slate-100/80 transition-colors"
              >
                {/* Left: Icon & Info */}
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-7 h-7 flex items-center justify-center shrink-0">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-5 h-5 object-contain"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
                      }}
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 truncate">
                      {item.name}
                    </h4>
                    <span className="text-[10px] text-slate-500 block truncate">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Right: Remove Button (✕) */}
                <button
                  type="button"
                  onClick={() => onRemoveItem(item.id, item.name)}
                  className="w-6 h-6 rounded flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors shrink-0"
                  aria-label={`Remove ${item.name}`}
                  title={`Remove ${item.name}`}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Remove All Button */}
          <div className="pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={onClearAll}
              className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 transition-colors flex items-center justify-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Remove All</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
