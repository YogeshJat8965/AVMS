import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUniversity, FaLandmark, FaIndustry } from 'react-icons/fa';
import { keyCredentials } from '../../data/credentialsData';

const CredentialsCards = () => {
  const iconMap = {
    FaAward: FaAward,
    FaUniversity: FaUniversity,
    FaLandmark: FaLandmark,
    FaIndustry: FaIndustry
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Credentials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by businesses and institutions across India
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {keyCredentials.map((credential) => {
            const IconComponent = iconMap[credential.icon];
            return (
              <motion.div
                key={credential.id}
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  {IconComponent && (
                    <div className={`text-5xl mb-4 ${credential.iconColor}`}>
                      <IconComponent />
                    </div>
                  )}

                  {/* Credential */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {credential.credential}
                  </h3>

                  {/* Description */}
                  <p className="text-primary-600 font-semibold mb-3">
                    {credential.description}
                  </p>

                  {/* Detail */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {credential.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CredentialsCards;
