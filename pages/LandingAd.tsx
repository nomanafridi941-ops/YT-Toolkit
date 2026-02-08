import React from 'react';
import { updateMetaTags } from '../utils/seo';
import ConversionBanner from '../components/ConversionBanner';
import TestimonialCard from '../components/TestimonialCard';
import EmailCapture from '../components/EmailCapture';

const testimonials = [
  {
    name: 'Ali',
    role: 'Gaming Creator',
    text: 'YT Toolkit helped me triple my channel’s growth in 3 months!',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Sara',
    role: 'Vlogger',
    text: 'The SEO tools are a game changer. My videos finally rank!',
    avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Carlos',
    role: 'Music Producer',
    text: 'The thumbnail downloader and AI title generator are my go-to tools. Highly recommended!',
    avatarUrl: 'https://randomuser.me/api/portraits/men/77.jpg',
  },
];

const LandingAd: React.FC = () => {
  React.useEffect(() => {
    updateMetaTags(
      'Free YouTube Tools for Creators | YT Toolkit Pro',
      'Unlock 30+ free YouTube tools: analytics, SEO, downloads, thumbnails, and more. No login. No fees. Start growing your channel now!'
    );
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-[#0f172a] min-h-screen pb-20">
      <div className="max-w-3xl mx-auto text-center pt-24 pb-10 px-4">
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8">Unlock YouTube Growth<br />with <span className="text-red-600">Free Tools</span></h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 mb-8">30+ tools for creators. No login. No fees. Start now!</p>
        <a href="/all-tools" className="inline-block px-12 py-5 bg-red-600 text-white font-black rounded-2xl shadow-2xl shadow-red-600/40 hover:bg-red-700 transition-all text-lg mb-6">Try Free Tools</a>
        <div className="mt-6">
          <EmailCapture />
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <ConversionBanner />
      </div>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-8">What Creators Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingAd;
