/* eslint-disable no-unused-vars */
import React from "react";
import OrderCard from "./OrderCard";
import Laptop from "../../assets/home/laptop.svg";
import Monitor from "../../assets/best_seling/monitor.svg";
import Gamepad from "../../assets/best_seling/gamepad.svg";

const MyOrders = () => {
  const orders = [
    {
      id: 1,
      order: "Order No 312312365417",
      status: "Created",
      name: "ASUS FHD Gaming Laptop (1 items)",
      image: Laptop,
    },
    {
      id: 2,
      order: "Order No 312012762402",
      status: "Process",
      name: "IPS LCD Gaming Monitor (1 items)",
      image: Monitor,
    },
    {
      id: 3,
      order: "Order No 329912163478",
      status: "Success",
      name: "HAVIT HV-G92 Gamepad (1 items)",
      image: Gamepad,
    },
  ];
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-[#DB4444]">My Orders</h1>
      {orders.map((order) => (
        <OrderCard key={order.id} {...order} />
      ))}
    </div>
  );
};

export default MyOrders;
