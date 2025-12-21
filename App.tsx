
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ToolsList from './pages/ToolsList';
import ToolDetail from './pages/ToolDetail';
import Sitemap from './pages/Sitemap';
import SimplePage, { AboutContent, PrivacyContent } from './pages/SimplePage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen transition-theme">
        <Header />
        
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
            <Route path="/blog" element={<SimplePage title="Creator Blog" content={<p>Our blog is coming soon! Stay tuned for the latest YouTube growth tips, SEO secrets, and industry news.</p>} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
