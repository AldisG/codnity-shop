import { createSlice } from '@reduxjs/toolkit';
import { categories } from '../../components/utility/categories';
import { StoreItemsFetchCall, StoreItemType } from '../types';

const initialState = {
  storeProductList: {
    data: [] as StoreItemType[],
    isError: false,
    isLoading: true,
    isSuccess: false,
    isFetching: true,
  } as StoreItemsFetchCall,
  filteredData: [] as StoreItemType[]
};

const storeProductsSlice = createSlice({
  name: 'storeProductsSlice',
  initialState,
  reducers: {
    setStoreProducts: (
      store,
      {
        payload,
      }: {
        payload: StoreItemsFetchCall;
      }
    ) => {
      store.storeProductList = payload;
    },
    changeActiveCategory: (state, { payload }: { payload: string }) => {
      const changeStoreState = (payload: string) => {
        // const storeCopy = [...state.storeProductList.data] // doesnt reset, need a safe, resettable copy
        state.filteredData = state.storeProductList.data.filter((item) => item.category === payload)
      };
      switch (payload) {
        case categories[0].name:
          changeStoreState(categories[0].label);
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
  },
});

export const { setStoreProducts, changeActiveCategory } =
  storeProductsSlice.actions;
export default storeProductsSlice.reducer;
