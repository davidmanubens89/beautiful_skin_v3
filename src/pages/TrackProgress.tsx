import React from 'react';
import { Camera, BarChart2, Calendar } from 'lucide-react';

export const TrackProgress: React.FC = () => {
  // This would typically come from your backend
  const progressData = [
    { date: '2023-05-01', score: 65 },
    { date: '2023-05-08', score: 70 },
    { date: '2023-05-15', score: 75 },
    { date: '2023-05-22', score: 80 },
    { date: '2023-05-29', score: 85 },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Track Your Progress</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <Camera className="w-6 h-6 mr-2 text-indigo-600" />
          Skin Progress Photos
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((index) => (
            <div key={index} className="aspect-w-1 aspect-h-1">
              <img
                src={`https://picsum.photos/seed/${index}/300/300`}
                alt={`Progress photo ${index}`}
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
        <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
          Upload New Photo
        </button>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <BarChart2 className="w-6 h-6 mr-2 text-indigo-600" />
          Skin Health Score
        </h2>
        <div className="h-64 bg-gray-100 rounded-lg flex items-end">
          {progressData.map((data, index) => (
            <div
              key={index}
              className="flex-1 bg-indigo-600 mx-1 rounded-t-lg"
              style={{ height: `${data.score}%` }}
              title={`${data.date}: ${data.score}`}
            ></div>
          ))}
        </div>
        <div className="mt-4 flex justify-between text-sm text-gray-600">
          {progressData.map((data, index) => (
            <span key={index}>{new Date(data.date).toLocaleDateString()}</span>
          ))}
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <Calendar className="w-6 h-6 mr-2 text-indigo-600" />
          Routine Adherence
        </h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-32 font-medium text-gray-700">Morning Routine:</div>
            <div className="flex-1 bg-gray-200 rounded-full h-4">
              <div className="bg-green-500 h-4 rounded-full" style={{ width: '90%' }}></div>
            </div>
            <div className="ml-4 text-green-600 font-medium">90%</div>
          </div>
          <div className="flex items-center">
            <div className="w-32 font-medium text-gray-700">Evening Routine:</div>
            <div className="flex-1 bg-gray-200 rounded-full h-4">
              <div className="bg-blue-500 h-4 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <div className="ml-4 text-blue-600 font-medium">85%</div>
          </div>
        </div>
        <p className="mt-4 text-gray-600">
          Great job! You've been consistent with your skincare routine. Keep it up for best results.
        </p>
      </div>
    </div>
  );
};