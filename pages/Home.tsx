
import React from 'react';
import { TOOLS } from '../constants';
import ToolCard from '../components/ToolCard';
import AdPlaceholder from '../components/AdPlaceholder';

const Home: React.FC = () => {
  const popularTools = TOOLS.slice(0, 6);

  return (
    <div className="space-y-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-500 text-xs font-black uppercase tracking-widest mb-8 border border-red-100 dark:border-red-900/30">
            <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
            Free Forever. No Login. AI-Powered.
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-8">
            The Ultimate <span className="text-red-600">YouTube Toolkit</span> For Pro Creators
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            From SEO optimization to revenue tracking, access 10+ professional tools designed to explode your channel growth and streamline your workflow.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="#/all-tools" 
              className="px-10 py-5 bg-red-600 text-white font-black rounded-2xl shadow-2xl shadow-red-500/30 hover:bg-red-700 hover:-translate-y-1 transition-all text-lg"
            >
              Browse All Tools
            </a>
            <a 
              href="#/category/Calculators" 
              className="px-10 py-5 bg-gray-900 dark:bg-slate-800 text-white font-black rounded-2xl shadow-xl hover:bg-gray-800 dark:hover:bg-slate-700 hover:-translate-y-1 transition-all text-lg"
            >
              Earnings Calc
            </a>
          </div>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-100 dark:bg-red-900/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-50 dark:bg-red-900/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 opacity-40"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdPlaceholder className="mb-20" />

        {/* Popular Tools */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 text-center md:text-left gap-6">
            <div>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-3">Trending Tools</h2>
              <p className="text-gray-500 dark:text-gray-400 font-medium">Tools currently blowing up in the creator community.</p>
            </div>
            <a href="#/all-tools" className="group px-6 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl font-bold text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-all flex items-center gap-2">
              Explore Library <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>

        {/* Feature Banner */}
        <section className="bg-red-600 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden mb-24">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to rank #1?</h2>
            <p className="text-red-100 text-lg mb-10 leading-relaxed font-medium">Join 50,000+ creators using our SEO suite to optimize their titles, tags, and descriptions for the YouTube algorithm.</p>
            <a href="#/category/SEO Tools" className="inline-block bg-white text-red-600 font-black px-12 py-5 rounded-2xl hover:scale-105 transition-all shadow-2xl">Get Started Now</a>
          </div>
          <i className="fa-solid fa-bolt absolute top-10 right-10 text-9xl text-white opacity-5"></i>
          <i className="fa-solid fa-star absolute bottom-10 left-10 text-9xl text-white opacity-5"></i>
        </section>

        <AdPlaceholder className="mt-12" />
      </div>
    </div>
  );
};

export default Home;
