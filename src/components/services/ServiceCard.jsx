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
  FaCheckCircle
} from 'react-icons/fa';

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
      className="bg-white rounded-xl shadow-lg border-2 border-accent-100 overflow-hidden hover:shadow-2xl hover:border-accent-300 transition-all duration-300"
    >
      {/* Service Image Header */}
      {service.image && (
        <div className="relative h-64 overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                <IconComponent className="text-2xl text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {service.title}
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* Card Header - Always Visible */}
      <div className="p-6">
        {!service.image && (
          <div className="flex items-start gap-4 mb-4">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-600 to-accent-700 rounded-lg flex items-center justify-center shadow-md">
                <IconComponent className="text-3xl text-white" />
              </div>
            </div>

            {/* Title and Category */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {service.title}
              </h3>
              {service.category && (
                <span className="inline-block bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {service.category}
                </span>
              )}
            </div>
          </div>
        )}

        {service.image && service.category && (
          <div className="mb-4">
            <span className="inline-block bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-xs font-semibold">
              {service.category}
            </span>
          </div>
        )}

        {/* Short Description */}
        <p className="text-gray-700 leading-relaxed mb-4">
          {service.shortDescription}
        </p>

        {/* Expand Button */}
        <button
          onClick={toggleExpand}
          className="flex items-center gap-2 text-accent-600 hover:text-accent-700 font-semibold transition-colors duration-300"
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
                        <FaCheckCircle className="text-accent-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ServiceCard;
