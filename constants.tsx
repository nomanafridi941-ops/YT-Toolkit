
import React from 'react';
import { Tool, ToolCategory } from './types';

export const APP_NAME = "YTToolKitPro";

export const Logo = () => (
  <div className="flex items-center gap-4 group">
    <div className="relative">
      <svg width="52" height="52" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl transition-transform group-hover:scale-105 duration-500">
        {/* Main YouTube Style Body with Gradient */}
        <defs>
          <linearGradient id="brandRed" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="#FF4D4D" />
            <stop offset="100%" stopColor="#CC0000" />
          </linearGradient>
        </defs>
        
        {/* Background Body */}
        <rect x="0" y="15" width="100" height="70" rx="22" fill="url(#brandRed)" />
        
        {/* Subtle Gloss Overlay */}
        <path d="M10 25C10 20.5817 13.5817 17 18 17H82C86.4183 17 90 20.5817 90 25V35C90 35 60 45 10 35V25Z" fill="white" fillOpacity="0.1" />

        {/* Prominent Play Triangle */}
        <path d="M42 38L65 50L42 62V38Z" fill="white" />

        {/* Distinct Wrench-Chart Hybrid */}
        <path 
          d="M15 70L30 55L45 65L65 45L80 55M85 35V50H70" 
          stroke="white" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="opacity-90 drop-shadow-md"
        />
        
        {/* Wrench Head Detail at start of chart */}
        <circle cx="15" cy="70" r="6" stroke="white" strokeWidth="4" />
        <path d="M15 67V73M12 70H18" stroke="white" strokeWidth="2" />
      </svg>
      
      {/* Power-up Badge */}
      <div className="absolute -top-1 -right-1 bg-slate-900 dark:bg-red-500 rounded-full w-5 h-5 flex items-center justify-center border-2 border-white dark:border-slate-900 shadow-lg">
        <i className="fa-solid fa-bolt text-[10px] text-white"></i>
      </div>
    </div>
    
    <div className="flex flex-col leading-tight">
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white uppercase italic">
          YT<span className="text-red-600">TOOLKIT</span>
        </span>
        <span className="px-1.5 py-0.5 bg-red-600 text-[10px] text-white font-black rounded-md italic">PRO</span>
      </div>
      <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 tracking-[0.2em] uppercase">Scale Your Channel</span>
    </div>
  </div>
);

