// pages/AboutPage.jsx
import React, { useEffect, useRef }  from 'react';
import Breadcrumb from '../components/about/Breadcrumb';
import StorySection from '../components/about/StorySection';
import StatsSection from '../components/about/StatsSection';
import TeamSection from '../components/about/TeamSection';
import ServicesSection from '../components/about/ServicesSection';

const AboutPage = () => {
   const ref = useRef(null);
  
    useEffect(() => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    }, []);
  return (
    <div className="min-h-screen bg-white" ref={ref}>
      <Breadcrumb />
      <StorySection />
      <StatsSection />
      <TeamSection />
      <ServicesSection />
    </div>
  );
};

export default AboutPage;