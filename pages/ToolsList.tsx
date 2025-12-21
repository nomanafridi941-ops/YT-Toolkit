
import React from 'react';
import { useParams } from 'react-router-dom';
import { TOOLS } from '../constants';
import { ToolCategory } from '../types';
import ToolCard from '../components/ToolCard';
import AdPlaceholder from '../components/AdPlaceholder';
import TopBannerAd from '../components/TopBannerAd';

const ToolsList: React.FC = () => {
  const { catId } = useParams<{ catId?: string }>();
  
  const filteredTools = catId 
    ? TOOLS.filter(t => t.category === catId)
    : TOOLS;

  const categories = Object.values(ToolCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-gray-900 mb-4">
          {catId ? catId : 'All Creator Tools'}
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          {catId 
            ? `Specialized ${catId} to help you optimize and scale your channel's performance.`
            : 'Explore our complete toolkit of SEO generators, calculators, and utility apps built for modern YouTube creators.'}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <a 
          href="/all-tools"
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${!catId ? 'bg-red-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-red-200'}`}
        >
          All
        </a>
        {categories.map(cat => (
          <a
            key={cat}
            href={`#/category/${cat}`}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${catId === cat ? 'bg-red-600 text-white shadow-lg shadow-red-500/20' : 'bg-white text-gray-600 border border-gray-200 hover:border-red-200'}`}
          >
            {cat}
          </a>
        ))}
      </div>

      <div className="mb-12">
        <TopBannerAd />
      </div>

      <div className="tool-grid">
        {filteredTools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      <div className="mt-24 pt-16 border-t border-gray-200 dark:border-slate-800 mb-12">
        <TopBannerAd />
      </div>
    </div>
  );
};

export default ToolsList;
