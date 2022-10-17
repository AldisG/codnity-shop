import { createSlice } from '@reduxjs/toolkit';
import { StoreItemType } from '../../components/utility/types';
import { useGetStoreItemsQuery } from '../services/storeApiCalls';

const initialState = {
  data: [] as undefined | StoreItemType[],
  category: [''],
  error: '',
  isLoading: false,
  isError: false,
  isFetching: false,
  isSuccess: false,
};

const executeStoreCall = createSlice({
  name: 'executeStoreCallsSlice',
  initialState,
  reducers: {
    initiateStoreCall: (state, action) => {
      const { data, error, isLoading, isError, isFetching, isSuccess } =
        useGetStoreItemsQuery('');

      state.data = data ? data : [];

      state.category = data?.length
        ? data?.map((item: StoreItemType) => item.category)
        : ([''] as string[]);
    },
  },
});

export const { initiateStoreCall } = executeStoreCall.actions;
export default executeStoreCall.reducer;
