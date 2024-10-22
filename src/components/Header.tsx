import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderLinkProps {
  to: string;
  label: string;
  isScrolled: boolean;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ to, label, isScrolled }) => (
  <Link
    to={to}
    className={`${
      isScrolled ? 'text-gray-600 hover:text-indigo-600' : 'text-white hover:text-indigo-200'
    } transition-colors`}
  >
    {label}
  </Link>
);

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => (
  <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <Link to="/" className={`text-2xl font-semibold ${isScrolled ? 'text-indigo-600' : 'text-white'}`}>SkinScience</Link>
      <nav className="hidden md:flex space-x-4">
        <HeaderLink to="/skin-assessment" label="Assessment" isScrolled={isScrolled} />
        <HeaderLink to="/daily-routine" label="Routine" isScrolled={isScrolled} />
        <HeaderLink to="/learn" label="Learn" isScrolled={isScrolled} />
        <HeaderLink to="/store" label="Store" isScrolled={isScrolled} />
        <HeaderLink to="/track-progress" label="Progress" isScrolled={isScrolled} />
        <HeaderLink to="/community" label="Community" isScrolled={isScrolled} />
      </nav>
    </div>
  </header>
);

export default Header;