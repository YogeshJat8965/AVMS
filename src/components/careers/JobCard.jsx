import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaUserGraduate,
  FaClipboardCheck,
  FaFileInvoiceDollar,
  FaUserTie,
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle
} from 'react-icons/fa';

// Icon mapping for job types
const iconMap = {
  FaUserGraduate,
  FaClipboardCheck,
  FaFileInvoiceDollar,
  FaUserTie
};

const JobCard = ({ job }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = iconMap[job.icon] || FaUserTie;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Card Header */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-600 p-6 text-white">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <IconComponent className="text-3xl" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                  {job.type}
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                  {job.experience}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <p className="text-gray-700 leading-relaxed mb-4">
          {job.description}
        </p>

        {job.duration && (
          <div className="mb-4 pb-4 border-b border-gray-100">
            <span className="text-sm font-semibold text-gray-700">Duration: </span>
            <span className="text-sm text-gray-600">{job.duration}</span>
          </div>
        )}

        {/* Requirements - Expandable */}
        {job.requirements && job.requirements.length > 0 && (
          <div className="mt-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center justify-between w-full text-left font-semibold text-gray-900 hover:text-primary-600 transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="w-1 h-5 bg-secondary-500 rounded"></span>
                Requirements
              </span>
              {isExpanded ? (
                <FaChevronUp className="text-primary-600" />
              ) : (
                <FaChevronDown className="text-gray-400" />
              )}
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="mt-4 space-y-3">
                    {job.requirements.map((requirement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <FaCheckCircle className="text-secondary-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{requirement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default JobCard;
