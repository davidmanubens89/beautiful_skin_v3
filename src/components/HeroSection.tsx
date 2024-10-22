import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => (
  <div className="relative h-screen">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')" }}
    ></div>
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-white mb-4">Welcome to SkinScience</h1>
          <p className="text-xl text-gray-200 mb-8">Your personal dermatologist-backed skincare advisor</p>
          <Link to="/skin-assessment" className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors">
            Start Your Skin Assessment
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;