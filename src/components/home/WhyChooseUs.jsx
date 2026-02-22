import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaChartLine, FaBook, FaHandshake } from 'react-icons/fa';
import { whyChooseAVMS } from '../../data/credentialsData';

const WhyChooseUs = () => {
  const iconMap = {
    FaCertificate: FaCertificate,
    FaChartLine: FaChartLine,
    FaBook: FaBook,
    FaHandshake: FaHandshake
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
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
            Why Choose AVMS & Associates?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional expertise backed by credentials, experience, and integrity
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {whyChooseAVMS.map((reason) => {
            const IconComponent = iconMap[reason.icon] || FaCertificate;
            return (
              <motion.div
                key={reason.id}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)'
                }}
                className="bg-white rounded-xl p-8 shadow-md border border-gray-200 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="text-3xl text-primary-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-full px-8 py-4 shadow-lg">
            <p className="text-lg font-semibold">
              30+ Years of Professional Excellence | RBI & C&AG Empaneled | 22+ Industries Served
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
