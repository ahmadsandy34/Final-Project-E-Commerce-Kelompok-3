// components/about/ServicesSection.jsx
import React from 'react';

const ServiceCard = ({ title, description }) => {
  return (
    <div className='text-center'>
      <div className='flex justify-center mb-4'>
        <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center'>
          <div className='w-8 h-8 rounded-full bg-black' />
        </div>
      </div>
      <h3 className='text-lg font-semibold mb-2'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: 'FREE AND FAST DELIVERY',
      description: 'Free delivery for all orders over $140',
    },
    {
      title: '24/7 CUSTOMER SERVICE',
      description: 'Friendly 24/7 customer support',
    },
    {
      title: 'MONEY BACK GUARANTEE',
      description: 'We return money within 30 days',
    },
  ];

  return (
    <div className='bg-gray-50'>
      <div className='max-w-screen-xl mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
