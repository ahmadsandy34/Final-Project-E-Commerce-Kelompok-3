import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/cartSlice';
import languageReducer from './slice/languageSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    language: languageReducer,
  },
});