import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },

    logout: (state) => {
      state.user = null
    },

    //save cart for the user
    updateUserWithKart: (state, action) => {
      let cart = action.payload;
      if (!state.user.hasOwnProperty('cart')) {
        state.user.cart = action.payload
      }
      else {
        state.user.cart = [...state.user.cart, ...action.payload]
      }
    }
  }
});

export const { login, logout, updateUserWithKart } = appSlice.actions;

export const selectUser = state => state.app.user;

export default appSlice.reducer;