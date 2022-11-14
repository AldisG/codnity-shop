import { createSlice } from '@reduxjs/toolkit';
import { FilterPayload, InitialStoreCall, StoreFilterTypes, StoreItemType } from '../types';
import { decideOrder, determineCategory } from './storeProductsFunctions';

const initialState = {
  data: [] as StoreItemType[], // serves as fallback
  isError: false,
  isLoading: true,
  isSuccess: false,
  isFetching: true,
  filteredData: [] as StoreItemType[],
  isDirty: false,
  filterStatus: {
    category: 'all',
    order: 'default',
    priceRange: 'all',
  },
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
    handleFiltering: (state, action: FilterPayload) => {
      const updateFilters = (type: StoreFilterTypes, value: string) => {
        state.filterStatus = { ...state.filterStatus, [type]: value };

        switch (type) {
          case 'category':
            const changeStoreState = (category: string) => {
              if (category === 'all') {
                state.filteredData = state.data;
                return
              }
              state.filteredData = state.data.filter(
                (item) => item.category === category
              );
            };
            determineCategory(value, changeStoreState);
            break;

          case 'priceRange':
            if (value === 'all' || !value) {
              state.filteredData = state.data;
              return;
            }
            const [from, to] = value.split('-').map((part) => Number(part));
            state.filteredData = state.filteredData.filter((item) => {
              return item.price >= from && item.price <= to;
            });
            break;

          case 'order':
            const [type, orderDirection] = value.split('/');
            if (orderDirection === 'high') {
              state.filteredData = state.filteredData
                .sort((a, b) => decideOrder(type, a, b))
                .reverse();
            } else {
              state.filteredData = state.filteredData.sort((a, b) =>
                decideOrder(type, a, b)
              );
            }
            break;

          default:
            break;
        }
      };

      const {
        payload: { type, value },
      } = action;
      switch (type) {
        case 'category':
          updateFilters(type, value);
          // should call relevant filter data function here
          break;
        case 'order':
          updateFilters(type, value);
          // should call relevant filter data function here
          break;
        case 'priceRange':
          updateFilters(type, value);
          // should call relevant filter data function here
          break;
        default:
          break;
      }
    },
  },
});

export const {
  initiateStoreCall,
  handleFiltering,
} = storeProductsSlice.actions;
export default storeProductsSlice.reducer;
