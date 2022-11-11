import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import openModal from '../slices/openModalSlice';
import storeApi from '../services/storeApiCalls';
// import executeStoreCall from '../slices/executeStoreCallsSlice';
import cartProductsSlice from '../slices/cartProductsSlice';
import storeProductsSlice from '../slices/storeProductsSlice';

const store = configureStore({
  reducer: {
    [storeApi.reducerPath]: storeApi.reducer,
    openModal: openModal,
    // executeStoreCall: executeStoreCall,
    cartProductsSlice: cartProductsSlice,
    storeProductsSlice: storeProductsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeApi.middleware),
});
setupListeners(store.dispatch);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type ApiDispatch = typeof store.dispatch;
