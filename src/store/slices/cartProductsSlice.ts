import { createSlice } from '@reduxjs/toolkit';
import { CartItem } from '../types';

const initialState = {
  userCart: [] as CartItem[],
};

const cartProductsSlice = createSlice({
  name: 'cartProductsSlice',
  initialState,
  reducers: {
    addItemsToCart: (state, { payload }: { payload: CartItem }) => {
      if (state.userCart) {
        const itemIndexResult = state.userCart.findIndex(
          (item) => item.id === payload.id
        );
        const itemFound = itemIndexResult >= 0;
        if (!itemFound) {
          state.userCart.push(payload);
          return;
        }
        state.userCart[itemIndexResult].amount += payload.amount;
      }
    },
    removeAnItem: (state, { payload }: { payload: number }) => {
      if (state.userCart) {
        state.userCart = state.userCart.filter((item) => item.id !== payload);
      }
    },
    removeAllItems: (state) => {
      if (state.userCart.length > 0) {
        state.userCart = [];
      }
    },
  },
});

export const { addItemsToCart, removeAnItem, removeAllItems } = cartProductsSlice.actions;
export default cartProductsSlice.reducer;
