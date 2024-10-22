import React from 'react';

interface QuestionButtonProps {
  question: string;
  isActive: boolean;
  onClick: () => void;
}

const QuestionButton: React.FC<QuestionButtonProps> = ({ question, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-4 py-2 mb-2 rounded-md transition-colors ${
      isActive
        ? 'bg-indigo-100 text-indigo-700'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    }`}
  >
    {question}
  </button>
);

export default QuestionButton;