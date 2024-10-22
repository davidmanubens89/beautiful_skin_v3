import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const newsArticles = [
  {
    title: "Revolutionary Anti-Aging Skin Cream Promises to Turn Back the Clock",
    snippet: "Discover how this breakthrough formula helps you look younger and revitalizes your skin.",
    link: "/news/anti-aging-breakthrough",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "5 Natural Ingredients That Will Make Your Skin Glow",
    snippet: "Learn about powerful, organic compounds that can help you achieve radiant, youthful-looking skin.",
    link: "/news/natural-glow-ingredients",
    image: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "The Science Behind Hydration: Why Water is Key to Younger-Looking Skin",
    snippet: "Experts reveal how proper hydration can dramatically improve your skin's appearance and health.",
    link: "/news/hydration-science",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "Dermatologists Agree: This Daily Routine Can Help You Look 10 Years Younger",
    snippet: "Top skin experts share their secrets for a youthful complexion using simple, effective techniques.",
    link: "/news/dermatologist-approved-routine",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "Sun Protection: The Ultimate Anti-Aging Strategy for Radiant Skin",
    snippet: "Discover why sunscreen is your best defense against premature aging and how to choose the right one.",
    link: "/news/sun-protection-anti-aging",
    image: "https://images.unsplash.com/photo-1526758097130-bab247274f58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
  }
];

const NewsSection: React.FC = () => (
  <div className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Skincare News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsArticles.map((article, index) => (
          <NewsCard key={index} {...article} />
        ))}
      </div>
    </div>
  </div>
);

interface NewsCardProps {
  title: string;
  snippet: string;
  link: string;
  image: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, snippet, link, image }) => (
  <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{snippet}</p>
    <Link to={link} className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
      Read more <ArrowRight className="ml-2 w-4 h-4" />
    </Link>
  </div>
);

export default NewsSection;