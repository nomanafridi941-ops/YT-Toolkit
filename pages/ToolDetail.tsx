
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TOOLS } from '../constants';
import AdPlaceholder from '../components/AdPlaceholder';
import ThumbnailTool from '../tools/ThumbnailTool';
import CalculatorTool from '../tools/CalculatorTool';
import TemplateTool from '../tools/TemplateTool';
import { CommentPicker, CPMLookup, UploadTimeTool, ThumbnailPreview } from '../tools/UtilityTools';

const ToolDetail: React.FC = () => {
  const { toolId } = useParams<{ toolId: string }>();
  const tool = TOOLS.find(t => t.id === toolId);

  useEffect(() => {
    if (tool) {
      document.title = `${tool.seoTitle} - YTToolKitPro`;
      window.scrollTo(0, 0);
    }
  }, [tool]);

  if (!tool) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 dark:bg-slate-900">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Tool Not Found</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">The tool you're looking for doesn't exist.</p>
        <a href="#/" className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold">Go Back Home</a>
      </div>
    );
  }

  const renderToolUI = () => {
    switch (tool.id) {
      // Specialized Utilities
      case 'thumbnail-downloader': return <ThumbnailTool />;
      case 'thumbnail-preview': return <ThumbnailPreview />;
      case 'comment-picker': return <CommentPicker />;
      case 'upload-time-tool': return <UploadTimeTool />;
      case 'cpm-reference': return <CPMLookup />;
      
      // Standard Calculators
      case 'youtube-earnings-calculator': return <CalculatorTool type="earnings" />;
      case 'engagement-calculator': return <CalculatorTool type="engagement" />;
      case 'ctr-calculator': return <CalculatorTool type="ctr" />;
      case 'rpm-calculator': return <CalculatorTool type="rpm" />;
      case 'cpm-calculator': return <CalculatorTool type="cpm" />;
      case 'watch-time-calc': return <CalculatorTool type="watch-time" />;
      case 'video-planner': return <CalculatorTool type="video-planner" />;
      
      // Logic-Based Template Generators (Replacing all AI tools)
      default:
        return <TemplateTool toolId={tool.id} placeholder={`Enter your ${tool.id.includes('channel') ? 'niche' : 'topic'} here...`} buttonText="Generate Instant Results" />;
    }
  };

  const relatedTools = TOOLS.filter(t => t.category === tool.category && t.id !== tool.id).slice(0, 4);

  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center text-2xl shadow-xl shadow-red-600/20">
              <i className={tool.icon}></i>
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">{tool.name}</h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 mt-1">{tool.description}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            <section>{renderToolUI()}</section>
            
                          <AdPlaceholder type="banner" className="mb-8" />


            {/* Rich SEO Content Section */}
            <section className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[40px] border border-gray-100 dark:border-slate-700 shadow-sm transition-theme">
              <h2 className="text-2xl md:text-3xl font-black mb-8 text-gray-900 dark:text-white border-l-4 border-red-600 pl-4 uppercase tracking-tight">Everything You Need to Know</h2>
              <div 
                className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 font-medium leading-relaxed"
                dangerouslySetInnerHTML={{ __html: tool.longDescription }}
              />
            </section>

            <section className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm">
              <h2 className="text-2xl font-black mb-8 dark:text-white">How to Use This Tool</h2>
              <div className="space-y-6">
                {tool.howToUse.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-black text-sm">{idx + 1}</span>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm">
              <h2 className="text-2xl font-black mb-8 dark:text-white">Frequently Asked Questions</h2>
              <div className="grid gap-6">
                {tool.faqs.map((faq, idx) => (
                  <div key={idx} className="p-5 bg-gray-50 dark:bg-slate-900/50 rounded-2xl">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-red-600 rounded-3xl p-8 text-white shadow-xl shadow-red-600/20">
              <h3 className="text-2xl font-black mb-4">Pro Tips!</h3>
              <p className="text-red-100 mb-6">Maximize your CTR by using high-contrast colors in your thumbnails and punchy titles.</p>
              <a href="#/category/SEO Tools" className="block text-center bg-white text-red-600 font-black py-4 rounded-2xl hover:bg-gray-100 transition-all">Explore SEO Suite</a>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest px-2">Related Tools</h3>
              <div className="grid gap-3">
                {relatedTools.map(t => (
                  <a key={t.id} href={`#/tool/${t.id}`} className="group flex items-center gap-4 p-4 bg-white dark:bg-slate-800 border border-transparent hover:border-red-500 dark:hover:border-red-500 rounded-2xl transition-all shadow-sm">
                    <div className="w-10 h-10 bg-red-50 dark:bg-red-900/10 text-red-600 rounded-xl flex items-center justify-center transition-colors group-hover:bg-red-600 group-hover:text-white"><i className={t.icon}></i></div>
                    <span className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-red-600 transition-colors">{t.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <AdPlaceholder type="sidebar" />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ToolDetail;
