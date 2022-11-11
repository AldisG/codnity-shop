import { createSlice } from '@reduxjs/toolkit';
import { categories } from '../../components/utility/categories';
import { useGetStoreItemsQuery } from '../services/storeApiCalls';
import { StoreItemType } from '../types';

type InitialStoreCall = {
  data: StoreItemType[];
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isFetching: boolean;
};

const initialState = {
  data: [] as StoreItemType[], // serves as fallback
  isError: false,
  isLoading: true,
  isSuccess: false,
  isFetching: true,
  filteredData: [] as StoreItemType[],
  isDirty: false,
};

const storeProductsSlice = createSlice({
  name: 'storeProductsSlice',
  initialState,
  reducers: {
    initiateStoreCall: (state, { payload }: { payload: InitialStoreCall }) => {
      state.data = payload.data ? payload.data : [];
      state.filteredData = payload.data ? payload.data : [];

      state.isError = payload.isError;
      state.isLoading = payload.isLoading;
      state.isSuccess = payload.isSuccess;
      state.isFetching = payload.isFetching;
    },

    changeDisplayedItemsByCategory: (
      state,
      { payload }: { payload: string }
    ) => {
      const changeStoreState = (payload: string) => {
        // const storeCopy = [...state.data] // doesnt reset, need a safe, resettable copy
        state.isDirty = true;
        state.filteredData = state.data.filter(
          (item) => item.category === payload
        );
      };
      switch (payload) {
        case categories[0].name:
          // set it to original items array
          state.filteredData = state.data;
          state.isDirty = false;
          break;
        case categories[1].name:
          changeStoreState(categories[1].label);
          break;
        case categories[2].name:
          changeStoreState(categories[2].label);
          break;
        case categories[3].name:
          changeStoreState(categories[3].label);
          break;
        case categories[4].name:
          changeStoreState(categories[4].label);
          break;
        default:
          break;
      }
    },
    setProductPriceRange: (state, { payload }: { payload: string }) => {
      console.log('payload: ', payload);
      const [from, to] = payload.split('/').map((value) => Number(value));
      // if dirty, show what data, filtered or all?
      if (payload === 'all') {
        state.filteredData = state.data;
      }

      state.filteredData = state.data.filter((item) => {
        return item.price <= from && item.price <= to;
      });
    },
  },
});

export const {
  initiateStoreCall,
  changeDisplayedItemsByCategory,
  setProductPriceRange,
} = storeProductsSlice.actions;
export default storeProductsSlice.reducer;
