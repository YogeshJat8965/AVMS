import React from 'react';
import Introduction from '../components/about/Introduction';
import StatsSection from '../components/about/StatsSection';
import FirmHistory from '../components/about/FirmHistory';
import Empanelments from '../components/about/Empanelments';
import OurValues from '../components/about/OurValues';
import ProfessionalApproach from '../components/about/ProfessionalApproach';
import AboutFAQ from '../components/about/AboutFAQ';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Introduction Section */}
      <Introduction />

      {/* Stats Section */}
      <StatsSection />

      {/* Firm History & Journey */}
      <FirmHistory />

      {/* Empanelments Section */}
      <Empanelments />

      {/* Our Values */}
      <OurValues />

      {/* Professional Approach Section */}
      <ProfessionalApproach />

      {/* FAQ Section */}
      <AboutFAQ />
    </div>
  );
};

export default About;
