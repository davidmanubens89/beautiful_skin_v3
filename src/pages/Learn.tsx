import React from 'react';
import { BookOpen, Droplet, Sun, Apple } from 'lucide-react';

export const Learn: React.FC = () => {
  const sections = [
    {
      title: "Ingredient Dictionary",
      icon: <Droplet className="w-8 h-8 text-blue-500" />,
      description: "Explore the science behind popular skincare ingredients.",
      link: "/learn/ingredients"
    },
    {
      title: "Treatment Guides",
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
      description: "Step-by-step guides for common skin concerns and treatments.",
      link: "/learn/treatments"
    },
    {
      title: "Sun Protection",
      icon: <Sun className="w-8 h-8 text-yellow-500" />,
      description: "Learn about the importance of sun protection and how to choose the right SPF.",
      link: "/learn/sun-protection"
    },
    {
      title: "Lifestyle Factors",
      icon: <Apple className="w-8 h-8 text-red-500" />,
      description: "Discover how diet, sleep, and stress affect your skin health.",
      link: "/learn/lifestyle"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Learn About Skincare</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              {section.icon}
              <h2 className="text-xl font-semibold text-gray-900 ml-3">{section.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{section.description}</p>
            <a href={section.link} className="text-indigo-600 hover:text-indigo-800 font-medium">
              Learn more →
            </a>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-indigo-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Featured Article</h2>
        <img 
          src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
          alt="Skincare products" 
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-indigo-900 mb-2">The Science of Hydration: Why Water is Essential for Healthy Skin</h3>
        <p className="text-indigo-800 mb-4">Discover the crucial role that proper hydration plays in maintaining skin health and how to effectively hydrate your skin from both inside and out.</p>
        <a href="/learn/hydration" className="text-indigo-600 hover:text-indigo-800 font-medium">
          Read full article →
        </a>
      </div>
    </div>
  );
};