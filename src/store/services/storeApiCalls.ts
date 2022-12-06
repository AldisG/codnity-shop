import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const storeApi = createApi({
  reducerPath: 'fake_items',
  baseQuery: fetchBaseQuery({
    // link to the base API is located in package.json => "proxy"
    // In case of CORS error
    baseUrl: 'https://fakestoreapi.com/',
  }),

  endpoints: (builder) => ({
    getStoreItems: builder.query({
      query: () => 'products',
    }),
    getProductInfo: builder.query({
      query: (searchId: string | number) => `products/${searchId}`,
    }),
  }),
});

export const { reducer } = storeApi;
export const { useGetStoreItemsQuery, useGetProductInfoQuery } = storeApi;
export default storeApi;
