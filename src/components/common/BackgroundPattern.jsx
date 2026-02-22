import React from 'react';
import { motion } from 'framer-motion';

const BackgroundPattern = ({ variant = 'default', children, className = '' }) => {
  const patterns = {
    default: (
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(30deg, rgba(59, 130, 246, 0.15) 12%, transparent 12.5%, transparent 87%, rgba(59, 130, 246, 0.15) 87.5%),
            linear-gradient(150deg, rgba(59, 130, 246, 0.15) 12%, transparent 12.5%, transparent 87%, rgba(59, 130, 246, 0.15) 87.5%),
            linear-gradient(30deg, rgba(59, 130, 246, 0.15) 12%, transparent 12.5%, transparent 87%, rgba(59, 130, 246, 0.15) 87.5%),
            linear-gradient(150deg, rgba(59, 130, 246, 0.15) 12%, transparent 12.5%, transparent 87%, rgba(59, 130, 246, 0.15) 87.5%)
          `,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
        }} />
      </div>
    ),

    grid: (
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
    ),

    dots: (
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.2) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>
    ),

    diagonal: (
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 30px,
            rgba(59, 130, 246, 0.1) 30px,
            rgba(59, 130, 246, 0.1) 60px
          )`
        }} />
      </div>
    ),

    waves: (
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg className="absolute bottom-0 w-full h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="rgba(59, 130, 246, 0.1)" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    ),

    accounting: (
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {/* Ledger lines pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 39px,
              rgba(59, 130, 246, 0.3) 39px,
              rgba(59, 130, 246, 0.3) 40px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 99px,
              rgba(59, 130, 246, 0.3) 99px,
              rgba(59, 130, 246, 0.3) 100px
            )
          `,
          backgroundSize: '100% 40px, 100px 100%'
        }} />
        {/* Margin line */}
        <div className="absolute left-24 top-0 bottom-0 w-0.5 bg-red-300 opacity-20" />
      </div>
    ),

    gradient: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-blue-600/5 to-primary-800/10" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-primary-500/5 via-transparent to-blue-500/5"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    ),

    particles: (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    ),
  };

  return (
    <div className={`relative ${className}`}>
      {patterns[variant] || patterns.default}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundPattern;
