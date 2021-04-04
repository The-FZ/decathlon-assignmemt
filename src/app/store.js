import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/cartSlice';
import appSlice from '../features/appSlice';

export default configureStore({
  reducer: {
    app: appSlice,
    cart: cartSlice,
  },
});
