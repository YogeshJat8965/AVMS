import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-darkest text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">AVMS & Associates</h3>
            <p className="text-neutral-light text-sm">
              Chartered Accountants<br />
              Bhopal, Madhya Pradesh, India
            </p>
            <p className="text-neutral-light text-sm mt-2">
              30+ Years of Excellence
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-neutral-light hover:text-secondary">About Us</Link></li>
              <li><Link to="/services" className="text-neutral-light hover:text-secondary">Services</Link></li>
              <li><Link to="/industries" className="text-neutral-light hover:text-secondary">Industries</Link></li>
              <li><Link to="/careers" className="text-neutral-light hover:text-secondary">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 text-neutral-light text-sm">
              <li>Income Tax Services</li>
              <li>GST Compliance</li>
              <li>Audit Services</li>
              <li>Corporate Compliance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-neutral-light text-sm">
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <span>0755-2555642</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <span>+91-7222909440</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:ca.avms@gmail.com" className="hover:text-secondary">
                  ca.avms@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaLinkedin className="mr-2" />
                <a 
                  href="https://linkedin.com/company/a-v-m-s-associates" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-secondary"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-dark mt-8 pt-8 text-center text-neutral-light text-sm">
          <p>&copy; {new Date().getFullYear()} AVMS & Associates. All rights reserved.</p>
          <p className="mt-2">
            Office Hours: Monday to Saturday, 10:00 AM – 6:00 PM
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
