import React from 'react';
import Introduction from '../components/about/Introduction';
import StatsSection from '../components/about/StatsSection';
import TeamSection from '../components/about/TeamSection';
import Empanelments from '../components/about/Empanelments';
import ProfessionalApproach from '../components/about/ProfessionalApproach';
import AboutFAQ from '../components/about/AboutFAQ';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Introduction Section */}
      <Introduction />

      {/* Stats Section */}
      <StatsSection />

      {/* Team Section */}
      <TeamSection />

      {/* Empanelments Section */}
      <Empanelments />

      {/* Professional Approach Section */}
      <ProfessionalApproach />

      {/* FAQ Section */}
      <AboutFAQ />
    </div>
  );
};

export default About;
