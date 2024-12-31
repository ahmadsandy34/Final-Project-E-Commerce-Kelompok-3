import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import AuthPage from './pages/AuthPage';
import AboutPage from './pages/AboutPage';
import BestSellingPage from './pages/BestSellingPage';
import ProfilePage from './pages/ProfilePage';
import WishlistPage from './pages/WishlistPage';
import ProductPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import Homepage from './pages/Homepage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutStatusPage from './pages/CheckoutStatusPage';
import BillingPage from './pages/BillingPage';
import ProtectedRoute from './components/ProtectedRoute';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
  const [token, setToken] = useState(null); // Simulate user authentication state
  const [cartCount, setCartCount] = useState(0);

  // Fetch token from localStorage on initial render
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedCart = localStorage.getItem('cartCount');
    if (storedToken) {
      setToken(storedToken); // Update state with the stored token
    }
    if (storedCart) {
      setCartCount(parseInt(storedCart));
    }
  }, []);

  const handleChart = () => {
    const newCount = cartCount + 1;
    setCartCount(newCount);
    localStorage.setItem('cartCount', newCount.toString());
  };

  const isLoggedIn = !!token; // Check if the user is logged in based on token

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar token={token} />
          <Routes>
            <Route path='/' element={<Homepage handleChart={handleChart} />} />
            <Route path='/auth/login' element={<AuthPage />} />
            <Route path='/auth/register' element={<AuthPage />} />
            <Route
              path='/wishlist'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <WishlistPage handleChart={handleChart} />
                </ProtectedRoute>
              }
            />
            <Route path='/products' element={<ProductPage />} />
            <Route path='/products/category/:category' element={<ProductPage />} />
            <Route path='/best-selling' element={<BestSellingPage handleChart={handleChart} />} />
            <Route path='/product/detail' element={<ProductDetailPage handleChart={handleChart} />} />
            <Route
              path='/cart'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <CartPage />
                </ProtectedRoute>
              }
            />
            <Route
              path='/checkout/billing'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <BillingPage />
                </ProtectedRoute>
              }
            />
            <Route
              path='/checkout/status'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <CheckoutStatusPage />
                </ProtectedRoute>
              }
            />
            <Route path='/about' element={<AboutPage />} />
            <Route
              path='/my-account/*'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
          <Footer token={token} />
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
