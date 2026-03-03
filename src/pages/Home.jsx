import React from 'react';
import Hero from '../components/home/Hero';
import CredentialsCards from '../components/home/CredentialsCards';
import AboutPreview from '../components/home/AboutPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ServicesPreview from '../components/home/ServicesPreview';
import IndustriesPreview from '../components/home/IndustriesPreview';
import CTASection from '../components/home/CTASection';
import Testimonials from '../components/common/Testimonials';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Credentials Section */}
      <CredentialsCards />

      {/* About Preview Section */}
      <AboutPreview />

      {/* Why Choose Us Section - Hidden as per client request */}
      {/* <WhyChooseUs /> */}

      {/* Services Preview Section */}
      <ServicesPreview />

      {/* Industries Preview Section */}
      <IndustriesPreview />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section - Hidden as per client request */}
      {/* <CTASection /> */}
    </div>
  );
};

export default Home;
