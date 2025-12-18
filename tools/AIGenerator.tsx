import React, { useState } from 'react';
import { generateWithAI, getAIPromptForTool } from '../services/gemini';

interface AIGeneratorProps {
  toolId: string;
  placeholder: string;
  buttonText: string;
}

const AIGenerator: React.FC<AIGeneratorProps> = ({ toolId, placeholder, buttonText }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const { prompt, system } = getAIPromptForTool(toolId, input);
    const text = await generateWithAI(prompt, system);
    setResult(text);
    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    alert('Copied to clipboard!');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
          />
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors disabled:opacity-50 whitespace-nowrap"
          >
            {loading ? (
              <><i className="fa-solid fa-spinner fa-spin mr-2"></i> Generating...</>
            ) : buttonText}
          </button>
        </div>
      </div>

      {result && (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm animate-fade-in transition-colors">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900 dark:text-white">Result:</h3>
            <button
              onClick={copyToClipboard}
              className="text-sm text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium flex items-center gap-1"
            >
              <i className="fa-regular fa-copy"></i> Copy Results
            </button>
          </div>
          <div className="prose prose-red dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
            {result}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIGenerator;