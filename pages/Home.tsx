
import React from 'react';
import { TOOLS } from '../constants';
import ToolCard from '../components/ToolCard';
import AdPlaceholder from '../components/AdPlaceholder';

const Home: React.FC = () => {
  const popularTools = TOOLS.filter(t => [
    'thumbnail-downloader', 
    'title-generator', 
    'youtube-earnings-calculator', 
    'seo-checker',
    'keyword-research',
    'shorts-ideas'
  ].includes(t.id));

  return (
    <div className="bg-gray-50 dark:bg-[#0f172a] transition-theme">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 px-4 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-[11px] font-black uppercase tracking-widest mb-10 border border-red-100 dark:border-red-900/30 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-red-600 animate-ping"></span>
            30+ Free Professional Creator Tools
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.05] mb-10">
            Growth Hacking For <br className="hidden md:block" />
            <span className="text-red-600 relative inline-block">
              Modern Creators
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
            Dominate the algorithm with AI-powered SEO and viral content generators. No login. No limits.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <a href="#/all-tools" className="px-12 py-5 bg-red-600 text-white font-black rounded-2xl shadow-2xl shadow-red-600/40 hover:bg-red-700 hover:-translate-y-1 active:translate-y-0 transition-all text-lg">Browse Library</a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        {/* Top Ad */}
        <div className="w-full flex justify-center">
          <AdPlaceholder type="banner" />
        </div>

        {/* Popular Tools Section */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 text-center md:text-left gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">Must-Have Tools</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 font-bold">The foundation for every high-performing channel.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>

        {/* Bottom Ad */}
        <div className="w-full flex justify-center pt-10">
          <AdPlaceholder type="banner" />
        </div>
      </div>
      <div className="h-20"></div> {/* Extra space for footer visibility */}
    </div>
  );
};

export default Home;
