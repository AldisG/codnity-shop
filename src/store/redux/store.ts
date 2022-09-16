import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import testSlice from '../slices/testSlice';
import testAPI from '../services/storeApiCalls';

const store = configureStore({
  reducer: {
    [testAPI.reducerPath]: testAPI.reducer,
    testSlice: testSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(testAPI.middleware)
});
setupListeners(store.dispatch)

export default store;
export type RootState = ReturnType<typeof store.getState>
export type ApiDispatch = typeof store.dispatch
