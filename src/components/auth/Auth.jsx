import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import side_image from '../../assets/auth/side_image.png';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='min-h-screen bg-white'>
      <div className='flex flex-col md:flex-row min-h-screen'>
        {/* Image Section */}
        <div className='w-full md:w-1/2 bg-[#C1DBE3] relative'>
          <img src={side_image} alt='Shopping Cart' className='w-full h-full object-cover' />
        </div>

        {/* Form Section */}
        <div className='w-full md:w-1/2 flex items-center justify-center p-8 md:p-16'>
          <div className='w-full max-w-md'>
            <h1 className='text-2xl font-semibold mb-2'>{isLogin ? 'Log in to Exclusive' : 'Create an account'}</h1>
            <p className='text-gray-600 mb-8'>Enter your details below</p>

            <form onSubmit={handleSubmit} className='space-y-4'>
              {!isLogin && (
                <div>
                  <input type='text' name='name' placeholder='Name' value={formData.name} onChange={handleChange} className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500' />
                </div>
              )}

              <div>
                <input type='text' name='email' placeholder='Email or Phone Number' value={formData.email} onChange={handleChange} className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500' />
              </div>

              <div>
                <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500' />
              </div>

              <div className='flex justify-between items-center'>
                <button type='submit' className='w-full bg-[#DB4444] text-white py-2 px-4 rounded hover:bg-red-600 transition-colors'>
                  {isLogin ? 'Log in' : 'Create Account'}
                </button>
              </div>

              {isLogin && (
                <div className='text-right'>
                  <Link to='/forgot-password' className='text-[#DB4444] text-sm'>
                    Forgot Password?
                  </Link>
                </div>
              )}
            </form>

            <div className='mt-6 text-center text-gray-600'>
              {isLogin ? (
                <p>
                  Don't have an account?{' '}
                  <button onClick={() => setIsLogin(false)} className='text-[#DB4444] font-medium'>
                    Sign up
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{' '}
                  <button onClick={() => setIsLogin(true)} className='text-[#DB4444] font-medium'>
                    Log in
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
