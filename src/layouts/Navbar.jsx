/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Search from '../assets/navbar/search.svg';
import Cart from '../assets/navbar/cart.svg';
import Wishlist from '../assets/navbar/wishlist.svg';
import UserPic from '../assets/navbar/userpic.svg';
import User from '../assets/navbar/user.svg';
import UserRed from '../assets/navbar/userred.svg';
import UserDrop from '../assets/navbar/userdrop.svg';
import Order from '../assets/navbar/order.svg';
import Reviews from '../assets/navbar/reviews.svg';
import Logout from '../assets/navbar/logout.svg';
import PropTypes from 'prop-types';

const Navbar = ({ token }) => {
  const cartTotal = useSelector((state) => state.cart.cartTotal);

  console.log(cartTotal);

  const [isOpen, setIsOpen] = useState(false);
  const [currentUserIcon, setCurrentUserIcon] = useState(User);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown on click anywhere outside the dropdown
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleClick = () => {
    setCurrentUserIcon((prevIcon) => (prevIcon === User ? UserRed : User));
    setIsDropdownOpen((prev) => !prev);
  };

  const handleDropdownLinkClick = () => {
    setIsDropdownOpen(false);
    setCurrentUserIcon(User);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    localStorage.removeItem('cartTotal'); // Remove chart from localStorage
    navigate('/auth/login'); // Redirect to login page
    window.location.reload(); // Refresh the page to reset token state
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the mobile menu
  };

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
            <Link to='/' className='hidden lg:block text-2xl font-bold text-black'>
              Exclusive
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-6'>
              <Link to='/' className='text-black hover:text-gray-500'>
                Home
              </Link>
              <Link to='/contact' className='text-black hover:text-gray-500'>
                Contact
              </Link>
              <Link to='/about' className='text-black hover:text-gray-500'>
                About
              </Link>
              {!token && ( // Hanya tampilkan jika tidak ada token
                <Link to='/auth/register' className='text-black hover:text-gray-500'>
                  Sign Up
                </Link>
              )}
            </div>

            {/* Search Bar (Desktop) */}
            <div className='hidden md:flex flex-row items-center'>
              <div className='relative'>
                <input type='text' placeholder='What are you looking for?' className='border rounded-lg py-2 px-4 w-64 bg-[#F5F5F5]' />
                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                  <img src={Search} alt='Search' className='w-5 h-5' />
                </button>
              </div>
              <div className='flex items-center space-x-2 ms-2 relative'>
                <Link to='/wishlist'>
                  <img src={Wishlist} alt='Wishlist' className='w-7 h-7' />
                </Link>
                <Link to='/cart' className='relative'>
                  <div className='relative inline-block'>
                    {cartTotal > 0 && <span className='absolute -top-2 -right-2 w-5 h-5 text-center bg-red-500 rounded-full flex items-center justify-center text-white text-xs'>{cartTotal}</span>}
                    <img src={Cart} alt='Cart' className='w-7 h-7' />
                  </div>
                </Link>
                {token && (
                  <div className='relative' ref={dropdownRef}>
                    <img src={currentUserIcon} alt='User' className='w-7 h-7 cursor-pointer' onClick={handleClick} />
                    {isDropdownOpen && (
                      <div className='absolute right-0 mt-2 w-48 bg-gradient-to-t from-black via-black/80 to-black/60 backdrop-blur-xl text-white rounded-md z-10'>
                        <Link to='/my-account/profile' className='block px-2 py-2 text-sm hover:bg-gray-700' onClick={handleDropdownLinkClick}>
                          <img src={UserDrop} alt='User' className='inline w-7 h-7 me-1' /> Manage My Account
                        </Link>
                        <Link to='/my-account/orders' className='block px-2 py-2 text-sm hover:bg-gray-700' onClick={handleDropdownLinkClick}>
                          <img src={Order} alt='Order' className='inline w-6 h-6 me-2' /> My Order
                        </Link>
                        <Link to='#' className='block px-2 py-2 text-sm hover:bg-gray-700' onClick={handleDropdownLinkClick}>
                          <img src={Reviews} alt='Reviews' className='inline w-6 h-6 me-2' /> My Reviews
                        </Link>
                        <button
                          onClick={() => {
                            handleDropdownLinkClick();
                            handleLogout();
                          }}
                          className='block w-full text-left px-2 py-2 text-sm hover:bg-gray-700'>
                          <img src={Logout} alt='Logout' className='inline w-6 h-6 me-2' /> Logout
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className='md:hidden p-2 text-gray-700' onClick={() => setIsOpen(!isOpen)}>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
              <div className='p-6'>
                {/* Header */}
                <div className='flex items-center justify-between mb-6'>
                  <span className='text-xl font-bold text-black'>Exclusive</span>
                  <button onClick={() => setIsOpen(false)} className='text-gray-600 hover:bg-gray-100 p-2 rounded-full'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                    </svg>
                  </button>
                </div>

                {/* Search Input */}
                <div className='mb-6 relative'>
                  <input type='text' placeholder='What are you looking for?' className='w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none' />
                  <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                    <img src={Search} alt='Search' className='w-5 h-5' />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className={`space-y-4 ${token ? '' : 'border-b border-gray-400 pb-4'} `}>
                  <Link to='/' className='block text-red-500 font-medium border-l-4 border-red-500 pl-4' onClick={handleLinkClick}>
                    Home
                  </Link>
                  <Link to='/contact' className='block text-gray-600 pl-4 hover:text-black' onClick={handleLinkClick}>
                    Contact
                  </Link>
                  <Link to='/about' className='block text-gray-600 pl-4 hover:text-black' onClick={handleLinkClick}>
                    About
                  </Link>
                  {!token && ( // Hanya tampilkan jika tidak ada token
                    <Link to='/auth/register' className='block text-gray-600 pl-4 hover:text-black' onClick={handleLinkClick}>
                      Sign Up
                    </Link>
                  )}
                </nav>
              </div>

              {/* Profile Section */}
              {token && (
                <>
                  <div className='absolute bottom-6 left-6 flex items-center space-x-4'>
                    <img src={UserPic} alt='User' className='w-12 h-12 rounded-full' />
                    <span className='text-gray-800'>Andre Gunawan</span>
                  </div>
                  <div className='absolute bottom-3 left-3 w-11/12 mx-auto'>
                    <div className='h-[1px] bg-gray-400'></div>
                  </div>
                </>
              )}

              {!token && (
                <div className='absolute bottom-6 right-6 flex items-center'>
                  <div className='flex gap-x-3'>
                    <Link to='/auth' className='border border-red-500 rounded-md px-10 py-2 text-red-500 font-medium' onClick={handleLinkClick}>
                      Sign Up
                    </Link>
                    <Link to='/auth' className='bg-red-500 border border-red-500 rounded-md px-10 py-2 text-white font-medium' onClick={handleLinkClick}>
                      Login
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Overlay */}
            {isOpen && <div className='fixed inset-0 bg-black bg-opacity-50 z-40' onClick={() => setIsOpen(false)}></div>}

            <Link to='/' className='lg:hidden text-2xl font-bold text-black'>
              Exclusive
            </Link>

            <Link to='/cart' className='lg:hidden relative'>
              <div className='relative inline-block'>
                {cartTotal > 0 && <span className='absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs'>{cartTotal}</span>}
                <img src={Cart} alt='Cart' className='w-7 h-7' />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  token: PropTypes.string,
};

export default Navbar;
