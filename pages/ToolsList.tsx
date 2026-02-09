
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TOOLS } from '../constants';
import { ToolCategory } from '../types';
import ToolCard from '../components/ToolCard';
import AdPlaceholder from '../components/AdPlaceholder';
import { updateMetaTags } from '../utils/seo';

const ToolsList: React.FC = () => {
  const { catId } = useParams<{ catId?: string }>();
  

  const [search, setSearch] = React.useState('');
  const filteredTools = (catId 
    ? TOOLS.filter(t => t.category === catId)
    : TOOLS
  ).filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.description.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (catId) {
      updateMetaTags(
        `${catId} - Free YouTube Tools | YTToolKitPro`,
        `Explore our collection of ${catId.toLowerCase()} for YouTube creators. Free, professional-grade tools with no login required.`
      );
    } else {
      updateMetaTags(
        'All YouTube Tools - Complete Toolkit | YTToolKitPro',
        'Browse our complete library of 30+ free YouTube tools for SEO, thumbnails, calculators, and more. Everything you need to grow your channel.'
      );
    }
  }, [catId]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
          {catId ? catId : 'All Creator Tools'}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          {catId 
            ? `Specialized ${catId} to help you optimize and scale your channel's performance.`
            : 'Explore our complete toolkit of SEO generators, calculators, and utility apps built for modern YouTube creators.'}
        </p>
      </div>

      <div className="flex justify-center mb-6">
        <div className="w-full max-w-7xl">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search tools..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white text-base focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
            aria-label="Search tools"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-3 mb-6 justify-center">
        <a 
          href="/all-tools"
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${!catId ? 'bg-red-600 text-white' : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-slate-700 hover:border-red-200'}`}
        >
          All
        </a>
        {Object.values(ToolCategory).map(cat => (
          <a
            key={cat}
            href={`/category/${cat}`}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${catId === cat ? 'bg-red-600 text-white shadow-lg shadow-red-500/20' : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-slate-700 hover:border-red-200'}`}
          >
            {cat}
          </a>
        ))}
      </div>

      {/* Sidebar-style ad for tools pages (visible on md+) */}
      <div className="hidden md:flex justify-center mb-12">
        <div className="w-[300px]">
          <AdPlaceholder type="sidebar" label="Sponsored" />
        </div>
      </div>

      <AdPlaceholder type="banner" className="mb-12" />

      <div className="tool-grid">
        {filteredTools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      <div className="mt-12 mb-12">
        <AdPlaceholder type="banner" />
      </div>
    </div>
  );
};

export default ToolsList;
