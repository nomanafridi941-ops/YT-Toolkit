
import React, { useEffect, useRef } from 'react';

interface AdPlaceholderProps {
  label?: string;
  className?: string;
  size?: '728x90' | '300x250' | '336x280' | '300x600' | '320x100' | '970x250';
  adCode?: string;
}

const SIZE_MAP: Record<Required<AdPlaceholderProps>['size'], string> = {
  '728x90': 'max-w-[728px] h-[90px]',
  '300x250': 'max-w-[300px] h-[250px]',
  '336x280': 'max-w-[336px] h-[280px]',
  '300x600': 'max-w-[300px] h-[600px]',
  '320x100': 'max-w-[320px] h-[100px]',
  '970x250': 'max-w-[970px] h-[250px]'
};

let adLoadDelay = 0;

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ label = "Advertisement", className = "", size, adCode }) => {
  const sizeClass = size ? SIZE_MAP[size] : 'min-h-[100px]';
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (adCode && containerRef.current && !loadedRef.current) {
      loadedRef.current = true;
      
      // Add staggered delay to prevent ad conflicts
      const delay = adLoadDelay;
      adLoadDelay += 500;
      
      setTimeout(() => {
        try {
          // Clear previous content
          if (containerRef.current) {
            containerRef.current.innerHTML = '';
            
            // Parse the ad code to separate inline scripts and external scripts
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = adCode;
            
            // First, append non-script content
            const nonScriptElements = Array.from(tempDiv.childNodes).filter(
              node => node.nodeType !== 8 && (node.nodeType === 3 || (node.nodeType === 1 && (node as Element).tagName !== 'SCRIPT'))
            );
            
            nonScriptElements.forEach(node => {
              containerRef.current?.appendChild(node.cloneNode(true));
            });
            
            // Then execute scripts in order
            const scripts = tempDiv.querySelectorAll('script');
            scripts.forEach((oldScript) => {
              const newScript = document.createElement('script');
              
              if (oldScript.src) {
                // External script
                newScript.src = oldScript.src;
                newScript.async = false;
                newScript.defer = false;
                newScript.type = 'text/javascript';
                
                // Copy attributes
                Array.from(oldScript.attributes).forEach(attr => {
                  if (attr.name !== 'src') {
                    newScript.setAttribute(attr.name, attr.value);
                  }
                });
              } else if (oldScript.textContent) {
                // Inline script
                newScript.textContent = oldScript.textContent;
                newScript.type = 'text/javascript';
              }
              
              // Append to container to ensure execution in correct context
              containerRef.current?.appendChild(newScript);
            });
          }
        } catch (error) {
          console.error('Error loading ad:', error);
        }
      }, delay);
    }
  }, [adCode]);

  return (
    <div 
      ref={containerRef}
      className={`w-full ${sizeClass} flex items-center justify-center overflow-hidden ${className}`}
    >
      {!adCode && (
        <div className="w-full h-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center p-4">
          <div className="text-center">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
            <p className="text-[10px] text-gray-400">Ad Space</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdPlaceholder;
