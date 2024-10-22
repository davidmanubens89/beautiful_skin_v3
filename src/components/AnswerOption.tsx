import React from 'react';

interface AnswerOptionProps {
  option: string | { label: string; image: string };
  isSelected: boolean;
  onClick: () => void;
  isSkinType: boolean;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({ option, isSelected, onClick, isSkinType }) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-4 py-2 border rounded-md transition-colors ${
      isSelected
        ? 'bg-indigo-100 border-indigo-300 text-indigo-700'
        : 'border-gray-300 hover:bg-gray-50'
    } ${isSkinType ? 'flex flex-col items-center' : ''}`}
  >
    {typeof option === 'string' ? (
      option
    ) : (
      <>
        <div className="relative w-full h-32 mb-2 overflow-hidden rounded-md group">
          <img 
            src={option.image} 
            alt={option.label} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
        </div>
        <span>{option.label}</span>
      </>
    )}
  </button>
);

export default AnswerOption;