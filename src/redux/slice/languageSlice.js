// src/redux/features/languageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: localStorage.getItem('language') || 'id', // Default ke bahasa Indonesia
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === 'id' ? 'en' : 'id';
      localStorage.setItem('language', state.language);
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;
export const selectLanguage = (state) => state.language.language;
export default languageSlice.reducer;