import React, { useState, useEffect } from "react";

import { ProductCard } from "./ProductCard";

export const ProductSection = ({ title, products }) => {
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [showMoreButton, setShowMoreButton] = useState(true);

  useEffect(() => {
    // Reset visible products when products array changes (category changes)
    setVisibleProducts(6);
    setShowMoreButton(products.length > 6);
  }, [products]);

  const handleShowMore = () => {
    const newVisibleProducts = visibleProducts + 6;
    setVisibleProducts(newVisibleProducts);

    // Hide button if all products are shown
    if (newVisibleProducts >= products.length) {
      setShowMoreButton(false);
    }
  };

  const displayedProducts = products.slice(0, visibleProducts);

  return (
    <section className='flex-1'>
      <div className='flex items-center gap-4 mb-12'>
        <div className='w-5 h-10 bg-[#DB4444] rounded-sm'></div>
        <h2 className='text-2xl font-semibold'>{title}</h2>
        <span className='text-gray-500 ml-2'>({products.length} items)</span>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8'>
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {showMoreButton && (
        <div className='mt-10 flex justify-center'>
          <button onClick={handleShowMore} className='bg-[#DB4444] text-white px-12 py-4 rounded hover:bg-red-600 transition-colors'>
            Show More
          </button>
        </div>
      )}
    </section>
  );
};