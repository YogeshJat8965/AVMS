import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaLandmark, FaCertificate, FaCheckCircle } from 'react-icons/fa';
import { empanelments } from '../../data/teamData';

const Empanelments = () => {
  const iconMap = {
    FaUniversity: FaUniversity,
    FaLandmark: FaLandmark,
    FaCertificate: FaCertificate
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
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
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Empanelments & Registrations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Authorized and registered with leading regulatory bodies in India
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {empanelments.map((empanelment) => {
            const IconComponent = iconMap[empanelment.icon] || FaCertificate;
            return (
              <motion.div
                key={empanelment.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)' 
                }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent-600 to-accent-800 rounded-full flex items-center justify-center shadow-lg">
                    <IconComponent className="text-4xl text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {empanelment.name}
                </h3>

                {/* Authority */}
                <p className="text-primary-600 font-semibold text-center mb-4">
                  {empanelment.authority}
                </p>

                {/* Description */}
                <p className="text-gray-700 text-center mb-6 leading-relaxed">
                  {empanelment.description}
                </p>

                {/* Scope */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">
                    Scope of Work:
                  </h4>
                  <ul className="space-y-2">
                    {empanelment.scope.slice(0, 4).map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <FaCheckCircle className="text-accent-600 flex-shrink-0 mt-0.5 text-xs" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {/* {empanelment.scope.length > 4 && (
                    <p className="text-xs text-gray-500 mt-3 italic">
                      +{empanelment.scope.length - 4} more areas
                    </p>
                  )} */}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              These empanelments and registrations enable us to undertake specialized assignments 
              in banking, government, and regulated sectors - assignments that require both technical 
              capability and formal authorization from regulatory bodies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Empanelments;
