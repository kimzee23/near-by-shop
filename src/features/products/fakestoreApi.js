import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fakestoreApi = createApi({
    reducerPath: 'fakestoreApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_FAKESTORE_BASE_URL }),
    endpoints: (builder) => ({
        getFakeProducts: builder.query({
            query: () => '/products',
        }),
        getFakeProduct: builder.query({
            query: (id) => `/products/${id}`,
        }),
    }),
});

export const { useGetFakeProductsQuery, useGetFakeProductQuery } = fakestoreApi;
