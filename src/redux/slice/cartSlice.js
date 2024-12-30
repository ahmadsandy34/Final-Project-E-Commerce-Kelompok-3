import { createSlice } from '@reduxjs/toolkit';

// Ambil nilai awal dari localStorage
const initialState = {
  cartTotal: Number(localStorage.getItem('cartTotal')) || 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state) => {
      state.cartTotal += 1;
      localStorage.setItem('cartTotal', state.cartTotal);
    },
    removeFromCart: (state) => {
      if (state.cartTotal > 0) {
        state.cartTotal -= 1;
        localStorage.setItem('cartTotal', state.cartTotal);
      }
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;