
import React, { useState } from 'react';

interface TemplateToolProps {
  toolId: string;
  placeholder: string;
  buttonText: string;
}

const TemplateTool: React.FC<TemplateToolProps> = ({ toolId, placeholder, buttonText }) => {
  const [input, setInput] = useState('');
  const [descInput, setDescInput] = useState(''); // Used for SEO Checker / Tag Extractor
  const [results, setResults] = useState<any[]>([]);

  const generate = () => {
    if (!input.trim()) return;
    const topic = input.trim();
    const year = new Date().getFullYear();
    let generated: any[] = [];

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
      case 'tag-extractor':
        const words = (toolId === 'tag-extractor' ? input : topic).toLowerCase().split(/[\s,]+/);
        generated = words.filter(w => w.length > 3).map(w => `${w} tutorial`).concat(
          words.filter(w => w.length > 4).map(w => `best ${w} ${year}`),
          [topic, `${topic} ${year}`, `how to ${topic}`]
        ).filter((v, i, a) => a.indexOf(v) === i).slice(0, 20);
        break;

      case 'hashtag-generator':
      case 'shorts-hashtags':
        const cleanTag = topic.replace(/\s/g, '');
        generated = [
          `#${cleanTag}`, `#${cleanTag}${year}`, `#${cleanTag}Tips`, `#${cleanTag}Tutorial`, 
          `#Shorts`, `#YouTubeShorts`, `#Trending`, `#Viral`, `#Creator`, `#FYP`, `#VideoSEO`
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
      case 'shorts-ideas':
      case 'playlist-generator':
        generated = [
          { title: `The history of ${topic} and how it changed everything`, reason: "High search volume for evergreen history content." },
          { title: `Day in the life of a ${topic} expert`, reason: "Personality-driven content builds community." },
          { title: `Unboxing the most expensive ${topic} items`, reason: "High visual appeal and curiosity factor." },
          { title: `Reacting to viral ${topic} videos`, reason: "Leverage existing trends for views." },
          { title: `Comparing the 5 best ${topic} products`, reason: "High intent keywords (Best for affiliate income)." },
          { title: `Testing ${topic} myths vs reality`, reason: "Educational and debunking content is viral-prone." },
          { title: `How I made $1000 using ${topic}`, reason: "Financial outcome triggers immediate interest." },
          { title: `The ultimate beginner checklist for ${topic}`, reason: "Searchable and helpful for newcomers." },
          { title: `10 Tips to master ${topic} fast`, reason: "Actionable listicle content." },
          { title: `Why ${topic} is the future of ${year+1}`, reason: "Future-looking statements drive clicks." }
        ];
        break;

      case 'description-generator':
        generated = [
          `--- VIDEO SUMMARY ---\nIn today's video, we are diving deep into ${topic}. I'll show you exactly how to master this niche in ${year} without making the common mistakes most beginners do.\n\n--- TIMESTAMPS ---\n0:00 Intro\n1:20 Getting Started with ${topic}\n4:45 Pro Secret revealed\n8:10 Mistakes to avoid\n12:30 Conclusion\n\n--- RESOURCES ---\nCheck out our website: https://yttoolkitpro.com\nJoin the newsletter: [Your Link]\n\n#${topic.replace(/\s/g,'')} #YouTubeTips #Growth`
        ];
        break;

      case 'seo-checker':
        const score = Math.min(100, (topic.length > 20 && topic.length < 70 ? 40 : 15) + (descInput.length > 200 ? 40 : 15) + (descInput.toLowerCase().includes(topic.toLowerCase()) ? 20 : 0));
        generated = [
          { 
            score, 
            analysis: [
              topic.length > 70 ? "🔴 Title is too long (keep under 70 chars)" : topic.length < 15 ? "🟡 Title is a bit short" : "🟢 Title length is optimized",
              descInput.length < 150 ? "🔴 Description is too short (aim for 300+ chars)" : "🟢 Description length is good",
              descInput.toLowerCase().includes(topic.toLowerCase()) ? "🟢 Keyword found in description" : "🔴 Missing main keyword in description",
              "🟡 Suggestion: Add at least 3 relevant hashtags to the bottom of your description."
            ]
          }
        ];
        break;

      case 'keyword-research':
        generated = [
          { kw: `how to ${topic}`, vol: 'High', comp: 'Medium' },
          { kw: `${topic} tutorial for beginners`, vol: 'High', comp: 'Low' },
          { kw: `best ${topic} for ${year}`, vol: 'Medium', comp: 'Low' },
          { kw: `${topic} review ${year}`, vol: 'Medium', comp: 'Medium' },
          { kw: `why ${topic} is important`, vol: 'Low', comp: 'Very Low' },
          { kw: `${topic} vs competitor`, vol: 'Medium', comp: 'High' }
        ];
        break;

      case 'shorts-script':
        generated = [
          `[HOOK]: Did you know that most people fail at ${topic}? \n[BODY]: It's because they forget the most important rule. Instead of doing X, you should always do Y. \n[VALUE]: This saves you time and gets you results faster. \n[CTA]: Subscribe for more ${topic} secrets!`,
          `[HOOK]: STOP doing ${topic} the old way! \n[BODY]: I found a hack that makes ${topic} 10x easier. First, set your focus to Z. Then, apply the formula. \n[RESULT]: Look at the difference! \n[CTA]: Comment "READY" if you want the full guide.`
        ];
        break;

      case 'channel-name-generator':
        const root = topic.split(' ')[0];
        generated = [
          `${root}Hub`, `The ${root} Show`, `${root}Vibe`, `Pro ${root}`, 
          `${root}Daily`, `${root}Mastery`, `Simply ${root}`, `${root}Quest`,
          `${root}Central`, `${root}Unleashed`, `Inside ${root}`, `${root}TV`,
          `${root} Lab`, `${root} Mastery`
        ];
        break;
      
      case 'hook-generator':
        generated = [
          `You've been lied to about ${topic}...`,
          `I bet you didn't know this ${topic} secret.`,
          `This is exactly how I mastered ${topic} in 7 days.`,
          `Stop scrolling if you want to learn ${topic}!`,
          `Most people think ${topic} is hard, but it's not.`,
          `The #1 mistake you're making with ${topic}.`
        ];
        break;

      case 'timestamp-generator':
        generated = [
          `00:00 - Introduction to ${topic}`,
          `01:30 - Why ${topic} matters in ${year}`,
          `03:45 - Step 1: Setting up your ${topic} workflow`,
          `06:20 - The Secret to ${topic} success`,
          `09:15 - Common ${topic} mistakes to avoid`,
          `11:50 - Conclusion & Final Tips`
        ];
        break;

      case 'pinned-comment-generator':
        generated = [
          `What's your #1 struggle with ${topic}? Comment below and I'll try to help! 👇`,
          `If you found this guide to ${topic} helpful, don't forget to LIKE for the algorithm! Which part was your favorite?`,
          `Question of the day: Have you tried ${topic} before? Let's discuss in the comments!`
        ];
        break;

      case 'thumbnail-text-generator':
        generated = [
          `IT WORKS!`, `DON'T DO THIS`, `SECRET REVEALED`, `${year} GUIDE`, `FINALLY!`, `100% VIRAL`, `THE TRUTH`
        ];
        break;

      case 'channel-analytics-viewer':
      case 'competitor-analyst':
        generated = [
          { title: `${topic} Average Views`, value: "10k - 50k" },
          { title: `${topic} Competition Level`, value: "Medium-High" },
          { title: `${topic} Best Monetization`, value: "Sponsorships & Affiliates" },
          { title: `${topic} Growth Trend`, value: "Increasing (+12%)" }
        ];
        break;

      default:
        generated = [`Expert strategy for ${topic}`, `Mastering ${topic} in ${year}`];
    }
    setResults(generated);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-[40px] border border-gray-100 dark:border-slate-700 shadow-sm transition-theme">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={placeholder}
              className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-red-500 transition-all font-medium"
            />
          </div>
          {(toolId === 'seo-checker' || toolId === 'tag-extractor') && (
            <textarea
              value={descInput}
              onChange={(e) => setDescInput(e.target.value)}
              placeholder={toolId === 'seo-checker' ? "Paste your video description here..." : "Paste the text you want to extract tags from..."}
              className="w-full h-32 px-6 py-4 rounded-2xl border border-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-red-500 transition-all font-medium no-scrollbar"
            />
          )}
          <button
            onClick={generate}
            className="bg-red-600 hover:bg-red-700 text-white font-black py-4 px-10 rounded-2xl transition-all shadow-xl shadow-red-600/20 active:scale-95 flex items-center justify-center"
          >
            <i className="fa-solid fa-wand-magic-sparkles mr-3"></i> {buttonText}
          </button>
        </div>
      </div>

      {results.length > 0 && (
        <div className="bg-white dark:bg-slate-800 p-8 rounded-[40px] border border-gray-100 dark:border-slate-700 shadow-sm animate-fade-in transition-theme">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <i className="fa-solid fa-list-ul text-red-500"></i> Optimized Results
            </h3>
          </div>
          
          <div className="space-y-4">
            {toolId === 'seo-checker' ? (
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-6 bg-gray-50 dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800">
                  <div className="relative w-24 h-24">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path className="text-gray-200 dark:text-gray-700 stroke-current" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="text-red-500 stroke-current" strokeWidth="3" strokeDasharray={`${results[0].score}, 100`} strokeLinecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center font-black text-xl dark:text-white">{results[0].score}%</div>
                  </div>
                  <div className="font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest">SEO Score</div>
                </div>
                <div className="grid gap-3">
                  {results[0].analysis.map((line: string, i: number) => (
                    <div key={i} className="p-4 bg-gray-50 dark:bg-slate-900 rounded-xl font-bold text-gray-700 dark:text-gray-300 flex items-center gap-3">
                      <i className={`fa-solid ${line.startsWith('🟢') ? 'fa-circle-check text-green-500' : line.startsWith('🔴') ? 'fa-circle-xmark text-red-500' : 'fa-circle-exclamation text-yellow-500'}`}></i>
                      {line.substring(2)}
                    </div>
                  ))}
                </div>
              </div>
            ) : toolId === 'keyword-research' ? (
              <div className="overflow-hidden rounded-2xl border border-gray-100 dark:border-slate-800">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 dark:bg-slate-900">
                    <tr>
                      <th className="p-4 font-black text-xs uppercase text-gray-400">Keyword</th>
                      <th className="p-4 font-black text-xs uppercase text-gray-400">Volume</th>
                      <th className="p-4 font-black text-xs uppercase text-gray-400">Competition</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-slate-800 dark:bg-slate-800">
                    {results.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-slate-700/50 transition-colors">
                        <td className="p-4 font-bold dark:text-white">{row.kw}</td>
                        <td className="p-4"><span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-[10px] font-black uppercase tracking-tighter">{row.vol}</span></td>
                        <td className="p-4"><span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${row.comp === 'Low' || row.comp === 'Very Low' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'}`}>{row.comp}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : toolId === 'channel-analytics-viewer' || toolId === 'competitor-analyst' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {results.map((res, i) => (
                  <div key={i} className="p-6 bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800">
                    <span className="block text-[10px] font-black text-gray-400 uppercase mb-1 tracking-widest">{res.title}</span>
                    <span className="text-xl font-black text-gray-900 dark:text-white">{res.value}</span>
                  </div>
                ))}
              </div>
            ) : (
              results.map((res, i) => {
                const text = typeof res === 'string' ? res : res.title;
                const sub = typeof res === 'object' ? res.reason : null;
                return (
                  <div key={i} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-slate-900 rounded-xl group border border-transparent hover:border-red-500/30 transition-all">
                    <div className="flex-1">
                      <p className="text-gray-800 dark:text-gray-200 font-bold whitespace-pre-wrap">{text}</p>
                      {sub && <p className="text-xs text-gray-400 mt-1 italic">{sub}</p>}
                    </div>
                    <button 
                      onClick={() => {navigator.clipboard.writeText(text); alert('Copied to clipboard!');}}
                      className="p-2 text-gray-400 hover:text-red-600 transition-colors ml-4"
                      title="Copy to clipboard"
                    >
                      <i className="fa-regular fa-copy"></i>
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateTool;
