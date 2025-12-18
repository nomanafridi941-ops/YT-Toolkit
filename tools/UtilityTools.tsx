
import React, { useState } from 'react';

export const ThumbnailPreview: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [title, setTitle] = useState('My Awesome Video Title');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-200 dark:border-slate-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Upload Thumbnail</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full px-4 py-3 border rounded-xl dark:bg-slate-900 dark:text-white dark:border-slate-700" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Video Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-3 border rounded-xl dark:bg-slate-900 dark:text-white dark:border-slate-700" />
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-slate-900 p-4 rounded-xl flex flex-col items-center justify-center">
           <p className="text-xs font-black uppercase text-gray-400 mb-4">Live Preview (Desktop Feed)</p>
           <div className="w-full max-w-[320px] bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video bg-gray-200 dark:bg-slate-700 relative overflow-hidden">
                 {image ? <img src={image} className="w-full h-full object-cover" alt="Preview" /> : <div className="flex items-center justify-center h-full text-gray-400"><i className="fa-solid fa-image text-3xl"></i></div>}
                 <div className="absolute bottom-1 right-1 bg-black text-white text-[10px] px-1 rounded">12:45</div>
              </div>
              <div className="p-3 flex gap-3">
                 <div className="w-9 h-9 bg-gray-200 rounded-full flex-shrink-0"></div>
                 <div>
                    <h4 className="text-sm font-bold dark:text-white line-clamp-2 leading-tight">{title}</h4>
                    <p className="text-[10px] text-gray-500 mt-1">Creator Name • 1.2M views • 2 hours ago</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export const CommentPicker: React.FC = () => {
  const [comments, setComments] = useState('');
  const [winner, setWinner] = useState<string | null>(null);

  const handlePick = () => {
    const list = comments.split('\n').filter(c => c.trim() !== '');
    if (list.length === 0) return;
    const random = Math.floor(Math.random() * list.length);
    setWinner(list[random]);
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-200 dark:border-slate-700">
      <textarea value={comments} onChange={(e) => setComments(e.target.value)} placeholder="Paste your comments here..." className="w-full h-48 px-4 py-3 rounded-xl border dark:bg-slate-900 dark:text-white dark:border-slate-700 outline-none focus:ring-2 focus:ring-red-500 mb-6" />
      <button onClick={handlePick} className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-xl transition-all mb-8">Pick Random Winner</button>
      {winner && <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-2xl text-center"><h3 className="text-green-800 dark:text-green-400 font-black text-xl">🎉 Winner Found: {winner}</h3></div>}
    </div>
  );
};

export const CPMLookup: React.FC = () => {
  const nicheData = [
    { niche: 'Finance & Investing', cpm: '$12 - $30', color: 'text-green-600' },
    { niche: 'Business/Marketing', cpm: '$8 - $20', color: 'text-blue-600' },
    { niche: 'Tech & Software', cpm: '$6 - $15', color: 'text-purple-600' },
    { niche: 'Education/Tutorials', cpm: '$4 - $10', color: 'text-orange-600' },
    { niche: 'Lifestyle & Vlogs', cpm: '$2 - $5', color: 'text-pink-600' },
    { niche: 'Gaming', cpm: '$1 - $4', color: 'text-red-600' },
  ];
  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-200 dark:border-slate-700">
      <div className="grid grid-cols-1 gap-4">
        {nicheData.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-slate-900/50 rounded-xl">
            <span className="font-bold dark:text-white">{item.niche}</span>
            <span className={`font-black ${item.color}`}>{item.cpm}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const UploadTimeTool: React.FC = () => {
  const [niche, setNiche] = useState('Entertainment');
  const current = { 'Entertainment': { best: 'Fri-Sun', time: '5 PM - 8 PM' }, 'Education': { best: 'Mon-Thu', time: '10 AM - 1 PM' }, 'Tech': { best: 'Tue-Fri', time: '11 AM - 3 PM' }, 'Gaming': { best: 'Fri-Sat', time: '8 PM - 11 PM' } }[niche] || { best: 'Daily', time: '6 PM' };
  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-200 dark:border-slate-700 text-center">
      <select value={niche} onChange={(e) => setNiche(e.target.value)} className="w-full mb-8 px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-900 dark:text-white border border-gray-200 dark:border-slate-700 outline-none">
        <option value="Entertainment">Entertainment</option>
        <option value="Education">Education</option>
        <option value="Tech">Tech</option>
        <option value="Gaming">Gaming</option>
      </select>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-6 bg-red-50 dark:bg-red-900/10 rounded-2xl"><span className="block text-xs font-black text-red-600 uppercase mb-2">Best Days</span><span className="text-xl font-black dark:text-white">{current.best}</span></div>
        <div className="p-6 bg-gray-50 dark:bg-slate-900 rounded-2xl"><span className="block text-xs font-black text-gray-400 uppercase mb-2">Peak Hours</span><span className="text-xl font-black dark:text-white">{current.time}</span></div>
      </div>
    </div>
  );
};
