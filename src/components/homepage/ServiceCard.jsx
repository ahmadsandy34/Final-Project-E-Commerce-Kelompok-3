/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

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

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;