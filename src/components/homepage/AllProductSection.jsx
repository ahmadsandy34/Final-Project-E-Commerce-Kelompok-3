import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/homepage/ProductCard';
import Right from '../../assets/home/right.svg';
import Left from '../../assets/home/left.svg';
import DogFood from '../../assets/home/dogfood.svg';
import Cameras from '../../assets/home/cameras.svg';
import Laptop from '../../assets/home/laptop.svg';
import Curology from '../../assets/home/curology.svg';
import Car from '../../assets/home/car.svg';
import Shoes from '../../assets/home/shoes.svg';
import Controller from '../../assets/home/controller.svg';
import Jacket from '../../assets/home/jacket.svg';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redux/slice/languageSlice';

const AllProductSection = () => {
  const language = useSelector(selectLanguage);
  const AllProducts = [
    {
      title: 'Breed Dry Dog Food',
      price: 100,
      rating: 3,
      reviews: 35,
      image: DogFood,
    },
    {
      title: 'CANON EOS DSLR Camera',
      price: 360,
      rating: 4,
      reviews: 95,
      image: Cameras,
    },
    {
      title: 'ASUS FHD Gaming Laptop',
      price: 700,
      rating: 5,
      reviews: 325,
      image: Laptop,
    },
    {
      title: 'Curology Product Set ',
      price: 500,
      rating: 4,
      reviews: 145,
      image: Curology,
    },
    {
      title: 'Kids Electric Car',
      price: 960,
      rating: 5,
      reviews: 65,
      image: Car,
    },
    {
      title: 'Jr. Zoom Soccer Cleats',
      price: 1160,
      rating: 5,
      reviews: 35,
      image: Shoes,
    },
    {
      title: 'GP11 Shooter USB Gamepad',
      price: 660,
      rating: 4.5,
      reviews: 55,
      image: Controller,
    },
    {
      title: 'Quilted Satin Jacket',
      price: 660,
      rating: 4.5,
      reviews: 55,
      image: Jacket,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleNext = () => {
    if (currentPage < Math.ceil(AllProducts.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedProducts = AllProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <section className='w-4/5 mx-auto mt-4 lg:mt-20'>
      <div className='hidden lg:flex items-center gap-2'>
        <div className='w-1 h-6 bg-[#DB4444]'></div>
        <p className='text-[#DB4444] font-semibold'>{language === 'en' ? 'Our Product' : 'Produk Kami'}</p>
      </div>
      <div className='flex justify-between items-center mt-4'>
        <h2 className='text-sm lg:text-4xl font-semibold'>{language === 'en' ? 'Explore Our Products' : 'Telusuri Produk Kami'}</h2>
        <div className='hidden lg:flex gap-2'>
          <button onClick={handlePrev} disabled={currentPage === 1} className='rounded-full bg-gray-100 p-2 disabled:opacity-30'>
            <img src={Left} alt='Left' />
          </button>
          <button onClick={handleNext} disabled={currentPage === Math.ceil(AllProducts.length / itemsPerPage)} className='rounded-full bg-gray-100 p-2 disabled:opacity-30'>
            <img src={Right} alt='Right' />
          </button>
        </div>
        <Link to='/products' className='contents'>
          <button className='lg:hidden text-[#DB4444] lg:text-white text-xs lg:text-base lg:font-medium lg:py-4 lg:px-12 bg-transparent lg:bg-[#DB4444] rounded-sm'>{language === 'en' ? 'View All' : 'Lihat Semua'}</button>
        </Link>
      </div>
      <div className='mt-6 lg:mt-12'>
        <div className='hidden lg:grid grid-cols-4 gap-4'>
          {displayedProducts.map((product, index) => (
            <div className='contents' key={index}>
              <ProductCard key={index} {...product} type={2} />
            </div>
          ))}
        </div>
        <div className='lg:hidden grid grid-cols-2 gap-4'>
          {displayedProducts.slice(0, 4).map((product, index) => (
            <div className='contents' key={index}>
              <ProductCard key={index} {...product} type={1} />
            </div>
          ))}
        </div>
      </div>
      <div className='hidden lg:flex justify-center mt-12'>
        <Link to='/products' className='contents'>
          <button className='bg-[#DB4444] text-white py-4 px-12 rounded-md'>{language === 'en' ? 'View All Products' : 'Lihat Semua Produk'}</button>
        </Link>
      </div>
    </section>
  );
};

export default AllProductSection;
