import React from 'react';
import { Link } from 'react-router-dom';
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
  FaHandHoldingHeart,
  FaTshirt,
  FaLaptopCode,
  FaGem,
  FaArrowRight
} from 'react-icons/fa';
import Button from '../common/Button';
import { industries } from '../../data/industriesData';

const IndustriesPreview = () => {
  const iconMap = {
    FaUniversity: FaUniversity,
    FaLandmark: FaLandmark,
    FaGraduationCap: FaGraduationCap,
    FaHardHat: FaHardHat,
    FaIndustry: FaIndustry,
    FaHome: FaHome,
    FaAppleAlt: FaAppleAlt,
    FaSeedling: FaSeedling,
    FaHandHoldingHeart: FaHandHoldingHeart,
    FaTshirt: FaTshirt,
    FaLaptopCode: FaLaptopCode,
    FaGem: FaGem
  };

  // Show first 8 industries on homepage
  const featuredIndustries = industries.slice(0, 8);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 25px,
            rgba(37, 99, 235, 0.1) 25px,
            rgba(37, 99, 235, 0.1) 50px
          )`
        }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-700 to-primary-900 bg-clip-text text-transparent mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            23+ industries served with specialized expertise in regulatory compliance and financial advisory
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuredIndustries.map((industry) => {
            const IconComponent = iconMap[industry.icon] || FaIndustry;
            return (
              <motion.div
                key={industry.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                  scale: 1.02
                }}
                className="bg-gradient-to-br from-accent-50 to-white rounded-xl p-6 shadow-md border border-accent-100 hover:border-accent-300 transition-all duration-300 cursor-pointer group"
              >
                <Link to="/industries" className="block h-full">
                  <div className="flex flex-col items-center text-center h-full">
                    {/* Icon */}
                    <div className="text-5xl text-accent-600 mb-4 group-hover:text-accent-700 group-hover:scale-110 transition-all duration-300">
                      <IconComponent />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-accent-600 transition-colors duration-300">
                      {industry.title}
                    </h3>

                    {/* First Highlight */}
                    {industry.highlights && industry.highlights.length > 0 && (
                      <p className="text-sm text-gray-600 italic">
                        {industry.highlights[0]}
                      </p>
                    )}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Industries Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <Link to="/industries">
            <Button 
              variant="primary" 
              size="lg"
              icon={<FaArrowRight />}
              iconPosition="right"
            >
              View All Industries
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesPreview;
