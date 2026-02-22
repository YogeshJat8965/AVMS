import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaFileInvoiceDollar, 
  FaFileInvoice, 
  FaBuilding, 
  FaBook, 
  FaClipboardCheck,
  FaSearchDollar,
  FaLandmark,
  FaUniversity,
  FaArrowRight
} from 'react-icons/fa';
import Button from '../common/Button';
import { services } from '../../data/servicesData';

const ServicesPreview = () => {
  const iconMap = {
    FaFileInvoiceDollar: FaFileInvoiceDollar,
    FaFileInvoice: FaFileInvoice,
    FaBuilding: FaBuilding,
    FaBook: FaBook,
    FaClipboardCheck: FaClipboardCheck,
    FaSearchDollar: FaSearchDollar,
    FaLandmark: FaLandmark,
    FaUniversity: FaUniversity
  };

  // Show first 6 services on homepage
  const featuredServices = services.slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive accounting, audit, tax, and compliance services tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || FaClipboardCheck;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)' }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-primary-300 transition-all duration-300 cursor-pointer group"
              >
                <Link to="/services" className="block h-full">
                  {/* Icon */}
                  <div className="text-4xl text-primary-600 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                    <IconComponent />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                    <span className="mr-2">Learn More</span>
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <Link to="/services">
            <Button 
              variant="primary" 
              size="lg"
              icon={<FaArrowRight />}
              iconPosition="right"
            >
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
