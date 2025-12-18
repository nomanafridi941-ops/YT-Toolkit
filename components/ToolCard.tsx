
import React from 'react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <a 
      href={`#/tool/${tool.id}`}
      className="group block bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700 hover:border-red-500 dark:hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 h-full"
    >
      <div className="w-14 h-14 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-500 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
        <i className={`${tool.icon} text-2xl`}></i>
      </div>
      <h3 className="text-xl font-extrabold text-gray-900 dark:text-white group-hover:text-red-600 transition-colors mb-2">
        {tool.name}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
        {tool.description}
      </p>
    </a>
  );
};

export default ToolCard;
