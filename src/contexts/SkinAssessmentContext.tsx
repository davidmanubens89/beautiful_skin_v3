import React, { createContext, useState, useContext, useEffect } from 'react';

interface SkinAssessmentContextType {
  answers: Record<string, string>;
  setAnswers: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  showRecommendations: boolean;
  setShowRecommendations: React.Dispatch<React.SetStateAction<boolean>>;
  recommendedProducts: any[];
  setRecommendedProducts: React.Dispatch<React.SetStateAction<any[]>>;
  selectedProducts: string[];
  setSelectedProducts: React.Dispatch<React.SetStateAction<string[]>>;
}

const SkinAssessmentContext = createContext<SkinAssessmentContextType | undefined>(undefined);

export const SkinAssessmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [recommendedProducts, setRecommendedProducts] = useState<any[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  useEffect(() => {
    const storedAnswers = localStorage.getItem('skinAssessmentAnswers');
    const storedShowRecommendations = localStorage.getItem('skinAssessmentShowRecommendations');
    const storedRecommendedProducts = localStorage.getItem('skinAssessmentRecommendedProducts');
    const storedSelectedProducts = localStorage.getItem('skinAssessmentSelectedProducts');

    if (storedAnswers) setAnswers(JSON.parse(storedAnswers));
    if (storedShowRecommendations) setShowRecommendations(JSON.parse(storedShowRecommendations));
    if (storedRecommendedProducts) setRecommendedProducts(JSON.parse(storedRecommendedProducts));
    if (storedSelectedProducts) setSelectedProducts(JSON.parse(storedSelectedProducts));
  }, []);

  useEffect(() => {
    localStorage.setItem('skinAssessmentAnswers', JSON.stringify(answers));
    localStorage.setItem('skinAssessmentShowRecommendations', JSON.stringify(showRecommendations));
    localStorage.setItem('skinAssessmentRecommendedProducts', JSON.stringify(recommendedProducts));
    localStorage.setItem('skinAssessmentSelectedProducts', JSON.stringify(selectedProducts));
  }, [answers, showRecommendations, recommendedProducts, selectedProducts]);

  return (
    <SkinAssessmentContext.Provider value={{
      answers,
      setAnswers,
      showRecommendations,
      setShowRecommendations,
      recommendedProducts,
      setRecommendedProducts,
      selectedProducts,
      setSelectedProducts
    }}>
      {children}
    </SkinAssessmentContext.Provider>
  );
};

export const useSkinAssessment = () => {
  const context = useContext(SkinAssessmentContext);
  if (context === undefined) {
    throw new Error('useSkinAssessment must be used within a SkinAssessmentProvider');
  }
  return context;
};