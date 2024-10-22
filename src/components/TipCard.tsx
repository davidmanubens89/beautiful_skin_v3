import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TipCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const TipCard: React.FC<TipCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 text-indigo-600 mr-3" />
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default TipCard;