import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/industries', label: 'Industries' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' },
  ];
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md transition-colors duration-300"
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeMenu}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 30 
              }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              {/* Close Button */}
              <div className="flex justify-end p-4 border-b border-gray-200">
                <button
                  onClick={closeMenu}
                  className="p-2 text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md transition-colors duration-300"
                  aria-label="Close menu"
                >
                  <FaTimes size={24} />
                </button>
              </div>
              
              {/* Navigation Links */}
              <nav className="flex flex-col p-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      className={`
                        block px-4 py-3 rounded-lg font-medium transition-all duration-300
                        ${isActive(link.path) 
                          ? 'bg-primary-600 text-white shadow-md' 
                          : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                        }
                      `}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              {/* Contact Button */}
              <div className="p-4 mt-4 border-t border-gray-200">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="block w-full px-4 py-3 text-center bg-secondary-500 text-white font-semibold rounded-lg hover:bg-secondary-600 transition-colors duration-300 shadow-md"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
