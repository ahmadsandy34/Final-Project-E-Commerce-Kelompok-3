/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import Breadcrumb from "../components/cart/Breadcrumb";
import ProductCard from "../components/cart/ProductCard";
import InvoiceDetail from "../components/cart/InvoiceDetail";
import Gamepad from "../assets/cart/gamepad.svg";
import Monitor from "../assets/cart/monitor.svg";
import SEO from "../components/SEO";

const CartPage = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");
  const [products, setProducts] = useState([
    { id: 1, title: "LCD Monitor", price: 650, image: Monitor, quantity: 1 },
    { id: 2, title: "H1 Gamepad", price: 550, image: Gamepad, quantity: 1 },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  const calculateTotal = () => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const handleCheckout = () => {
    navigate("/checkout/billing", {
      state: { cart: products, total: calculateTotal() },
    });
  };

  const handleCouponChange = (e) => {
    const sanitizedValue = DOMPurify.sanitize(e.target.value);
    setCouponCode(sanitizedValue);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <SEO
        title="Your Cart - Exclusive"
        description="Review the items in your cart before proceeding to checkout. Get the best deals at Exclusive."
        keywords="cart, online shopping, checkout, exclusive store, shopping cart"
        robots="index, follow"
      />
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
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                quantity={product.quantity}
                onQuantityChange={(newQuantity) =>
                  handleQuantityChange(product.id, newQuantity)
                }
              />
            ))}
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
                  value={couponCode}
                  onChange={handleCouponChange}
                />
                <div className="flex justify-end w-full mt-2 sm:mt-0">
                  <button disabled className="bg-[#DB4444] hover:bg-[#CD3535FF] rounded text-white p-2 w-1/2 sm:w-full font-medium cursor-pointer">
                    Apply Coupon
                  </button>
                </div>
              </form>
            </div>
            <div className="flex justify-end">
              <div className="space-y-4 border-2 border-black rounded p-4 w-full sm:w-[90%]">
                <h2 className="text-xl font-medium">Cart Total</h2>
                <InvoiceDetail total={calculateTotal()} />
                <div className="hidden sm:block">
                  <div className="flex justify-center mt-6">
                    <button
                      className="bg-[#DB4444] hover:bg-[#CD3535FF] rounded text-white p-2 w-[70%] font-medium"
                      onClick={handleCheckout}
                    >
                      Proceed To Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="block sm:hidden">
              <button
                className="bg-[#DB4444] hover:bg-[#CD3535FF] rounded text-white p-2 w-full font-medium"
                onClick={handleCheckout}
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;