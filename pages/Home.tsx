
import React, { useEffect } from 'react';
import { TOOLS } from '../constants';
import ToolCard from '../components/ToolCard';
import ABHeadline from '../components/ABHeadline';
import TestimonialCard from '../components/TestimonialCard';
import ConversionBanner from '../components/ConversionBanner';
import { updateMetaTags } from '../utils/seo';

const Home: React.FC = () => {
  // Randomly pick A or B variant for headline on each page load
  const [headlineVariant] = React.useState<'A' | 'B'>(() => (Math.random() < 0.5 ? 'A' : 'B'));

  useEffect(() => {
    updateMetaTags(
      'YTToolKitPro - #1 Free YouTube Tools for Creators (SEO, AI, Revenue)',
      'Access 30+ free professional YouTube tools: AI Title Generator, Thumbnail Downloader, SEO Checker, Earnings Calculator, and more. No login required. Grow your channel faster with YTToolKitPro.'
    );
    // Log headline variant to Google Analytics if available
    if (window.gtag) {
      window.gtag('event', 'ab_test_headline', {
        event_category: 'A/B Test',
        event_label: headlineVariant,
        value: headlineVariant === 'A' ? 1 : 2
      });
    }
  }, [headlineVariant]);

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
      <section className="relative overflow-hidden pt-6 pb-12 px-4 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
              {/* Conversion Banner */}
              <div className="max-w-5xl mx-auto px-4">
                <ConversionBanner />
                {/* ad removed */}
              </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-[11px] font-black uppercase tracking-widest mb-6 border border-red-100 dark:border-red-900/30 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-red-600 animate-ping"></span>
            30+ Free Professional Creator Tools
          </div>

          <section className="mb-8">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">Grow Your Channel Faster with 30+ Free YouTube Tools</h2>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Instantly generate viral titles, thumbnails, and analytics. 30+ tools. No login. No limits. 100% free for creators.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <a
                href="/category/Calculators"
                className="px-12 py-5 bg-gray-900 dark:bg-slate-800 text-white font-black rounded-2xl shadow-xl hover:bg-black dark:hover:bg-slate-700 transition-all text-lg"
              >
                Revenue Calcs
              </a>
              <a
                href="/all-tools"
                className="px-12 py-5 bg-red-600 text-white font-black rounded-2xl shadow-2xl shadow-red-600/40 hover:bg-red-700 transition-all text-lg"
              >
                Browse Library
              </a>
            </div>
          </section>
        </div>
        
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 w-full h-full -translate-x-1/2 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-red-100 dark:bg-red-900/10 rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-50 dark:bg-red-900/5 rounded-full blur-[150px] opacity-40"></div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdPlaceholder type="banner" className="mb-24" />

        {/* Popular Tools Section */}
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
            <p className="text-gray-500 dark:text-gray-400 font-medium">Leveraging advanced logic for ultra-accurate title, tag, and script generation.</p>
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

        {/* Testimonials & Trust Badges */}
        <section className="mb-32">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-8">What Creators Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                name="Ali"
                role="Gaming Creator"
                text="YT Toolkit helped me triple my channel’s growth in 3 months!"
                avatarUrl="https://randomuser.me/api/portraits/men/32.jpg"
              />
              <TestimonialCard
                name="Sara"
                role="Vlogger"
                text="The SEO tools are a game changer. My videos finally rank!"
                avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
              />
              <TestimonialCard
                name="John"
                role="Tech Reviewer"
                text="No login, no fees, just results. Love it!"
                avatarUrl="https://randomuser.me/api/portraits/men/65.jpg"
              />
              <TestimonialCard
                name="Priya"
                role="Education Channel"
                text="I love the instant results and the free calculators. Super helpful for planning my content!"
                avatarUrl="https://randomuser.me/api/portraits/women/68.jpg"
              />
              <TestimonialCard
                name="Carlos"
                role="Music Producer"
                text="The thumbnail downloader and AI title generator are my go-to tools. Highly recommended!"
                avatarUrl="https://randomuser.me/api/portraits/men/77.jpg"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full text-xs font-bold text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-slate-700"><i className="fa-solid fa-shield-check text-red-600"></i> SSL Secure</span>
            <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full text-xs font-bold text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-slate-700"><i className="fa-solid fa-lock-open text-red-600"></i> No Login Required</span>
            <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full text-xs font-bold text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-slate-700"><i className="fa-solid fa-bolt text-red-600"></i> 100% Free</span>
            <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full text-xs font-bold text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-slate-700"><i className="fa-solid fa-users text-red-600"></i> Trusted by 100k+ Creators</span>
          </div>
        </section>
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

        {/* ad removed */}
      </div>
    </div>
  );
};

export default Home;
