import React from "react";
import { Link } from "react-router-dom";
import LoveIcon from "../../assets/product-detail/LoveIcon";

const ProductCard = ({ item }) => {
  return (
    <div className="relative group">
      <div className="relative h-[150px] md:h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full object-cover bg-gray-100"
        />
        {item.discount && (
          <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-2 py-0.5 rounded">
            -{item.discount}%
          </span>
        )}
        {item.isNew && (
          <span className="absolute top-3 left-3 bg-[#00FF66] text-white text-xs px-2 py-0.5 rounded">
            NEW
          </span>
        )}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100">
          <LoveIcon />
        </button>

        <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0">
          Add To Cart
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-base font-medium mb-2">{item.title}</h3>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[#DB4444] font-medium">${item.price}</span>
          {item.originalPrice && (
            <span className="text-gray-500 line-through">
              ${item.originalPrice}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex">
            {"★★★★★".split("").map((star, i) => (
              <span key={i} className="text-yellow-400 text-sm">
                {star}
              </span>
            ))}
          </div>
          <span className="text-gray-500 text-sm">({item.reviews})</span>
        </div>
      </div>
    </div>
  );
};

const RelatedProduct = () => {
  const products = [
    {
      title: "Gucci duffle bag",
      price: 960,
      originalPrice: 1160,
      rating: 5,
      reviews: 65,
      discount: 35,
      image: "https://picsum.photos/300/300",
    },
    {
      title: "RGB liquid CPU Cooler",
      price: 1960,
      rating: 5,
      reviews: 65,
      image: "https://picsum.photos/300/300",
    },
    {
      title: "GP11 Shooter USB Gamepad",
      price: 550,
      rating: 5,
      reviews: 65,
      image: "https://picsum.photos/300/300",
    },
    {
      title: "Quilted Satin Jacket",
      price: 100,
      rating: 5,
      reviews: 65,
      image: "https://picsum.photos/300/300",
    },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((item, index) => (
        <Link to="/product/detail" className="contents" key={index}>
          <ProductCard key={index} item={item} />
        </Link>
      ))}
    </div>
  );
};

export default RelatedProduct;
