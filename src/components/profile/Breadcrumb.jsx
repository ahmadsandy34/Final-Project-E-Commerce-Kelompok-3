// components/about/Breadcrumb.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = () => {
  return (
    <div className="px-4 lg:px-3 lg:mt-8 mt-0">
      <div className="flex items-center gap-2 text-sm">
        <Link to="/" className="text-gray-400 hover:text-black">Home</Link>
        <span className="text-gray-400">/</span>
        <span>My Account</span>
      </div>
    </div>
  );
};

export default Breadcrumb;