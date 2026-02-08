import React from 'react';
import { updateMetaTags } from '../utils/seo';

const BLOG_POSTS = [
  {
    slug: 'youtube-seo-tips',
    title: '10 YouTube SEO Tips to Grow Faster in 2026',
    excerpt: 'Boost your channel with these actionable SEO strategies for YouTube creators.',
    date: '2026-02-01',
    cover: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
  },
  {
    slug: 'ai-tools-for-creators',
    title: 'How AI Tools Are Changing YouTube Content Creation',
    excerpt: 'Discover the latest AI-powered tools that help creators save time and grow.',
    date: '2026-01-20',
    cover: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  // Add more posts here
];

const Blog: React.FC = () => {
  React.useEffect(() => {
    updateMetaTags(
      'YTToolKitPro Blog - YouTube SEO, AI, Growth Tips',
      'Read the latest tips on YouTube SEO, AI tools, and channel growth from YTToolKitPro.'
    );
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-5xl font-black mb-10 text-center text-gray-900 dark:text-white">YTToolKitPro Blog</h1>
      <p className="text-lg text-gray-500 dark:text-gray-400 mb-16 text-center">Actionable tips, SEO strategies, and AI news for YouTube creators.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {BLOG_POSTS.map(post => (
          <a key={post.slug} href={`/blog/${post.slug}`} className="group block rounded-3xl overflow-hidden border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow hover:shadow-lg transition-all">
            <img src={post.cover} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" loading="lazy" />
            <div className="p-6">
              <div className="text-xs font-bold text-red-600 mb-2">{new Date(post.date).toLocaleDateString()}</div>
              <h2 className="text-2xl font-black mb-2 dark:text-white">{post.title}</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-4">{post.excerpt}</p>
              <span className="text-sm font-bold text-red-600 group-hover:underline">Read More →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog;
