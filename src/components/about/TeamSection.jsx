import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaSearchDollar, FaCheckCircle, FaUserTie } from 'react-icons/fa';
import { leadPartner } from '../../data/teamData';

const TeamSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Leadership
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Led by experienced professionals with specialized credentials
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-xl p-8 md:p-12 border border-primary-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* Profile Image Section */}
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center shadow-lg mb-4">
                  <FaUserTie className="text-8xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {leadPartner.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-4">
                  {leadPartner.designation}
                </p>
                
                {/* Certifications Badges */}
                <div className="flex gap-3">
                  {leadPartner.certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md"
                    >
                      {cert}
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Details */}
              <div className="md:col-span-2 space-y-6">
                {/* Certifications Full */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FaShieldAlt className="text-primary-600" />
                    Professional Certifications
                  </h4>
                  <div className="space-y-3">
                    {leadPartner.certificationsFull.map((cert, index) => {
                      const iconMap = {
                        CISA: FaShieldAlt,
                        FAFD: FaSearchDollar
                      };
                      const Icon = iconMap[cert.abbr] || FaShieldAlt;
                      return (
                        <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                          <div className="flex items-start gap-3">
                            <Icon className="text-2xl text-primary-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-bold text-gray-900">
                                {cert.abbr} - {cert.full}
                              </p>
                              <p className="text-sm text-gray-600 mt-1">
                                {cert.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Specializations */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    Key Specializations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {leadPartner.specializations.map((spec, index) => (
                      <span
                        key={index}
                        className="bg-primary-100 text-primary-700 px-4 py-2 rounded-lg text-sm font-semibold border border-primary-200"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    Professional Experience
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {leadPartner.experience}
                  </p>
                </div>

                {/* Expertise Areas */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    Areas of Expertise
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {leadPartner.expertise.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <FaCheckCircle className="text-primary-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
