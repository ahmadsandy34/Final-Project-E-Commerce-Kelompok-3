// components/about/StorySection.jsx
import React from 'react';
import sideImage from '../../assets/about/sideImage.png';

const StorySection = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4 py-12'>
      {/* Mobile Story Title */}
      <h1 className='text-3xl font-bold text-center mb-8 md:hidden'>Our Story</h1>

      <div className='flex flex-col md:flex-row items-center gap-8'>
        {/* Story Content */}
        <div className='w-full md:w-1/2 space-y-6'>
          {/* Desktop Story Title */}
          <h1 className='text-4xl font-bold hidden md:block'>Our Story</h1>
          <p className='text-gray-600 text-center md:text-left'>
            Launced in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and
            300 brands and serves 3 millions customers across the region.
          </p>
          <p className='text-gray-600 text-center md:text-left'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assortment in categories ranging from consumer.</p>
        </div>

        {/* Image */}
        <div className='w-full md:w-1/2'>
          <img src={sideImage} alt='Shopping People' className='w-full rounded-lg object-cover' />
        </div>
      </div>
    </div>
  );
};

export default StorySection;