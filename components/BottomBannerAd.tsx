import React, { useEffect, useRef } from 'react';

const BottomBannerAd: React.FC = () => {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const adLoadedRef = useRef(false);

  useEffect(() => {
    if (adLoadedRef.current || !adContainerRef.current) return;
    adLoadedRef.current = true;

    const container = adContainerRef.current;
    
    // Create options script
    const optionsScript = document.createElement('script');
    optionsScript.type = 'text/javascript';
    optionsScript.innerHTML = `
      atOptions = {
        'key': '6a8e9b13351ca0fd75fc9383ddefaf9c',
        'format': 'iframe',
        'height': 90,
        'width': 728,
        'params': {}
      };
    `;
    
    // Create invoke script
    const invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.src = 'https://www.highperformanceformat.com/6a8e9b13351ca0fd75fc9383ddefaf9c/invoke.js';
    
    container.appendChild(optionsScript);
    container.appendChild(invokeScript);
  }, []);

  return (
    <div className="w-full flex justify-center bg-transparent">
      <div
        ref={adContainerRef}
        className="max-w-[728px] w-full min-h-[90px] py-4"
        style={{ minHeight: '90px' }}
      />
    </div>
  );
};

export default BottomBannerAd;
