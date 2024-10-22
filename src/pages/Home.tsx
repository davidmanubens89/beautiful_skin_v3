import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import NewsSection from '../components/NewsSection';

export const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <NewsSection />
    </div>
  );
};

export default Home;