import React from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../components/checkout/Breadcrumb";
import InvoiceDetail from "../components/cart/InvoiceDetail";
import SEO from "../components/SEO";

const CheckoutStatusPage = () => {
  const location = useLocation();
  const { cart, total } = location.state || { cart: [], total: 0 };

  return (
    <>
      <SEO
        title="Checkout - Exclusive"
        description="Complete your purchase at Exclusive. Secure and fast checkout process."
        keywords="checkout, online store, purchase, exclusive, payment"
        robots="noindex, nofollow"
      />
      <div className="max-w-screen-xl mx-auto py-4">
        <Breadcrumb />
        <div className="mx-auto mt-4 space-y-4 lg:w-1/3 px-4">
          <h1 className="text-base sm:text-4xl font-medium text-start sm:text-center">
            Order Success
          </h1>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 object-cover"
                />
                <p>{item.title}</p>
              </div>
              <p>${item.price * item.quantity}</p>
            </div>
          ))}
          <InvoiceDetail total={total} />
          <Link to="/" className="contents">
            <button className="bg-[#DB4444] hover:bg-[#CD3535FF] rounded text-white p-4 w-full font-medium">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CheckoutStatusPage;
