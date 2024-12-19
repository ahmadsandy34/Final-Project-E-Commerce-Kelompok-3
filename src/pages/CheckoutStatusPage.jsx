import React from "react";
import Breadcrumb from "../components/about/Breadcrumb";
import InvoiceDetail from "../components/cart/InvoiceDetail";

const CheckoutStatusPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-4">
      <Breadcrumb />
      <div className="mx-auto mt-4 space-y-4 lg:w-1/3 px-4">
        <h1 className="text-base sm:text-4xl font-medium text-start sm:text-center">Order Success</h1>
        <div className="flex justify-between items-center pt-8">
          <div className="flex items-center gap-2">
            <img src="https://picsum.photos/200" alt="order" className="w-12 h-12 object-cover" />
            <p>LCD Monitor</p>
          </div>
          <p>$650</p>
        </div>
        <InvoiceDetail />
        <button className="bg-[#DB4444] hover:bg-[#CD3535FF] rounded text-white p-4 w-full font-medium">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default CheckoutStatusPage;
