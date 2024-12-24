import React from "react";
import Breadcrumb from "../components/about/Breadcrumb";
import AddressBookCard from "../components/profile/AddressBookCard";
import { useNavigate } from "react-router-dom";
import ShippingCard from "../components/checkout/ShippingCard";
import InvoiceCard from "../components/checkout/InvoiceCard";

const BillingPage = () => {
  const navigate = useNavigate();
  const handleClick = (component, isEdit) => {
    navigate("/my-account");
  };
  return (
    <div className="max-w-screen-xl mx-auto py-4">
      <Breadcrumb />
      <div className="px-4 space-y-10">
        <h1 className="text-4xl font-medium">Billing Details</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl text-[#DB4444] font-medium">
                Your Address
              </h2>
              <AddressBookCard handleClick={handleClick} path="billing" />
            </div>
            <div className="space-y-4">
              <h2 className="text-xl text-[#DB4444] font-medium">
                Your Shipping
              </h2>
              <ShippingCard />
            </div>
            <div className="space-y-4">
              <h2 className="text-xl text-[#DB4444] font-medium">Your Note</h2>
              <input
                type="text"
                className="w-full border border-black rounded p-2"
                placeholder="Message for Sellers"
              />
            </div>
          </div>
          <div className="mt-10 sm:mt-0">
            <InvoiceCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
