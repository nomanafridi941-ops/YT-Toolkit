import React, { useState } from 'react';

export const ThumbnailPreview: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [title, setTitle] = useState('My Incredible New Video Title!');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-[40px] border border-gray-100 dark:border-slate-700 shadow-sm transition-theme">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-black text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">Step 1: Upload Image</label>
            <div className="relative group">
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload} 
                className="hidden" 
                id="thumb-upload"
              />
              <label 
                htmlFor="thumb-upload" 
                className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-200 dark:border-slate-700 rounded-3xl cursor-pointer hover:border-red-500 dark:hover:border-red-500 transition-all bg-gray-50 dark:bg-slate-900/50"
              >
                <i className="fa-solid fa-cloud-arrow-up text-3xl text-gray-400 mb-3 group-hover:text-red-500 transition-colors"></i>
                <span className="text-sm font-bold text-gray-500">Choose thumbnail file</span>
                <span className="text-[10px] text-gray-400 mt-1">PNG, JPG or WEBP (Max 2MB)</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-black text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">Step 2: Video Title</label>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              className="w-full px-6 py-4 border border-gray-200 dark:border-slate-700 rounded-2xl dark:bg-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-red-500 transition-all font-medium"
              placeholder="Enter your video title..."
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
           <div className="sticky top-24 w-full">
            <h3 className="text-center text-[10px] font-black uppercase text-gray-400 mb-6 tracking-[0.3em]">Live Desktop Preview</h3>
            <div className="w-full max-w-[360px] mx-auto bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-slate-700 transition-theme">
                <div className="aspect-video bg-gray-200 dark:bg-slate-900 relative group overflow-hidden">
                  {image ? (
                    <img src={image} className="w-full h-full object-cover" alt="Preview" />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-2">
                      <i className="fa-solid fa-image text-4xl opacity-20"></i>
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Thumbnail Missing</span>
                    </div>
                  )}
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">12:45</div>
                </div>
                <div className="p-4 flex gap-4">
                  <div className="w-10 h-10 bg-gray-200 dark:bg-slate-700 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                      <h4 className="text-sm font-bold dark:text-white line-clamp-2 leading-[1.3] mb-1">{title || 'Your Video Title Here'}</h4>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Channel Name • 1.2M views • 2 hours ago</p>
                  </div>
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
  const [isPicking, setIsPicking] = useState(false);

  const handlePick = () => {
    const list = comments.split('\n').filter(c => c.trim() !== '');
    if (list.length === 0) {
      alert("Please paste some comments first!");
      return;
    }
    
    setIsPicking(true);
    setWinner(null);

    // Simulated "picking" effect
    setTimeout(() => {
      const random = Math.floor(Math.random() * list.length);
      setWinner(list[random]);
      setIsPicking(false);
    }, 1500);
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-[40px] border border-gray-100 dark:border-slate-700 shadow-sm transition-theme">
      <div className="mb-8">
        <label className="block text-sm font-black text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">Paste Comments List (One per line)</label>
        <textarea 
          value={comments} 
          onChange={(e) => setComments(e.target.value)} 
          placeholder="Paste user names or comments here..." 
          className="w-full h-64 px-6 py-4 rounded-3xl border border-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm font-medium no-scrollbar" 
        />
      </div>
      
      <button 
        onClick={handlePick} 
        disabled={isPicking}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-5 rounded-3xl transition-all mb-8 shadow-xl shadow-red-600/20 active:scale-95 disabled:opacity-50"
      >
        {isPicking ? (
          <><i className="fa-solid fa-spinner fa-spin mr-3"></i> Sifting through entries...</>
        ) : (
          <><i className="fa-solid fa-random mr-3"></i> Pick Random Winner</>
        )}
      </button>

      {winner && (
        <div className="bg-green-50 dark:bg-green-900/10 p-8 rounded-[32px] text-center border-2 border-dashed border-green-200 dark:border-green-800 animate-fade-in">
          <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30">
            <i className="fa-solid fa-crown text-2xl"></i>
          </div>
          <h3 className="text-green-800 dark:text-green-400 font-black text-2xl mb-2">🎉 We have a Winner!</h3>
          <p className="text-green-700 dark:text-green-300 font-bold text-lg">{winner}</p>
        </div>
      )}
    </div>
  );
};

