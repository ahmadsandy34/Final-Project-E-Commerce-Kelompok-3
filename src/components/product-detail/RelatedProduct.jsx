import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoveIcon from '../../assets/product-detail/LoveIcon';
import Gamepad from '../../assets/best_seling/gamepad.svg';
import Keyboard from '../../assets/best_seling/keyboard.svg';
import Cooler from '../../assets/best_seling/cooler.svg';
import Monitor from '../../assets/best_seling/monitor.svg';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slice/cartSlice';

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={`full-${i}`} className='bi bi-star-fill text-yellow-400 me-1'></i>);
  }

  if (hasHalfStar) {
    stars.push(<i key='half' className='bi bi-star-half text-yellow-400 me-1'></i>);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<i key={`empty-${i}`} className='bi bi-star text-yellow-400 me-1'></i>);
  }

  return stars;
};

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart());
  };

  return (
    <div className='relative group'>
      <div className='relative h-[150px] md:h-64 overflow-hidden'>
        <img src={item.image} alt={item.title} className='w-full object-cover bg-gray-100' />
        {item.discount && <span className='absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-2 py-0.5 rounded'>-{item.discount}%</span>}
        {item.isNew && <span className='absolute top-3 left-3 bg-[#00FF66] text-white text-xs px-2 py-0.5 rounded'>NEW</span>}
        <button className='absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100'>
          <LoveIcon />
        </button>

        <button onClick={handleAddToCart} className='absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0'>
          Add To Cart
        </button>
      </div>

      <div className='p-4'>
        <h3 className='text-base font-medium mb-2'>{item.title}</h3>
        <div className='flex items-center gap-3 mb-2'>
          <span className='text-[#DB4444] font-medium'>${item.price}</span>
          {item.originalPrice && <span className='text-gray-500 line-through'>${item.originalPrice}</span>}
        </div>
        <div className='flex items-center gap-2'>
          <div className='flex'>{renderStars(item.rating)}</div>
          <span className='text-gray-500 text-sm'>({item.reviews})</span>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    discount: PropTypes.number,
    isNew: PropTypes.bool,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
  }).isRequired,
};

const RelatedProduct = () => {
  const products = [
    {
      title: 'Havit HV-G92 Gamepad',
      price: 120,
      originalPrice: 160,
      rating: 5,
      reviews: 88,
      discount: 40,
      image: Gamepad,
    },
    {
      title: 'AK-900 Wired Keyboard',
      price: 960,
      originalPrice: 1160,
      rating: 4,
      reviews: 75,
      discount: 35,
      image: Keyboard,
    },
    {
      title: 'IPS LCD Gaming Monitor',
      price: 370,
      originalPrice: 400,
      rating: 5,
      reviews: 99,
      discount: 30,
      image: Monitor,
    },
    {
      title: 'RGB liquid CPU Cooler',
      price: 160,
      originalPrice: 170,
      rating: 4.5,
      reviews: 65,
      image: Cooler,
    },
  ];
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
      {products.map((item, index) => (
        <Link to='/product/detail' className='contents' key={index}>
          <ProductCard key={index} item={item} />
        </Link>
      ))}
    </div>
  );
};

export default RelatedProduct;
