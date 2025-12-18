
import React from 'react';
import { Tool, ToolCategory } from './types';

export const APP_NAME = "YTToolKitPro";

export const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="relative flex items-center justify-center w-10 h-10 bg-red-600 rounded-lg">
      <i className="fa-solid fa-play text-white text-xl ml-0.5"></i>
      <div className="absolute -bottom-1 -right-1 bg-gray-800 dark:bg-slate-700 rounded-full p-1 border-2 border-white dark:border-slate-800">
        <i className="fa-solid fa-wrench text-white text-[10px]"></i>
      </div>
    </div>
    <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      YT<span className="text-red-600">ToolKit</span>Pro
    </span>
  </div>
);

export const TOOLS: Tool[] = [
  // CORE TOOLS
  {
    id: 'thumbnail-downloader',
    name: 'Thumbnail Downloader',
    description: 'Get high-quality thumbnails from any YouTube video in seconds.',
    category: ToolCategory.Thumbnails,
    icon: 'fa-solid fa-download',
    type: 'utility',
    seoTitle: 'Free YouTube Thumbnail Downloader - High Quality',
    seoDescription: 'Download HD YouTube thumbnails for free.',
    howToUse: ['Paste URL', 'Get Thumbnails', 'Save Image'],
    faqs: [{ question: 'Is it free?', answer: 'Yes, 100% free.' }]
  },
  {
    id: 'thumbnail-preview',
    name: 'Thumbnail Preview Tool',
    description: 'See how your thumbnail looks in a real YouTube feed mockup.',
    category: ToolCategory.Thumbnails,
    icon: 'fa-solid fa-eye',
    type: 'utility',
    seoTitle: 'YouTube Thumbnail Preview Tool - Test Your CTR',
    seoDescription: 'Preview your thumbnail in a simulated YouTube environment.',
    howToUse: ['Upload your image', 'View preview', 'Check layout'],
    faqs: [{ question: 'Why preview?', answer: 'To see if it stands out among others.' }]
  },
  {
    id: 'title-generator',
    name: 'AI Title Generator',
    description: 'Create viral, click-worthy titles for your videos using AI.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-heading',
    type: 'ai',
    seoTitle: 'AI YouTube Title Generator',
    seoDescription: 'Viral titles for your content.',
    howToUse: ['Enter topic', 'Generate', 'Copy title'],
    faqs: [{ question: 'Does it use AI?', answer: 'Yes, Gemini 3 Flash.' }]
  },
  {
    id: 'description-generator',
    name: 'AI Description Gen',
    description: 'Structured, SEO-friendly descriptions in seconds.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-align-left',
    type: 'ai',
    seoTitle: 'YouTube Description Generator',
    seoDescription: 'SEO optimized descriptions.',
    howToUse: ['Enter title', 'Select tone', 'Copy text'],
    faqs: [{ question: 'Are they unique?', answer: 'Yes, generated fresh every time.' }]
  },
  {
    id: 'tag-generator',
    name: 'AI Tags Generator',
    description: 'Find high-ranking keywords and tags for your video.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-tags',
    type: 'ai',
    seoTitle: 'YouTube Tags Generator',
    seoDescription: 'Rank higher with optimized tags.',
    howToUse: ['Enter topic', 'Generate', 'Paste tags'],
    faqs: [{ question: 'How many tags?', answer: 'Up to 500 characters.' }]
  },
  {
    id: 'hashtag-generator',
    name: 'Hashtag Generator',
    description: 'Trending hashtags for regular videos and shorts.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-hashtag',
    type: 'ai',
    seoTitle: 'YouTube Hashtag Generator',
    seoDescription: 'Discover trending hashtags.',
    howToUse: ['Enter niche', 'Find hashtags', 'Copy to description'],
    faqs: [{ question: 'Why hashtags?', answer: 'They help discoverability.' }]
  },
  {
    id: 'youtube-earnings-calculator',
    name: 'Earnings Calculator',
    description: 'Estimate your potential revenue based on views.',
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-money-bill-wave',
    type: 'calculator',
    seoTitle: 'YouTube Money Calculator',
    seoDescription: 'Calculate AdSense revenue.',
    howToUse: ['Set views', 'Adjust CPM', 'See profit'],
    faqs: [{ question: 'Is it accurate?', answer: 'It is an estimate.' }]
  },
  {
    id: 'channel-analytics-viewer',
    name: 'AI Analytics Insights',
    description: 'Analyze channel health and performance trends with AI.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-chart-pie',
    type: 'ai',
    seoTitle: 'YouTube AI Analytics Viewer',
    seoDescription: 'Get growth insights.',
    howToUse: ['Input niche data', 'Analyze', 'Review growth tips'],
    faqs: [{ question: 'Do I need login?', answer: 'No, purely data-driven.' }]
  },

  // SEO & GROWTH
  {
    id: 'keyword-research',
    name: 'AI Keyword Research',
    description: 'Find low-competition, high-volume keywords.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-key',
    type: 'ai',
    seoTitle: 'YouTube Keyword Research Tool',
    seoDescription: 'Find hidden keyword gems.',
    howToUse: ['Enter keyword', 'Search', 'See competition'],
    faqs: [{ question: 'Does it use actual data?', answer: 'It uses AI patterns and trends.' }]
  },
  {
    id: 'seo-checker',
    name: 'Video SEO Checker',
    description: 'Audit your video metadata for optimization.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-magnifying-glass-chart',
    type: 'ai',
    seoTitle: 'YouTube SEO Audit Tool',
    seoDescription: 'Check your video SEO score.',
    howToUse: ['Input metadata', 'Check score', 'Apply tips'],
    faqs: [{ question: 'What is a good score?', answer: '80+ is great.' }]
  },
  {
    id: 'video-idea-generator',
    name: 'AI Video Ideas',
    description: 'Never run out of content ideas for your niche.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-lightbulb',
    type: 'ai',
    seoTitle: 'YouTube Video Topic Generator',
    seoDescription: 'Generate content ideas.',
    howToUse: ['Enter niche', 'Generate', 'Pick ideas'],
    faqs: [{ question: 'Are they trending?', answer: 'Yes, AI looks for hot topics.' }]
  },
  {
    id: 'channel-name-generator',
    name: 'AI Name Generator',
    description: 'Catchy and unique names for your brand.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-signature',
    type: 'ai',
    seoTitle: 'YouTube Channel Name Generator',
    seoDescription: 'Brand your channel.',
    howToUse: ['Enter topic', 'Generate names', 'Pick brand'],
    faqs: [{ question: 'Are names unique?', answer: 'AI generates creative variations.' }]
  },
  {
    id: 'upload-time-tool',
    name: 'Upload Time Calc',
    description: 'Best time to post for peak engagement.',
    category: ToolCategory.Shorts,
    icon: 'fa-solid fa-clock',
    type: 'utility',
    seoTitle: 'Best Time to Upload to YouTube',
    seoDescription: 'Maximize your early reach.',
    howToUse: ['Pick niche', 'See peak hours', 'Schedule video'],
    faqs: [{ question: 'Does it change?', answer: 'Yes, based on global timezones.' }]
  },
  {
    id: 'ctr-calculator',
    name: 'CTR Calculator',
    description: 'Measure your thumbnail performance.',
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-percent',
    type: 'calculator',
    seoTitle: 'YouTube CTR Calculator',
    seoDescription: 'Calculate Click-Through Rate.',
    howToUse: ['Enter impressions', 'Enter clicks', 'Calculate'],
    faqs: [{ question: 'What is a good CTR?', answer: '2-10% is average.' }]
  },

  // SHORTS & VIRAL
  {
    id: 'shorts-ideas',
    name: 'Shorts Ideas Gen',
    description: 'Viral concepts for vertical videos.',
    category: ToolCategory.Shorts,
    icon: 'fa-solid fa-bolt',
    type: 'ai',
    seoTitle: 'YouTube Shorts Ideas Generator',
    seoDescription: 'Viral vertical content.',
    howToUse: ['Pick niche', 'Generate', 'Record'],
    faqs: [{ question: 'Why Shorts?', answer: 'Faster growth in 2024.' }]
  },
  {
    id: 'shorts-hashtags',
    name: 'Shorts Hashtag Gen',
    description: 'Find #shorts hashtags to go viral.',
    category: ToolCategory.Shorts,
    icon: 'fa-solid fa-hashtag',
    type: 'ai',
    seoTitle: 'Shorts Hashtag Generator',
    seoDescription: 'Discover viral hashtags for shorts.',
    howToUse: ['Enter niche', 'Generate', 'Paste tags'],
    faqs: [{ question: 'How many hashtags?', answer: '3-5 are best for shorts.' }]
  },
  {
    id: 'shorts-script',
    name: 'AI Shorts Script',
    description: 'Generate high-retention 60s scripts.',
    category: ToolCategory.Shorts,
    icon: 'fa-solid fa-scroll',
    type: 'ai',
    seoTitle: 'AI YouTube Shorts Scriptwriter',
    seoDescription: 'Scripts for viral shorts.',
    howToUse: ['Enter topic', 'Generate', 'Voice over'],
    faqs: [{ question: 'Is it timed?', answer: 'Yes, optimized for under 60s.' }]
  },
  {
    id: 'video-planner',
    name: 'Video Length Planner',
    description: 'Plan raw footage based on target length.',
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-film',
    type: 'calculator',
    seoTitle: 'YouTube Video Length Planner',
    seoDescription: 'Efficient editing workflow.',
    howToUse: ['Set target length', 'Set ratio', 'See raw mins'],
    faqs: [{ question: 'Typical ratio?', answer: '5:1 or 10:1 for vlogs.' }]
  },

  // CALCULATORS
  {
    id: 'watch-time-calc',
    name: 'Watch Time Calc',
    description: 'Convert views and duration into total hours.',
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-hourglass-half',
    type: 'calculator',
    seoTitle: 'YouTube Watch Time Calculator',
    seoDescription: 'Track monetization progress.',
    howToUse: ['Enter views', 'Enter avg duration', 'Calculate hours'],
    faqs: [{ question: 'Goal for monetization?', answer: '4000 hours.' }]
  },
  {
    id: 'engagement-calculator',
    name: 'Engagement Calc',
    description: 'Measure audience interaction rate.',
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-heart',
    type: 'calculator',
    seoTitle: 'YouTube Engagement Rate Calculator',
    seoDescription: 'Check interaction percentage.',
    howToUse: ['Enter views', 'Enter likes/comments', 'Result'],
    faqs: [{ question: 'What is good?', answer: '5%+ is excellent.' }]
  },
  {
    id: 'rpm-calculator',
    name: 'RPM Calculator',
    description: 'Calculate your actual Revenue Per Mille.',
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-chart-bar',
    type: 'calculator',
    seoTitle: 'YouTube RPM Calculator',
    seoDescription: 'Track actual revenue per 1k views.',
    howToUse: ['Enter revenue', 'Enter views', 'Calculate'],
    faqs: [{ question: 'RPM vs CPM?', answer: 'RPM is what you take home.' }]
  },
  {
    id: 'cpm-calculator',
    name: 'CPM Calculator',
    description: 'Calculate Cost Per Mille from spend/views.',
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-money-check-dollar',
    type: 'calculator',
    seoTitle: 'YouTube CPM Calculator',
    seoDescription: 'Calculate advertiser cost.',
    howToUse: ['Enter cost', 'Enter views', 'Calculate'],
    faqs: [{ question: 'Why check CPM?', answer: 'To see niche value.' }]
  },

  // UTILITY TOOLS
  {
    id: 'comment-picker',
    name: 'Comment Picker',
    description: 'Randomly pick a winner for giveaways.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-trophy',
    type: 'utility',
    seoTitle: 'YouTube Random Comment Picker',
    seoDescription: 'Giveaway winner generator.',
    howToUse: ['Paste comments', 'Pick random', 'Announce winner'],
    faqs: [{ question: 'Is it fair?', answer: 'Yes, uses random seed.' }]
  },
  {
    id: 'timestamp-generator',
    name: 'AI Timestamp Gen',
    description: 'Generate structured timestamps from video content.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-list-ol',
    type: 'ai',
    seoTitle: 'YouTube Video Timestamp Generator',
    seoDescription: 'Create chapters automatically.',
    howToUse: ['Enter video points', 'Generate', 'Paste in desc'],
    faqs: [{ question: 'Does it help SEO?', answer: 'Yes, creates chapters.' }]
  },
  {
    id: 'playlist-generator',
    name: 'AI Playlist Planner',
    description: 'Plan a sequence of videos for maximum watch time.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-list-check',
    type: 'ai',
    seoTitle: 'YouTube Playlist Generator',
    seoDescription: 'Optimize playlist sequence.',
    howToUse: ['Enter main topic', 'Generate sequence', 'Create playlist'],
    faqs: [{ question: 'Why playlists?', answer: 'Increases session watch time.' }]
  },
  {
    id: 'bio-generator',
    name: 'AI Bio Generator',
    description: 'Professional "About" section for your channel.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-user-pen',
    type: 'ai',
    seoTitle: 'YouTube Bio / About Generator',
    seoDescription: 'Write a professional channel bio.',
    howToUse: ['Enter channel niche', 'Generate', 'Update About page'],
    faqs: [{ question: 'Is it SEO friendly?', answer: 'Yes, includes keywords.' }]
  },
  {
    id: 'pinned-comment-generator',
    name: 'AI Pinned Comment',
    description: 'High-engagement comments to pin at the top.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-thumbtack',
    type: 'ai',
    seoTitle: 'YouTube Pinned Comment Generator',
    seoDescription: 'Engagement boosting pinned comments.',
    howToUse: ['Enter video goal', 'Generate', 'Post and pin'],
    faqs: [{ question: 'Why pin?', answer: 'To drive CTAs or engagement.' }]
  },

  // ADVANCED
  {
    id: 'competitor-analyst',
    name: 'Competitor Analyst',
    description: 'AI strategy audit of rival channels.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-user-secret',
    type: 'ai',
    seoTitle: 'YouTube Competitor Audit',
    seoDescription: 'Analyze competitor strategies.',
    howToUse: ['Enter rival niche', 'Analyze', 'Get strategy'],
    faqs: [{ question: 'Is it legal?', answer: 'Uses public data only.' }]
  },
  {
    id: 'tag-extractor',
    name: 'AI Tag Extractor',
    description: 'Extract tags from any video link description.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-scissors',
    type: 'ai',
    seoTitle: 'YouTube Tag Extractor Tool',
    seoDescription: 'Get keywords from descriptions.',
    howToUse: ['Paste description', 'Extract', 'Copy keywords'],
    faqs: [{ question: 'How does it work?', answer: 'AI parses keywords.' }]
  },
  {
    id: 'thumbnail-text-generator',
    name: 'AI Thumbnail Text',
    description: 'Short, punchy text ideas for your thumbnails.',
    category: ToolCategory.Thumbnails,
    icon: 'fa-solid fa-italic',
    type: 'ai',
    seoTitle: 'YouTube Thumbnail Text Generator',
    seoDescription: 'Punchy words for thumbnails.',
    howToUse: ['Enter video title', 'Generate', 'Design thumbnail'],
    faqs: [{ question: 'Max words?', answer: 'Keep it to 2-4 words.' }]
  },
  {
    id: 'hook-generator',
    name: 'AI Hook Generator',
    description: 'Stop the scroll with powerful video openers.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-fish',
    type: 'ai',
    seoTitle: 'YouTube Video Hook Generator',
    seoDescription: 'Viral hooks for content.',
    howToUse: ['Enter topic', 'Generate hooks', 'Record opener'],
    faqs: [{ question: 'First 5 seconds?', answer: 'Crucial for retention.' }]
  },
  {
    id: 'retention-tips',
    name: 'Retention Strategy',
    description: 'AI tips to keep viewers watching longer.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-brain',
    type: 'ai',
    seoTitle: 'YouTube Retention Improvement Tool',
    seoDescription: 'Growth tips for retention.',
    howToUse: ['Enter video style', 'Get tips', 'Edit better'],
    faqs: [{ question: 'A/B testing?', answer: 'Essential for growth.' }]
  }
];
