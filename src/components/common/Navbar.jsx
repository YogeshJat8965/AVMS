import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/team', label: 'Our Team' },
    { path: '/services', label: 'Services' },
    { path: '/industries', label: 'Industries' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' },
  ];
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="hidden lg:flex items-center space-x-1">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className="relative px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
        >
          {link.label}
          {isActive(link.path) && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
              layoutId="navbar-indicator"
              initial={false}
              transition={{
                type: 'spring',
                stiffness: 380,
                damping: 30
              }}
            />
          )}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
