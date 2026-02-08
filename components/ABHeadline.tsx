import React from 'react';

interface ABHeadlineProps {
  variant: 'A' | 'B';
}

const HEADLINES = {
  A: 'Unlock YouTube Growth with Free AI Tools',
  B: 'Grow Your Channel Faster with 30+ Free YouTube Tools',
};

const ABHeadline: React.FC<ABHeadlineProps> = ({ variant }) => (
  <h1 className="text-5xl md:text-8xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.05] mb-10">
    {HEADLINES[variant].split('with').map((part, idx, arr) =>
      idx < arr.length - 1 ? (
        <>
          {part}with
          <span className="text-red-600 relative inline-block">
            {arr[idx + 1]}
            <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="#E11D48" strokeWidth="4" fill="transparent" opacity="0.3" />
            </svg>
          </span>
        </>
      ) : null
    )}
  </h1>
);

export default ABHeadline;
