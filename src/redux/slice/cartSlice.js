import { createSlice } from '@reduxjs/toolkit';

// Get initial values from localStorage
const initialState = {
  cartTotal: Number(localStorage.getItem('cartTotal')) || 0,
  error: null
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state) => {
      const token = localStorage.getItem('token'); // or whatever your token key is
      
      if (!token) {
        state.error = "Please login to add items to cart";
        return;
      }
      
      state.error = null;
      state.cartTotal += 1;
      localStorage.setItem('cartTotal', state.cartTotal);
    },
    removeFromCart: (state) => {
      const token = localStorage.getItem('token'); // or whatever your token key is
      
      if (!token) {
        state.error = "Please login to modify cart";
        return;
      }

      if (state.cartTotal > 0) {
        state.error = null;
        state.cartTotal -= 1;
        localStorage.setItem('cartTotal', state.cartTotal);
      }
    },
    clearCartError: (state) => {
      state.error = null;
    }
  }
});

export const { addToCart, removeFromCart, clearCartError } = cartSlice.actions;
export default cartSlice.reducer;

// Optional: Selector to get cart error state
export const selectCartError = (state) => state.cart.error;