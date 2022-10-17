import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import openModal from '../slices/openModalSlice';
import storeApi from '../services/storeApiCalls';
import executeStoreCall from '../slices/executeStoreCallsSlice';

const store = configureStore({
  reducer: {
    [storeApi.reducerPath]: storeApi.reducer,
    openModal: openModal,
    executeStoreCall: executeStoreCall,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeApi.middleware),
});
setupListeners(store.dispatch);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type ApiDispatch = typeof store.dispatch;
