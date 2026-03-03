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
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.2) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: '#023E60' }}>
              About AVMS & Associates
            </h1>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#f59e0b' }}></div>
            <p className="text-lg md:text-xl text-gray-600">
              Chartered Accountants | Bhopal, Madhya Pradesh, India
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
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#023E60' }}>
                  A Legacy of Professional Excellence Since 1993
                </h2>

                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  AVMS & Associates was founded with a clear vision to provide ethical, independent, and technically sound professional services. Over the past thirty years, the firm has evolved into a multidisciplinary advisory practice serving diverse sectors across India. From statutory audits of public sector banks to forensic system evaluations and corporate compliance advisory, our journey reflects continuous professional growth and adaptation.
                </p>

                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  Our philosophy is anchored in integrity, objectivity, and technical rigor. We understand that institutions today operate in a dynamic environment shaped by regulatory changes, digital transformation, and increasing accountability expectations. Our role extends beyond compliance verification to strengthening governance structures, improving internal control systems, and enabling strategic foresight.
                </p>

                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  The firm is led by experienced Fellows of the Institute of Chartered Accountants of India, supported by a dedicated team of professionals trained in audit, taxation, system analysis, and compliance advisory. We maintain structured engagement methodologies, internal quality review mechanisms, and strict adherence to professional standards. Our enduring relationships with banks, government authorities, and corporate clients are a testament to our commitment to excellence and reliability.
                </p>
              </div>
            </motion.div>

            {/* Right: Key Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#023E60' }}>
                  <span style={{ color: '#3b82f6' }}>✓</span>
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
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#3b82f6' }}>
                        <FaCheckCircle className="text-white text-sm" />
                      </div>
                      <span className="text-gray-700 text-base">{highlight}</span>
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
