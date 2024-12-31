import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import side_image from '../../assets/auth/side_image.png';
import Swal from 'sweetalert2'; // Import Sweet Alert

const Auth = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Determine if the route is for login or register
  const isLogin = location.pathname === '/auth/login';

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Login logic dengan Sweet Alert
      const user = users.find((user) => user.email === formData.email && user.password === formData.password);

      if (user) {
        const token = `token-${user.email}-${Date.now()}`;
        const chart = 0;
        localStorage.setItem('token', token);
        localStorage.setItem('chart', chart);

        // Success login notification
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: 'Welcome back to Exclusive',
          confirmButtonColor: '#DB4444',
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          navigate('/');
          window.location.reload();
        });
      } else {
        // Failed login notification
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid email or password!',
          confirmButtonColor: '#DB4444',
        });
      }
    } else {
      // Register logic tetap sama
      const userExists = users.some((user) => user.email === formData.email);

      if (userExists) {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: 'Email already registered!',
          confirmButtonColor: '#DB4444',
        });
      } else {
        const newUser = {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        };

        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        Swal.fire({
          icon: 'success',
          title: 'Registration Successful!',
          text: 'You can now log in to your account',
          confirmButtonColor: '#DB4444',
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/auth/login');
          }
        });
      }
    }
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
      <div className='flex flex-col md:flex-row min-h-screen lg:mt-12' ref={ref}>
        {/* Image Section */}
        <div className='hidden md:flex md:w-1/2 bg-[#C1DBE3] relative'>
          <img src={side_image} alt='Shopping Cart' className='w-full h-full object-cover' />
        </div>

        {/* Form Section */}
        <div className='w-full md:w-1/2 flex items-center justify-center p-8 md:p-16'>
          <div className='w-full max-w-md'>
            <h1 className='text-2xl font-semibold mb-2'>{isLogin ? 'Log in to Exclusive' : 'Create an account'}</h1>
            <p className='mb-8'>Enter your details below</p>

            <form onSubmit={handleSubmit} className='space-y-4'>
              {!isLogin && (
                <div>
                  <input type='text' name='name' placeholder='Name' value={formData.name} onChange={handleChange} className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500' required />
                </div>
              )}

              <div>
                <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500' required />
              </div>

              <div>
                <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500' required />
              </div>

              <div className='flex justify-between items-center'>
                <button type='submit' className='w-full bg-[#DB4444] text-white py-2 px-4 rounded hover:bg-red-600 transition-colors'>
                  {isLogin ? 'Log in' : 'Create Account'}
                </button>
              </div>
            </form>

            <div className='mt-6 text-left text-gray-600'>
              {isLogin ? (
                <p>
                  Don't have an account?{' '}
                  <Link to='/auth/register' className='text-[#DB4444] font-medium hover:underline underline-offset-4'>
                    Sign up
                  </Link>
                </p>
              ) : (
                <p>
                  Already have an account?{' '}
                  <Link to='/auth/login' className='text-[#DB4444] font-medium hover:underline underline-offset-4'>
                    Log in
                  </Link>
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
