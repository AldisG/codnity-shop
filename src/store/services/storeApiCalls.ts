import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const storeApi = createApi({
  reducerPath: 'fake_items',
  baseQuery: fetchBaseQuery({
    // link to the base API is located in package.json => "proxy"
    // In case of CORS error
    baseUrl: 'https://fakestoreapi.com/',
  }),

  endpoints: (builder) => ({
    // getsomeData: builder.query({
    //   query: (searchFor: string) =>
    //     `my API link and ${searchFor} that i pass in` as string,
    // }),
    getStoreItems: builder.query({
      query: () => 'products',
    }),
  }),
});

export const { reducer } = storeApi;
export const { useGetStoreItemsQuery } = storeApi;
export default storeApi;
