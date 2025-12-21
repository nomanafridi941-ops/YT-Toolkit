
import React, { useEffect, useRef } from 'react';

interface AdPlaceholderProps {
  label?: string;
  className?: string;
  type?: 'banner' | 'sidebar' | 'none';
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ label = "Advertisement", className = "", type = 'none' }) => {
  const adContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (type === 'none' || !adContainerRef.current) return;

    // Clear previous content if any
    adContainerRef.current.innerHTML = '';

    const adConfig = {
      banner: {
        key: '6a8e9b13351ca0fd75fc9383ddefaf9c',
        height: 90,
        width: 728
      },
      sidebar: {
        key: 'ec6129f4b297397628d186246dfeed9c',
        height: 250,
        width: 300
      }
    };

    const config = adConfig[type];

    const loadAd = (attempt: number, done?: () => void) => {
      if (!adContainerRef.current) return;

      // Reset container before each attempt
      adContainerRef.current.innerHTML = '';

      // 1. Create the configuration script for Adstera
      const atOptionsScript = document.createElement('script');
      atOptionsScript.type = 'text/javascript';
      atOptionsScript.innerHTML = `
        atOptions = {
          'key' : '${config.key}',
          'format' : 'iframe',
          'height' : ${config.height},
          'width' : ${config.width},
          'params' : {}
        };
      `;
      adContainerRef.current.appendChild(atOptionsScript);

      // 2. Create the invocation script (slight delay to ensure atOptions is set)
      const invokeScript = document.createElement('script');
      invokeScript.type = 'text/javascript';
      invokeScript.src = `https://www.highperformanceformat.com/${config.key}/invoke.js`;
      invokeScript.async = true;
      invokeScript.onload = () => {
        // Cleanup to avoid global collisions with subsequent loads
        try { (window as any).atOptions = undefined; } catch {}
        if (done) done();
      };
      setTimeout(() => {
        if (!adContainerRef.current) return;
        adContainerRef.current.appendChild(invokeScript);
      }, 50);

      // 3. Fallback: retry if iframe not injected
      setTimeout(() => {
        if (!adContainerRef.current) return;
        const hasIframe = adContainerRef.current.querySelector('iframe');
        if (!hasIframe && attempt < 3) {
          loadAd(attempt + 1, done);
        } else if (!hasIframe && attempt >= 3) {
          // Give up but continue chain
          try { (window as any).atOptions = undefined; } catch {}
          if (done) done();
        }
      }, 1500);
    };

    // Chain loads to avoid atOptions race when multiple ads exist
    const chain = (window as any).__adChain || Promise.resolve();
    (window as any).__adChain = chain.then(() => new Promise<void>(resolve => {
      loadAd(1, resolve);
    }));

  }, [type]);

  if (type === 'none') {
    return (
      <div className={`bg-gray-100 dark:bg-slate-800/50 border-2 border-dashed border-gray-300 dark:border-slate-700 rounded-lg flex items-center justify-center p-4 min-h-[100px] overflow-hidden ${className}`}>
        <div className="text-center">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
          <p className="text-[10px] text-gray-400">Ad Slot Placeholder</p>
        </div>
      </div>
    );
  }

  // Flex container to center the iframe returned by the ad network
  return (
    <div className={`flex flex-col items-center justify-center my-8 ${className}`}>
      <span className="text-[10px] font-black text-gray-300 dark:text-gray-600 uppercase tracking-[0.3em] mb-2">{label}</span>
      <div 
        ref={adContainerRef} 
        className={`ad-container flex justify-center items-center ${type === 'banner' ? 'w-[728px] min-h-[90px]' : 'w-[300px] min-h-[250px]'} max-w-full`}
      >
        {/* Ad scripts will inject content here */}
      </div>
    </div>
  );
};

export default AdPlaceholder;
