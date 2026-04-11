import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

import { useTheme } from '../context/ThemeContext';
import logo from '../assets/logo.webp';


const Navigation = ({ currentPage, setCurrentPage, onJoinClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();


  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'events', label: 'Events' },
    { id: 'gallery', label: 'Gallery' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-lg z-50 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Samwaad Club Logo" className="w-10 h-10 rounded-lg object-cover" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SAMWAAD CLUB
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}

              >
                {item.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-200"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              onClick={onJoinClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Join Club
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-slate-800 transition-colors duration-300">

            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 text-base font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-blue-600'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}

                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onJoinClick();
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 mt-3 mx-3"
              >
                Join Club
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;