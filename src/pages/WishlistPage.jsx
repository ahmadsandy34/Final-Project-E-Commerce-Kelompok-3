import React from 'react';
import product_img from '../assets/best_seling/product.png';

// Card Component remains the same
const WishlistCard = ({ title, price, originalPrice, rating, reviews, isNew, discount, image, outOfStock }) => {
  return (
    <div className='group rounded-sm'>
      <div className='relative'>
        <div className='relative h-64 overflow-hidden'>
          <img src={product_img} alt={title} className='w-full h-full object-contain bg-gray-100' />
          {discount && <span className='absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-2 py-0.5 rounded'>-{discount}%</span>}
          {isNew && <span className='absolute top-3 left-3 bg-[#00FF66] text-white text-xs px-2 py-0.5 rounded'>NEW</span>}
          
          {/* Trash icon */}
          <button className='absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.25 5.25L3.75 5.25001" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.75 9.75V15.75" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.25 9.75V15.75" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6C5.80109 20.25 5.61032 20.171 5.46967 20.0303C5.32902 19.8897 5.25 19.6989 5.25 19.5V5.25" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.75 5.25V3.75C15.75 3.35218 15.592 2.97064 15.3107 2.68934C15.0294 2.40804 14.6478 2.25 14.25 2.25H9.75C9.35218 2.25 8.97064 2.40804 8.68934 2.68934C8.40804 2.97064 8.25 3.35218 8.25 3.75V5.25" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Add to cart overlay */}
        {!outOfStock && (
          <div className='absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0'>
            Add To Cart
          </div>
        )}
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

// Main WishlistPage component
const WishlistPage = () => {
  const wishlistItems = [
    {
      title: 'Gucci duffle bag',
      price: 960,
      originalPrice: 1160,
      rating: 5,
      reviews: 65,
      discount: 35,
      image: product_img,
    },
    {
      title: 'RGB liquid CPU Cooler',
      price: 1960,
      rating: 5,
      reviews: 65,
      image: product_img,
    },
    {
      title: 'GP11 Shooter USB Gamepad',
      price: 550,
      rating: 5,
      reviews: 65,
      image: product_img,
    },
    {
      title: 'Quilted Satin Jacket',
      price: 100,
      rating: 5,
      reviews: 65,
      image: product_img,
    },
  ];

  return (
    <div className='max-w-screen-xl mx-auto px-4 py-8'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-xl font-medium'>
          Wishlist <span className='text-gray-500'>(4)</span>
        </h1>
        <button className='px-6 py-2 border border-gray-300 rounded-sm hover:bg-gray-50 transition-colors'>
          Move All to Bag
        </button>
      </div>

      {/* Updated grid classes for 2 columns on mobile */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
        {wishlistItems.map((item, index) => (
          <WishlistCard key={index} {...item} />
        ))}
      </div>

      <div className='mt-12'>
        <div className='flex items-center justify-between mb-6'>
          <div className='flex items-center gap-2'>
            <div className='w-1 h-6 bg-[#DB4444]'></div>
            <h2 className='text-lg font-medium'>Just For You</h2>
          </div>
          <button className='text-gray-500 hover:text-gray-700 px-6 py-2 border border-gray-300 rounded-sm'>See All</button>
        </div>

        {/* Updated grid classes for 2 columns on mobile */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
          {Array(4).fill(null).map((_, index) => (
            <WishlistCard
              key={`suggestion-${index}`}
              title='The north coat'
              price={260}
              originalPrice={360}
              rating={5}
              reviews={65}
              image={product_img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;