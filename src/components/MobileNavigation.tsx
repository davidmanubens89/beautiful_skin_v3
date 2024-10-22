import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Calendar, BookOpen, ShoppingBag, LineChart, Users } from 'lucide-react';

interface MobileNavLinkProps {
  to: string;
  icon: React.ReactNode;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, icon }) => (
  <Link to={to} className="p-3 text-gray-600 hover:text-indigo-600">
    {icon}
  </Link>
);

const MobileNavigation: React.FC = () => (
  <nav className="md:hidden fixed bottom-0 w-full bg-white border-t">
    <div className="flex justify-around">
      <MobileNavLink to="/" icon={<Home size={24} />} />
      <MobileNavLink to="/skin-assessment" icon={<User size={24} />} />
      <MobileNavLink to="/daily-routine" icon={<Calendar size={24} />} />
      <MobileNavLink to="/learn" icon={<BookOpen size={24} />} />
      <MobileNavLink to="/store" icon={<ShoppingBag size={24} />} />
      <MobileNavLink to="/track-progress" icon={<LineChart size={24} />} />
      <MobileNavLink to="/community" icon={<Users size={24} />} />
    </div>
  </nav>
);

export default MobileNavigation;