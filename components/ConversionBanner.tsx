import React from 'react';

const ConversionBanner: React.FC = () => (
  <section className="bg-gradient-to-r from-red-600 to-pink-500 text-white rounded-3xl shadow-xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 my-20">
    <div className="flex-1 mb-6 md:mb-0">
      <h2 className="text-3xl md:text-4xl font-black mb-4">Unlock All 30+ Free Tools</h2>
      <p className="text-lg md:text-xl font-medium opacity-90 mb-4">No login. No fees. Get instant access to every YouTube growth tool, AI generator, and calculator.</p>
      <ul className="list-disc pl-5 mb-6 text-white/80 text-sm md:text-base">
        <li>AI Title & Description Generators</li>
        <li>HD Thumbnail Downloader</li>
        <li>SEO & Keyword Tools</li>
        <li>Revenue & Analytics Calculators</li>
      </ul>
      <a href="/all-tools" className="inline-block bg-white text-red-600 font-black px-10 py-4 rounded-2xl shadow hover:bg-red-100 hover:text-red-700 transition-all text-lg">Browse All Tools</a>
    </div>
    <div className="flex flex-col items-center gap-4">
      <a href="/category/SEO Tools" className="w-full inline-block bg-pink-100 text-red-600 font-black px-8 py-3 rounded-xl shadow hover:bg-pink-200 hover:text-red-700 transition-all text-lg text-center">Try SEO Suite</a>
      <a href="/category/Calculators" className="w-full inline-block bg-pink-100 text-red-600 font-black px-8 py-3 rounded-xl shadow hover:bg-pink-200 hover:text-red-700 transition-all text-lg text-center">Try Revenue Calcs</a>
    </div>
  </section>
);

export default ConversionBanner;
