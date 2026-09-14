import React, { useState } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenAuth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'Technologies', href: '#technologies', active: false },
    { name: 'Projects', href: '#projects', active: false },
    { name: 'About', href: '#about', active: false },
    { name: 'Contact', href: '#contact', active: false },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Mobile Left: Hamburger Icon */}
          <div className="flex items-center lg:hidden">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -ml-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Brand Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <Logo />
            </a>
          </div>

          {/* Desktop Center: Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.active
                    ? 'text-[#E0287D] font-semibold'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Sign In & Sign Up buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => onOpenAuth && onOpenAuth('signin')}
              className="text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-950 transition-colors px-1"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => onOpenAuth && onOpenAuth('signup')}
              className="px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#E0287D] hover:bg-[#c91e6c] transition-all shadow-sm"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-5 space-y-1 shadow-lg animate-in fade-in duration-150">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                link.active
                  ? 'text-[#E0287D] bg-pink-50 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth && onOpenAuth('signin');
              }}
              className="w-full text-center py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth && onOpenAuth('signup');
              }}
              className="w-full py-2.5 rounded-full text-sm font-semibold text-white bg-[#E0287D] text-center shadow-sm"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
