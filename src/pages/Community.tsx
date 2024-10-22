import React from 'react';
import { MessageSquare, Users, HelpCircle, Star } from 'lucide-react';

export const Community: React.FC = () => {
  const forumTopics = [
    { id: 1, title: "How to deal with hormonal acne?", replies: 23, views: 156 },
    { id: 2, title: "Best sunscreens for sensitive skin", replies: 45, views: 302 },
    { id: 3, title: "Incorporating retinol into your routine", replies: 67, views: 489 },
  ];

  const expertQAs = [
    { id: 1, question: "Can I use Vitamin C and Niacinamide together?", expert: "Dr. Sarah Johnson" },
    { id: 2, question: "How often should I exfoliate my skin?", expert: "Dr. Michael Lee" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">SkinScience Community</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <MessageSquare className="w-6 h-6 mr-2 text-indigo-600" />
            Forum Discussions
          </h2>
          <ul className="space-y-4">
            {forumTopics.map((topic) => (
              <li key={topic.id} className="border-b pb-4">
                <a href={`/community/forum/${topic.id}`} className="text-lg font-medium text-indigo-600 hover:text-indigo-800">
                  {topic.title}
                </a>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{topic.replies} replies</span>
                  <span className="mx-2">•</span>
                  <span>{topic.views} views</span>
                </div>
              </li>
            ))}
          </ul>
          <a href="/community/forum" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-medium">
            View all topics →
          </a>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <HelpCircle className="w-6 h-6 mr-2 text-indigo-600" />
            Expert Q&A
          </h2>
          <ul className="space-y-4">
            {expertQAs.map((qa) => (
              <li key={qa.id} className="border-b pb-4">
                <a href={`/community/expert-qa/${qa.id}`} className="text-lg font-medium text-indigo-600 hover:text-indigo-800">
                  {qa.question}
                </a>
                <div className="mt-2 text-sm text-gray-500">
                  Answered by {qa.expert}
                </div>
              </li>
            ))}
          </ul>
          <a href="/community/ask-expert" className="mt-4 inline-block bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
            Ask an Expert
          </a>
        </div>
      </div>
      
      <div className="mt-12 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <Star className="w-6 h-6 mr-2 text-indigo-600" />
          Product Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center mb-2">
                <img
                  src={`https://picsum.photos/seed/${index}/50/50`}
                  alt="Product"
                  className="w-12 h-12 object-cover rounded-full mr-4"
                />
                <div>
                  <h3 className="font-medium text-gray-800">Product Name</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "This product has been a game-changer for my skincare routine. Highly recommended!"
              </p>
              <p className="text-gray-500 text-xs mt-2">- Jane D.</p>
            </div>
          ))}
        </div>
        <a href="/community/reviews" className="mt-6 inline-block text-indigo-600 hover:text-indigo-800 font-medium">
          See all reviews →
        </a>
      </div>
    </div>
  );
};