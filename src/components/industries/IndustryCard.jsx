import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUniversity,
  FaLandmark,
  FaGraduationCap,
  FaHardHat,
  FaIndustry,
  FaHome,
  FaAppleAlt,
  FaSeedling,
  FaHandsHelping,
  FaTshirt,
  FaLaptopCode,
  FaGem,
  FaStore,
  FaCity,
  FaShoppingCart,
  FaTruck,
  FaCar,
  FaBullhorn,
  FaCog,
  FaBook,
  FaBuilding,
  FaLeaf,
  FaUserTie
} from 'react-icons/fa';

// Icon mapping for all 23 industries
const iconMap = {
  FaUniversity,
  FaLandmark,
  FaGraduationCap,
  FaHardHat,
  FaIndustry,
  FaHome,
  FaAppleAlt,
  FaSeedling,
  FaHandsHelping,
  FaTshirt,
  FaLaptopCode,
  FaGem,
  FaStore,
  FaCity,
  FaShoppingCart,
  FaTruck,
  FaCar,
  FaBullhorn,
  FaCog,
  FaBook,
  FaBuilding,
  FaLeaf,
  FaUserTie
};

const IndustryCard = ({ industry }) => {
  const IconComponent = iconMap[industry.icon] || FaBuilding;

  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.25)" }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl border-2 border-blue-100 overflow-hidden h-full flex flex-col group hover:border-primary-300"
    >
      {/* Image Header */}
      {industry.image && (
        <div className="relative h-40 overflow-hidden">
          <img 
            src={industry.image} 
            alt={industry.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
            <div className="bg-white p-2.5 rounded-lg shadow-lg">
              <IconComponent className="text-2xl text-primary-600" />
            </div>
            <h3 className="text-lg font-bold text-white flex-1">
              {industry.title}
            </h3>
          </div>
        </div>
      )}

      {/* Fallback Icon Header if no image */}
      {!industry.image && (
        <div className="bg-gradient-to-br from-primary-700 to-primary-600 p-6 text-white">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <IconComponent className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold flex-1 group-hover:scale-105 transition-transform duration-300">
              {industry.title}
            </h3>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-gray-700 leading-relaxed mb-4 flex-1">
          {industry.description}
        </p>

        {/* Highlights */}
        {industry.highlights && industry.highlights.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-1 h-4 bg-secondary-500 rounded"></span>
              Key Highlights
            </h4>
            <ul className="space-y-2">
              {industry.highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-sm text-gray-600 flex items-start gap-2"
                >
                  <span className="text-secondary-500 mt-1 flex-shrink-0">•</span>
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default IndustryCard;