export const TOOLS: Tool[] = [
  // THUMBNAIL TOOLS
  {
    id: 'thumbnail-downloader',
    name: 'Thumbnail Downloader',
    description: 'Download HD thumbnails from any YouTube video in 4K, HD, and SD.',
    category: ToolCategory.Thumbnails,
    icon: 'fa-solid fa-cloud-arrow-down',
    type: 'utility',
    seoTitle: 'YouTube Thumbnail Downloader - Free HD & 4K',
    seoDescription: 'Download high-quality YouTube thumbnails for free. Paste any video URL to extract thumbnails.',
    howToUse: ['Paste YouTube URL', 'Click Get Thumbnails', 'Download HD version'],
    faqs: [{ question: 'Is it free?', answer: 'Yes, unlimited downloads.' }, { question: 'Does it work for Shorts?', answer: 'Yes, it works for both Videos and Shorts.' }]
  },
  {
    id: 'thumbnail-preview',
    name: 'Thumbnail Preview Tool',
    description: 'Test how your thumbnail looks on Desktop and Mobile feeds before uploading.',
    category: ToolCategory.Thumbnails,
    icon: 'fa-solid fa-display',
    type: 'utility',
    seoTitle: 'YouTube Thumbnail Preview & CTR Tester',
    seoDescription: 'Preview your video thumbnail in a real YouTube feed environment.',
    howToUse: ['Upload thumbnail image', 'Enter your video title', 'Check results on the live feed preview'],
    faqs: [{ question: 'Why use this?', answer: 'To check if your text is readable and your colors pop on mobile devices.' }]
  },
  {
    id: 'thumbnail-text-generator',
    name: 'AI Thumbnail Text',
    description: 'Short, punchy words that get people to click.',
    category: ToolCategory.Thumbnails,
    icon: 'fa-solid fa-pen-nib',
    type: 'ai',
    seoTitle: 'YouTube Thumbnail Text Overlay Generator',
    seoDescription: 'Get high-CTR text ideas for your thumbnail images.',
    howToUse: ['Enter your video topic', 'Generate text ideas', 'Apply best ones to your design'],
    faqs: [{ question: 'How many words?', answer: 'Keep it under 3-4 words for best readability.' }]
  },

  // SEO TOOLS
  {
    id: 'title-generator',
    name: 'AI Title Generator',
    description: 'Create viral, click-worthy titles for your videos using advanced AI.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-wand-magic-sparkles',
    type: 'ai',
    seoTitle: 'Best AI YouTube Title Generator - Increase CTR',
    seoDescription: 'Generate catchy, viral titles for your YouTube videos in seconds.',
    howToUse: ['Enter your main topic', 'Select generate', 'Pick the most clickable title'],
    faqs: [{ question: 'Is it unique?', answer: 'Yes, AI creates fresh ideas every time.' }]
  },
  {
    id: 'description-generator',
    name: 'AI Description Gen',
    description: 'Professional, SEO-optimized descriptions with timestamps and CTAs.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-file-signature',
    type: 'ai',
    seoTitle: 'YouTube Video Description Generator - AI Tool',
    seoDescription: 'Create SEO friendly descriptions for better ranking.',
    howToUse: ['Input video title', 'Generate description', 'Paste in YouTube Studio'],
    faqs: [{ question: 'Does it include SEO?', answer: 'Yes, it optimizes for search algorithms.' }]
  },
  {
    id: 'tag-generator',
    name: 'AI Tags Generator',
    description: 'Find high-ranking keywords and tags to rank your video #1.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-tags',
    type: 'ai',
    seoTitle: 'YouTube Tags Generator - SEO Tool',
    seoDescription: 'Find high volume tags for your content.',
    howToUse: ['Enter video topic', 'Generate tags', 'Copy to YouTube Studio tags section'],
    faqs: [{ question: 'How many tags?', answer: 'We provide enough to fill the 500-character limit.' }]
  },
  {
    id: 'hashtag-generator',
    name: 'Hashtag Generator',
    description: 'Get trending and relevant hashtags for your YouTube niche.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-hashtag',
    type: 'ai',
    seoTitle: 'YouTube Hashtag Generator - Trending Tags',
    seoDescription: 'Boost video reach with the right hashtags.',
    howToUse: ['Enter niche', 'Generate', 'Paste in description'],
    faqs: [{ question: 'Where do hashtags go?', answer: 'Paste them at the bottom of your description.' }]
  },
  {
    id: 'keyword-research',
    name: 'AI Keyword Research',
    description: 'Find low-competition, high-volume topics for your niche.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-magnifying-glass-plus',
    type: 'ai',
    seoTitle: 'Free YouTube Keyword Research Tool',
    seoDescription: 'Discover high potential video topics.',
    howToUse: ['Enter broad topic', 'Analyze keywords', 'Pick low-competition terms'],
    faqs: [{ question: 'Is it updated?', answer: 'Yes, it uses real-time search trends.' }]
  },
  {
    id: 'seo-checker',
    name: 'Video SEO Checker',
    description: 'Audit your video metadata to see if it is search optimized.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-check-double',
    type: 'ai',
    seoTitle: 'YouTube Video SEO Audit Tool',
    seoDescription: 'Check if your video is ready for search.',
    howToUse: ['Paste your title/tags', 'Run audit', 'Follow improvement tips'],
    faqs: [{ question: 'What score is good?', answer: 'Aim for 80/100 or higher.' }]
  },
  {
    id: 'hook-generator',
    name: 'AI Hook Generator',
    description: 'Opener scripts that stop the scroll instantly.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-anchor',
    type: 'ai',
    seoTitle: 'YouTube Video Hook Generator',
    seoDescription: 'Viral hooks for your openers.',
    howToUse: ['Enter topic', 'Generate', 'Record first 5s'],
    faqs: [{ question: 'Why hooks?', answer: 'Crucial for audience retention.' }]
  },
  {
    id: 'retention-tips',
    name: 'Retention Strategy',
    description: 'Get AI advice on how to keep viewers watching longer.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-brain',
    type: 'ai',
    seoTitle: 'YouTube Retention Improvement Strategies',
    seoDescription: 'Growth tips for longer watch time.',
    howToUse: ['Describe video', 'Get audit', 'Apply edits'],
    faqs: [{ question: 'Does editing matter?', answer: 'Yes, pacing is everything.' }]
  },

  // SHORTS TOOLS
  {
    id: 'shorts-ideas',
    name: 'Shorts Ideas Gen',
    description: 'Viral concepts specifically for vertical video format.',
    category: ToolCategory.Shorts,
    icon: 'fa-solid fa-bolt-lightning',
    type: 'ai',
    seoTitle: 'YouTube Shorts Ideas Generator',
    seoDescription: 'Viral concepts for vertical shorts.',
    howToUse: ['Pick niche', 'Generate ideas', 'Record vertical video'],
    faqs: [{ question: 'Why shorts?', answer: 'Fastest way to get subscribers.' }]
  },
  {
    id: 'shorts-hashtags',
    name: 'Shorts Hashtag Gen',
    description: 'The best #shorts hashtags to trigger the algorithm.',
    category: ToolCategory.Shorts,
    icon: 'fa-brands fa-tiktok',
    type: 'ai',
    seoTitle: 'Shorts Viral Hashtag Generator',
    seoDescription: 'Boost your shorts visibility.',
    howToUse: ['Enter topic', 'Generate', 'Add to caption'],
    faqs: [{ question: 'How many?', answer: '3-5 are recommended for Shorts.' }]
  },
  {
    id: 'shorts-script',
    name: 'AI Shorts Script',
    description: 'Fast-paced, high-retention 60s scripts.',
    category: ToolCategory.Shorts,
    icon: 'fa-solid fa-feather-pointed',
    type: 'ai',
    seoTitle: 'AI YouTube Shorts Scriptwriter',
    seoDescription: 'Scripts optimized for high retention.',
    howToUse: ['Enter topic', 'Generate script', 'Record audio'],
    faqs: [{ question: 'Is it timed?', answer: 'Yes, approx 50-60 seconds.' }]
  },
  {
    id: 'upload-time-tool',
    name: 'Upload Time Calc',
    description: 'Determine the best time to post for peak reach.',
    category: ToolCategory.Shorts,
    icon: 'fa-solid fa-calendar-check',
    type: 'utility',
    seoTitle: 'Best Time to Upload to YouTube Calculator',
    seoDescription: 'Find when your audience is most active.',
    howToUse: ['Select niche', 'See hours', 'Schedule video'],
    faqs: [{ question: 'Does it work for shorts?', answer: 'Yes, especially for shorts.' }]
  },

  // CALCULATORS
  {
    id: 'youtube-earnings-calculator',
    name: 'Earnings Calculator',
    description: 'Estimate your potential revenue based on views and CPM.',
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-sack-dollar',
    type: 'calculator',
    seoTitle: 'YouTube Money Calculator - Estimated AdSense',
    seoDescription: 'Calculate how much you can earn from YouTube.',
    howToUse: ['Set daily views', 'Adjust CPM slider', 'View monthly/yearly profit'],
    faqs: [{ question: 'What is CPM?', answer: 'Cost Per Mille (1,000 views).' }]
  },
  {
    id: 'watch-time-calc',
    name: 'Watch Time Calc',
    description: 'Calculate how close you are to the 4000h goal.',
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-stopwatch',
    type: 'calculator',
    seoTitle: 'YouTube Watch Time Calculator',
    seoDescription: 'Track monetization progress.',
    howToUse: ['Enter total views', 'Enter avg duration', 'Check total hours'],
    faqs: [{ question: 'Monetization goal?', answer: '4,000 hours in 12 months.' }]
  },
  {
    id: 'engagement-calculator',
    name: 'Engagement Calc',
    description: 'Calculate your true audience engagement rate.',
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-heart-circle-check',
    type: 'calculator',
    seoTitle: 'YouTube Engagement Rate Calculator',
    seoDescription: 'Check interaction percentage.',
    howToUse: ['Enter views', 'Enter likes/comments', 'Get engagement %'],
    faqs: [{ question: 'What is a good rate?', answer: '3-5% is average; 7%+ is great.' }]
  },
  {
    id: 'ctr-calculator',
    name: 'CTR Calculator',
    description: 'Measure the effectiveness of your thumbnails and titles.',
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-arrow-pointer',
    type: 'calculator',
    seoTitle: 'YouTube CTR Calculator - Click-Through Rate',
    seoDescription: 'Analyze your video performance metrics.',
    howToUse: ['Enter impressions', 'Enter clicks', 'Calculate CTR'],
    faqs: [{ question: 'What is high CTR?', answer: 'Anything above 8% is excellent.' }]
  },
  {
    id: 'rpm-calculator',
    name: 'RPM Calculator',
    description: 'Revenue Per Mille - The real money you take home.',
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-chart-column',
    type: 'calculator',
    seoTitle: 'YouTube RPM Calculator',
    seoDescription: 'Track actual revenue per 1k views.',
    howToUse: ['Enter total earnings', 'Enter total views', 'Get RPM value'],
    faqs: [{ question: 'RPM vs CPM?', answer: 'RPM is what you keep; CPM is what advertisers pay.' }]
  },
  {
    id: 'cpm-calculator',
    name: 'CPM Calculator',
    description: 'Calculate the cost for advertisers on your niche.',
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-money-bill-trend-up',
    type: 'calculator',
    seoTitle: 'YouTube CPM Calculator',
    seoDescription: 'Measure ad value per 1000 views.',
    howToUse: ['Enter ad spend', 'Enter impressions', 'Get CPM'],
    faqs: [{ question: 'Why check CPM?', answer: 'To find the most profitable niches.' }]
  },
  {
    id: 'video-planner',
    name: 'Video Length Planner',
    description: 'Plan your shooting schedule based on final video length.',
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-clapperboard',
    type: 'calculator',
    seoTitle: 'YouTube Video Length Planner & Calc',
    seoDescription: 'Optimize your editing workflow.',
    howToUse: ['Set target final length', 'Set raw footage ratio', 'See shooting time'],
    faqs: [{ question: 'Editing ratio?', answer: '10:1 (10 mins raw for 1 min final) is standard.' }]
  },

  // UTILITY TOOLS
  {
    id: 'channel-analytics-viewer',
    name: 'AI Analytics Insights',
    description: 'Analyze channel health and growth potential with AI logic.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-chart-simple',
    type: 'ai',
    seoTitle: 'YouTube Channel Analytics Viewer & Insights',
    seoDescription: 'Get deep insights into your channel metrics.',
    howToUse: ['Enter niche', 'Run AI analysis', 'Review growth steps'],
    faqs: [{ question: 'Is it real data?', answer: 'It provides benchmarks based on niche data.' }]
  },
  {
    id: 'video-idea-generator',
    name: 'AI Video Ideas',
    description: 'Never run out of content ideas for your channel.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-lightbulb',
    type: 'ai',
    seoTitle: 'YouTube Video Idea Generator - AI Content',
    seoDescription: 'Get 10 fresh ideas for your next video.',
    howToUse: ['Enter your niche', 'Generate', 'Pick viral topic'],
    faqs: [{ question: 'Are these unique?', answer: 'AI tailors ideas to your niche.' }]
  },
  {
    id: 'channel-name-generator',
    name: 'AI Name Generator',
    description: 'Creative and catchy channel name ideas for your brand.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-id-badge',
    type: 'ai',
    seoTitle: 'YouTube Channel Name Generator - Creative Names',
    seoDescription: 'Brand your new channel properly.',
    howToUse: ['Input niche/personality', 'Generate names', 'Check availability'],
    faqs: [{ question: 'How to check?', answer: 'Search for the name on YouTube directly.' }]
  },
  {
    id: 'comment-picker',
    name: 'Comment Picker',
    description: 'Fair giveaway winner selection from your comments.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-trophy',
    type: 'utility',
    seoTitle: 'YouTube Random Comment Picker - Free Giveaway',
    seoDescription: 'Pick a random winner for your video giveaways.',
    howToUse: ['Paste comments list', 'Click Pick Winner', 'Screenshot results'],
    faqs: [{ question: 'Is it fair?', answer: 'Yes, uses random seed selection.' }]
  },
  {
    id: 'timestamp-generator',
    name: 'AI Timestamp Gen',
    description: 'Generate video chapters and timestamps automatically.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-list-check',
    type: 'ai',
    seoTitle: 'YouTube Video Timestamp Generator',
    seoDescription: 'Create chapters for better SEO ranking.',
    howToUse: ['Enter key points', 'Generate timestamps', 'Paste in description'],
    faqs: [{ question: 'Do chapters help?', answer: 'Yes, they help your video appear in Google segments.' }]
  },
  {
    id: 'playlist-generator',
    name: 'AI Playlist Planner',
    description: 'Plan the perfect series of videos to keep fans watching.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-layer-group',
    type: 'ai',
    seoTitle: 'YouTube Playlist Generator & Planner',
    seoDescription: 'Optimize session watch time with playlists.',
    howToUse: ['Enter series theme', 'Generate titles', 'Create playlist on YT'],
    faqs: [{ question: 'Why playlists?', answer: 'They increase total session watch time.' }]
  },
  {
    id: 'bio-generator',
    name: 'AI Bio Generator',
    description: 'Optimized "About" sections to turn viewers into subs.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-user-gear',
    type: 'ai',
    seoTitle: 'YouTube Bio / About Section Generator',
    seoDescription: 'Write a professional, SEO-friendly channel bio.',
    howToUse: ['Enter niche', 'Generate bio', 'Copy to About section'],
    faqs: [{ question: 'Is it SEO ready?', answer: 'Yes, it includes relevant keywords.' }]
  },
  {
    id: 'pinned-comment-generator',
    name: 'AI Pinned Comment',
    description: 'Create engagement-boosting comments for the top of your feed.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-thumbtack',
    type: 'ai',
    seoTitle: 'YouTube Pinned Comment Generator',
    seoDescription: 'Drive more subs with pinned comments.',
    howToUse: ['Enter video topic', 'Generate 3 options', 'Pin the best one'],
    faqs: [{ question: 'Why pin?', answer: 'It is the most visible interaction spot.' }]
  },
  {
    id: 'competitor-analyst',
    name: 'Competitor Analyst',
    description: 'Reverse engineer successful channel strategies.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-user-secret',
    type: 'ai',
    seoTitle: 'YouTube Competitor Audit & Analyst Tool',
    seoDescription: 'Learn strategy from your competition.',
    howToUse: ['Enter competitor niche', 'Analyze', 'Review growth tips'],
    faqs: [{ question: 'Is it private?', answer: 'Yes, we only analyze public niche data.' }]
  },
  {
    id: 'tag-extractor',
    name: 'AI Tag Extractor',
    description: 'Extract hidden SEO tags from any text or video description.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-scissors',
    type: 'ai',
    seoTitle: 'YouTube Tag Extractor - Get Keywords',
    seoDescription: 'Copy keywords from top ranking videos.',
    howToUse: ['Paste description text', 'Extract tags', 'Copy for your video'],
    faqs: [{ question: 'Does it extract from URLs?', answer: 'Use description text for best results.' }]
  }
];
