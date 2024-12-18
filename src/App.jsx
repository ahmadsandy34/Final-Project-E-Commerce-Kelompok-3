/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import AuthPage from './pages/AuthPage';
import AboutPage from './pages/AboutPage';
import BestSellingPage from './pages/BestSellingPage';
import ProfilePage from './pages/ProfilePage';
import WishlistPage from './pages/WishlistPage';
import ContactPage from './pages/ContactPage';
import Homepage from './pages/Homepage';
import ProductDetailPage from './pages/ProductDetailPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/wishlist' element={<WishlistPage />} />
          <Route path='/best-selling' element={<BestSellingPage />} />
          <Route path='/product/detail' element={<ProductDetailPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/my-account' element={<ProfilePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
