
import React, { useState, useEffect } from 'react';
import { Logo } from '../constants';
import { ToolCategory } from '../types';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
           (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const categories = Object.values(ToolCategory);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex-shrink-0">
            <Logo />
          </a>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors">Home</a>
            
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors py-4">
                Tools <i className="fa-solid fa-chevron-down text-[10px]"></i>
              </button>
              <div className="absolute top-full left-0 w-56 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                <a href="/all-tools" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 font-medium">View All Tools</a>
                <div className="border-t border-gray-100 dark:border-slate-700 my-1"></div>
                {categories.map((cat) => (
                  <a
                    key={cat}
                    href={`/category/${cat}`}
                    className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-red-600 transition-colors"
                  >
                    {cat}
                  </a>
                ))}
              </div>
            </div>

            <a href="/about" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors">About</a>
            <a href="/contact" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors">Contact</a>
            
            <button 
              onClick={toggleDarkMode}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button 
              onClick={toggleDarkMode}
              className="p-2 text-gray-600 dark:text-gray-300"
            >
              <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors"
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 py-4 px-4 shadow-lg animate-fade-in-down">
          <div className="flex flex-col space-y-3">
            <a href="/" onClick={() => setIsMenuOpen(false)} className="px-3 py-2 text-base font-bold text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors">Home</a>
            <div className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-widest">Tool Categories</div>
            {categories.map((cat) => (
              <a
                key={cat}
                href={`/category/${cat}`}
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                {cat}
              </a>
            ))}
            <div className="border-t border-gray-100 dark:border-slate-800 my-2"></div>
            <a href="/about" onClick={() => setIsMenuOpen(false)} className="px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors">About Us</a>
            <a href="/contact" onClick={() => setIsMenuOpen(false)} className="px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
