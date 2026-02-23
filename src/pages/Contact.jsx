import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ContactFAQ from '../components/contact/ContactFAQ';
import BackgroundPattern from '../components/common/BackgroundPattern';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { contactIntro } from '../data/contactData';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16 lg:py-24 overflow-hidden">
        <BackgroundPattern variant="diagonal" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              {contactIntro.heading}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-blue-100 leading-relaxed"
            >
              Whether you have questions about tax, GST, audit, or need business advisory - we're here to help
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative">
        <BackgroundPattern variant="dots" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Right Side - Contact Information */}
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-700 to-primary-900 bg-clip-text text-transparent mb-4">
              Our Location
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Headquartered in Bhopal, Madhya Pradesh, serving clients across Central India
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden border-2 border-gray-300 aspect-video flex items-center justify-center">
              <div className="text-center p-8">
                <FaMapMarkerAlt className="text-6xl text-primary-600 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-700 mb-2">Bhopal, Madhya Pradesh</h3>
                <p className="text-gray-600 mb-4">India</p>
                <p className="text-sm text-gray-500 italic">
                  Interactive map integration coming soon
                </p>
              </div>
            </div>

            {/* Location Details */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">City</h4>
                  <p className="text-gray-600">Bhopal</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">State</h4>
                  <p className="text-gray-600">Madhya Pradesh</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Coverage</h4>
                  <p className="text-gray-600">Central India & Beyond</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <ContactFAQ />
    </div>
  );
};

export default Contact;
