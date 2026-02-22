import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import logo from '../../images/logo.png';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 39px,
            rgba(255, 255, 255, 0.1) 39px,
            rgba(255, 255, 255, 0.1) 40px
          )`
        }}></div>
      </div>

      <div className="container-custom py-12 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="AVMS Logo" 
                className="h-12 w-12 object-contain"
              />
              <h3 className="text-4xl font-bold text-white leading-[3rem]" style={{ fontFamily: '"Playfair Display", serif', letterSpacing: '0.05em' }}>AVMS</h3>
            </div>
            <p className="text-white text-sm leading-relaxed">
              Chartered Accountants<br />
              Bhopal, Madhya Pradesh, India
            </p>
            <div className="mt-4 flex items-start text-white text-sm">
              <FaMapMarkerAlt className="mr-2 mt-1 flex-shrink-0 text-secondary-400" />
              <span>Serving clients across India with 30+ years of excellence</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white hover:text-secondary-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all duration-300">→</span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-secondary-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all duration-300">→</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white hover:text-secondary-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all duration-300">→</span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-white hover:text-secondary-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all duration-300">→</span>
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white hover:text-secondary-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all duration-300">→</span>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-secondary-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all duration-300">→</span>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 text-white text-sm">
              <li className="flex items-start">
                <span className="mr-2 text-secondary-400">•</span>
                Income Tax Services
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-secondary-400">•</span>
                GST Compliance
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-secondary-400">•</span>
                Statutory & Internal Audit
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-secondary-400">•</span>
                Corporate Compliance
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-secondary-400">•</span>
                Accounting & Bookkeeping
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-secondary-400">•</span>
                Management Consultancy
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center hover:text-secondary-400 transition-colors duration-300">
                <FaPhone className="mr-3 flex-shrink-0 text-secondary-400" />
                <a href="tel:07552555642" className="text-white">0755-2555642</a>
              </li>
              <li className="flex items-center hover:text-secondary-400 transition-colors duration-300">
                <FaPhone className="mr-3 flex-shrink-0 text-secondary-400" />
                <a href="tel:+917222909440" className="text-white">+91-7222909440</a>
              </li>
              <li className="flex items-center hover:text-secondary-400 transition-colors duration-300">
                <FaEnvelope className="mr-3 flex-shrink-0 text-secondary-400" />
                <a href="mailto:ca.avms@gmail.com" className="text-white">
                  ca.avms@gmail.com
                </a>
              </li>
              <li className="flex items-center hover:text-secondary-400 transition-colors duration-300">
                <FaLinkedin className="mr-3 flex-shrink-0 text-secondary-400" />
                <a 
                  href="https://linkedin.com/company/a-v-m-s-associates" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Connect on LinkedIn
                </a>
              </li>
            </ul>
            
            {/* Office Hours */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div className="flex items-center text-secondary-500 mb-2">
                <FaClock className="mr-2" />
                <span className="font-semibold">Office Hours</span>
              </div>
              <p className="text-gray-300 text-sm">
                Monday to Saturday<br />
                10:00 AM – 6:00 PM
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} AVMS & Associates. All rights reserved.</p>
          <p className="mt-2">
            Empowering businesses with trusted financial expertise since 1990s
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
