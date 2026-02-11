
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ToolsList from './pages/ToolsList';
import Footer from './components/Footer';
import ToolDetail from './pages/ToolDetail';
import Sitemap from './pages/Sitemap';
import SimplePage, { AboutContent, PrivacyContent } from './pages/SimplePage';
import Blog from './pages/Blog';
import LandingAd from './pages/LandingAd';
const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen transition-theme">
        <Header />
        {/* Ads removed */}
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-tools" element={<ToolsList />} />
            <Route path="/category/:catId" element={<ToolsList />} />
            <Route path="/tool/:toolId" element={<ToolDetail />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/about" element={<SimplePage title="About Us" content={<AboutContent />} />} />
            <Route path="/privacy" element={<SimplePage title="Privacy Policy" content={<PrivacyContent />} />} />
            <Route path="/disclaimer" element={<SimplePage title="Disclaimer" content={<p>All tools on this website are provided "as is" without warranty of any kind. Use them at your own risk. This site is not affiliated with YouTube or Google LLC.</p>} />} />
            <Route path="/contact" element={<SimplePage title="Contact Us" content={<p>If you have any queries, please reach out to us at <strong>support@yttoolkit.xyz</strong>. We usually respond within 24-48 hours.</p>} />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/ad-landing" element={<LandingAd />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
