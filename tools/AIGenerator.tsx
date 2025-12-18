
import React, { useState } from 'react';
import { generateWithAIStream, getAIPromptForTool } from '../services/gemini';

interface AIGeneratorProps {
  toolId: string;
  placeholder: string;
  buttonText: string;
}

const AIGenerator: React.FC<AIGeneratorProps> = ({ toolId, placeholder, buttonText }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    setResult(''); // Clear previous results
    setIsStreaming(true);

    try {
      const { prompt, system } = getAIPromptForTool(toolId, input);
      const stream = generateWithAIStream(prompt, system);
      
      let fullText = '';
      for await (const chunk of stream) {
        fullText += chunk;
        setResult(fullText);
        // Once we get the first chunk, we are no longer "loading" in the traditional sense
        if (loading) setLoading(false);
      }
    } catch (error) {
      console.error("Generation failed:", error);
      setResult("Sorry, something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setIsStreaming(false);
    }
  };

  const copyToClipboard = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    alert('Copied to clipboard!');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-[40px] border border-gray-100 dark:border-slate-700 shadow-sm transition-theme">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            placeholder={placeholder}
            className="flex-1 px-6 py-4 rounded-2xl border border-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all font-medium"
            disabled={loading || isStreaming}
          />
          <button
            onClick={handleGenerate}
            disabled={loading || isStreaming || !input.trim()}
            className="bg-red-600 hover:bg-red-700 text-white font-black py-4 px-10 rounded-2xl transition-all disabled:opacity-50 whitespace-nowrap shadow-xl shadow-red-600/20 active:scale-95 flex items-center justify-center min-w-[180px]"
          >
            {loading ? (
              <><i className="fa-solid fa-spinner fa-spin mr-3"></i> Initializing...</>
            ) : isStreaming ? (
              <><i className="fa-solid fa-bolt-lightning animate-pulse mr-3"></i> Writing...</>
            ) : (
              <><i className="fa-solid fa-wand-magic-sparkles mr-3"></i> {buttonText}</>
            )}
          </button>
        </div>
      </div>

      {(result || isStreaming) && (
        <div className="bg-white dark:bg-slate-800 p-8 rounded-[40px] border border-gray-100 dark:border-slate-700 shadow-sm animate-fade-in transition-theme relative overflow-hidden">
          {isStreaming && (
            <div className="absolute top-0 left-0 w-full h-1 bg-red-600/10 overflow-hidden">
              <div className="h-full bg-red-600 animate-[loading_2s_infinite]"></div>
            </div>
          )}
          
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <i className="fa-solid fa-sparkles text-red-500"></i> AI Generated Result
            </h3>
            {result && !isStreaming && (
              <button
                onClick={copyToClipboard}
                className="text-xs bg-gray-100 dark:bg-slate-900 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 font-black px-4 py-2 rounded-xl transition-all flex items-center gap-2 border border-transparent hover:border-red-100 dark:hover:border-red-900/30"
              >
                <i className="fa-regular fa-copy"></i> Copy All
              </button>
            )}
          </div>
          
          <div className="prose prose-red dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-medium leading-relaxed">
            {result}
            {isStreaming && <span className="inline-block w-2 h-5 ml-1 bg-red-600 animate-pulse rounded-sm align-middle"></span>}
          </div>
        </div>
      )}

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default AIGenerator;
