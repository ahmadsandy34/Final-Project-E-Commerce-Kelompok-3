import React from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../components/checkout/Breadcrumb";
import AddressBookCard from "../components/profile/AddressBookCard";
import ShippingCard from "../components/checkout/ShippingCard";
import InvoiceCard from "../components/checkout/InvoiceCard";
import SEO from "../components/SEO";

const BillingPage = () => {
  const location = useLocation();
  const { cart, total } = location.state || { cart: [], total: 0 };

  return (
    <>
      <SEO
        title="Billing Details - Exclusive"
        description="Review and confirm your billing details for a seamless checkout experience on Exclusive."
        keywords="billing details, checkout, invoice, exclusive store"
        robots="noindex, nofollow"
      />
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
                <AddressBookCard />
              </div>
              <div className="space-y-4">
                <h2 className="text-xl text-[#DB4444] font-medium">
                  Your Shipping
                </h2>
                <ShippingCard />
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <InvoiceCard cart={cart} total={total} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingPage;
