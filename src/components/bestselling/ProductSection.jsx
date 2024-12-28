/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import PropTypes from "prop-types";

const ProductSection = ({ title, products }) => {
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [showMoreButton, setShowMoreButton] = useState(true);

  useEffect(() => {
    const updateVisibleProducts = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setVisibleProducts(4); // Layar kecil
      } else {
        setVisibleProducts(6); // Layar besar
      }
      setShowMoreButton(products.length > visibleProducts);
    };

    // Set jumlah produk saat komponen dimuat
    updateVisibleProducts();

    // Tambahkan event listener untuk perubahan ukuran layar
    window.addEventListener("resize", updateVisibleProducts);

    // Bersihkan event listener saat komponen dibongkar
    return () => {
      window.removeEventListener("resize", updateVisibleProducts);
    };
  }, [products]);

  const handleShowMore = () => {
    const increment = window.innerWidth < 768 ? 4 : 6;
    const newVisibleProducts = visibleProducts + increment;
    setVisibleProducts(newVisibleProducts);

    // Hide button if all products are shown
    if (newVisibleProducts >= products.length) {
      setShowMoreButton(false);
    }
  };

  const displayedProducts = products.slice(0, visibleProducts);

  return (
    <section className="flex-1">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {displayedProducts.map((product) => (
          <div key={product.id}>
            <ProductCard key={product.id} {...product} type={1} />
          </div>
        ))}
      </div>

      {showMoreButton && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleShowMore}
            className="bg-[#DB4444] text-white px-12 py-4 rounded hover:bg-red-600 transition-colors"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

ProductSection.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductSection;
