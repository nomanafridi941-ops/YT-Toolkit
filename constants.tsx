
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
    longDescription: `
      <h2>The Best Free YouTube Thumbnail Downloader</h2>
      <p>Our <strong>YouTube Thumbnail Downloader</strong> is a professional-grade utility designed for creators who need to extract high-resolution cover images from videos. Whether you are conducting competitor research, creating a reaction video, or simply need an image for a blog post, this tool provides instant access to all available resolutions.</p>
      <h3>Supported Resolutions:</h3>
      <ul>
        <li><strong>Max Res (4K/HD):</strong> 1280x720 pixels - Perfect for clear, crisp displays.</li>
        <li><strong>Standard Quality:</strong> 640x480 pixels - Great for faster loading in smaller widgets.</li>
        <li><strong>Medium & Small:</strong> 480x360 and 320x180 - Ideal for low-bandwidth applications.</li>
      </ul>
      <h3>Why Use Our Downloader?</h3>
      <p>YouTube's algorithm often provides different thumbnail qualities depending on the device. Our tool bypasses these limitations and pulls directly from the YouTube content delivery network (CDN), ensuring you get the original file without any additional compression. It works perfectly for <strong>YouTube Shorts</strong> and standard long-form videos alike.</p>
      <h3>SEO & Thumbnails</h3>
      <p>A thumbnail is the single most important factor for your <strong>CTR (Click-Through Rate)</strong>. By analyzing high-performing thumbnails in your niche using our downloader, you can identify patterns in color theory, text placement, and facial expressions that drive the most views. No login is required, and our tool is 100% free forever.</p>
    `,
    category: ToolCategory.Thumbnails,
    icon: 'fa-solid fa-cloud-arrow-down',
    type: 'utility',
    seoTitle: 'YouTube Thumbnail Downloader - Free HD & 4K Export',
    seoDescription: 'Extract and download HD YouTube thumbnails for free. Supporting 4K, 1080p, and 720p resolutions for videos and shorts.',
    howToUse: ['Copy the YouTube video URL from your browser.', 'Paste it into the box above.', 'Click "Get Thumbnails" and choose your desired resolution.'],
    faqs: [
      { question: 'Is downloading thumbnails legal?', answer: 'Yes, downloading for personal use, research, or fair use is generally permitted, but always respect the original creator\'s copyright.' },
      { question: 'Does it work for Shorts?', answer: 'Absolutely! It works for standard videos, Shorts, and Live streams.' },
      { question: 'Will I get the original quality?', answer: 'Yes, we fetch the "maxresdefault" image which is the highest quality the creator uploaded.' }
    ]
  },
  {
    id: 'thumbnail-preview',
    name: 'Thumbnail Preview Tool',
    description: 'Test how your thumbnail looks on Desktop and Mobile feeds.',
    longDescription: `
      <h2>Optimize Your CTR with the Thumbnail Preview Tool</h2>
      <p>Ever uploaded a thumbnail only to realize the text is too small to read on a mobile phone? Our <strong>Thumbnail Preview Tool</strong> solves this problem by simulating exactly how your video will appear on the YouTube homepage, sidebar, and mobile app.</p>
      <h3>Why Previewing is Essential</h3>
      <p>Over 70% of YouTube views come from mobile devices. If your thumbnail text is too small or your colors are washed out in a small format, users will swipe right past you. This tool allows you to "A/B test" your designs before you hit publish, saving you from low CTR disasters.</p>
      <h3>Key Features:</h3>
      <ul>
        <li><strong>Mobile Simulation:</strong> See your video as it appears on small smartphone screens.</li>
        <li><strong>Desktop Feed:</strong> Preview the standard homepage grid layout.</li>
        <li><strong>Sidebar View:</strong> See how your video looks next to "Recommended" content.</li>
      </ul>
      <p>By using this tool, you can ensure that your <strong>YouTube SEO strategy</strong> isn't ruined by a poor visual presentation. Don't leave your channel growth to chance—test your visuals first.</p>
    `,
    category: ToolCategory.Thumbnails,
    icon: 'fa-solid fa-display',
    type: 'utility',
    seoTitle: 'YouTube Thumbnail Preview Tool - Test Your CTR',
    seoDescription: 'See exactly how your thumbnail and title will look on the YouTube homepage and mobile app before you upload.',
    howToUse: ['Upload your image file.', 'Enter your proposed video title.', 'Toggle between Mobile and Desktop views to check visibility.'],
    faqs: [
      { question: 'Can I test different titles?', answer: 'Yes, you can edit the title in real-time to see how it wraps on multiple lines.' },
      { question: 'Does it save my images?', answer: 'No, everything is processed in your browser for maximum privacy.' }
    ]
  },
  {
    id: 'thumbnail-text-generator',
    name: 'AI Thumbnail Text',
    description: 'Get punchy, high-CTR text overlays for your designs.',
    longDescription: `
      <h2>Generate High-Impact Thumbnail Text with AI</h2>
      <p>Designers often struggle with what to write on a thumbnail. The rule is simple: <strong>Don't repeat the title.</strong> Our <strong>AI Thumbnail Text Generator</strong> provides short, punchy, and psychologically driven phrases that complement your title and drive clicks.</p>
      <h3>Psychology of a Click</h3>
      <p>Humans respond to emotion, curiosity, and urgency. Our AI suggests phrases that trigger these responses, such as "IT WORKED!", "DON'T DO THIS," or "THE TRUTH." By using different text than your title, you provide a second reason for the viewer to be interested.</p>
      <h3>SEO for Thumbnails?</h3>
      <p>While YouTube doesn't "read" thumbnail text for search ranking in the same way as titles, it uses OCR (Optical Character Recognition) to understand your video. Having clear, relevant keywords in your thumbnail text can actually help the algorithm categorize your content correctly.</p>
    `,
    category: ToolCategory.Thumbnails,
    icon: 'fa-solid fa-pen-nib',
    type: 'ai',
    seoTitle: 'AI YouTube Thumbnail Text Generator - Click Hooks',
    seoDescription: 'Get the best text ideas to put on your thumbnails. AI-driven phrases to maximize your video CTR.',
    howToUse: ['Describe your video topic.', 'Select "Generate Text".', 'Pick a phrase that creates curiosity.'],
    faqs: [
      { question: 'How many words should I use?', answer: 'The "sweet spot" is 3 to 4 words. Any more and it becomes unreadable on mobile.' },
      { question: 'Should I use all caps?', answer: 'Usually, yes. Bold, high-contrast text works best for visibility.' }
    ]
  },

  // --- SEO TOOLS ---
  {
    id: 'title-generator',
    name: 'AI Title Generator',
    description: 'Create viral, click-worthy titles using advanced AI.',
    longDescription: `
      <h2>The Ultimate AI YouTube Title Generator</h2>
      <p>A video title is more than just a name; it is a promise of value. Our <strong>AI Title Generator</strong> uses advanced language models to craft titles that are both highly searchable for SEO and highly clickable for human users.</p>
      <h3>Viral Hooks vs. Search Traffic</h3>
      <p>This tool offers a mix of two styles: <strong>SEO-focused titles</strong> (designed to rank in search results) and <strong>Click-focused titles</strong> (designed for the "Home" and "Suggested" feeds). For a new channel, a mix of both is the fastest path to growth.</p>
      <h3>Avoiding Clickbait Penalties</h3>
      <p>YouTube's algorithm penalizes videos with high "Bounce Rates"—where people click but leave immediately. Our AI is programmed to generate catchy titles that remain honest to your content, ensuring you build trust with your audience while still getting the click.</p>
      <h3>SEO Best Practices:</h3>
      <ul>
        <li>Keep keywords at the beginning of the title.</li>
        <li>Use brackets or parentheses for extra info (e.g. [2024 Update]).</li>
        <li>Use "Power Words" to evoke emotion.</li>
      </ul>
    `,
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-wand-magic-sparkles',
    type: 'ai',
    seoTitle: 'Viral YouTube Title Generator - AI SEO Tool',
    seoDescription: 'Create high-CTR YouTube titles with our free AI tool. Boost your search rankings and clicks instantly.',
    howToUse: ['Enter your video topic or keywords.', 'Hit generate.', 'Select from 10+ professional options.'],
    faqs: [
      { question: 'Does this help with SEO?', answer: 'Yes, it integrates high-volume search terms naturally into the suggestions.' },
      { question: 'Can I generate titles for Shorts?', answer: 'Absolutely! The tool works for all YouTube formats.' }
    ]
  },
  {
    id: 'description-generator',
    name: 'AI Description Gen',
    description: 'Professional, SEO-optimized descriptions with timestamps.',
    longDescription: `
      <h2>Automated YouTube Description Generator</h2>
      <p>Writing descriptions is tedious, but it is a critical part of <strong>YouTube SEO</strong>. Our generator creates structured, professional descriptions that help the algorithm index your video while providing value to your viewers.</p>
      <h3>Standard Professional Structure</h3>
      <p>A good description should follow this hierarchy:</p>
      <ol>
        <li><strong>The Summary:</strong> A 2-3 sentence hook using your primary keywords.</li>
        <li><strong>Chapters/Timestamps:</strong> For easy navigation and Google Search snippets.</li>
        <li><strong>Call to Action (CTA):</strong> Encouraging subs, likes, and newsletter signups.</li>
        <li><strong>Social Links:</strong> Where else can fans find you?</li>
      </ol>
      <p>Using our tool ensures you never forget a piece of this puzzle. It saves time and ensures a consistent look across your entire channel.</p>
    `,
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-file-signature',
    type: 'ai',
    seoTitle: 'YouTube Description Generator - AI SEO Descriptions',
    seoDescription: 'Generate professional, keyword-rich YouTube descriptions in seconds. Includes sections for links and timestamps.',
    howToUse: ['Enter your video title and main points.', 'Click generate.', 'Copy the result and paste into YouTube Studio.'],
    faqs: [
      { question: 'How long should a description be?', answer: 'YouTube allows 5000 characters. Aim for at least 300 words for better SEO.' },
      { question: 'Does this include hashtags?', answer: 'Yes, the AI will suggest relevant hashtags at the end.' }
    ]
  },
  {
    id: 'tag-generator',
    name: 'AI Tags Generator',
    description: 'Find high-ranking keywords and tags to rank your video.',
    longDescription: `
      <h2>The Only YouTube Tag Generator You Need</h2>
      <p>Tags are no longer as powerful as they used to be, but they are still a vital signal for <strong>YouTube Search ranking</strong>. They help the algorithm understand common misspellings and related terms that might not be in your title.</p>
      <h3>Strategic Tag Usage</h3>
      <p>Our generator creates a mix of Broad, Specific, and Long-tail tags. Broad tags (like "Cooking") define your category. Specific tags (like "Vegan Pasta Recipe") define your content. Long-tail tags (like "how to cook vegan pasta in 10 minutes") capture specific search queries.</p>
      <p>Avoid "Keyword Stuffing"—adding tags that have nothing to do with your video. Our AI ensures that every tag generated is strictly relevant to your input, keeping your channel safe from community guideline strikes.</p>
    `,
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-tags',
    type: 'ai',
    seoTitle: 'YouTube Tag Generator - Free AI Tag Finder',
    seoDescription: 'Generate the best tags for your YouTube videos to improve search rankings. Easy copy-paste format.',
    howToUse: ['Enter your video topic.', 'Click generate.', 'Copy the comma-separated list into YouTube Studio.'],
    faqs: [
      { question: 'How many tags should I use?', answer: 'Use all 500 characters allowed, but only if they are relevant.' },
      { question: 'Do tags help with views?', answer: 'They help primarily with search and "Suggested" categorization.' }
    ]
  },
  {
    id: 'hashtag-generator',
    name: 'Hashtag Generator',
    description: 'Get trending hashtags for your YouTube niche.',
    longDescription: `<h3>Boost Discovery with YouTube Hashtags</h3><p>Hashtags appear above your title and in search results. Our generator picks the highest volume tags for your niche.</p>`,
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-hashtag',
    type: 'ai',
    seoTitle: 'YouTube Hashtag Generator - Trending Tags',
    seoDescription: 'Find the most popular hashtags for your video niche.',
    howToUse: ['Enter niche', 'Generate', 'Paste in description'],
    faqs: [{ question: 'Where to put?', answer: 'Bottom of description.' }]
  },
  {
    id: 'keyword-research',
    name: 'AI Keyword Research',
    description: 'Find low-competition, high-volume topics.',
    longDescription: `<h3>Uncover High-Volume Keywords</h3><p>Stop guessing what to make videos about. Our tool uses AI to find the "golden" keywords where competition is low and interest is high.</p>`,
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-magnifying-glass-plus',
    type: 'ai',
    seoTitle: 'YouTube Keyword Research Tool - Free AI Search',
    seoDescription: 'Discover the best keywords to target for your next YouTube video.',
    howToUse: ['Enter broad topic', 'Run analysis', 'Pick low-comp keywords'],
    faqs: [{ question: 'Updated?', answer: 'Uses 2024 search data.' }]
  },
  {
    id: 'seo-checker',
    name: 'Video SEO Checker',
    description: 'Audit your video metadata for optimization score.',
    longDescription: `<h3>Instant SEO Audit</h3><p>Paste your video title and description to see how well optimized it is for the YouTube algorithm.</p>`,
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-check-double',
    type: 'ai',
    seoTitle: 'YouTube SEO Checker - Metadata Audit',
    seoDescription: 'Check if your video is ready for search.',
    howToUse: ['Paste metadata', 'Audit', 'Fix issues'],
    faqs: [{ question: 'What is a good score?', answer: 'Aim for 80+.' }]
  },
  {
    id: 'tag-extractor',
    name: 'AI Tag Extractor',
    description: 'Extract hidden SEO tags from any text or description.',
    longDescription: `<h3>Spy on Competitor Tags</h3><p>Paste the text from a competitor's description or video page to extract the most valuable keywords they are using.</p>`,
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-scissors',
    type: 'ai',
    seoTitle: 'YouTube Tag Extractor - Reverse SEO',
    seoDescription: 'Extract the best tags from high-ranking videos in your niche.',
    howToUse: ['Paste description text', 'Extract', 'Use for yourself'],
    faqs: [{ question: 'Is it legal?', answer: 'Yes, it reads public metadata.' }]
  },
  {
    id: 'hook-generator',
    name: 'AI Hook Generator',
    description: 'Opener scripts that stop the scroll instantly.',
    longDescription: `<h3>Stop the Scroll with Better Hooks</h3><p>The first 3 seconds are the most important. Our AI creates psychological hooks that force viewers to keep watching.</p>`,
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-anchor',
    type: 'ai',
    seoTitle: 'Viral YouTube Hook Generator',
    seoDescription: 'Create high-retention opening lines for your videos.',
    howToUse: ['Enter topic', 'Generate', 'Script it'],
    faqs: [{ question: 'Why hooks?', answer: 'Crucial for audience retention.' }]
  },
  {
    id: 'retention-tips',
    name: 'Retention Strategy',
    description: 'Get AI advice on how to keep viewers watching longer.',
    longDescription: `<h3>Maximize Your Watch Time</h3><p>Enter your video topic and get a custom strategy for keeping people engaged throughout the entire video.</p>`,
    category: ToolCategory.SEO,
    icon: 'fa-solid fa-brain',
    type: 'ai',
    seoTitle: 'YouTube Retention Strategy & Tips',
    seoDescription: 'Get personalized advice on how to increase your video watch time.',
    howToUse: ['Enter topic', 'Get tips', 'Edit video'],
    faqs: [{ question: 'Effective?', answer: 'Based on successful channel patterns.' }]
  },

  // --- SHORTS TOOLS ---
  {
    id: 'shorts-ideas',
    name: 'Shorts Ideas Gen',
    description: 'Viral concepts specifically for vertical video format.',
    longDescription: `<h3>Unlimited Shorts Ideas</h3><p>YouTube Shorts is a different beast. We generate ideas that fit the "loopable" and "highly shareable" nature of vertical video.</p>`,
    category: ToolCategory.Shorts,
    icon: 'fa-solid fa-bolt-lightning',
    type: 'ai',
    seoTitle: 'YouTube Shorts Idea Generator',
    seoDescription: 'Never run out of ideas for YouTube Shorts.',
    howToUse: ['Pick niche', 'Generate', 'Record'],
    faqs: [{ question: 'Vertical?', answer: 'Yes, optimized for 9:16.' }]
  },
  {
    id: 'shorts-hashtags',
    name: 'Shorts Hashtag Gen',
    description: 'The best #shorts hashtags to trigger the algorithm.',
    longDescription: `<h3>Shorts Hashtag Optimization</h3><p>Generate hashtags that help your Shorts get picked up by the "Shorts Shelf".</p>`,
    category: ToolCategory.Shorts,
    icon: 'fa-brands fa-tiktok',
    type: 'ai',
    seoTitle: 'Trending YouTube Shorts Hashtags',
    seoDescription: 'Find the best hashtags to grow your Shorts.',
    howToUse: ['Enter topic', 'Generate', 'Copy'],
    faqs: [{ question: 'How many?', answer: '3-5 tags are best.' }]
  },
  {
    id: 'shorts-script',
    name: 'AI Shorts Script',
    description: 'Fast-paced, high-retention 60s scripts.',
    longDescription: `<h3>Rapid-Fire Scripting</h3><p>Shorts require every word to count. Our AI writes concise, punchy scripts for 15-60 second videos.</p>`,
    category: ToolCategory.Shorts,
    icon: 'fa-solid fa-feather-pointed',
    type: 'ai',
    seoTitle: 'AI YouTube Shorts Scriptwriter',
    seoDescription: 'Get high-retention scripts for your Shorts.',
    howToUse: ['Enter topic', 'Generate', 'Read it'],
    faqs: [{ question: 'Max length?', answer: '60 seconds.' }]
  },
  {
    id: 'upload-time-tool',
    name: 'Upload Time Calc',
    description: 'Determine the best time to post for peak reach.',
    longDescription: `<h3>Global Audience Peak Times</h3><p>Based on niche data, we calculate the window where your audience is most likely to be active and ready to click.</p>`,
    category: ToolCategory.Shorts,
    icon: 'fa-solid fa-calendar-check',
    type: 'utility',
    seoTitle: 'YouTube Best Posting Time Calculator',
    seoDescription: 'Find the perfect time to upload your videos.',
    howToUse: ['Select niche', 'View times', 'Schedule'],
    faqs: [{ question: 'Timezone?', answer: 'Calculated in your local time.' }]
  },

  // --- CALCULATORS ---
  {
    id: 'youtube-earnings-calculator',
    name: 'Earnings Calculator',
    description: 'Estimate your potential revenue based on views and CPM.',
    longDescription: `<h3>YouTube Revenue Estimator</h3><p>Determine your potential monthly and yearly income from YouTube AdSense using our advanced calculator.</p>`,
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-sack-dollar',
    type: 'calculator',
    seoTitle: 'YouTube Money & AdSense Calculator',
    seoDescription: 'How much does YouTube pay? Calculate your revenue based on views.',
    howToUse: ['Views', 'CPM', 'Result'],
    faqs: [{ question: 'CPM?', answer: 'Cost Per 1000 views.' }]
  },
  {
    id: 'watch-time-calc',
    name: 'Watch Time Calc',
    description: 'Calculate how close you are to the 4000h goal.',
    longDescription: `<h3>Monetization Goal Tracker</h3><p>Convert your total views and average watch duration into total hours to see how close you are to the YPP requirements.</p>`,
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-stopwatch',
    type: 'calculator',
    seoTitle: 'YouTube Watch Hours Calculator',
    seoDescription: 'Check your progress toward 4,000 watch hours.',
    howToUse: ['Views', 'Avg Duration', 'Calc'],
    faqs: [{ question: 'Goal?', answer: '4000 hours in 12 months.' }]
  },
  {
    id: 'engagement-calculator',
    name: 'Engagement Calc',
    description: 'Calculate your true audience engagement rate.',
    longDescription: `<h3>Channel Health Analysis</h3><p>Compare your likes and comments to your views to see how active your community really is.</p>`,
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-heart-circle-check',
    type: 'calculator',
    seoTitle: 'YouTube Engagement Rate Calculator',
    seoDescription: 'Measure your channel health with interaction metrics.',
    howToUse: ['Views', 'Likes/Comments', 'Calc'],
    faqs: [{ question: 'Good rate?', answer: '3-7% is great.' }]
  },
  {
    id: 'ctr-calculator',
    name: 'CTR Calculator',
    description: 'Measure the effectiveness of your thumbnails.',
    longDescription: `<h3>Thumbnail Success Metric</h3><p>Click-Through Rate is the #1 signal to the algorithm. Track yours with this calculator.</p>`,
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-arrow-pointer',
    type: 'calculator',
    seoTitle: 'YouTube CTR Calculator - Free Utility',
    seoDescription: 'Calculate and track your click-through rate.',
    howToUse: ['Impressions', 'Clicks', 'Calc'],
    faqs: [{ question: 'What is high?', answer: '8%+ is elite.' }]
  },
  {
    id: 'rpm-calculator',
    name: 'RPM Calculator',
    description: 'Revenue Per Mille - The real money you take home.',
    longDescription: `<h3>Net Earning Calculation</h3><p>RPM is the only metric that matters because it accounts for YouTube's cut. Know exactly what you earn per 1k views.</p>`,
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-chart-column',
    type: 'calculator',
    seoTitle: 'YouTube RPM Estimator',
    seoDescription: 'Calculate your actual revenue per 1,000 views.',
    howToUse: ['Earnings', 'Views', 'Calc'],
    faqs: [{ question: 'RPM?', answer: 'Revenue Per Mille.' }]
  },
  {
    id: 'cpm-calculator',
    name: 'CPM Calculator',
    description: 'Calculate the cost for advertisers on your niche.',
    longDescription: `<h3>Niche Value Analysis</h3><p>Find out the gross value of your niche to advertisers before YouTube takes their platform fee.</p>`,
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-money-bill-trend-up',
    type: 'calculator',
    seoTitle: 'YouTube CPM Cost Calculator',
    seoDescription: 'Calculate the advertiser cost per mille for your channel.',
    howToUse: ['Spend', 'Impressions', 'Calc'],
    faqs: [{ question: 'Why?', answer: 'To find high-pay niches.' }]
  },
  {
    id: 'video-planner',
    name: 'Video Length Planner',
    description: 'Plan your shooting schedule based on length.',
    longDescription: `<h3>Production Time Manager</h3><p>Don't over-film. Calculate exactly how much raw footage you need for your target final video length.</p>`,
    category: ToolCategory.Calculators,
    icon: 'fa-solid fa-clapperboard',
    type: 'calculator',
    seoTitle: 'YouTube Video Length Planner',
    seoDescription: 'Manage your shooting and editing schedule.',
    howToUse: ['Length', 'Ratio', 'Calc'],
    faqs: [{ question: 'Ratio?', answer: 'Usually 10:1 raw to final.' }]
  },

  // --- UTILITY TOOLS ---
  {
    id: 'channel-analytics-viewer',
    name: 'AI Analytics Insights',
    description: 'Analyze channel health with AI logic.',
    longDescription: `<h3>AI-Powered Channel Audit</h3><p>Get a bird's eye view of your channel performance and where you should focus next.</p>`,
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-chart-simple',
    type: 'ai',
    seoTitle: 'YouTube Channel Analytics Insights',
    seoDescription: 'Deep dive into your channel analytics with AI.',
    howToUse: ['Niche', 'Run AI', 'Audit'],
    faqs: [{ question: 'Data?', answer: 'Benchmarks for niches.' }]
  },
  {
    id: 'video-idea-generator',
    name: 'AI Video Ideas',
    description: 'Never run out of content ideas for your channel.',
    longDescription: `<h3>Content Inspiration Machine</h3><p>Enter your niche and get a list of 10-20 high-potential video topics to film next.</p>`,
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-lightbulb',
    type: 'ai',
    seoTitle: 'Unlimited YouTube Video Idea Generator',
    seoDescription: 'Get viral video ideas with AI.',
    howToUse: ['Niche', 'Generate', 'Pick'],
    faqs: [{ question: 'Unique?', answer: 'AI generated per user.' }]
  },
  {
    id: 'channel-name-generator',
    name: 'AI Name Generator',
    description: 'Catchy channel name ideas for your brand.',
    longDescription: `<h3>Branding and Naming Tool</h3><p>Get a list of creative, available, and catchy names for your new channel project.</p>`,
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-id-badge',
    type: 'ai',
    seoTitle: 'YouTube Channel Name Generator',
    seoDescription: 'Find the perfect name for your channel.',
    howToUse: ['Topic', 'Generate', 'Check'],
    faqs: [{ question: 'Check?', answer: 'Manual check on YT.' }]
  },
  {
    id: 'comment-picker',
    name: 'Comment Picker',
    description: 'Fair giveaway winner selection from comments.',
    longDescription: `<h3>Giveaway Winner Tool</h3><p>Paste a list of names or comments and let our system pick a random winner fairly.</p>`,
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-trophy',
    type: 'utility',
    seoTitle: 'YouTube Comment Picker - Giveaways',
    seoDescription: 'Fairly pick contest winners.',
    howToUse: ['Paste comments', 'Pick', 'Winner'],
    faqs: [{ question: 'Fair?', answer: 'Uses random seed.' }]
  },
  {
    id: 'timestamp-generator',
    name: 'AI Timestamp Gen',
    description: 'Generate video chapters and timestamps automatically.',
    longDescription: `<h3>Video Structure Tool</h3><p>Quickly format your video timeline into chapters for better SEO and viewer experience.</p>`,
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-list-check',
    type: 'ai',
    seoTitle: 'YouTube Video Timestamp Generator',
    seoDescription: 'Create SEO friendly timestamps.',
    howToUse: ['Key points', 'Generate', 'Paste'],
    faqs: [{ question: 'SEO?', answer: 'Yes, helps Google snippets.' }]
  },
  {
    id: 'playlist-generator',
    name: 'AI Playlist Planner',
    description: 'Plan the perfect series to keep fans watching.',
    longDescription: `<h3>Binge-Watching Strategy</h3><p>Group your content into logical series that keep viewers on your channel longer.</p>`,
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-layer-group',
    type: 'ai',
    seoTitle: 'YouTube Playlist Planner',
    seoDescription: 'Organize videos for maximum watch time.',
    howToUse: ['Theme', 'Generate', 'Plan'],
    faqs: [{ question: 'Why?', answer: 'Boosts total views.' }]
  },
  {
    id: 'bio-generator',
    name: 'AI Bio Generator',
    description: 'Optimized "About" sections to turn viewers into subs.',
    longDescription: `<h3>Professional About Page</h3><p>Craft a compelling narrative for your channel's About page that converts visitors to fans.</p>`,
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-user-gear',
    type: 'ai',
    seoTitle: 'YouTube Bio Generator',
    seoDescription: 'Write a perfect channel description.',
    howToUse: ['Niche', 'Generate', 'Copy'],
    faqs: [{ question: 'SEO?', answer: 'Includes niche keywords.' }]
  },
  {
    id: 'pinned-comment-generator',
    name: 'AI Pinned Comment',
    description: 'Create engagement-boosting comments for your feed.',
    longDescription: `<h3>Social Proof Strategy</h3><p>Generate comments that ask the right questions to trigger a massive discussion thread.</p>`,
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-thumbtack',
    type: 'ai',
    seoTitle: 'YouTube Pinned Comment Ideas',
    seoDescription: 'Boost engagement with pinned comments.',
    howToUse: ['Topic', 'Generate', 'Pin'],
    faqs: [{ question: 'Why?', answer: 'Highest visibility spot.' }]
  },
  {
    id: 'competitor-analyst',
    name: 'Competitor Analyst',
    description: 'Reverse engineer successful channel strategies.',
    longDescription: `<h3>Market Intelligence Tool</h3><p>Understand exactly what titles, formats, and topics are working for your direct competition.</p>`,
    category: ToolCategory.Utility,
    icon: 'fa-solid fa-user-secret',
    type: 'ai',
    seoTitle: 'YouTube Competitor Analyst',
    seoDescription: 'Analyze what works for your competitors.',
    howToUse: ['Niche', 'Analyze', 'Insights'],
    faqs: [{ question: 'Privacy?', answer: 'Public data only.' }]
  }
];
