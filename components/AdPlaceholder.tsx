
import React, { useEffect, useRef } from 'react';

interface AdPlaceholderProps {
  label?: string;
  className?: string;
  type?: 'banner' | 'sidebar' | 'mobile' | 'small' | 'vertical160' | 'social' | 'none';
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ label = "Advertisement", className = "", type = 'none' }) => {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const sizes = {
    banner: { width: 728, height: 90 },
    sidebar: { width: 300, height: 250 },
    mobile: { width: 320, height: 50 },
    small: { width: 468, height: 60 },
    vertical160: { width: 160, height: 300 },
    social: { width: 0, height: 0 }
  } as const;

  useEffect(() => {
    if (type === 'none' || !adContainerRef.current) return;

    // Clear previous content if any
    adContainerRef.current.innerHTML = '';

    const adConfig: Record<string, { key?: string; height?: number; width?: number; src?: string }> = {
      banner: { key: '6a8e9b13351ca0fd75fc9383ddefaf9c', height: 90, width: 728 },
      sidebar: { key: 'ec6129f4b297397628d186246dfeed9c', height: 250, width: 300 },
      mobile: { key: 'bc5f72b7e74b1773e115008847f253b8', height: 50, width: 320 },
      small: { key: '73c3fff9efdd3519d17f7aabb776987a', height: 60, width: 468 },
      vertical160: { key: '0c653116f533d4f456c34802698b2b87', height: 300, width: 160 },
      social: { src: 'https://pl28678490.effectivegatecpm.com/9a/3b/b0/9a3bb088e0b4f50d06b5ad6750bdb204.js' }
    };

    const config = adConfig[type];

    const loadAd = (attempt: number, done?: () => void) => {
      if (!adContainerRef.current) return;

      // Reset container before each attempt
      adContainerRef.current.innerHTML = '';

      // Social script only (no atOptions)
      if (type === 'social' && config.src) {
        const socialScript = document.createElement('script');
        socialScript.type = 'text/javascript';
        socialScript.src = config.src;
        socialScript.async = true;
        adContainerRef.current.appendChild(socialScript);
        // Give the social script some time to render
        setTimeout(() => done && done(), 500);
        return;
      }

      // 1. Create the configuration script for Adsterra
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
        // Defer chain resolution until iframe detected or timeout
        const start = Date.now();
        const check = () => {
          if (!adContainerRef.current) return done && done();
          const hasIframe = adContainerRef.current.querySelector('iframe');
          if (hasIframe) {
            if (done) done();
          } else if (Date.now() - start < 2000) {
            setTimeout(check, 100);
          } else {
            if (done) done();
          }
        };
        check();
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
        className={"ad-container flex justify-center items-center mx-auto"}
        style={{ width: sizes[type as 'banner' | 'sidebar'].width, minHeight: sizes[type as 'banner' | 'sidebar'].height }}
      >
        {/* Ad scripts will inject content here */}
      </div>
    </div>
  );
};

export default AdPlaceholder;
