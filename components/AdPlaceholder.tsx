
import React from 'react';

interface AdPlaceholderProps {
  label?: string;
  className?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ label = "Advertisement", className = "" }) => {
  return (
    <div className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center p-4 min-h-[100px] overflow-hidden ${className}`}>
      <div className="text-center">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
        <p className="text-[10px] text-gray-400">AdSense Ready Space</p>
      </div>
    </div>
  );
};

export default AdPlaceholder;
