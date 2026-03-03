import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Button from '../common/Button';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    organizationName: '',
    email: '',
    phone: '',
    industryType: '',
    serviceRequired: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Industries list
  const industries = [
    'Education',
    'Food Processing',
    'Government Publishing',
    'Textile Manufacturing',
    'FMCG Trading',
    'Housing & Real Estate',
    'Retail & Distribution',
    'NGO/Development Sector',
    'IT & Software',
    'Management Advisory Services',
    'Automotive Tyre',
    'Plantation & Agro',
    'Marketing',
    'Construction & Infrastructure',
    'Agribusiness',
    'Manufacturing & Export',
    'Metal & Manufacturing',
    'Industrial Products',
    'Non-Corporate/SME',
    'Publishing & Media',
    'Urban Development',
    'Metals & Mining'
  ];

  // Services list
  const services = [
    'Audit',
    'Taxation',
    'Corporate Law',
    'Startup Advisory',
    'Others'
  ];

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Organization Name validation
    if (!formData.organizationName.trim()) {
      newErrors.organizationName = 'Organization name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Industry Type validation
    if (!formData.industryType) {
      newErrors.industryType = 'Please select an industry type';
    }

    // Service Required validation
    if (!formData.serviceRequired) {
      newErrors.serviceRequired = 'Please select a service';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_tjhgc7r';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_39xyhpc';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'CM_nb8U7I8dEOty2d';

      const templateParams = {
        from_name: formData.name,
        organization_name: formData.organizationName,
        from_email: formData.email,
        from_phone: formData.phone,
        industry_type: formData.industryType,
        service_required: formData.serviceRequired,
        message: formData.message,
        to_email: 'yogeshjat8965@gmail.com'
      };

      // Send email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setFormData({
        name: '',
        organizationName: '',
        email: '',
        phone: '',
        industryType: '',
        serviceRequired: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');

      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg shadow-lg p-6 md:p-8"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Request a Consultation</h3>
      <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you within one business day</p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Organization Name Field */}
        <div>
          <label htmlFor="organizationName" className="block text-sm font-semibold text-gray-700 mb-2">
            Organization Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="organizationName"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
              errors.organizationName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Your company or organization name"
          />
          {errors.organizationName && (
            <p className="mt-1 text-sm text-red-600">{errors.organizationName}</p>
          )}
        </div>

        {/* Email and Phone in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="+91-XXXXXXXXXX"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Industry Type Dropdown */}
        <div>
          <label htmlFor="industryType" className="block text-sm font-semibold text-gray-700 mb-2">
            Industry Type <span className="text-red-500">*</span>
          </label>
          <select
            id="industryType"
            name="industryType"
            value={formData.industryType}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
              errors.industryType ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select your industry</option>
            {industries.map((industry, index) => (
              <option key={index} value={industry}>{industry}</option>
            ))}
          </select>
          {errors.industryType && (
            <p className="mt-1 text-sm text-red-600">{errors.industryType}</p>
          )}
        </div>

        {/* Service Required Dropdown */}
        <div>
          <label htmlFor="serviceRequired" className="block text-sm font-semibold text-gray-700 mb-2">
            Service Required <span className="text-red-500">*</span>
          </label>
          <select
            id="serviceRequired"
            name="serviceRequired"
            value={formData.serviceRequired}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
              errors.serviceRequired ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select service type</option>
            {services.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
          {errors.serviceRequired && (
            <p className="mt-1 text-sm text-red-600">{errors.serviceRequired}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message/Query <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Describe your requirements or questions in detail..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <Button
            type="submit"
            variant="primary"
            icon={FaPaperPlane}
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? 'Sending...' : 'Request a Consultation'}
          </Button>
        </div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 p-4 bg-accent-50 border border-accent-200 rounded-lg"
          >
            <FaCheckCircle className="text-accent-600 text-xl flex-shrink-0" />
            <div>
              <p className="font-semibold text-accent-800">Message Sent Successfully!</p>
              <p className="text-sm text-accent-700">We'll get back to you within one business day.</p>
            </div>
          </motion.div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg"
          >
            <FaExclamationCircle className="text-red-600 text-xl flex-shrink-0" />
            <div>
              <p className="font-semibold text-red-800">Failed to Send Message</p>
              <p className="text-sm text-red-700">Please try again or contact us directly at ca.avms@gmail.com</p>
            </div>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
