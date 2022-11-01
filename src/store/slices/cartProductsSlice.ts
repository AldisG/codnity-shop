import { createSlice } from '@reduxjs/toolkit';
import { CartItem } from '../types';

const initialState = {
  userCart: [] as CartItem[] | [],
};

const cartProductsSlice = createSlice({
  // rename it as slice
  name: 'cartProductsSlice',
  initialState,
  reducers: {
    addItemsToCart: (
      { userCart }: { userCart: CartItem[] },
      { payload }: { payload: CartItem }
    ) => {
      // later add: if item exists, update amount only
      console.log('user cart: ', userCart);
      console.log('user payload: ', payload);
      userCart.push(payload);
    },
  },
});

export const { addItemsToCart } = cartProductsSlice.actions;
export default cartProductsSlice.reducer;
