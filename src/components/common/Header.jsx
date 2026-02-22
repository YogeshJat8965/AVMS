import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Brand */}
          <Link to="/" className="text-2xl font-bold text-primary">
            AVMS & Associates
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-neutral-darkest hover:text-primary font-medium">
              Home
            </Link>
            <Link to="/about" className="text-neutral-darkest hover:text-primary font-medium">
              About
            </Link>
            <Link to="/services" className="text-neutral-darkest hover:text-primary font-medium">
              Services
            </Link>
            <Link to="/industries" className="text-neutral-darkest hover:text-primary font-medium">
              Industries
            </Link>
            <Link to="/careers" className="text-neutral-darkest hover:text-primary font-medium">
              Careers
            </Link>
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button - Will be enhanced in Phase 3 */}
          <button className="md:hidden text-neutral-darkest">
            Menu
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
