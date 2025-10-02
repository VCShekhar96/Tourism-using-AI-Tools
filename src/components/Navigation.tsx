import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Mountain, Waves, TreePine, Heart, Camera, Phone, Map as MapIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationLinks = [
    { path: '/', label: 'Home', icon: MapPin },
    { path: '/about', label: 'About India', icon: Heart },
    { path: '/heritage', label: 'Heritage', icon: Mountain },
    { path: '/beaches', label: 'Beaches', icon: Waves },
    { path: '/hill-stations', label: 'Hill Stations', icon: Mountain },
    { path: '/spiritual', label: 'Spiritual', icon: Heart },
    { path: '/wildlife', label: 'Wildlife', icon: TreePine },
    { path: '/gallery', label: 'Gallery', icon: Camera },
    { path: '/map', label: 'Map', icon: MapIcon },
    { path: '/contact', label: 'Contact', icon: Phone }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-saffron-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-saffron-500 to-orange-600 rounded-full flex items-center justify-center">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800">Incredible India</span>
              <span className="text-xs text-saffron-600 font-medium">Tourism Portal</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationLinks.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(path)
                    ? 'text-saffron-600 bg-saffron-50 border-b-2 border-saffron-500'
                    : 'text-gray-700 hover:text-saffron-600 hover:bg-saffron-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 pt-2 pb-4 space-y-2 max-h-96 overflow-y-auto">
              {navigationLinks.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive(path)
                      ? 'text-saffron-600 bg-saffron-50 border-l-4 border-saffron-500'
                      : 'text-gray-700 hover:text-saffron-600 hover:bg-saffron-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;