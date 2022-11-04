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
      userCart.push(payload);
    },
    removeAnItem: (
      { userCart }: { userCart: CartItem[] },
      { payload }: { payload: number }
    ) => {
      console.log('userCart', userCart);
      console.log('payload', payload);
      userCart = userCart.filter((item) => item.id !== payload);
    },
  },
});

export const { addItemsToCart, removeAnItem } = cartProductsSlice.actions;
export default cartProductsSlice.reducer;
