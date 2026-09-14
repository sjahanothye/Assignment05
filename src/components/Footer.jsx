import React from 'react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="about" className="border-t border-slate-100 bg-white text-slate-600 pt-14 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
          
          {/* Brand Block */}
          <div className="lg:col-span-2 space-y-3">
            <Logo />
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            {/* Social Text Links */}
            <div className="flex items-center gap-4 pt-1 text-xs text-slate-600 font-medium">
              <a
                href="https://github.com/sjahanothye/Assignment05"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-950 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-950 transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-950 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Group 1: Product */}
          <div>
            <h4 className="text-[11px] font-bold text-slate-900 tracking-wider uppercase mb-3">
              Product
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Home</a></li>
              <li><a href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</a></li>
              <li><a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Group 2: Company */}
          <div>
            <h4 className="text-[11px] font-bold text-slate-900 tracking-wider uppercase mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#about" className="hover:text-slate-900 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Group 3: Legal */}
          <div>
            <h4 className="text-[11px] font-bold text-slate-900 tracking-wider uppercase mb-3">
              Legal
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright + Links */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {currentYear} DevStack. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
