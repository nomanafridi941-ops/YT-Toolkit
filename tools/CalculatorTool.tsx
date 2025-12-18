
import React, { useState } from 'react';

interface CalculatorToolProps {
  type?: 'earnings' | 'engagement' | 'ctr' | 'money-goal' | 'video-planner' | 'sponsorship' | 'tax' | 'rpm' | 'watch-time' | 'cpm';
}

const CalculatorTool: React.FC<CalculatorToolProps> = ({ type = 'earnings' }) => {
  const [val1, setVal1] = useState<number>(10000);
  const [val2, setVal2] = useState<number>(3);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
  };

  const renderContent = () => {
    if (type === 'earnings') {
      const dailyLow = (val1 / 1000) * val2 * 0.25;
      const dailyHigh = (val1 / 1000) * val2;
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Estimated Daily Views: <span className="text-red-600">{val1.toLocaleString()}</span></label>
              <input type="range" min="1000" max="1000000" step="1000" value={val1} onChange={(e) => setVal1(parseInt(e.target.value))} className="w-full h-2 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-600" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Average CPM ($): <span className="text-red-600">{val2}</span></label>
              <input type="range" min="0.5" max="20" step="0.5" value={val2} onChange={(e) => setVal2(parseFloat(e.target.value))} className="w-full h-2 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-600" />
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-slate-900/50 rounded-xl p-6 border border-gray-100 dark:border-slate-800 space-y-4 text-gray-900 dark:text-white">
            <h3 className="text-center text-xs font-black uppercase text-gray-400">Projected Earnings</h3>
            <div className="flex justify-between py-2 border-b border-gray-100 dark:border-slate-800"><span>Daily</span><span className="font-bold">{formatCurrency(dailyLow)} - {formatCurrency(dailyHigh)}</span></div>
            <div className="flex justify-between py-2 border-b border-gray-100 dark:border-slate-800"><span>Monthly</span><span className="font-bold">{formatCurrency(dailyLow * 30)} - {formatCurrency(dailyHigh * 30)}</span></div>
            <div className="flex justify-between py-2 text-red-600 font-black text-xl"><span>Yearly</span><span>{formatCurrency(dailyLow * 365)} - {formatCurrency(dailyHigh * 365)}</span></div>
          </div>
        </div>
      );
    }

    if (type === 'rpm' || type === 'cpm') {
      const calcLabel = type === 'rpm' ? 'Earnings' : 'Cost';
      const resultLabel = type === 'rpm' ? 'RPM' : 'CPM';
      const views = val2 || 1;
      const result = (val1 / views) * 1000;
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Total {calcLabel} ($)</label>
              <input type="number" value={val1} onChange={(e) => setVal1(parseFloat(e.target.value) || 0)} className="w-full px-4 py-3 rounded-xl border dark:bg-slate-800 dark:text-white dark:border-slate-700" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Total Views</label>
              <input type="number" value={val2} onChange={(e) => setVal2(parseInt(e.target.value) || 0)} className="w-full px-4 py-3 rounded-xl border dark:bg-slate-800 dark:text-white dark:border-slate-700" />
            </div>
          </div>
          <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-8 flex flex-col items-center justify-center text-center">
            <span className="text-gray-500 text-sm font-black uppercase mb-2">{resultLabel} Result</span>
            <span className="text-5xl font-black text-red-600">{formatCurrency(result)}</span>
          </div>
        </div>
      );
    }

    if (type === 'watch-time') {
      const hours = (val1 * val2) / 60;
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Total Views</label>
              <input type="number" value={val1} onChange={(e) => setVal1(parseInt(e.target.value) || 0)} className="w-full px-4 py-3 rounded-xl border dark:bg-slate-800 dark:text-white dark:border-slate-700" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Avg. View Duration (Mins)</label>
              <input type="number" value={val2} onChange={(e) => setVal2(parseFloat(e.target.value) || 0)} className="w-full px-4 py-3 rounded-xl border dark:bg-slate-800 dark:text-white dark:border-slate-700" />
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-8 flex flex-col items-center justify-center text-center">
            <span className="text-blue-600 text-sm font-black uppercase mb-2">Total Watch Hours</span>
            <span className="text-5xl font-black text-blue-700 dark:text-blue-400">{Math.round(hours).toLocaleString()}</span>
          </div>
        </div>
      );
    }

    return <div className="p-8 text-center text-gray-400">Generic Calculator Content for {type}</div>;
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-200 dark:border-slate-700 transition-colors duration-300">
      {renderContent()}
    </div>
  );
};

export default CalculatorTool;
