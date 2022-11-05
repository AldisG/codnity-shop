import { createSlice } from '@reduxjs/toolkit';
import { StoreItemsFetchCall } from '../types';

const initialState = {
  storeProductList: {
    data: [],
    isError: false,
    isLoading: true,
    isSuccess: false,
    isFetching: true,
  } as StoreItemsFetchCall,
};

const storeProductsSlice = createSlice({
  name: 'storeProductsSlice',
  initialState,
  reducers: {
    setStoreProducts: (store, { payload }: {
      payload: StoreItemsFetchCall
    }) => {
      store.storeProductList = payload;
    },
  },
});

export const { setStoreProducts } = storeProductsSlice.actions;
export default storeProductsSlice.reducer;
