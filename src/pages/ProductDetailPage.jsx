import React, { useEffect, useRef } from "react";
import Breadcrumb from "../components/product-detail/Breadcrumb";
import GalleryProduct from "../components/product-detail/GalleryProduct";
import ProductInformation from "../components/product-detail/ProductInformation";
import RelatedProduct from "../components/product-detail/RelatedProduct";
import SEO from "../components/SEO";

const ProductDetailPage = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <SEO
        title="Havic HV G-92 Gamepad - Exclusive"
        description="PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
        keywords="Havic HV G-92 Gamepad, gaming, exclusive store, online shopping"
        robots="index, follow"
      />
      <div className="max-w-screen-xl mx-auto md:px-4 py-4" ref={ref}>
        <Breadcrumb />
        <div className="mt-6 lg:flex gap-6">
          <GalleryProduct />
          <ProductInformation />
        </div>
        <div className="mt-4 md:mt-24 px-4 md:px-0 ">
          <div className="flex items-center gap-4">
            <div className="bg-[#DB4444] h-[40px] w-[20px] rounded-md"></div>
            <h1 className="text-[#DB4444] font-bold">Relate Item</h1>
          </div>
          <div className="mt-4 md:mt-10">
            <RelatedProduct />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
