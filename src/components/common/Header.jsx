import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import Button from './Button';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <motion.header 
      className="bg-white shadow-md sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="AVMS Logo" 
              className="h-18 w-20 object-contain transition-transform duration-300 self-center"
            />
            <span className="text-7xl font-bold group-hover:opacity-90 transition-all duration-300 leading-none self-center" style={{ fontFamily: '"Playfair Display", serif', letterSpacing: '0.05em', color: '#186087' }}>
              AVMS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <Navbar />
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
