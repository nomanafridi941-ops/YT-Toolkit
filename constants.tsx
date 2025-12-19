
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
    type: 'ai',
    seoTitle: 'YouTube Title Generator - Boost Your CTR',
    seoDescription: 'Create viral YouTube titles for free with our template generator.',
    howToUse: ['Enter your main keyword.', 'Select generate.', 'Pick from the viral templates.'],
    faqs: [{ question: 'Is it free?', answer: 'Yes, 100% free with no login.' }]
  },
  {
    id: 'tag-generator',
    name: 'Tag Generator',
    description: 'Generate SEO tags based on your video topic.',
    longDescription: 'Find the most relevant tags to help YouTube understand your content and rank you in search results.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-tags',
    type: 'ai',
    seoTitle: 'YouTube Tags Generator - SEO Optimization',
    seoDescription: 'Generate relevant tags for your YouTube videos to rank higher.',
    howToUse: ['Enter your topic.', 'Get a list of tags.', 'Copy and paste to YouTube Studio.'],
    faqs: [{ question: 'How many tags?', answer: 'YouTube allows up to 500 characters.' }]
  },
  {
    id: 'description-generator',
    name: 'Description Generator',
    description: 'Build structured, SEO-friendly descriptions.',
    longDescription: 'Ensure your description includes a summary, timestamps, and call-to-actions to maximize your SEO score.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-file-lines',
    type: 'ai',
    seoTitle: 'YouTube Description Builder - Free Tool',
    seoDescription: 'Create professional descriptions with timestamps and keywords.',
    howToUse: ['Enter video summary.', 'Generate template.', 'Fill in the blanks.'],
    faqs: [{ question: 'Does it help SEO?', answer: 'Yes, structured descriptions are vital for search.' }]
  },
  {
    id: 'hashtag-generator',
    name: 'Hashtag Generator',
    description: 'Find trending hashtags for your specific niche.',
    longDescription: 'Hashtags help categorize your video. Use our generator to find the best 3-5 hashtags for your niche.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-hashtag',
    type: 'ai',
    seoTitle: 'YouTube Hashtag Generator - Trending Tags',
    seoDescription: 'Find viral hashtags for your YouTube videos and shorts.',
    howToUse: ['Enter niche.', 'Get viral hashtags.', 'Add to your description.'],
    faqs: [{ question: 'How many hashtags?', answer: '3-5 is the ideal range.' }]
  },
  {
    id: 'seo-checker',
    name: 'SEO Checker',
    description: 'Audit your metadata for SEO best practices.',
    longDescription: 'Analyze your title and description to ensure they meet the latest ranking factors.',
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-magnifying-glass-chart',
    type: 'ai',
    seoTitle: 'YouTube Video SEO Audit Tool',
    seoDescription: 'Check your video SEO score for free.',
    howToUse: ['Enter title.', 'Enter description.', 'See your score.'],
    faqs: [{ question: 'What is a good score?', answer: 'Aim for 80% or above.' }]
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

  // Shorts Category
  {
    id: 'shorts-ideas',
    name: 'Shorts Ideas',
    description: 'Viral concepts for vertical video format.',
    longDescription: 'Generate ideas specifically designed for the swipe-friendly nature of YouTube Shorts.',
    category: ToolCategory.Shorts,
    icon: 'fa-solid fa-bolt',
    type: 'ai',
    seoTitle: 'YouTube Shorts Idea Generator',
    seoDescription: 'Get viral ideas for your next YouTube short.',
    howToUse: ['Enter niche.', 'Get ideas.', 'Start filming.'],
    faqs: [{ question: 'How long?', answer: 'Shorts must be under 60 seconds.' }]
  },
  {
    id: 'shorts-script',
    name: 'Shorts Script Builder',
    description: 'Build fast-paced 60s scripts with templates.',
    longDescription: 'Write high-retention scripts using our proven hook-story-offer formulas.',
    category: ToolCategory.Shorts,
    icon: 'fa-solid fa-pen-fancy',
    type: 'ai',
    seoTitle: 'YouTube Shorts Script Generator',
    seoDescription: 'Write high-retention scripts for your shorts.',
    howToUse: ['Pick a template.', 'Fill details.', 'Copy script.'],
    faqs: [{ question: 'Length?', answer: 'Templates are optimized for 15-60s.' }]
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
    icon: 'fa-solid fa-clock',
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
    description: 'Calculate Revenue Per 1000 views.',
    longDescription: 'Calculate the total money you make per 1000 views after YouTube\'s cut.',
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-chart-line',
    type: 'calculator',
    seoTitle: 'YouTube RPM Calculator',
    seoDescription: 'Calculate your true earnings per 1,000 views.',
    howToUse: ['Enter earnings.', 'Enter views.', 'See RPM.'],
    faqs: [{ question: 'RPM vs CPM?', answer: 'RPM is what you take home.' }]
  },

  // Utility Category
  {
    id: 'video-idea-generator',
    name: 'Video Idea Matrix',
    description: 'Find creative combinations for video topics.',
    longDescription: 'Use our niche matrix to find unique angles for common video topics.',
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-lightbulb',
    type: 'ai',
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
    type: 'ai',
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
    type: 'ai',
    seoTitle: 'YouTube Channel Bio Generator',
    seoDescription: 'Write a professional About section in seconds.',
    howToUse: ['Enter niche.', 'Enter mission.', 'Copy bio.'],
    faqs: [{ question: 'How long?', answer: 'Aim for at least 150 words.' }]
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
  }
];
