import React from 'react';
import { Loader2 } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="py-20 flex flex-col items-center justify-center space-y-3">
      <div className="w-12 h-12 rounded-full border-3 border-slate-200 border-t-[#E0287D] animate-spin flex items-center justify-center">
        <Loader2 className="w-5 h-5 text-[#E0287D] animate-pulse" />
      </div>
      <p className="text-xs font-semibold text-slate-600">Loading Technologies...</p>
    </div>
  );
}
