import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCheckCircle } from 'react-icons/fa';
import { firmInfo } from '../../data/teamData';

const Introduction = () => {
  const highlights = [
    "30+ years of professional excellence",
    "RBI Category-I Empaneled for banking audits",
    "C&AG Registered for government assignments",
    "Expert in statutory, internal, and forensic audits",
    "Specialized in GST and Income Tax compliance",
    "Multi-industry experience across 22+ sectors"
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About AVMS & Associates
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-600">
              {firmInfo.type} | {firmInfo.location}
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Left: Firm Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {firmInfo.description}
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {firmInfo.specialization}
                </p>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-secondary-100 border border-primary-200 rounded-lg px-6 py-3">
                  <FaAward className="text-2xl text-primary-600" />
                  <span className="font-semibold text-primary-700">
                    {firmInfo.yearsOfExperience} Years of Excellence
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right: Key Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  Key Highlights
                </h3>

                <div className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-3"
                    >
                      <FaCheckCircle className="text-primary-600 text-xl flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
