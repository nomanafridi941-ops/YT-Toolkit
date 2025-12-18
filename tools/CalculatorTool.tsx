import React, { useState, useEffect } from 'react';

interface CalculatorToolProps {
  type?: 'earnings' | 'engagement' | 'ctr' | 'money-goal' | 'video-planner' | 'sponsorship' | 'tax' | 'rpm' | 'watch-time' | 'cpm';
}

const CalculatorTool: React.FC<CalculatorToolProps> = ({ type = 'earnings' }) => {
  const [val1, setVal1] = useState<number>(10000);
  const [val2, setVal2] = useState<number>(3);
  const [val3, setVal3] = useState<number>(0);

  // Default values based on type
  useEffect(() => {
    if (type === 'ctr') { setVal1(1000); setVal2(50); }
    if (type === 'engagement') { setVal1(5000); setVal2(200); }
    if (type === 'watch-time') { setVal1(1000); setVal2(4.5); }
    if (type === 'rpm' || type === 'cpm') { setVal1(500); setVal2(50000); }
    if (type === 'video-planner') { setVal1(10); setVal2(5); }
  }, [type]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
  };

  const renderContent = () => {
    switch (type) {
      case 'earnings':
        const dailyLow = (val1 / 1000) * val2 * 0.25;
        const dailyHigh = (val1 / 1000) * val2;
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-4 flex justify-between">
                  Estimated Daily Views: <span className="text-red-600 font-black">{val1.toLocaleString()}</span>
                </label>
                <input type="range" min="1000" max="1000000" step="1000" value={val1} onChange={(e) => setVal1(parseInt(e.target.value))} className="w-full h-2 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-600" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-4 flex justify-between">
                  Average CPM ($): <span className="text-red-600 font-black">${val2}</span>
                </label>
                <input type="range" min="0.5" max="20" step="0.5" value={val2} onChange={(e) => setVal2(parseFloat(e.target.value))} className="w-full h-2 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-600" />
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-slate-900/50 rounded-[32px] p-8 border border-gray-100 dark:border-slate-800 space-y-6">
              <h3 className="text-center text-[10px] font-black uppercase text-gray-400 tracking-widest">Projected Earnings</h3>
              <div className="flex justify-between py-3 border-b border-gray-100 dark:border-slate-800"><span className="text-sm font-bold dark:text-gray-300">Daily</span><span className="font-black text-gray-900 dark:text-white">{formatCurrency(dailyLow)} - {formatCurrency(dailyHigh)}</span></div>
              <div className="flex justify-between py-3 border-b border-gray-100 dark:border-slate-800"><span className="text-sm font-bold dark:text-gray-300">Monthly</span><span className="font-black text-gray-900 dark:text-white">{formatCurrency(dailyLow * 30)} - {formatCurrency(dailyHigh * 30)}</span></div>
              <div className="flex justify-between py-4 text-red-600 font-black text-2xl"><span>Yearly</span><span>{formatCurrency(dailyLow * 365)} - {formatCurrency(dailyHigh * 365)}</span></div>
            </div>
          </div>
        );

      case 'ctr':
        const ctr = val1 > 0 ? (val2 / val1) * 100 : 0;
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Total Impressions</label>
                <input type="number" value={val1} onChange={(e) => setVal1(parseInt(e.target.value) || 0)} className="w-full px-5 py-4 rounded-2xl border border-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Total Clicks</label>
                <input type="number" value={val2} onChange={(e) => setVal2(parseInt(e.target.value) || 0)} className="w-full px-5 py-4 rounded-2xl border border-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-red-500" />
              </div>
            </div>
            <div className="bg-red-50 dark:bg-red-900/10 rounded-[32px] p-10 flex flex-col items-center justify-center text-center">
              <span className="text-red-600 text-xs font-black uppercase mb-2 tracking-widest">Click-Through Rate</span>
              <span className="text-6xl font-black text-red-600">{ctr.toFixed(2)}%</span>
              <p className="mt-4 text-sm font-medium text-red-400">{ctr > 8 ? "Excellent Performance!" : ctr > 4 ? "Good Performance" : "Needs Improvement"}</p>
            </div>
          </div>
        );

      case 'engagement':
        const engagement = val1 > 0 ? (val2 / val1) * 100 : 0;
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Total Views</label>
                <input type="number" value={val1} onChange={(e) => setVal1(parseInt(e.target.value) || 0)} className="w-full px-5 py-4 rounded-2xl border border-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Total Interactions (Likes + Comments)</label>
                <input type="number" value={val2} onChange={(e) => setVal2(parseInt(e.target.value) || 0)} className="w-full px-5 py-4 rounded-2xl border border-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-red-500" />
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/10 rounded-[32px] p-10 flex flex-col items-center justify-center text-center">
              <span className="text-blue-600 dark:text-blue-400 text-xs font-black uppercase mb-2 tracking-widest">Engagement Rate</span>
              <span className="text-6xl font-black text-blue-700 dark:text-blue-300">{engagement.toFixed(2)}%</span>
            </div>
          </div>
        );

      case 'watch-time':
        const hours = (val1 * val2) / 60;
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Total Lifetime Views</label>
                <input type="number" value={val1} onChange={(e) => setVal1(parseInt(e.target.value) || 0)} className="w-full px-5 py-4 rounded-2xl border border-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Avg. View Duration (Minutes)</label>
                <input type="number" step="0.1" value={val2} onChange={(e) => setVal2(parseFloat(e.target.value) || 0)} className="w-full px-5 py-4 rounded-2xl border border-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-red-500" />
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/10 rounded-[32px] p-10 flex flex-col items-center justify-center text-center">
              <span className="text-purple-600 dark:text-purple-400 text-xs font-black uppercase mb-2 tracking-widest">Total Watch Time</span>
              <span className="text-5xl font-black text-purple-700 dark:text-purple-300">{Math.round(hours).toLocaleString()} Hours</span>
              <div className="mt-6 w-full h-3 bg-purple-200 dark:bg-purple-900/40 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-purple-600 transition-all duration-1000" 
                  style={{ width: `${Math.min(100, (hours/4000)*100)}%` }}
                ></div>
              </div>
              <p className="text-xs font-bold text-purple-500 mt-2 uppercase">Progress to 4,000h: {((hours/4000)*100).toFixed(1)}%</p>
            </div>
          </div>
        );

      case 'rpm':
      case 'cpm':
        const label = type === 'rpm' ? 'Earnings' : 'Cost';
        const resLabel = type === 'rpm' ? 'RPM' : 'CPM';
        const result = val2 > 0 ? (val1 / val2) * 1000 : 0;
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Total {label} ($)</label>
                <input type="number" value={val1} onChange={(e) => setVal1(parseFloat(e.target.value) || 0)} className="w-full px-5 py-4 rounded-2xl border border-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Total Views</label>
                <input type="number" value={val2} onChange={(e) => setVal2(parseInt(e.target.value) || 0)} className="w-full px-5 py-4 rounded-2xl border border-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-red-500" />
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/10 rounded-[32px] p-10 flex flex-col items-center justify-center text-center">
              <span className="text-green-600 dark:text-green-400 text-xs font-black uppercase mb-2 tracking-widest">{resLabel} Value</span>
              <span className="text-6xl font-black text-green-700 dark:text-green-300">${result.toFixed(2)}</span>
            </div>
          </div>
        );

      case 'video-planner':
        const shootingTime = val1 * val2;
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Target Final Length (Minutes)</label>
                <input type="number" value={val1} onChange={(e) => setVal1(parseInt(e.target.value) || 0)} className="w-full px-5 py-4 rounded-2xl border border-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Raw-to-Final Ratio (e.g. 5 means 5m raw for 1m final)</label>
                <input type="number" value={val2} onChange={(e) => setVal2(parseInt(e.target.value) || 0)} className="w-full px-5 py-4 rounded-2xl border border-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
              </div>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/10 rounded-[32px] p-10 flex flex-col items-center justify-center text-center">
              <span className="text-orange-600 dark:text-orange-400 text-xs font-black uppercase mb-2 tracking-widest">Estimated Shooting Time</span>
              <span className="text-5xl font-black text-orange-700 dark:text-orange-300">{shootingTime} Minutes</span>
              <p className="mt-4 text-sm text-gray-500 font-medium">Approx. {(shootingTime / 60).toFixed(1)} Hours on set</p>
            </div>
          </div>
        );

      default:
        return <div className="p-12 text-center text-gray-400 italic">Advanced logic for this calculator is being calibrated...</div>;
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-[40px] border border-gray-100 dark:border-slate-700 transition-colors shadow-sm">
      {renderContent()}
    </div>
  );
};

export default CalculatorTool;
