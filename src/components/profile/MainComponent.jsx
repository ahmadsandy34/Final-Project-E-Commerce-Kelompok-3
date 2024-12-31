import React from "react";
import { useLocation } from "react-router-dom";
import MyProfile from "./MyProfile";
import AddressBook from "./AddressBook";
import MyOrders from "./MyOrders";

const MainComponent = () => {
  const location = useLocation();
  const path = location.pathname.split('/').pop();

  const renderContent = () => {
    switch (path) {
      case 'profile':
        return <MyProfile />;
      case 'address':
        return <AddressBook />;
      case 'orders':
        return <MyOrders />;
      default:
        return <MyProfile />;
    }
  };

  return (
    <div className="w-full bg-white shadow-md py-6 px-6 md:px-12">
      {renderContent()}
    </div>
  );
};

export default MainComponent;