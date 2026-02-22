import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Question Header */}
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors duration-300"
      >
        <h3 className="text-lg font-semibold text-gray-800 pr-4">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-primary-600"
        >
          <FaChevronDown size={20} />
        </motion.div>
      </button>

      {/* Answer Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: 'auto', 
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: 'easeOut'
                },
                opacity: {
                  duration: 0.3,
                  delay: 0.1
                }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: 'easeIn'
                },
                opacity: {
                  duration: 0.2
                }
              }
            }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 text-gray-700 leading-relaxed border-t border-gray-200">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQAccordion = ({ faqs, allowMultiple = false }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    if (allowMultiple) {
      // Allow multiple FAQs to be open at once
      setOpenIndexes(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      // Only allow one FAQ to be open at a time
      setOpenIndexes(prev => 
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className="w-full">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndexes.includes(index)}
          onClick={() => toggleFAQ(index)}
        />
      ))}
    </div>
  );
};

export default FAQAccordion;
