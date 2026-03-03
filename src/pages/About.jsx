import React from 'react';
import Introduction from '../components/about/Introduction';
import StatsSection from '../components/about/StatsSection';
import FirmHistory from '../components/about/FirmHistory';
import Empanelments from '../components/about/Empanelments';
import OurValues from '../components/about/OurValues';
import ProfessionalApproach from '../components/about/ProfessionalApproach';
import AboutFAQ from '../components/about/AboutFAQ';
import TeamPreview from '../components/about/TeamPreview';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Introduction Section */}
      <Introduction />

      {/* Team Preview Section */}
      <TeamPreview />

      {/* Stats Section - Hidden as per client request */}
      {/* <StatsSection /> */}

      {/* Firm History & Journey - Hidden as per client request */}
      {/* <FirmHistory /> */}

      {/* Empanelments Section - Hidden as per client request */}
      {/* <Empanelments /> */}

      {/* Our Values - Hidden as per client request */}
      {/* <OurValues /> */}

      {/* Professional Approach Section - Hidden as per client request */}
      {/* <ProfessionalApproach /> */}

      {/* FAQ Section - Hidden as per client request */}
      {/* <AboutFAQ /> */}
    </div>
  );
};

export default About;
