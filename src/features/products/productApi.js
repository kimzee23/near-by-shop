import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({

        getProducts: builder.query({
            query: () => 'products',
        }),

        getProductById: builder.query({
            query: (id) => `products/${id}`,
        }),

        getProductsByCategory: builder.query({
            query: (category) => `products/category/${category}`,
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useGetProductsByCategoryQuery,
} = productsApi;
