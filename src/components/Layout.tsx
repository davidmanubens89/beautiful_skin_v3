import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Calendar, BookOpen, ShoppingBag, LineChart, Users } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import MobileNavigation from './MobileNavigation';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header isScrolled={isScrolled} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <MobileNavigation />
    </div>
  );
};

export default Layout;