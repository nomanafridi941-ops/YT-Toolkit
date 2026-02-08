import React, { useState } from 'react';

const EmailCapture: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return <div className="text-green-600 font-bold text-sm mt-4">Thank you! You’ll get updates soon.</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-3 mt-6">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="px-5 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-red-500 outline-none min-w-[220px]"
        placeholder="Enter your email for updates"
        required
      />
      <button
        type="submit"
        className="px-6 py-3 bg-red-600 text-white font-black rounded-xl shadow hover:bg-red-700 transition-all text-sm"
      >
        Notify Me
      </button>
      {error && <div className="text-red-600 text-xs font-bold mt-2 md:mt-0">{error}</div>}
    </form>
  );
};

export default EmailCapture;
