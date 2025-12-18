import React, { useState } from 'react';

const ThumbnailTool: React.FC = () => {
  const [url, setUrl] = useState('');
  const [videoID, setVideoID] = useState<string | null>(null);

  const extractID = (link: string) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = link.match(regExp);
    if (match && match[7].length === 11) return match[7];

    const shortsRegExp = /\/shorts\/([a-zA-Z0-9_-]{11})/;
    const shortsMatch = link.match(shortsRegExp);
    if (shortsMatch) return shortsMatch[1];

    return null;
  };

  const handleGetThumbnails = () => {
    const id = extractID(url);
    if (id) {
      setVideoID(id);
    } else {
      alert("Please enter a valid YouTube URL");
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste YouTube Video URL here..."
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
          />
          <button
            onClick={handleGetThumbnails}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
          >
            Get Thumbnails
          </button>
        </div>
      </div>

      {videoID && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm overflow-hidden transition-colors">
             <h4 className="font-bold text-gray-800 dark:text-white mb-3 text-sm">High Resolution (1280x720)</h4>
             <img 
               src={`https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`} 
               alt="Thumbnail HD" 
               className="w-full rounded-lg mb-4 bg-gray-100 dark:bg-slate-900"
               onError={(e) => {
                 (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoID}/0.jpg`;
               }}
             />
             <a 
               href={`https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`} 
               target="_blank"
               download
               className="w-full block text-center bg-red-600 text-white font-bold py-2 rounded-lg hover:bg-red-700 transition-colors"
             >
               Download HD
             </a>
          </div>

          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm overflow-hidden transition-colors">
             <h4 className="font-bold text-gray-800 dark:text-white mb-3 text-sm">Standard Resolution (640x480)</h4>
             <img 
               src={`https://img.youtube.com/vi/${videoID}/sddefault.jpg`} 
               alt="Thumbnail SD" 
               className="w-full rounded-lg mb-4 bg-gray-100 dark:bg-slate-900"
             />
             <a 
               href={`https://img.youtube.com/vi/${videoID}/sddefault.jpg`} 
               target="_blank"
               download
               className="w-full block text-center bg-gray-800 dark:bg-slate-900 text-white font-bold py-2 rounded-lg hover:bg-gray-900 dark:hover:bg-slate-950 transition-colors"
             >
               Download SD
             </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThumbnailTool;