
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

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ label = "Advertisement", className = "", size, adCode }) => {
  const sizeClass = size ? SIZE_MAP[size] : 'min-h-[100px]';
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (adCode && containerRef.current) {
      // Clear previous content
      containerRef.current.innerHTML = '';
      
      // Create a wrapper for the ad code
      const wrapper = document.createElement('div');
      wrapper.innerHTML = adCode;
      
      // Insert wrapper content
      containerRef.current.appendChild(wrapper);
      
      // Execute any scripts in the ad code
      const scripts = wrapper.querySelectorAll('script');
      scripts.forEach(oldScript => {
        const newScript = document.createElement('script');
        newScript.text = oldScript.text;
        newScript.src = oldScript.src;
        newScript.async = oldScript.async;
        newScript.defer = oldScript.defer;
        
        // Copy all attributes
        Array.from(oldScript.attributes).forEach(attr => {
          newScript.setAttribute(attr.name, attr.value);
        });
        
        oldScript.parentNode?.replaceChild(newScript, oldScript);
      });
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
