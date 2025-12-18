
import React from 'react';
import { Tool, ToolCategory } from './types';

export const APP_NAME = "YTToolKitPro";

export const Logo = () => (
  <div className="flex items-center gap-4 group">
    <div className="relative">
      <svg width="52" height="52" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl transition-transform group-hover:scale-105 duration-500">
        <defs>
          <linearGradient id="brandRed" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="#FF4D4D" />
            <stop offset="100%" stopColor="#CC0000" />
          </linearGradient>
        </defs>
        <rect x="0" y="15" width="100" height="70" rx="22" fill="url(#brandRed)" />
        <path d="M10 25C10 20.5817 13.5817 17 18 17H82C86.4183 17 90 20.5817 90 25V35C90 35 60 45 10 35V25Z" fill="white" fillOpacity="0.1" />
        <path d="M42 38L65 50L42 62V38Z" fill="white" />
        <path d="M15 70L30 55L45 65L65 45L80 55M85 35V50H70" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" className="opacity-90 drop-shadow-md" />
        <circle cx="15" cy="70" r="6" stroke="white" strokeWidth="4" />
        <path d="M15 67V73M12 70H18" stroke="white" strokeWidth="2" />
      </svg>
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
  // --- THUMBNAIL TOOLS ---
  {
    id: 'thumbnail-downloader',
    name: 'Thumbnail Downloader',
    description: 'Download HD thumbnails from any YouTube video in 4K, HD, and SD.',
    longDescription: `<h3>Free YouTube Thumbnail Downloader</h3><p>Extract and download high-quality thumbnails from any YouTube video or Short instantly. Supporting 4K and Full HD resolutions.</p>`,
    category: ToolCategory.Thumbnails,
    icon: 'fa-solid fa-cloud-arrow-down',
    type: 'utility',
    seoTitle: 'YouTube Thumbnail Downloader - Free HD & 4K',
    seoDescription: 'Download high-quality YouTube thumbnails for free.',
    howToUse: ['Paste YouTube URL', 'Click Get Thumbnails', 'Download HD version'],
    faqs: [{ question: 'Is it free?', answer: 'Yes, unlimited downloads.' }]
  },
  {
    id: 'thumbnail-preview',
    name: 'Thumbnail Preview Tool',
    description: 'Test how your thumbnail looks on Desktop and Mobile feeds.',
    longDescription: `<h3>CTR Optimization Tool</h3><p>Preview your thumbnails in a realistic YouTube feed to see how they compete for attention.</p>`,
    category: ToolCategory.Thumbnails,
    icon: 'fa-solid fa-display',
    type: 'utility',
    seoTitle: 'YouTube Thumbnail Preview & CTR Tester',
    seoDescription: 'Preview your video thumbnail in a real YouTube feed.',
    howToUse: ['Upload thumbnail', 'Enter title', 'View preview'],
    faqs: [{ question: 'Why preview?', answer: 'To check text readability.' }]
  },
  {
    id: 'thumbnail-text-generator',
    name: 'AI Thumbnail Text',
    description: 'Get punchy, high-CTR text overlays for your designs.',
    longDescription: `<h3>AI Thumbnail Text Generator</h3><p>Generate short, high-impact phrases for your thumbnails using AI psychology.</p>`,
    category: ToolCategory.Thumbnails,
    icon: 'fa-solid fa-pen-nib',
    type: 'ai',
    seoTitle: 'YouTube Thumbnail Text Overlay Generator',
    seoDescription: 'Get high-CTR text ideas for your thumbnails.',
    howToUse: ['Enter topic', 'Generate text', 'Apply to design'],
    faqs: [{ question: 'How many words?', answer: 'Keep it under 4 words.' }]
  },

  // --- SEO TOOLS ---
  {
    id: 'title-generator',
    name: 'AI Title Generator',
    description: 'Create viral, click-worthy titles using advanced AI.',
    longDescription: `<h3>AI Title Optimization</h3><p>Generate viral hooks and SEO-friendly titles that increase CTR and search ranking.</p>`,
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-wand-magic-sparkles',
    type: 'ai',
    seoTitle: 'Best AI YouTube Title Generator',
    seoDescription: 'Generate catchy, viral titles for your YouTube videos.',
    howToUse: ['Enter topic', 'Click Generate', 'Pick best title'],
    faqs: [{ question: 'Is it unique?', answer: 'Yes, fresh ideas every time.' }]
  },
  {
    id: 'description-generator',
    name: 'AI Description Gen',
    description: 'Professional, SEO-optimized descriptions with timestamps.',
    longDescription: `<h3>YouTube Description Generator</h3><p>Automatically write descriptions that include keywords, links, and chapter markers.</p>`,
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-file-signature',
    type: 'ai',
    seoTitle: 'YouTube Video Description Generator',
    seoDescription: 'Create SEO friendly descriptions with AI.',
    howToUse: ['Enter video info', 'Generate', 'Copy to YouTube'],
    faqs: [{ question: 'Is it SEO ready?', answer: 'Yes, includes keywords.' }]
  },
  {
    id: 'tag-generator',
    name: 'AI Tags Generator',
    description: 'Find high-ranking keywords and tags to rank your video.',
    longDescription: `<h3>Advanced YouTube Tag Extractor</h3><p>Generate relevant tags and keywords to help the algorithm categorize your content.</p>`,
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-tags',
    type: 'ai',
    seoTitle: 'YouTube Tags Generator - SEO Tool',
    seoDescription: 'Find high volume tags for your content.',
    howToUse: ['Enter topic', 'Generate', 'Copy to tags section'],
    faqs: [{ question: 'Limit?', answer: 'Max 500 characters allowed by YouTube.' }]
  },
  {
    id: 'hashtag-generator',
    name: 'Hashtag Generator',
    description: 'Get trending hashtags for your YouTube niche.',
    longDescription: `<h3>Viral Hashtag Suggestions</h3><p>Discovery trending hashtags to boost your video visibility across search and suggested.</p>`,
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-hashtag',
    type: 'ai',
    seoTitle: 'YouTube Hashtag Generator',
    seoDescription: 'Boost video reach with the right hashtags.',
    howToUse: ['Enter niche', 'Generate', 'Paste in description'],
    faqs: [{ question: 'Where to put?', answer: 'Bottom of description.' }]
  },
  {
    id: 'keyword-research',
    name: 'AI Keyword Research',
    description: 'Find low-competition, high-volume topics.',
    longDescription: `<h3>AI-Powered Keyword Research</h3><p>Identify what people are searching for before you film your next video.</p>`,
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-magnifying-glass-plus',
    type: 'ai',
    seoTitle: 'Free YouTube Keyword Research Tool',
    seoDescription: 'Discover high potential video topics.',
    howToUse: ['Enter broad topic', 'Run analysis', 'Pick low-comp keywords'],
    faqs: [{ question: 'Updated?', answer: 'Uses 2024 search data.' }]
  },
  {
    id: 'seo-checker',
    name: 'Video SEO Checker',
    description: 'Audit your video metadata for optimization score.',
    longDescription: `<h3>Metadata SEO Audit</h3><p>Analyze your title, tags, and description to ensure maximum searchability.</p>`,
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-check-double',
    type: 'ai',
    seoTitle: 'YouTube Video SEO Audit Tool',
    seoDescription: 'Check if your video is ready for search.',
    howToUse: ['Paste metadata', 'Audit', 'Fix issues'],
    faqs: [{ question: 'What is a good score?', answer: 'Aim for 80+.' }]
  },
  {
    id: 'tag-extractor',
    name: 'AI Tag Extractor',
    description: 'Extract hidden SEO tags from any text or description.',
    longDescription: `<h3>Keyword Extraction Utility</h3><p>Copy effective tags from high-ranking videos in your niche.</p>`,
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-scissors',
    type: 'ai',
    seoTitle: 'YouTube Tag Extractor Tool',
    seoDescription: 'Get keywords from top videos.',
    howToUse: ['Paste description', 'Extract', 'Use for yourself'],
    faqs: [{ question: 'Is it legal?', answer: 'Yes, it reads public metadata.' }]
  },
  {
    id: 'hook-generator',
    name: 'AI Hook Generator',
    description: 'Opener scripts that stop the scroll instantly.',
    longDescription: `<h3>Viral Hook Generator</h3><p>Create powerful openings for your videos that maximize audience retention.</p>`,
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-anchor',
    type: 'ai',
    seoTitle: 'YouTube Video Hook Generator',
    seoDescription: 'Viral hooks for your openers.',
    howToUse: ['Enter topic', 'Generate', 'Script it'],
    faqs: [{ question: 'Why hooks?', answer: 'Crucial for retention.' }]
  },
  {
    id: 'retention-tips',
    name: 'Retention Strategy',
    description: 'Get AI advice on how to keep viewers watching longer.',
    longDescription: `<h3>Retention Improvement Guide</h3><p>Custom tips for your specific video type to prevent viewer drop-off.</p>`,
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-brain',
    type: 'ai',
    seoTitle: 'YouTube Retention Strategies',
    seoDescription: 'Growth tips for watch time.',
    howToUse: ['Enter topic', 'Get tips', 'Edit video'],
    faqs: [{ question: 'Effective?', answer: 'Based on viral patterns.' }]
  },

  // --- SHORTS TOOLS ---
  {
    id: 'shorts-ideas',
    name: 'Shorts Ideas Gen',
    description: 'Viral concepts specifically for vertical video format.',
    longDescription: `<h3>YouTube Shorts Idea Machine</h3><p>Generate short-form content ideas optimized for the swipe algorithm.</p>`,
    category: ToolCategory.Shorts,
    icon: 'fa-solid fa-bolt-lightning',
    type: 'ai',
    seoTitle: 'YouTube Shorts Ideas Generator',
    seoDescription: 'Viral concepts for vertical shorts.',
    howToUse: ['Pick niche', 'Generate', 'Record'],
    faqs: [{ question: 'Vertical?', answer: 'Yes, 9:16 format.' }]
  },
  {
    id: 'shorts-hashtags',
    name: 'Shorts Hashtag Gen',
    description: 'The best #shorts hashtags to trigger the algorithm.',
    longDescription: `<h3>Shorts Algorithm Optimization</h3><p>Identify hashtags that are currently trending in the Shorts feed.</p>`,
    category: ToolCategory.Shorts,
    icon: 'fa-brands fa-tiktok',
    type: 'ai',
    seoTitle: 'Shorts Viral Hashtag Generator',
    seoDescription: 'Boost your shorts visibility.',
    howToUse: ['Enter topic', 'Generate', 'Copy'],
    faqs: [{ question: 'How many?', answer: '3-5 tags are best.' }]
  },
  {
    id: 'shorts-script',
    name: 'AI Shorts Script',
    description: 'Fast-paced, high-retention 60s scripts.',
    longDescription: `<h3>Fast-Paced Scripting</h3><p>Write scripts that keep people watching from start to finish in under 60 seconds.</p>`,
    category: ToolCategory.Shorts,
    icon: 'fa-solid fa-feather-pointed',
    type: 'ai',
    seoTitle: 'AI YouTube Shorts Scriptwriter',
    seoDescription: 'Scripts optimized for high retention.',
    howToUse: ['Enter topic', 'Generate', 'Read it'],
    faqs: [{ question: 'Max length?', answer: '60 seconds.' }]
  },
  {
    id: 'upload-time-tool',
    name: 'Upload Time Calc',
    description: 'Determine the best time to post for peak reach.',
    longDescription: `<h3>Peak Audience Analysis</h3><p>Find the exact hour to publish your videos for maximum initial engagement.</p>`,
    category: ToolCategory.Shorts,
    icon: 'fa-solid fa-calendar-check',
    type: 'utility',
    seoTitle: 'Best Time to Upload to YouTube',
    seoDescription: 'Find when your audience is active.',
    howToUse: ['Select niche', 'View times', 'Schedule'],
    faqs: [{ question: 'Timezone?', answer: 'Calculated in your local time.' }]
  },

  // --- CALCULATORS ---
  {
    id: 'youtube-earnings-calculator',
    name: 'Earnings Calculator',
    description: 'Estimate your potential revenue based on views and CPM.',
    longDescription: `<h3>Revenue Prediction Tool</h3><p>Calculate your AdSense income based on traffic and niche CPM rates.</p>`,
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-sack-dollar',
    type: 'calculator',
    seoTitle: 'YouTube Money Calculator',
    seoDescription: 'Calculate how much you can earn.',
    howToUse: ['Views', 'CPM', 'Result'],
    faqs: [{ question: 'CPM?', answer: 'Cost Per 1000 views.' }]
  },
  {
    id: 'watch-time-calc',
    name: 'Watch Time Calc',
    description: 'Calculate how close you are to the 4000h goal.',
    longDescription: `<h3>Monetization Progress Tracker</h3><p>Track your journey towards the 4,000 public watch hours requirement.</p>`,
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-stopwatch',
    type: 'calculator',
    seoTitle: 'YouTube Watch Time Calculator',
    seoDescription: 'Track monetization progress.',
    howToUse: ['Views', 'Avg Duration', 'Calc'],
    faqs: [{ question: 'Goal?', answer: '4000 hours.' }]
  },
  {
    id: 'engagement-calculator',
    name: 'Engagement Calc',
    description: 'Calculate your true audience engagement rate.',
    longDescription: `<h3>Channel Health Metric</h3><p>Verify if your audience is actively interacting with your content.</p>`,
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-heart-circle-check',
    type: 'calculator',
    seoTitle: 'YouTube Engagement Rate Calculator',
    // Added missing seoDescription
    seoDescription: 'Measure your audience interaction and engagement rate.',
    howToUse: ['Views', 'Likes/Comments', 'Calc'],
    faqs: [{ question: 'Good rate?', answer: '3-7% is great.' }]
  },
  {
    id: 'ctr-calculator',
    name: 'CTR Calculator',
    description: 'Measure the effectiveness of your thumbnails.',
    longDescription: `<h3>CTR Performance Analysis</h3><p>Measure how many people click after seeing your video thumbnail.</p>`,
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-arrow-pointer',
    type: 'calculator',
    seoTitle: 'YouTube CTR Calculator',
    // Added missing seoDescription
    seoDescription: 'Calculate your video click-through rate performance.',
    howToUse: ['Impressions', 'Clicks', 'Calc'],
    faqs: [{ question: 'What is high?', answer: '8%+ is elite.' }]
  },
  {
    id: 'rpm-calculator',
    name: 'RPM Calculator',
    description: 'Revenue Per Mille - The real money you take home.',
    longDescription: `<h3>Net Income Tracker</h3><p>Calculate your actual earnings after all deductions.</p>`,
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-chart-column',
    type: 'calculator',
    seoTitle: 'YouTube RPM Calculator',
    // Added missing seoDescription
    seoDescription: 'Calculate your actual revenue per thousand views (RPM).',
    howToUse: ['Earnings', 'Views', 'Calc'],
    faqs: [{ question: 'RPM?', answer: 'Revenue Per Mille.' }]
  },
  {
    id: 'cpm-calculator',
    name: 'CPM Calculator',
    description: 'Calculate the cost for advertisers on your niche.',
    longDescription: `<h3>Ad Value Calculator</h3><p>Estimate how valuable your niche is to potential advertisers.</p>`,
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-money-bill-trend-up',
    type: 'calculator',
    seoTitle: 'YouTube CPM Calculator',
    // Added missing seoDescription
    seoDescription: 'Determine the ad cost per mille for your YouTube niche.',
    howToUse: ['Spend', 'Impressions', 'Calc'],
    faqs: [{ question: 'Why?', answer: 'To find high-pay niches.' }]
  },
  {
    id: 'video-planner',
    name: 'Video Length Planner',
    description: 'Plan your shooting schedule based on length.',
    longDescription: `<h3>Production Planning Tool</h3><p>Calculate shooting time required for your target video length.</p>`,
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-clapperboard',
    type: 'calculator',
    seoTitle: 'YouTube Video Length Planner',
    // Added missing seoDescription
    seoDescription: 'Plan your production and video shooting schedule.',
    howToUse: ['Length', 'Ratio', 'Calc'],
    faqs: [{ question: 'Ratio?', answer: 'Usually 10:1 raw to final.' }]
  },

  // --- UTILITY TOOLS ---
  {
    id: 'channel-analytics-viewer',
    name: 'AI Analytics Insights',
    description: 'Analyze channel health with AI logic.',
    longDescription: `<h3>AI Channel Audit</h3><p>Get deep insights into your growth potential and content gaps.</p>`,
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-chart-simple',
    type: 'ai',
    seoTitle: 'YouTube Channel Analytics Viewer',
    seoDescription: 'Get insights into channel metrics.',
    howToUse: ['Niche', 'Run AI', 'Audit'],
    faqs: [{ question: 'Data?', answer: 'Benchmarks for niches.' }]
  },
  {
    id: 'video-idea-generator',
    name: 'AI Video Ideas',
    description: 'Never run out of content ideas for your channel.',
    longDescription: `<h3>Viral Idea Generation</h3><p>Get 10 fresh, trending video concepts for your specific niche.</p>`,
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-lightbulb',
    type: 'ai',
    seoTitle: 'YouTube Video Idea Generator',
    // Added missing seoDescription
    seoDescription: 'Generate unlimited viral video ideas with AI.',
    howToUse: ['Niche', 'Generate', 'Pick'],
    faqs: [{ question: 'Unique?', answer: 'AI generated per user.' }]
  },
  {
    id: 'channel-name-generator',
    name: 'AI Name Generator',
    description: 'Catchy channel name ideas for your brand.',
    longDescription: `<h3>Brand Identity Tool</h3><p>Generate professional and memorable names for your new YouTube channel.</p>`,
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-id-badge',
    type: 'ai',
    seoTitle: 'YouTube Channel Name Generator',
    // Added missing seoDescription
    seoDescription: 'Find the perfect name for your new YouTube channel.',
    howToUse: ['Topic', 'Generate', 'Check'],
    faqs: [{ question: 'Check?', answer: 'Manual check on YT.' }]
  },
  {
    id: 'comment-picker',
    name: 'Comment Picker',
    description: 'Fair giveaway winner selection from comments.',
    longDescription: `<h3>Fair Giveaway Tool</h3><p>Pick a random winner from your community comments for contests.</p>`,
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-trophy',
    type: 'utility',
    seoTitle: 'YouTube Random Comment Picker',
    // Added missing seoDescription
    seoDescription: 'Fairly pick a giveaway winner from YouTube comments.',
    howToUse: ['Paste comments', 'Pick', 'Winner'],
    faqs: [{ question: 'Fair?', answer: 'Uses random seed.' }]
  },
  {
    id: 'timestamp-generator',
    name: 'AI Timestamp Gen',
    description: 'Generate video chapters and timestamps automatically.',
    longDescription: `<h3>Chapter Marker Tool</h3><p>Create organized timestamps for your video description automatically.</p>`,
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-list-check',
    type: 'ai',
    seoTitle: 'YouTube Video Timestamp Generator',
    // Added missing seoDescription
    seoDescription: 'Create SEO friendly timestamps for your videos.',
    howToUse: ['Key points', 'Generate', 'Paste'],
    faqs: [{ question: 'SEO?', answer: 'Yes, helps Google snippets.' }]
  },
  {
    id: 'playlist-generator',
    name: 'AI Playlist Planner',
    description: 'Plan the perfect series to keep fans watching.',
    longDescription: `<h3>Watch Session Optimization</h3><p>Organize your videos into binge-worthy playlists to boost session watch time.</p>`,
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-layer-group',
    type: 'ai',
    seoTitle: 'YouTube Playlist Generator',
    // Added missing seoDescription
    seoDescription: 'Plan optimized playlists to boost session watch time.',
    howToUse: ['Theme', 'Generate', 'Plan'],
    faqs: [{ question: 'Why?', answer: 'Boosts total views.' }]
  },
  {
    id: 'bio-generator',
    name: 'AI Bio Generator',
    description: 'Optimized "About" sections to turn viewers into subs.',
    longDescription: `<h3>Channel Bio Optimizer</h3><p>Write an About section that describes your value proposition perfectly.</p>`,
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-user-gear',
    type: 'ai',
    seoTitle: 'YouTube Bio Generator',
    // Added missing seoDescription
    seoDescription: 'Write a professional YouTube channel bio with AI.',
    howToUse: ['Niche', 'Generate', 'Copy'],
    faqs: [{ question: 'SEO?', answer: 'Includes niche keywords.' }]
  },
  {
    id: 'pinned-comment-generator',
    name: 'AI Pinned Comment',
    description: 'Create engagement-boosting comments for your feed.',
    longDescription: `<h3>Call-to-Action Optimizer</h3><p>Write pinned comments that encourage likes, subs, and discussions.</p>`,
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-thumbtack',
    type: 'ai',
    seoTitle: 'YouTube Pinned Comment Generator',
    // Added missing seoDescription
    seoDescription: 'Generate high-engagement pinned comments for your videos.',
    howToUse: ['Topic', 'Generate', 'Pin'],
    faqs: [{ question: 'Why?', answer: 'Highest visibility spot.' }]
  },
  {
    id: 'competitor-analyst',
    name: 'Competitor Analyst',
    description: 'Reverse engineer successful channel strategies.',
    longDescription: `<h3>Strategy Research Tool</h3><p>Analyze what works for your competitors and adapt it for your growth.</p>`,
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-user-secret',
    type: 'ai',
    seoTitle: 'YouTube Competitor Analyst Tool',
    // Added missing seoDescription
    seoDescription: 'Analyze competitor strategies and content performance.',
    howToUse: ['Niche', 'Analyze', 'Insights'],
    faqs: [{ question: 'Privacy?', answer: 'Public data only.' }]
  }
];
