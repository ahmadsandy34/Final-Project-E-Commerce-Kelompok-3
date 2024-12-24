import React from "react";
import OrderCard from "./OrderCard";

const MyOrders = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-[#DB4444]">My Orders</h1>
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </div>
  );
};

export default MyOrders;
