// components/about/Breadcrumb.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-4">
      <div className="flex items-center gap-2 text-sm">
        <Link to="/" className="text-gray-600 hover:text-black">Home</Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-900">About</span>
      </div>
    </div>
  );
};

export default Breadcrumb;