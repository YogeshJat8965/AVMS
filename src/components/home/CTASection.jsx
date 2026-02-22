import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaArrowRight, FaLinkedin } from 'react-icons/fa';
import Button from '../common/Button';
import { contactData } from '../../data/contactData';

const CTASection = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80&fit=crop" 
          alt="Team Collaboration" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-blue-900/95"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Work with Us?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              Let's discuss how we can help your business with our professional services
            </p>
            <p className="text-lg text-blue-200">
              30+ years of expertise at your service
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {/* Phone */}
            <a
              href={`tel:${contactData.phone}`}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <FaPhone className="text-4xl mb-3 text-accent-400 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm text-blue-200 mb-1">Call Us</p>
                <p className="font-semibold text-lg">{contactData.phone}</p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contactData.email}`}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <FaEnvelope className="text-4xl mb-3 text-accent-400 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm text-blue-200 mb-1">Email Us</p>
                <p className="font-semibold text-lg break-all">{contactData.email}</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <FaLinkedin className="text-4xl mb-3 text-accent-400 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm text-blue-200 mb-1">Connect on</p>
                <p className="font-semibold text-lg">LinkedIn</p>
              </div>
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/contact">
              <Button 
                variant="secondary" 
                size="lg"
                icon={<FaArrowRight />}
                iconPosition="right"
              >
                Contact Us Today
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 border-white text-white hover:bg-white hover:text-primary-700"
              >
                Learn More About Us
              </Button>
            </Link>
          </motion.div>

          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 text-center text-blue-100"
          >
            <p className="text-lg">
              <span className="font-semibold">Office Hours:</span> {contactData.officeHours}
            </p>
            <p className="mt-2">
              {contactData.location}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
