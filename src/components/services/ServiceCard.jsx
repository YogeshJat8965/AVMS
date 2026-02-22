import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaFileInvoiceDollar, 
  FaFileInvoice, 
  FaBuilding, 
  FaBook, 
  FaClipboardCheck,
  FaSearchDollar,
  FaLandmark,
  FaHandHoldingHeart,
  FaBoxes,
  FaChartLine,
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle,
  FaEnvelope
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const ServiceCard = ({ service, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const iconMap = {
    FaFileInvoiceDollar: FaFileInvoiceDollar,
    FaFileInvoice: FaFileInvoice,
    FaBuilding: FaBuilding,
    FaBook: FaBook,
    FaClipboardCheck: FaClipboardCheck,
    FaSearchDollar: FaSearchDollar,
    FaLandmark: FaLandmark,
    FaHandHoldingHeart: FaHandHoldingHeart,
    FaBoxes: FaBoxes,
    FaChartLine: FaChartLine
  };

  const IconComponent = iconMap[service.icon] || FaClipboardCheck;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Card Header - Always Visible */}
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center shadow-md">
              <IconComponent className="text-3xl text-white" />
            </div>
          </div>

          {/* Title and Category */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {service.title}
            </h3>
            {service.category && (
              <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                {service.category}
              </span>
            )}
          </div>
        </div>

        {/* Short Description */}
        <p className="text-gray-700 leading-relaxed mb-4">
          {service.shortDescription}
        </p>

        {/* Expand Button */}
        <button
          onClick={toggleExpand}
          className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-300"
        >
          <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {/* Expandable Details */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: 'auto', 
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: 'easeOut' },
                opacity: { duration: 0.3, delay: 0.1 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: 'easeIn' },
                opacity: { duration: 0.2 }
              }
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-gray-200 pt-6">
              {/* Full Description */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Overview
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Services Include */}
              {service.servicesInclude && service.servicesInclude.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Services Include:
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {service.servicesInclude.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <FaCheckCircle className="text-primary-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="flex-1">
                  <Button 
                    variant="primary" 
                    size="md"
                    icon={<FaEnvelope />}
                    fullWidth
                  >
                    Get Started
                  </Button>
                </Link>
                <Link to="/contact" className="flex-1">
                  <Button 
                    variant="outline" 
                    size="md"
                    fullWidth
                  >
                    Ask a Question
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ServiceCard;
