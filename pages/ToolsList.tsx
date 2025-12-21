
import React from 'react';
import { useParams } from 'react-router-dom';
import { TOOLS } from '../constants';
import { ToolCategory } from '../types';
import ToolCard from '../components/ToolCard';
import AdPlaceholder from '../components/AdPlaceholder';

const ToolsList: React.FC = () => {
  const { catId } = useParams<{ catId?: string }>();
  
  const filteredTools = catId 
    ? TOOLS.filter(t => t.category === catId)
    : TOOLS;

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

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <a 
          href="#/all-tools"
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${!catId ? 'bg-red-600 text-white' : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-slate-700 hover:border-red-200'}`}
        >
          All
        </a>
        {Object.values(ToolCategory).map(cat => (
          <a
            key={cat}
            href={`#/category/${cat}`}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${catId === cat ? 'bg-red-600 text-white shadow-lg shadow-red-500/20' : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-slate-700 hover:border-red-200'}`}
          >
            {cat}
          </a>
        ))}
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
