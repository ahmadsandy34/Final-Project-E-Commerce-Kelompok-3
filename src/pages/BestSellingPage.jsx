import React from 'react';
import product from '../assets/best_seling/product.png';

// Card Component
const ProductCard = ({ title, price, originalPrice, rating, reviews, isNew, discount, image }) => {
  return (
    <div className='group  rounded-sm'>
      <div className='relative'>
        <div className='relative h-64 overflow-hidden'>
          <img src={image} alt={title} className='w-full h-full object-contain bg-gray-100' />
          {isNew && <span className='absolute top-3 left-3 bg-[#00FF66] text-white text-xs px-2 py-0.5 rounded'>NEW</span>}
          {discount && <span className='absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-2 py-0.5 rounded'>-{discount}%</span>}
        </div>

        {/* Add to cart overlay */}
        <div className='absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0'>Add To Cart</div>
      </div>

      <div className='p-4'>
        <h3 className='text-base font-medium mb-2'>{title}</h3>
        <div className='flex items-center gap-3 mb-2'>
          <span className='text-[#DB4444] font-medium'>${price}</span>
          {originalPrice && <span className='text-gray-500 line-through'>${originalPrice}</span>}
        </div>
        <div className='flex items-center gap-2'>
          <div className='flex'>
            {'★★★★★'.split('').map((star, i) => (
              <span key={i} className='text-yellow-400 text-sm'>
                {star}
              </span>
            ))}
          </div>
          <span className='text-gray-500 text-sm'>({reviews})</span>
        </div>
      </div>
    </div>
  );
};

// Product Grid Component
const ProductGrid = ({ products }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

// Section Title Component
const SectionTitle = ({ title }) => {
  return (
    <div className='flex items-center gap-2 mb-8'>
      <div className='w-1 h-6 bg-[#DB4444]'></div>
      <h2 className='text-2xl font-bold'>{title}</h2>
    </div>
  );
};

// Main Page Component
const BestSellingPage = () => {
  // Dummy data for gaming products
  const gamingProducts = [
    {
      title: 'ASUS FHD Gaming Laptop',
      price: 960,
      originalPrice: 1160,
      rating: 5,
      reviews: 65,
      discount: 35,
      image: product,
    },
    {
      title: 'IPS LCD Gaming Monitor',
      price: 1160,
      rating: 5,
      reviews: 65,
      image: product,
    },
    {
      title: 'HAVIT HV-G92 Gamepad',
      price: 560,
      rating: 5,
      reviews: 65,
      isNew: true,
      image: product,
    },
    {
      title: 'AK-900 Wired Keyboard',
      price: 200,
      rating: 5,
      reviews: 65,
      image: product,
    },
  ];

  // Dummy data for clothing products
  const clothingProducts = [
    {
      title: 'The north coat',
      price: 260,
      originalPrice: 360,
      rating: 5,
      reviews: 65,
      image: product,
    },
    {
      title: 'The north coat',
      price: 260,
      originalPrice: 360,
      rating: 5,
      reviews: 65,
      image: product,
    },
    {
      title: 'The north coat',
      price: 260,
      originalPrice: 360,
      rating: 5,
      reviews: 65,
      image: product,
    },
    {
      title: 'The north coat',
      price: 260,
      originalPrice: 360,
      rating: 5,
      reviews: 65,
      image: product,
    },
  ];

  return (
    <div className='max-w-screen-xl mx-auto px-4 py-8'>
      <section className='mb-12'>
        <SectionTitle title='Best Selling Products' />
        <ProductGrid products={gamingProducts} />
      </section>

      <section className='mb-12'>
        <ProductGrid products={clothingProducts} />
      </section>

      <div className='flex justify-center'>
        <button className='bg-[#DB4444] text-white px-8 py-3 rounded hover:bg-red-600 transition-colors'>Show More</button>
      </div>
    </div>
  );
};

export default BestSellingPage;
