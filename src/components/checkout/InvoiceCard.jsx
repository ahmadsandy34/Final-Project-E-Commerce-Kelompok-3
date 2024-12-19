import React from "react";
import InvoiceProduct from "./InvoiceProduct";
import InvoiceDetail from "../cart/InvoiceDetail";
import BankLogo from "../../assets/checkout/bank-logo.png"

const InvoiceCard = () => {
  return (
    <div className="space-y-4">
      <InvoiceProduct />
      <InvoiceProduct />
      <InvoiceDetail />
      <div>
        <form className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center space-x-1">
              <input type="radio" name="choice" value="bank" className="w-5 h-5"/>
              <p className="my-auto">Bank</p>
            </div>
            <img src={BankLogo} alt="bank-logo" className="h-[28px]"/>
          </div>
          <div className="flex items-center space-x-1">
            <input type="radio" name="choice" value="cod" className="w-5 h-5"/>
            <p className="my-auto">Cash on delivery</p>
          </div>
          <div>
            <button className="bg-[#DB4444] text-white font-medium py-3 px-8 w-full sm:w-64 rounded">
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvoiceCard;
