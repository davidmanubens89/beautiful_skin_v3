import React from 'react';

interface KeyFactProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const KeyFact: React.FC<KeyFactProps> = ({ icon, title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-6 h-full">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-lg font-semibold text-gray-900 ml-3">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default KeyFact;