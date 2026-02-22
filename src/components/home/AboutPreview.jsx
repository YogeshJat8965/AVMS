import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Button from '../common/Button';
import { firmInfo } from '../../data/teamData';

const AboutPreview = () => {
  const highlights = [
    "30+ years of professional excellence",
    "RBI Category-I Empaneled for bank audits",
    "C&AG Registered for government assignments",
    "Led by CA Anup Shrivastava (CISA, FAFD)"
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About AVMS & Associates
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {firmInfo.description}
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {firmInfo.specialization}
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="text-primary-600 text-xl flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <Link to="/about">
              <Button 
                variant="primary" 
                size="lg"
                icon={<FaArrowRight />}
                iconPosition="right"
              >
                Learn More About Us
              </Button>
            </Link>
          </motion.div>

          {/* Right: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Professional Approach
                </h3>
                <p className="text-blue-100 leading-relaxed italic">
                  "{firmInfo.approach}"
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-400 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
