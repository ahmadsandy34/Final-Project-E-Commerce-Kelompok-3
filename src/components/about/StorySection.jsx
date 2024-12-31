// components/about/StorySection.jsx
import React from 'react';
import sideImage from '../../assets/about/sideImage.png';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redux/slice/languageSlice';

const StorySection = () => {
  const language = useSelector(selectLanguage);
  return (
    <div className='w-5/6 mx-auto py-12 lg:w-full lg:py-0'>
      {/* Mobile Story Title */}
      <h1 className='text-2xl font-bold text-center md:hidden'>
        {language === 'id' ? 'Kisah Kami' : 'Our Story'}
      </h1>

      <div className='flex flex-col md:flex-row items-center gap-8'>
        {/* Story Content */}
        <div className='w-full md:w-1/2 space-y-6 lg:py-12 lg:ps-32'>
          {/* Desktop Story Title */}
          <h1 className='text-[54px] leading-tight font-bold hidden md:block'>
            {language === 'id' ? 'Kisah Kami' : 'Our Story'}
          </h1>
          <p className='lg:w-11/12 text-left'>
            {language === 'id' 
              ? 'Diluncurkan pada tahun 2015, Exclusive adalah pasar belanja online terkemuka di Asia Selatan dengan kehadiran aktif di Bangladesh. Didukung oleh berbagai solusi pemasaran, data, dan layanan yang disesuaikan, Exclusive memiliki 10.500 penjual dan 300 merek serta melayani 3 juta pelanggan di seluruh wilayah.'
              : 'Launched in 2015, Exclusive is South Asia\'s premier online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 millions customers across the region.'}
          </p>
          <p className='lg:w-11/12 text-left'>
            {language === 'id' 
              ? 'Exclusive menawarkan lebih dari 1 juta produk dan terus berkembang dengan sangat cepat. Exclusive menyediakan beragam kategori mulai dari barang konsumen.'
              : 'Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assortment in categories ranging from consumer.'}
          </p>
        </div>

        {/* Image */}
        <div className='w-full md:w-1/2'>
          <img src={sideImage} alt={language === 'id' ? 'Orang Berbelanja' : 'Shopping People'} className='w-full rounded-md object-cover' />
        </div>
      </div>
    </div>
  );
};

export default StorySection;
