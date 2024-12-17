import React from "react";
import MyProfile from "./MyProfile";
import AddressBook from "./AddressBook";
import MyOrders from "./MyOrders";

const MainComponent = ({ activeMenu }) => {
  return (
    <div className="w-full bg-white shadow-md py-6 px-6 md:px-12">
      {activeMenu === "my-profile" && <MyProfile />}
      {activeMenu === "address-book" && <AddressBook />}
      {activeMenu === "my-orders" && <MyOrders />}
    </div>
  );
};

export default MainComponent;