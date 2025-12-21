
import React from 'react';
import { TOOLS } from '../constants';
import ToolCard from '../components/ToolCard';
import AdPlaceholder from '../components/AdPlaceholder';
import TopBannerAd from '../components/TopBannerAd';

const Home: React.FC = () => {
  // Select a mix of high-demand tools for the homepage
  const popularTools = TOOLS.filter(t => [
    'thumbnail-downloader', 
    'title-generator', 
    'youtube-earnings-calculator', 
    'seo-checker',
    'keyword-research',
    'shorts-ideas'
  ].includes(t.id));

  return (
    <div className="space-y-24 bg-gray-50 dark:bg-[#0f172a] transition-theme pb-20">
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
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="#E11D48" strokeWidth="4" fill="transparent" opacity="0.3" />
              </svg>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
            Dominate the algorithm with AI-powered SEO, precise revenue calculators, and viral content generators. No login. No limits.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <a 
              href="/all-tools" 
              className="px-12 py-5 bg-red-600 text-white font-black rounded-2xl shadow-2xl shadow-red-600/40 hover:bg-red-700 hover:-translate-y-1 active:translate-y-0 transition-all text-lg"
            >
              Browse Library
            </a>
            <a 
              href="/category/Calculators" 
              className="px-12 py-5 bg-gray-900 dark:bg-slate-800 text-white font-black rounded-2xl shadow-xl hover:bg-black dark:hover:bg-slate-700 hover:-translate-y-1 active:translate-y-0 transition-all text-lg"
            >
              Revenue Calcs
            </a>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 dark:opacity-20 grayscale">
            <div className="flex items-center gap-2 font-black text-xl italic"><i className="fa-brands fa-youtube"></i> YouTube</div>
            <div className="flex items-center gap-2 font-black text-xl italic"><i className="fa-brands fa-tiktok"></i> TikTok</div>
            <div className="flex items-center gap-2 font-black text-xl italic"><i className="fa-brands fa-instagram"></i> Shorts</div>
          </div>
        </div>
        
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 w-full h-full -translate-x-1/2 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-red-100 dark:bg-red-900/10 rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-50 dark:bg-red-900/5 rounded-full blur-[150px] opacity-40"></div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Popular Tools Section */}
        <div className="mt-8 mb-16">
          <TopBannerAd />
        </div>
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 text-center md:text-left gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">Must-Have Tools</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 font-bold">The foundation for every high-performing YouTube channel.</p>
            </div>
            <a href="/all-tools" className="group px-8 py-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl font-black text-gray-800 dark:text-gray-200 hover:border-red-600 dark:hover:border-red-600 transition-all flex items-center gap-3 shadow-sm hover:shadow-md">
              View All 30+ Tools <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform"></i>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>

        {/* Feature Grid */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-800 p-10 rounded-[40px] border border-gray-100 dark:border-slate-700 shadow-sm">
            <div className="w-14 h-14 bg-red-600 text-white rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-lg shadow-red-600/20"><i className="fa-solid fa-microchip"></i></div>
            <h3 className="text-2xl font-black mb-4 dark:text-white">AI Optimization</h3>
            <p className="text-gray-500 dark:text-gray-400 font-medium">Leveraging Gemini 3 for ultra-accurate title, tag, and script generation.</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-10 rounded-[40px] border border-gray-100 dark:border-slate-700 shadow-sm">
            <div className="w-14 h-14 bg-gray-900 dark:bg-slate-700 text-white rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-lg"><i className="fa-solid fa-lock-open"></i></div>
            <h3 className="text-2xl font-black mb-4 dark:text-white">No Registration</h3>
            <p className="text-gray-500 dark:text-gray-400 font-medium">We don't collect emails. Access all premium tools instantly without logging in.</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-10 rounded-[40px] border border-gray-100 dark:border-slate-700 shadow-sm">
            <div className="w-14 h-14 bg-red-600 text-white rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-lg shadow-red-600/20"><i className="fa-solid fa-ranking-star"></i></div>
            <h3 className="text-2xl font-black mb-4 dark:text-white">SEO Focused</h3>
            <p className="text-gray-500 dark:text-gray-400 font-medium">Tools built specifically to satisfy the YouTube algorithm's ranking factors.</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-red-600 rounded-[50px] p-12 md:p-24 text-center relative overflow-hidden mb-32 shadow-[0_35px_60px_-15px_rgba(225,29,72,0.3)]">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">Skyrocket Your Views</h2>
            <p className="text-red-100 text-xl mb-12 leading-relaxed font-bold opacity-90">Our SEO suite helps you find untapped keywords and create titles that command attention. Start optimizing for free.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/category/SEO Tools" className="inline-block bg-white text-red-600 font-black px-12 py-5 rounded-2xl hover:scale-105 transition-all text-lg shadow-xl">Get Started Now</a>
              <a href="/blog" className="inline-block bg-red-700 text-white font-black px-12 py-5 rounded-2xl hover:bg-red-800 transition-all text-lg">Read Growth Blog</a>
            </div>
          </div>
          <i className="fa-solid fa-play absolute -top-10 -right-10 text-[200px] text-white opacity-5 rotate-12"></i>
          <i className="fa-solid fa-chart-line absolute -bottom-10 -left-10 text-[180px] text-white opacity-5 -rotate-12"></i>
        </section>

      </div>
    </div>
  );
};

export default Home;
