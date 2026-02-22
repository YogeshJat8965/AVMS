import React from 'react';
import { motion } from 'framer-motion';
import IndustryCard from '../components/industries/IndustryCard';
import IndustriesFAQ from '../components/industries/IndustriesFAQ';
import industries from '../data/industriesData';
import Button from '../components/common/Button';
import { FaPhone } from 'react-icons/fa';

const Industries = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16 lg:py-24">
        <div className="container-custom">
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
              Industries We Serve
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-blue-100 mb-8"
            >
              23+ Industries Across Banking, Government, Manufacturing, NGOs, and More
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-blue-200 mb-8"
            >
              Over 30 years of experience serving diverse sectors with specialized audit, tax, and compliance services
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button variant="secondary" icon={FaPhone} to="/contact">
                Discuss Your Industry Needs
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid Section */}
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
              Our Industry Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deep domain knowledge across multiple sectors with specialized regulatory compliance and audit experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <IndustryCard industry={industry} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <IndustriesFAQ />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-900 to-primary-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry-Specific Expertise You Can Trust
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Whether banking, government, manufacturing, or NGOs — we bring specialized knowledge and regulatory familiarity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" to="/contact">
                Get Industry Advisory
              </Button>
              <Button variant="outline" to="/services">
                Explore Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
