
import React from 'react';

interface SimplePageProps {
  title: string;
  content: React.ReactNode;
}

const SimplePage: React.FC<SimplePageProps> = ({ title, content }) => {
  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-10 tracking-tight">{title}</h1>
        <div className="prose prose-red dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-8 bg-white dark:bg-slate-800 p-10 rounded-[40px] border border-gray-100 dark:border-slate-700 shadow-xl">
          {content}
        </div>
      </div>
    </div>
  );
};

export default SimplePage;

export const AboutContent = () => (
  <div className="space-y-6">
    <p className="text-lg leading-relaxed font-medium text-gray-700 dark:text-gray-300">Welcome to <strong>YTToolKitPro</strong>, your premier destination for high-performance YouTube growth tools. We provide essential utilities for modern creators who demand speed and efficiency.</p>
    <p>Our mission is simple: To democratize YouTube SEO. We believe that professional-grade tools shouldn't be locked behind expensive subscriptions or complex logins. That's why every single one of our 10+ tools is completely free, forever.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
      <div className="bg-gray-50 dark:bg-slate-900/50 p-6 rounded-2xl">
        <h3 className="font-black text-red-600 mb-2">No Login Required</h3>
        <p className="text-sm">We respect your privacy. No accounts, no emails, no tracking.</p>
      </div>
      <div className="bg-gray-50 dark:bg-slate-900/50 p-6 rounded-2xl">
        <h3 className="font-black text-red-600 mb-2">AI-Powered Tools</h3>
        <p className="text-sm">Advanced algorithms provide the most accurate suggestions possible for creators.</p>
      </div>
    </div>
  </div>
);

export const PrivacyContent = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4">1. Data Sovereignty</h2>
      <p>YTToolKitPro does not collect, store, or share your personal data. Any text or URL you paste into our tools is processed locally or via temporary API calls and is immediately discarded.</p>
    </section>
    <section>
      <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4">2. Cookies</h2>
      <p>We use essential cookies to remember your theme preference (Dark Mode vs Light Mode) and for anonymized traffic analysis to improve our services.</p>
    </section>
  </div>
);
