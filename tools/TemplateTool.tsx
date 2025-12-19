
import React, { useState } from 'react';

interface TemplateToolProps {
  toolId: string;
  placeholder: string;
  buttonText: string;
}

const TemplateTool: React.FC<TemplateToolProps> = ({ toolId, placeholder, buttonText }) => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const generate = () => {
    if (!input.trim()) return;
    const topic = input.trim();
    const year = new Date().getFullYear();
    let generated: string[] = [];

    switch (toolId) {
      case 'title-generator':
        generated = [
          `Why I regret ${topic} (Don't make this mistake)`,
          `The SECRET to ${topic} in ${year}`,
          `How to ${topic} like a PRO (Full Guide)`,
          `I tried ${topic} for 30 days and THIS happened...`,
          `Stop doing ${topic}! Do THIS instead.`,
          `${topic}: 5 Things No One Tells You`,
          `Is ${topic} actually worth it?`,
          `My ${topic} routine for ${year} (Step-by-Step)`,
          `Ranking EVERY ${topic} so you don't have to`,
          `This is why you are failing at ${topic}`
        ];
        break;
      case 'tag-generator':
        const clean = topic.toLowerCase().replace(/\s/g, '');
        generated = [
          topic, `${topic} ${year}`, `${topic} tips`, `${topic} tutorial`,
          `${topic} for beginners`, `how to ${topic}`, `best ${topic}`, 
          `youtube ${topic}`, `viral ${topic}`, `trending ${topic}`,
          `${topic} guide`, `learn ${topic}`, `${topic} course`
        ];
        break;
      case 'hashtag-generator':
      case 'shorts-hashtags':
        const tag = topic.replace(/\s/g, '');
        generated = [
          `#${tag}`, `#${tag}${year}`, `#${tag}Tips`, `#${tag}Tutorial`, `#Shorts`, 
          `#YouTubeShorts`, `#Trending`, `#Viral`, `#Creator`, `#${tag}Life`
        ];
        break;
      case 'bio-generator':
        generated = [
          `Hey everyone! Welcome to my channel about ${topic}. Every week I share tips, tutorials and my journey in the world of ${topic} to help you level up your skills. Subscribe to join the community!`,
          `I help creators master ${topic} through simple, actionable guides. If you want to grow your knowledge in ${topic}, hit the subscribe button and stay tuned for new videos every Tuesday!`,
          `Exploring the truth about ${topic} so you don't have to. On this channel, we dive deep into ${topic} and find the best ways to succeed in ${year}.`
        ];
        break;
      case 'video-idea-generator':
        generated = [
          `The history of ${topic} and how it changed everything`,
          `Day in the life of a ${topic} expert`,
          `Unboxing the most expensive ${topic} items`,
          `Reacting to viral ${topic} videos`,
          `Comparing the 5 best ${topic} products`,
          `Testing ${topic} myths vs reality`,
          `How I made $1000 using ${topic}`,
          `The ultimate beginner checklist for ${topic}`,
          `10 Tips to master ${topic} fast`,
          `Why ${topic} is the future of 2024`
        ];
        break;
      case 'shorts-script':
        generated = [
          `[HOOK]: Did you know that most people fail at ${topic}? \n[BODY]: It's because they forget the most important rule. Instead of doing X, you should always do Y. \n[VALUE]: This saves you time and gets you results faster. \n[CTA]: Subscribe for more ${topic} secrets!`,
          `[HOOK]: STOP doing ${topic} the old way! \n[BODY]: I found a hack that makes ${topic} 10x easier. First, set your focus to Z. Then, apply the formula. \n[RESULT]: Look at the difference! \n[CTA]: Comment "READY" if you want the full guide.`
        ];
        break;
      case 'channel-name-generator':
        const words = topic.split(' ')[0];
        generated = [
          `${words}Hub`, `The ${words} Show`, `${words}Vibe`, `Pro ${words}`, 
          `${words}Daily`, `${words}Mastery`, `Simply ${words}`, `${words}Quest`,
          `${words}Central`, `${words}Unleashed`
        ];
        break;
      default:
        generated = [`Helpful tips for ${topic}`, `Mastering ${topic} in ${year}`];
    }
    setResults(generated);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-[40px] border border-gray-100 dark:border-slate-700 shadow-sm transition-theme">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            className="flex-1 px-6 py-4 rounded-2xl border border-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-red-500 transition-all font-medium"
          />
          <button
            onClick={generate}
            className="bg-red-600 hover:bg-red-700 text-white font-black py-4 px-10 rounded-2xl transition-all shadow-xl shadow-red-600/20 active:scale-95 flex items-center justify-center min-w-[180px]"
          >
            <i className="fa-solid fa-wand-magic-sparkles mr-3"></i> {buttonText}
          </button>
        </div>
      </div>

      {results.length > 0 && (
        <div className="bg-white dark:bg-slate-800 p-8 rounded-[40px] border border-gray-100 dark:border-slate-700 shadow-sm animate-fade-in transition-theme">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <i className="fa-solid fa-list-ul text-red-500"></i> Generated Results
            </h3>
          </div>
          <div className="space-y-4">
            {results.map((res, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-slate-900 rounded-xl group border border-transparent hover:border-red-500/30 transition-all">
                <p className="text-gray-800 dark:text-gray-200 font-medium whitespace-pre-wrap">{res}</p>
                <button 
                  onClick={() => {navigator.clipboard.writeText(res); alert('Copied!');}}
                  className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                >
                  <i className="fa-regular fa-copy"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateTool;
