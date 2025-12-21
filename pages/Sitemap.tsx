
import React from 'react';
import AdPlaceholder from '../components/AdPlaceholder';
import { TOOLS } from '../constants';
import { ToolCategory } from '../types';

const Sitemap: React.FC = () => {
  const categories = Object.values(ToolCategory);

  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen transition-colors">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">Sitemap</h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium">A complete list of all pages and tools on YTToolKitPro.</p>
        </div>

        <AdPlaceholder type="banner" className="mb-10" />

        <div className="space-y-12">
          {/* Main Pages */}
          <section>
            <h2 className="text-xl font-bold text-red-600 mb-6 flex items-center gap-2">
              <i className="fa-solid fa-folder-open"></i> Main Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['/', '/all-tools', '/about', '/contact', '/privacy', '/disclaimer', '/blog'].map(path => (
                <a 
                  key={path}
                  href={`#${path}`} 
                  className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 hover:border-red-500 transition-all font-bold text-gray-800 dark:text-gray-200"
                >
                  {path === '/' ? 'Home Page' : path.substring(1).split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </a>
              ))}
            </div>
          </section>

          {/* Categories */}
          <section>
            <h2 className="text-xl font-bold text-red-600 mb-6 flex items-center gap-2">
              <i className="fa-solid fa-tags"></i> Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categories.map(cat => (
                <a 
                  key={cat}
                  href={`#/category/${cat}`} 
                  className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 hover:border-red-500 transition-all font-bold text-gray-800 dark:text-gray-200"
                >
                  {cat}
                </a>
              ))}
            </div>
          </section>

          {/* All Tools */}
          <section>
            <h2 className="text-xl font-bold text-red-600 mb-6 flex items-center gap-2">
              <i className="fa-solid fa-wrench"></i> All 30+ Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {TOOLS.map(tool => (
                <a 
                  key={tool.id}
                  href={`#/tool/${tool.id}`} 
                  className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors text-sm font-medium flex items-center gap-2"
                >
                  <i className="fa-solid fa-chevron-right text-[8px]"></i> {tool.name}
                </a>
              ))}
            </div>
          </section>
        </div>

        <AdPlaceholder type="banner" className="mt-12" />
      </div>
    </div>
  );
};

export default Sitemap;
