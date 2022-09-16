import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const testAPI = createApi({
  reducerPath: 'testAPI',
  baseQuery: fetchBaseQuery({
    // link to the base API is located in package.json => "proxy"
    // In case of CORS error
    baseUrl: 'http link to...'
  }),

  endpoints: (builder) => ({
    getsomeData: builder.query({
      query: (searchFor: string) => `my API link and ${searchFor} that i pass in` as string
    }),
    getAnyData: builder.query({
      query: () => 'simpleApiCall'
    }),
  })
})

export const { reducer } = testAPI
export const { useGetsomeDataQuery, useGetAnyDataQuery } = testAPI
export default testAPI