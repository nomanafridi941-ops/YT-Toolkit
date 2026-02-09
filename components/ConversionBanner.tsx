import React from 'react';

const ConversionBanner: React.FC = () => (
  <section className="bg-gradient-to-r from-red-600 to-pink-500 text-white rounded-3xl shadow-xl p-8 md:p-12 flex flex-col items-center text-center gap-6 my-6">
    <div className="max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-black mb-3">Unlock All 30+ Free Tools</h2>
      <p className="text-lg md:text-xl font-medium opacity-90 mb-6">No login. No fees. Get instant access to every YouTube growth tool, AI generator, and calculator.</p>
      <a href="/all-tools" className="mx-auto inline-block bg-white text-red-600 font-black px-12 py-5 rounded-2xl shadow hover:bg-red-100 hover:text-red-700 transition-all text-lg">Browse All Tools</a>
    </div>
  </section>
);

export default ConversionBanner;
