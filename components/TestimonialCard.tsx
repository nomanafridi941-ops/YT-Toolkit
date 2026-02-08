import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  avatarUrl?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, text, avatarUrl }) => (
  <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm flex flex-col items-center">
    {avatarUrl ? (
      <img src={avatarUrl} alt={name} className="w-12 h-12 rounded-full mb-4 object-cover" loading="lazy" />
    ) : (
      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
        <i className="fa-solid fa-user text-red-600 text-2xl"></i>
      </div>
    )}
    <p className="text-gray-700 dark:text-gray-300 font-medium mb-2 text-center">{text}</p>
    <span className="text-xs text-gray-400 font-bold">{name}{role ? `, ${role}` : ''}</span>
  </div>
);

export default TestimonialCard;
