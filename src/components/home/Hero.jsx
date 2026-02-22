import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaAward, FaUniversity, FaLandmark, FaIndustry } from 'react-icons/fa';
import Button from '../common/Button';
import { keyCredentials } from '../../data/credentialsData';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const iconMap = {
    FaAward: FaAward,
    FaUniversity: FaUniversity,
    FaLandmark: FaLandmark,
    FaIndustry: FaIndustry
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80&fit=crop" 
          alt="Professional Corporate Office Building" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-blue-900/95"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="py-20 lg:py-32">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              variants={itemVariants}
            >
              AVMS & Associates
            </motion.h1>

            {/* Tagline */}
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl mb-4 text-blue-100"
              variants={itemVariants}
            >
              Chartered Accountants
            </motion.p>

            <motion.p 
              className="text-lg md:text-xl mb-12 text-blue-200"
              variants={itemVariants}
            >
              Bhopal, Madhya Pradesh, India
            </motion.p>

            {/* Key Credentials Mini Cards */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
              variants={itemVariants}
            >
              {keyCredentials.map((cred) => {
                const IconComponent = iconMap[cred.icon];
                return (
                  <div 
                    key={cred.id}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center">
                      {IconComponent && <IconComponent className="text-3xl mb-2 text-secondary-400" />}
                      <p className="font-bold text-lg">{cred.credential}</p>
                      <p className="text-sm text-blue-200">{cred.description}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <Link to="/contact">
                <Button 
                  variant="secondary" 
                  size="lg"
                  icon={<FaPhone />}
                >
                  Get in Touch
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white/10 border-white text-white hover:bg-white hover:text-primary-700"
                >
                  Our Services
                </Button>
              </Link>
            </motion.div>

            {/* Quick Contact Info */}
            <motion.div 
              className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-blue-100"
              variants={itemVariants}
            >
              <a 
                href="tel:07552555642" 
                className="flex items-center gap-2 hover:text-secondary-400 transition-colors duration-300"
              >
                <FaPhone />
                <span>0755-2555642</span>
              </a>
              <span className="hidden sm:inline">|</span>
              <a 
                href="mailto:ca.avms@gmail.com" 
                className="flex items-center gap-2 hover:text-secondary-400 transition-colors duration-300"
              >
                <FaEnvelope />
                <span>ca.avms@gmail.com</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
