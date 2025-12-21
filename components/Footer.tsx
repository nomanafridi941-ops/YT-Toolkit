
import React from 'react';
import { Logo, APP_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 pt-16 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-6 text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
              The world's most comprehensive toolkit for YouTube creators. Grow your channel with AI SEO, advanced calculators, and viral tools. No login. No fees. Just growth.
            </p>
            <div className="flex space-x-5 mt-8">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-widest mb-6">Quick Tools</h3>
            <ul className="space-y-3">
              <li><a href="/category/SEO Tools" className="text-gray-500 dark:text-gray-400 hover:text-red-600 text-sm transition-colors">SEO Suite</a></li>
              <li><a href="/category/Calculators" className="text-gray-500 dark:text-gray-400 hover:text-red-600 text-sm transition-colors">Revenue Calcs</a></li>
              <li><a href="/category/Thumbnail Tools" className="text-gray-500 dark:text-gray-400 hover:text-red-600 text-sm transition-colors">Thumbnails</a></li>
              <li><a href="/category/Shorts Tools" className="text-gray-500 dark:text-gray-400 hover:text-red-600 text-sm transition-colors">Shorts Tools</a></li>
              <li><a href="/all-tools" className="text-gray-500 dark:text-gray-400 hover:text-red-600 text-sm font-bold transition-colors">Browse 30+ Tools</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-widest mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-500 dark:text-gray-400 hover:text-red-600 text-sm transition-colors">Our Story</a></li>
              <li><a href="/contact" className="text-gray-500 dark:text-gray-400 hover:text-red-600 text-sm transition-colors">Contact</a></li>
              <li><a href="/privacy" className="text-gray-500 dark:text-gray-400 hover:text-red-600 text-sm transition-colors">Privacy</a></li>
              <li><a href="/sitemap" className="text-gray-500 dark:text-gray-400 hover:text-red-600 text-sm transition-colors">Sitemap</a></li>
              <li><a href="/disclaimer" className="text-gray-500 dark:text-gray-400 hover:text-red-600 text-sm transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 dark:text-gray-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} {APP_NAME}. Built for the creator economy. Not affiliated with YouTube.
          </p>
          <div className="flex gap-4">
            <span className="flex items-center gap-1 text-[10px] font-bold text-gray-300 dark:text-gray-600 uppercase">
              <i className="fa-solid fa-shield-check"></i> SSL Secure
            </span>
            <span className="flex items-center gap-1 text-[10px] font-bold text-gray-300 dark:text-gray-600 uppercase">
              <i className="fa-solid fa-bolt"></i> 99.9% Uptime
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
