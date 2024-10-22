import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-white border-t">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center md:justify-between items-center">
      <p className="text-sm text-gray-500">&copy; 2023 SkinScience. All rights reserved.</p>
      <nav className="hidden md:flex space-x-4">
        <a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Privacy Policy</a>
        <a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Terms of Service</a>
        <a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Contact Us</a>
      </nav>
    </div>
  </footer>
);

export default Footer;