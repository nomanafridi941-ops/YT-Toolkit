
import React from 'react';

interface AdPlaceholderProps {
  label?: string;
  className?: string;
  size?: '728x90' | '300x250' | '336x280' | '300x600' | '320x100' | '970x250';
}

const SIZE_MAP: Record<Required<AdPlaceholderProps>['size'], string> = {
  '728x90': 'max-w-[728px] h-[90px]',
  '300x250': 'max-w-[300px] h-[250px]',
  '336x280': 'max-w-[336px] h-[280px]',
  '300x600': 'max-w-[300px] h-[600px]',
  '320x100': 'max-w-[320px] h-[100px]',
  '970x250': 'max-w-[970px] h-[250px]'
};

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ label = "Advertisement", className = "", size }) => {
  const sizeClass = size ? SIZE_MAP[size] : 'min-h-[100px]';
  return (
    <div className={`w-full ${sizeClass} bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center p-4 overflow-hidden ${className}`}>
      <div className="text-center">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
        <p className="text-[10px] text-gray-400">AdSense Ready Space</p>
      </div>
    </div>
  );
};

export default AdPlaceholder;