export const CPMLookup: React.FC = () => {
  const nicheData = [
    { niche: 'Finance & Investing', cpm: '$15.50 - $35.00', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'fa-chart-line' },
    { niche: 'B2B / SaaS / Marketing', cpm: '$12.00 - $25.00', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'fa-briefcase' },
    { niche: 'Real Estate', cpm: '$10.00 - $18.00', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'fa-house-chimney' },
    { niche: 'Tech & Software', cpm: '$8.00 - $15.00', color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400', icon: 'fa-microchip' },
    { niche: 'Education / Tutorials', cpm: '$5.00 - $12.00', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'fa-graduation-cap' },
    { niche: 'Vlogs & Lifestyle', cpm: '$2.00 - $6.00', color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'fa-video' },
    { niche: 'Gaming', cpm: '$1.50 - $4.00', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'fa-gamepad' },
  ];
  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-[40px] border border-gray-100 dark:border-slate-700 shadow-sm transition-theme">
      <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-8 text-center">Niche CPM Reference Sheet (Estimated)</h3>
      <div className="grid grid-cols-1 gap-4">
        {nicheData.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center p-5 bg-gray-50 dark:bg-slate-900/50 rounded-[24px] border border-gray-100 dark:border-slate-800/50 hover:border-red-500/30 transition-all group">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color} shadow-sm group-hover:scale-110 transition-transform`}>
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <span className="font-bold text-gray-700 dark:text-gray-200">{item.niche}</span>
            </div>
            <span className={`font-black text-lg ${item.color.split(' ')[1]}`}>{item.cpm}</span>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-xs text-gray-400 font-medium">* Actual CPM depends on audience location and seasonal factors.</p>
    </div>
  );
};

export const UploadTimeTool: React.FC = () => {
  const [niche, setNiche] = useState('Entertainment');
  const dataMap: Record<string, { best: string; time: string; icon: string }> = {
    'Entertainment': { best: 'Friday - Sunday', time: '5:00 PM - 9:00 PM', icon: 'fa-masks-theater' },
    'Education': { best: 'Monday - Thursday', time: '10:00 AM - 2:00 PM', icon: 'fa-book-open' },
    'Tech': { best: 'Tuesday - Friday', time: '11:00 AM - 4:00 PM', icon: 'fa-laptop-code' },
    'Gaming': { best: 'Friday - Saturday', time: '8:00 PM - 12:00 AM', icon: 'fa-headset' },
    'Vlogs': { best: 'Daily (Morning)', time: '8:00 AM - 11:00 AM', icon: 'fa-camera' }
  };
  const current = dataMap[niche] || dataMap['Entertainment'];

  return (
    <div className="bg-white dark:bg-slate-800 p-10 rounded-[40px] border border-gray-100 dark:border-slate-700 shadow-sm transition-theme text-center">
      <div className="mb-10">
        <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Select Your Channel Niche</label>
        <div className="flex flex-wrap justify-center gap-3">
          {Object.keys(dataMap).map((key) => (
            <button
              key={key}
              onClick={() => setNiche(key)}
              className={`px-6 py-3 rounded-2xl font-black text-sm transition-all ${niche === key ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'bg-gray-50 dark:bg-slate-900 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700'}`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 bg-red-50 dark:bg-red-900/10 rounded-[32px] border border-red-100 dark:border-red-900/20">
          <i className="fa-solid fa-calendar-day text-3xl text-red-600 mb-4"></i>
          <span className="block text-[10px] font-black text-red-600 uppercase mb-2 tracking-widest">Ideal Upload Days</span>
          <span className="text-2xl font-black text-gray-900 dark:text-white leading-none">{current.best}</span>
        </div>
        <div className="p-8 bg-gray-50 dark:bg-slate-900 rounded-[32px] border border-gray-100 dark:border-slate-800">
          <i className="fa-solid fa-clock text-3xl text-gray-400 dark:text-slate-600 mb-4"></i>
          <span className="block text-[10px] font-black text-gray-400 uppercase mb-2 tracking-widest">Target Peak Window</span>
          <span className="text-2xl font-black text-gray-900 dark:text-white leading-none">{current.time}</span>
        </div>
      </div>
      <p className="mt-10 text-xs font-bold text-gray-400 flex items-center justify-center gap-2">
        <i className="fa-solid fa-circle-info"></i> Based on aggregate data for the {niche} category worldwide.
      </p>
    </div>
  );
};
