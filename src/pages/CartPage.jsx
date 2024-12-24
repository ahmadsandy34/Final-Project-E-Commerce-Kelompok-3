import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/about/Breadcrumb";
import ProductCard from "../components/cart/ProductCard";
import InvoiceDetail from "../components/cart/InvoiceDetail";

const CartPage = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto py-4" ref={ref}>
      <Breadcrumb />
      <div className="px-4">
        <div>
          <div className="hidden sm:block">
            <div className="grid grid-cols-4 gap-4 mt-6 shadow-md p-4 px-8">
              <p>Product</p>
              <p className="text-center">Price</p>
              <p className="text-center">Quantity</p>
              <p className="text-right">Subtotal</p>
            </div>
          </div>
          <ProductCard />
          <ProductCard />
          <Link to="/">
            <button className="border-2 px-10 py-2 border-gray-500 font-medium mt-6">
              Return To Shop
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-y-6 sm:gap-y-0 sm:grid-cols-2 mt-6">
          <div>
            <form className="flex flex-col sm:flex-row gap-2 w-full sm:w-[90%]">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border-2 border-gray-500 p-2 w-full"
              />
              <div className="flex justify-end w-full mt-2 sm:mt-0">
                <button className="bg-[#DB4444] hover:bg-[#CD3535FF] rounded text-white p-2 w-1/2 sm:w-full font-medium">
                  Apply Coupon
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-end">
            <div className="space-y-4 border-2 border-black rounded p-4 w-full sm:w-[90%]">
              <h2 className="text-xl font-medium">Cart Total</h2>
              <InvoiceDetail />
              <div className="hidden sm:block">
                <div className="flex justify-center mt-6">
                  <Link to="/checkout/billing" className="contents">
                    <button className="bg-[#DB4444] hover:bg-[#CD3535FF] rounded text-white p-2 w-[70%] font-medium">
                      Proceed To Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="block sm:hidden">
            <button className="bg-[#DB4444] hover:bg-[#CD3535FF] rounded text-white p-2 w-full font-medium">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
