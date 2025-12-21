
import React, { useEffect } from 'react';

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

  useEffect(() => {
    if (adCode && window.atOptions) {
      // Trigger ad network script if available
      try {
        const script = document.querySelector('script[src*="highperformanceformat"]');
        if (script && typeof (window as any).atOptions !== 'undefined') {
          // Re-initialize ad if needed
        }
      } catch (e) {
        // Silently handle ad script errors
      }
    }
  }, [adCode]);

  return (
    <div className={`w-full ${sizeClass} flex items-center justify-center overflow-hidden ${className}`}>
      {adCode ? (
        <div 
          dangerouslySetInnerHTML={{ __html: adCode }}
          className="w-full h-full"
        />
      ) : (
        <div className="w-full h-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center p-4">
          <div className="text-center">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
            <p className="text-[10px] text-gray-400">AdSense Ready Space</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdPlaceholder;
