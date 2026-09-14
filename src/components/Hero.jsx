import React from 'react';
import bannerImg from '../assets/banner-stack.png';

export default function Hero({ onExploreClick, onLearnMoreClick }) {
  return (
    <section className="py-10 sm:py-16 lg:py-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1120] tracking-tight leading-[1.12]">
              Build Your Ideal<br />
              <span className="brand-gradient-text">Development Stack</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#technologies"
                onClick={onExploreClick}
                className="btn-gradient px-6 py-3 rounded-lg text-sm font-semibold shadow-sm inline-flex items-center justify-center transition-all"
              >
                Explore Technologies
              </a>

              <button
                type="button"
                onClick={onLearnMoreClick}
                className="px-6 py-3 rounded-lg text-sm font-medium text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 border border-slate-200 transition-all shadow-2xs"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column: Hero Banner Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative max-w-sm sm:max-w-md w-full">
              <img
                src={bannerImg}
                alt="Development Stack Illustration"
                className="w-full h-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/assets/banner-stack.png';
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
