import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle, FaAward, FaUniversity, FaLandmark, FaUserTie } from 'react-icons/fa';
import Button from '../common/Button';
import { firmInfo } from '../../data/teamData';

const AboutPreview = () => {
  const highlights = [
    { text: "30+ years of professional excellence", icon: FaAward },
    { text: "RBI Category-I Empaneled for bank audits", icon: FaUniversity },
    { text: "C&AG Registered for government assignments", icon: FaLandmark },
    { text: "Led by CA Anup Shrivastava (CISA, FAFD)", icon: FaUserTie }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider bg-primary-100 px-4 py-2 rounded-full">
                Who We Are
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-900 via-primary-700 to-primary-600 bg-clip-text text-transparent leading-tight">
              About AVMS & Associates
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {firmInfo.description}
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {firmInfo.specialization}
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-10">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-primary-100 hover:border-primary-300 group"
                >
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-3 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <highlight.icon className="text-xl" />
                  </div>
                  <span className="text-gray-800 font-medium">{highlight.text}</span>
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
            {/* Professional Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&fit=crop" 
                alt="Professional Chartered Accountant Office" 
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-800/60 to-transparent"></div>
              
              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="bg-white/15 backdrop-blur-lg rounded-xl p-6 border border-white/30 shadow-2xl hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-8 bg-secondary-400 rounded-full"></span>
                    Our Professional Approach
                  </h3>
                  <p className="text-blue-50 leading-relaxed italic text-base">
                    "{firmInfo.approach}"
                  </p>
                </motion.div>
              </div>
            </div>
            
            {/* Stats Badges - Enhanced Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              className="absolute -top-2 -left-2 md:-top-6 md:-left-6 bg-gradient-to-br from-secondary-400 via-secondary-500 to-secondary-600 text-white px-4 py-3 md:px-8 md:py-5 rounded-xl md:rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 border-2 md:border-4 border-white"
            >
              <div className="text-center">
                <div className="font-black text-2xl md:text-4xl mb-1 drop-shadow-lg">30+</div>
                <div className="text-xs md:text-sm font-semibold uppercase tracking-wider">Years</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -bottom-2 -right-2 md:-bottom-6 md:-right-6 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white px-4 py-3 md:px-8 md:py-5 rounded-xl md:rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 border-2 md:border-4 border-white"
            >
              <div className="text-center">
                <div className="font-black text-2xl md:text-4xl mb-1 drop-shadow-lg">RBI</div>
                <div className="text-xs md:text-sm font-semibold uppercase tracking-wider">Empaneled</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
