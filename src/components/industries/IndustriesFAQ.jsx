import React from 'react';
import { motion } from 'framer-motion';
import FAQAccordion from '../common/FAQAccordion';
import { industriesFAQs } from '../../data/faqData';

const IndustriesFAQ = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries FAQ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Common questions about the industries we serve
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <FAQAccordion faqs={industriesFAQs} allowMultiple={false} />
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesFAQ;
