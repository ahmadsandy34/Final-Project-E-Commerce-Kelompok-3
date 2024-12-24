import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full'>
      {/* Top Banner */}
      <div className='w-full bg-black text-white py-2 px-4 text-center'>
        <div className='flex justify-between items-center max-w-screen-xl mx-auto'>
          <p className='text-sm text-center flex-1'>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
            <Link to='/best-selling' className='font-bold hover:underline'>
              ShopNow
            </Link>
          </p>
          <div>
            <select className='bg-black text-white text-sm focus:outline-none'>
              <option>English</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className='border-b'>
        <div className='max-w-screen-xl mx-auto px-4'>
          <div className='flex items-center justify-between h-16'>
            {/* Logo */}
            <Link to='/' className='text-2xl font-bold text-black'>
              Exclusive
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-6'>
              <Link to='/' className='text-gray-700 hover:text-black'>
                Home
              </Link>
              <Link to='/contact' className='text-gray-700 hover:text-black'>
                Contact
              </Link>
              <Link to='/about' className='text-gray-700 hover:text-black'>
                About
              </Link>
              <Link to='/auth' className='text-gray-700 hover:text-black'>
                Sign Up
              </Link>
            </div>

            {/* Search Bar (Desktop) */}
            <div className='hidden md:block'>
              <input
                type='text'
                placeholder='What are you looking for?'
                className='border rounded-lg py-2 px-4 w-64'
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              className='md:hidden p-2 text-gray-700'
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='p-6'>
          {/* Header */}
          <div className='flex items-center justify-between mb-6'>
            <span className='text-xl font-bold text-black'>Exclusive</span>
            <button
              onClick={() => setIsOpen(false)}
              className='text-gray-600 hover:bg-gray-100 p-2 rounded-full'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>

          {/* Search Input */}
          <div className='mb-6'>
            <input
              type='text'
              placeholder='What are you looking for?'
              className='w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none'
            />
          </div>

          {/* Navigation Links */}
          <nav className='space-y-4'>
            <Link
              to='/'
              className='block text-red-500 font-medium border-l-4 border-red-500 pl-4'
            >
              Home
            </Link>
            <Link
              to='/contact'
              className='block text-gray-600 pl-4 hover:text-black'
            >
              Contact
            </Link>
            <Link
              to='/about'
              className='block text-gray-600 pl-4 hover:text-black'
            >
              About
            </Link>
            <Link
              to='/auth'
              className='block text-gray-600 pl-4 hover:text-black'
            >
              Sign Up
            </Link>
          </nav>
        </div>

        {/* Profile Section */}
        <div className='absolute bottom-6 left-6 flex items-center space-x-4'>
          <img
            src='https://via.placeholder.com/40'
            alt='User'
            className='w-10 h-10 rounded-full'
          />
          <span className='text-gray-800'>Andre Gunawan</span>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40'
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
