import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: []
  },
  reducers: {
    addToCart: (state, action) => {
      let index = state.value.findIndex(item => item.id === action.payload.id);
      if (index === -1) {
        state.value.push({ ...action.payload, quantity: 1 })
      }
    },
    increaseQuantity: (state, action) => {
      let index = state.value.findIndex(item => item.id === action.payload);
      let _quantity = state.value[index].quantity;
      let updateObject = {
        ...state.value[index],
        quantity: _quantity + 1
      }
      state.value[index] = updateObject
    },

    decreaseQuantity: (state, action) => {
      let index = state.value.findIndex(item => item.id === action.payload);
      let _quantity = state.value[index].quantity;
      _quantity = _quantity - 1;
      if (_quantity < 1) {
        return;
      }
      let updateObject = {
        ...state.value[index],
        quantity: _quantity
      }
      state.value[index] = updateObject
    },

    updateQuantity: (state, action) => {
      let index = state.value.findIndex(item => item.id === action.payload.id);
      let updateObject = {
        ...state.value[index],
        quantity: action.payload.quantity
      }
      state.value[index] = updateObject
    },

    removeItem: (state, action) => {
      let newState = state.value.filter(item => item.id !== action.payload);
      state.value = [...newState];
    },

    clearCart: (state) => {
      state.value = []
    }
  },
});

export const { addToCart, increaseQuantity, updateQuantity, decreaseQuantity, removeItem, clearCart } = cartSlice.actions;

export const selectCart = state => state.cart.value;

export default cartSlice.reducer;
