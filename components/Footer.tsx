
import React from 'react';
import { Logo, APP_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-500 max-w-sm">
              Free tools for YouTube creators. Growth hacking, SEO optimization, and financial planning for your channel. No registration required.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <i className="fa-brands fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <i className="fa-brands fa-youtube text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#/all-tools" className="text-gray-500 hover:text-red-600 text-sm">All Tools</a></li>
              <li><a href="#/category/SEO Tools" className="text-gray-500 hover:text-red-600 text-sm">SEO Tools</a></li>
              <li><a href="#/category/Calculators" className="text-gray-500 hover:text-red-600 text-sm">Calculators</a></li>
              <li><a href="#/blog" className="text-gray-500 hover:text-red-600 text-sm">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#/about" className="text-gray-500 hover:text-red-600 text-sm">About Us</a></li>
              <li><a href="#/contact" className="text-gray-500 hover:text-red-600 text-sm">Contact</a></li>
              <li><a href="#/privacy" className="text-gray-500 hover:text-red-600 text-sm">Privacy Policy</a></li>
              <li><a href="#/disclaimer" className="text-gray-500 hover:text-red-600 text-sm">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 text-center">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved. Not affiliated with YouTube or Google.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
