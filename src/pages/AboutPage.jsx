// pages/AboutPage.jsx
import React from 'react';
import Breadcrumb from '../components/about/Breadcrumb';
import StorySection from '../components/about/StorySection';
import StatsSection from '../components/about/StatsSection';
import TeamSection from '../components/about/TeamSection';
import ServicesSection from '../components/about/ServicesSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />
      <StorySection />
      <StatsSection />
      <TeamSection />
      <ServicesSection />
    </div>
  );
};

export default AboutPage;