import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    atOptions?: Record<string, unknown>;
  }
}

const TopBannerAd: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current) return;
    scriptLoadedRef.current = true;

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

    const target = containerRef.current;
    if (target) {
      target.innerHTML = '';
      target.appendChild(script);
    }

    return () => {
      if (target && script.parentNode === target) {
        target.removeChild(script);
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

export default TopBannerAd;
