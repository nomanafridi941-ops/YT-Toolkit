
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
        <path d="M42 38L65 50L42 62V38Z" fill="white" />
        <path d="M15 70L30 55L45 65L65 45L80 55M85 35V50H70" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" className="opacity-90 drop-shadow-md" />
        <circle cx="15" cy="70" r="6" stroke="white" strokeWidth="4" />
        <path d="M15 67V73M12 70H18" stroke="white" strokeWidth="2" />
      </svg>
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
  // SEO Category
  {
    id: 'title-generator',
    name: 'Title Generator',
    description: 'Generate high-CTR, viral titles using proven formulas.',
    longDescription: 'Our Title Generator uses psychological hooks and SEO patterns to create titles that demand clicks. It uses formulas like curiosity gaps and listicles.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-wand-magic-sparkles',
    type: 'template',
    seoTitle: 'YouTube Title Generator - Boost Your CTR',
    seoDescription: 'Create viral YouTube titles for free with our template generator.',
    howToUse: ['Enter your main keyword.', 'Select generate.', 'Pick from the viral templates.'],
    faqs: [{ question: 'Is it free?', answer: 'Yes, 100% free with no login.' }]
  },
  {
    id: 'description-generator',
    name: 'Description Generator',
    description: 'Build structured, SEO-friendly descriptions.',
    longDescription: 'Ensure your description includes a summary, timestamps, and call-to-actions to maximize your SEO score.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-file-lines',
    type: 'template',
    seoTitle: 'YouTube Description Builder - Free Tool',
    seoDescription: 'Create professional descriptions with timestamps and keywords.',
    howToUse: ['Enter video summary.', 'Generate template.', 'Fill in the blanks.'],
    faqs: [{ question: 'Does it help SEO?', answer: 'Yes, structured descriptions are vital for search.' }]
  },
  {
    id: 'tag-generator',
    name: 'Tag Generator',
    description: 'Generate SEO tags based on your video topic.',
    longDescription: 'Find the most relevant tags to help YouTube understand your content and rank you in search results.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-tags',
    type: 'template',
    seoTitle: 'YouTube Tags Generator - SEO Optimization',
    seoDescription: 'Generate relevant tags for your YouTube videos to rank higher.',
    howToUse: ['Enter your topic.', 'Get a list of tags.', 'Copy and paste to YouTube Studio.'],
    faqs: [{ question: 'How many tags?', answer: 'YouTube allows up to 500 characters.' }]
  },
  {
    id: 'hashtag-generator',
    name: 'Hashtag Generator',
    description: 'Find trending hashtags for your specific niche.',
    longDescription: 'Hashtags help categorize your video. Use our generator to find the best 3-5 hashtags for your niche.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-hashtag',
    type: 'template',
    seoTitle: 'YouTube Hashtag Generator - Trending Tags',
    seoDescription: 'Find viral hashtags for your YouTube videos and shorts.',
    howToUse: ['Enter niche.', 'Get viral hashtags.', 'Add to your description.'],
    faqs: [{ question: 'How many hashtags?', answer: '3-5 is the ideal range.' }]
  },
  {
    id: 'keyword-research',
    name: 'Keyword Research',
    description: 'Find low-competition, high-volume topics.',
    longDescription: 'Identify what people are searching for before you film your next video using our niche analysis tool.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-magnifying-glass-plus',
    type: 'template',
    seoTitle: 'YouTube Keyword Research Tool - Free Search',
    seoDescription: 'Discover the best keywords to target for your next YouTube video.',
    howToUse: ['Enter broad topic.', 'View analysis.', 'Pick low-comp keywords.'],
    faqs: [{ question: 'Updated?', answer: 'Uses the latest search patterns.' }]
  },
  {
    id: 'seo-checker',
    name: 'SEO Checker',
    description: 'Audit your metadata for SEO best practices.',
    longDescription: 'Analyze your title and description to ensure they meet the latest ranking factors.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-magnifying-glass-chart',
    type: 'template',
    seoTitle: 'YouTube Video SEO Audit Tool',
    seoDescription: 'Check your video SEO score for free.',
    howToUse: ['Enter title.', 'Enter description.', 'See your score.'],
    faqs: [{ question: 'What is a good score?', answer: 'Aim for 80% or above.' }]
  },
  {
    id: 'hook-generator',
    name: 'Hook Generator',
    description: 'Opener scripts that stop the scroll instantly.',
    longDescription: 'The first 3 seconds are the most important. Our tool creates psychological hooks to keep viewers watching.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-anchor',
    type: 'template',
    seoTitle: 'Viral YouTube Hook Generator',
    seoDescription: 'Create high-retention opening lines for your videos.',
    howToUse: ['Enter topic.', 'Generate hooks.', 'Select the best one.'],
    faqs: [{ question: 'Why hooks?', answer: 'They are crucial for audience retention.' }]
  },

  // Thumbnail Category
  {
    id: 'thumbnail-downloader',
    name: 'Thumbnail Downloader',
    description: 'Download HD thumbnails from any YouTube video.',
    longDescription: 'Save high-resolution cover images for research or design inspiration.',
    category: ToolCategory.Thumbnails,
    icon: 'fa-solid fa-image',
    type: 'utility',
    seoTitle: 'YouTube Thumbnail Downloader - HD/4K',
    seoDescription: 'Download HD YouTube thumbnails for free by pasting URL.',
    howToUse: ['Paste video URL.', 'Get images.', 'Download HD.'],
    faqs: [{ question: 'Is it legal?', answer: 'For personal use and research, yes.' }]
  },
  {
    id: 'thumbnail-preview',
    name: 'Thumbnail Preview',
    description: 'See how your thumbnail looks on Mobile & Desktop.',
    longDescription: 'Check if your thumbnail text is readable on small smartphone screens before you upload.',
    category: ToolCategory.Thumbnails,
    icon: 'fa-solid fa-mobile-screen',
    type: 'utility',
    seoTitle: 'YouTube Thumbnail Preview Tool',
    seoDescription: 'Test your thumbnail appearance on mobile and desktop.',
    howToUse: ['Upload image.', 'Enter title.', 'Check previews.'],
    faqs: [{ question: 'Does it save images?', answer: 'No, everything is local.' }]
  },
  {
    id: 'thumbnail-text-generator',
    name: 'Thumbnail Text Tool',
    description: 'Get punchy text overlays for your designs.',
    longDescription: 'Get short, bold phrases that complement your video title and drive clicks.',
    category: ToolCategory.Thumbnails,
    icon: 'fa-solid fa-pen-nib',
    type: 'template',
    seoTitle: 'YouTube Thumbnail Text Ideas',
    seoDescription: 'Find high-impact text for your video thumbnails.',
    howToUse: ['Enter topic.', 'Get text ideas.', 'Apply to image.'],
    faqs: [{ question: 'Font size?', answer: 'Always go bigger than you think.' }]
  },

  // Shorts Category
  {
    id: 'shorts-ideas',
    name: 'Shorts Ideas',
    description: 'Viral concepts for vertical video format.',
    longDescription: 'Generate ideas specifically designed for the swipe-friendly nature of YouTube Shorts.',
    category: ToolCategory.Shorts,
    icon: 'fa-solid fa-bolt',
    type: 'template',
    seoTitle: 'YouTube Shorts Idea Generator',
    seoDescription: 'Get viral ideas for your next YouTube short.',
    howToUse: ['Enter niche.', 'Get ideas.', 'Start filming.'],
    faqs: [{ question: 'How long?', answer: 'Shorts must be under 60 seconds.' }]
  },
  {
    id: 'shorts-hashtags',
    name: 'Shorts Hashtags',
    description: 'Trending hashtags for Shorts discovery.',
    longDescription: 'Generate hashtags specifically optimized for the YouTube Shorts shelf.',
    category: ToolCategory.Shorts,
    icon: 'fa-brands fa-tiktok',
    type: 'template',
    seoTitle: 'YouTube Shorts Hashtag Generator',
    seoDescription: 'Get trending hashtags for your Shorts.',
    howToUse: ['Enter topic.', 'Get tags.', 'Paste in description.'],
    faqs: [{ question: 'How many?', answer: '3-5 is the sweet spot.' }]
  },
  {
    id: 'shorts-script',
    name: 'Shorts Script Builder',
    description: 'Build fast-paced 60s scripts with templates.',
    longDescription: 'Write high-retention scripts using our proven hook-story-offer formulas.',
    category: ToolCategory.Shorts,
    icon: 'fa-solid fa-pen-fancy',
    type: 'template',
    seoTitle: 'YouTube Shorts Script Generator',
    seoDescription: 'Write high-retention scripts for your shorts.',
    howToUse: ['Pick a template.', 'Fill details.', 'Copy script.'],
    faqs: [{ question: 'Length?', answer: 'Templates are optimized for 15-60s.' }]
  },
  {
    id: 'upload-time-tool',
    name: 'Best Post Time',
    description: 'Find when your niche is most active.',
    longDescription: 'Identify the global peak hours for different YouTube categories to maximize reach.',
    category: ToolCategory.Shorts,
    icon: 'fa-solid fa-clock',
    type: 'utility',
    seoTitle: 'Best Time to Post on YouTube 2024',
    seoDescription: 'Optimize your upload schedule for more views.',
    howToUse: ['Select niche.', 'See results.'],
    faqs: [{ question: 'Does it change?', answer: 'Yes, weekly based on data.' }]
  },

  // Calculators
  {
    id: 'youtube-earnings-calculator',
    name: 'Earnings Calculator',
    description: 'Calculate potential AdSense revenue.',
    longDescription: 'Estimate your daily, monthly, and yearly revenue based on views and CPM.',
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-calculator',
    type: 'calculator',
    seoTitle: 'YouTube Money Calculator - Estimated Earnings',
    seoDescription: 'How much does YouTube pay? Calculate your earnings.',
    howToUse: ['Input views.', 'Set CPM.', 'See earnings.'],
    faqs: [{ question: 'Is it exact?', answer: 'No, it is a professional estimate.' }]
  },
  {
    id: 'watch-time-calc',
    name: 'Watch Time Calc',
    description: 'Convert views and minutes to watch hours.',
    longDescription: 'Check how close you are to the 4,000-hour monetization requirement.',
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-hourglass-half',
    type: 'calculator',
    seoTitle: 'YouTube Watch Hours Calculator',
    seoDescription: 'Check progress toward 4000 watch hours.',
    howToUse: ['Enter views.', 'Enter avg duration.', 'See hours.'],
    faqs: [{ question: 'What is the goal?', answer: '4,000 hours in 12 months.' }]
  },
  {
    id: 'engagement-calculator',
    name: 'Engagement Rate',
    description: 'Calculate your likes-to-views ratio.',
    longDescription: 'Measure how much your audience likes your content compared to total views.',
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-heart',
    type: 'calculator',
    seoTitle: 'YouTube Engagement Rate Calculator',
    seoDescription: 'Measure your channel health and engagement.',
    howToUse: ['Enter views.', 'Enter interactions.', 'See rate.'],
    faqs: [{ question: 'What is good?', answer: '3-7% is healthy.' }]
  },
  {
    id: 'ctr-calculator',
    name: 'CTR Calculator',
    description: 'Calculate Click-Through Rate easily.',
    longDescription: 'Analyze your thumbnail performance by calculating clicks divided by impressions.',
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-percent',
    type: 'calculator',
    seoTitle: 'YouTube CTR Calculator',
    seoDescription: 'Calculate your thumbnail click-through rate.',
    howToUse: ['Enter impressions.', 'Enter clicks.', 'See CTR.'],
    faqs: [{ question: 'What is average?', answer: '2-10% is the common range.' }]
  },
  {
    id: 'rpm-calculator',
    name: 'RPM Calculator',
    description: 'Revenue Per 1000 views.',
    longDescription: 'Calculate the total money you make per 1000 views after YouTubes cut.',
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-chart-line',
    type: 'calculator',
    seoTitle: 'YouTube RPM Calculator',
    seoDescription: 'Calculate your true earnings per 1,000 views.',
    howToUse: ['Enter earnings.', 'Enter views.', 'See RPM.'],
    faqs: [{ question: 'RPM vs CPM?', answer: 'RPM is what you take home.' }]
  },
  {
    id: 'cpm-calculator',
    name: 'CPM Calculator',
    description: 'Cost Per 1000 impressions.',
    longDescription: 'Calculate the advertiser cost per 1000 impressions for your video niche.',
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-money-bill-trend-up',
    type: 'calculator',
    seoTitle: 'YouTube CPM Calculator',
    seoDescription: 'Calculate advertiser costs per 1,000 views.',
    howToUse: ['Enter cost.', 'Enter impressions.', 'See CPM.'],
    faqs: [{ question: 'Why?', answer: 'To determine niche profitability.' }]
  },
  {
    id: 'video-planner',
    name: 'Video Length Planner',
    description: 'Plan filming time vs final length.',
    longDescription: 'Estimate your raw footage requirements and shooting schedule based on target length.',
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-clapperboard',
    type: 'calculator',
    seoTitle: 'YouTube Video Length Planner',
    seoDescription: 'Plan your production time efficiently.',
    howToUse: ['Enter target length.', 'Enter raw ratio.', 'See schedule.'],
    faqs: [{ question: 'Ratio?', answer: 'Standard ratio is 5:1 raw to final.' }]
  },

  // Utility Category
  {
    id: 'channel-analytics-viewer',
    name: 'Analytics Insights',
    description: 'Local insights into channel growth metrics.',
    longDescription: 'Analyze common growth patterns and benchmark your channel against industry standards.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-chart-simple',
    type: 'template',
    seoTitle: 'YouTube Channel Analytics Viewer',
    seoDescription: 'Get growth insights for your channel.',
    howToUse: ['Enter your niche.', 'View benchmarks.'],
    faqs: [{ question: 'Real data?', answer: 'Uses industry aggregate benchmarks.' }]
  },
  {
    id: 'video-idea-generator',
    name: 'Video Idea Matrix',
    description: 'Find creative combinations for video topics.',
    longDescription: 'Use our niche matrix to find unique angles for common video topics.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-lightbulb',
    type: 'template',
    seoTitle: 'YouTube Video Idea Generator',
    seoDescription: 'Never run out of video ideas with our generator.',
    howToUse: ['Enter niche.', 'Get 10 fresh ideas.', 'Start planning.'],
    faqs: [{ question: 'Is it random?', answer: 'It uses logical pairings.' }]
  },
  {
    id: 'channel-name-generator',
    name: 'Channel Name Gen',
    description: 'Get catchy names for your brand.',
    longDescription: 'Create professional, unique channel names based on your niche or personal name.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-user-tag',
    type: 'template',
    seoTitle: 'YouTube Channel Name Generator',
    seoDescription: 'Find a unique name for your new YouTube channel.',
    howToUse: ['Enter niche.', 'Get name ideas.', 'Choose your brand.'],
    faqs: [{ question: 'Are they available?', answer: 'Please check YouTube for availability.' }]
  },
  {
    id: 'comment-picker',
    name: 'Comment Picker',
    description: 'Randomly pick a winner from a list.',
    longDescription: 'Paste names and pick a random winner for your giveaways or contests.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-trophy',
    type: 'utility',
    seoTitle: 'YouTube Comment Picker - Giveaways',
    seoDescription: 'Fairly pick contest winners from your comments.',
    howToUse: ['Paste names.', 'Click pick.', 'Announce winner.'],
    faqs: [{ question: 'Is it fair?', answer: 'Yes, it uses Math.random().' }]
  },
  {
    id: 'bio-generator',
    name: 'Bio Generator',
    description: 'Write an About section that converts.',
    longDescription: 'Create a compelling channel description that tells viewers why they should subscribe.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-address-card',
    type: 'template',
    seoTitle: 'YouTube Channel Bio Generator',
    seoDescription: 'Write a professional About section in seconds.',
    howToUse: ['Enter niche.', 'Enter mission.', 'Copy bio.'],
    faqs: [{ question: 'How long?', answer: 'Aim for at least 150 words.' }]
  },
  {
    id: 'timestamp-generator',
    name: 'Timestamp Generator',
    description: 'Create SEO chapters for your videos.',
    longDescription: 'Quickly build a chapter list to help Google Search index your video sections.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-list-check',
    type: 'template',
    seoTitle: 'YouTube Timestamp Generator - Video Chapters',
    seoDescription: 'Build SEO friendly chapters for your videos.',
    howToUse: ['Enter topics.', 'Generate timestamps.', 'Paste in description.'],
    faqs: [{ question: 'Start time?', answer: 'Must start with 00:00.' }]
  },
  {
    id: 'playlist-generator',
    name: 'Playlist Planner',
    description: 'Plan the perfect series to keep fans watching.',
    longDescription: 'Organize your content into a logical binging sequence to boost session duration.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-layer-group',
    type: 'template',
    seoTitle: 'YouTube Playlist Generator & Planner',
    seoDescription: 'Increase session time with better playlists.',
    howToUse: ['Enter series theme.', 'Get 5 video ideas.', 'Plan your shooting.'],
    faqs: [{ question: 'Why playlists?', answer: 'They increase total channel watch time.' }]
  },
  {
    id: 'pinned-comment-generator',
    name: 'Pinned Comment Ideas',
    description: 'Engagement-boosting comments for your feed.',
    longDescription: 'Generate curiosity-driven questions to pin at the top of your comment section.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-thumbtack',
    type: 'template',
    seoTitle: 'YouTube Pinned Comment Generator',
    seoDescription: 'Boost engagement with better pinned comments.',
    howToUse: ['Enter video topic.', 'Get 3 comment ideas.', 'Pick and pin.'],
    faqs: [{ question: 'Where to pin?', answer: 'The top of your comment section.' }]
  },
  {
    id: 'competitor-analyst',
    name: 'Competitor Analyst',
    description: 'Reverse engineer successful channel strategies.',
    longDescription: 'Framework for analyzing why your competitors are ranking and how to beat them.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-user-secret',
    type: 'template',
    seoTitle: 'YouTube Competitor Analysis Tool',
    seoDescription: 'Research your niche competitors strategy.',
    howToUse: ['Enter competitor name.', 'View analysis framework.'],
    faqs: [{ question: 'Privacy?', answer: 'Uses public metadata logic.' }]
  },
  {
    id: 'tag-extractor',
    name: 'Tag Extractor',
    description: 'Extract keywords from any text description.',
    longDescription: 'Paste a video description to find the hidden SEO keywords used by other creators.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-scissors',
    type: 'template',
    seoTitle: 'YouTube Tag Extractor from Description',
    seoDescription: 'Find hidden keywords in video descriptions.',
    howToUse: ['Paste description.', 'Click extract.', 'Get keyword list.'],
    faqs: [{ question: 'Is it legal?', answer: 'Yes, it processes public text.' }]
  }
];
