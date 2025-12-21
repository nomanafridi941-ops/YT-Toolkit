import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    atOptions?: Record<string, unknown>;
  }
}

const BottomBannerAd: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    window.atOptions = {
      key: '6a8e9b13351ca0fd75fc9383ddefaf9c',
      format: 'iframe',
      height: 90,
      width: 728,
      params: {}
    };

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.highperformanceformat.com/6a8e9b13351ca0fd75fc9383ddefaf9c/invoke.js';
    script.async = true;

    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current && script.parentNode === containerRef.current) {
        containerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full flex justify-center bg-transparent">
      <div
        ref={containerRef}
        className="max-w-[728px] w-full min-h-[90px] flex items-center justify-center py-4"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Advertisement</span>
      </div>
    </div>
  );
};

export default BottomBannerAd;
