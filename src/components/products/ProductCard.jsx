import product_img from '../../assets/best_seling/product.png';

export const ProductCard = ({ title, price, originalPrice, rating, reviews, isNew, discount }) => {
  return (
    <div className='group rounded-sm'>
      <div className='relative'>
        <div className='relative h-64 overflow-hidden'>
          <img src={product_img} alt={title} className='w-full h-full object-contain bg-gray-100' />
          {isNew && <span className='absolute top-3 left-3 bg-[#00FF66] text-white text-xs px-2 py-0.5 rounded'>NEW</span>}
          {discount && <span className='absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-2 py-0.5 rounded'>-{discount}%</span>}
        </div>

        <div className='absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0'>
          <button className='flex items-center justify-center w-full gap-2'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
              />
            </svg>
            Add To Cart
          </button>
        </div>
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
