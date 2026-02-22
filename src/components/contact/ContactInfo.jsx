import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPhone,
  FaMobileAlt,
  FaEnvelope,
  FaLinkedin,
  FaClock,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { contactMethods, contactIntro } from '../../data/contactData';

// Icon mapping
const iconMap = {
  FaPhone,
  FaMobileAlt,
  FaEnvelope,
  FaLinkedin,
  FaClock,
  FaMapMarkerAlt
};

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Contact Introduction */}
      <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-6 rounded-lg border border-primary-100">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Why Contact Us?</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          {contactIntro.description}
        </p>
        <p className="text-sm text-gray-600 italic">
          {contactIntro.responseTime}
        </p>
      </div>

      {/* Contact Methods */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
        
        <div className="space-y-4">
          {contactMethods.map((method, index) => {
            const IconComponent = iconMap[method.icon] || FaPhone;
            const isClickable = method.link !== null;

            const content = (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={`flex items-start gap-4 p-4 rounded-lg border border-gray-200 ${
                  isClickable 
                    ? 'hover:bg-primary-50 hover:border-primary-300 cursor-pointer transition-all' 
                    : 'bg-gray-50'
                }`}
              >
                <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                  <IconComponent className="text-xl text-primary-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 mb-1">{method.type}</h4>
                  <p className="text-gray-700 break-words">{method.value}</p>
                  {method.description && (
                    <p className="text-sm text-gray-500 mt-1">{method.description}</p>
                  )}
                </div>
              </motion.div>
            );

            return isClickable ? (
              <a
                key={method.id}
                href={method.link}
                target={method.icon === 'FaLinkedin' ? '_blank' : undefined}
                rel={method.icon === 'FaLinkedin' ? 'noopener noreferrer' : undefined}
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={method.id}>
                {content}
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-gradient-to-r from-primary-700 to-primary-600 text-white p-6 rounded-lg"
      >
        <h4 className="font-bold text-lg mb-4">Quick Response Guaranteed</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
            <p className="text-sm">Email inquiries: Within 1 business day</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
            <p className="text-sm">Urgent matters: Call directly for immediate assistance</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
            <p className="text-sm">Office hours: Monday-Saturday, 10 AM - 6 PM</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
