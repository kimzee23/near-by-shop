import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../features/products/productApi';
import { fakestoreApi } from '../features/products/fakestoreApi';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [fakestoreApi.reducerPath]: fakestoreApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(productsApi.middleware)
            .concat(fakestoreApi.middleware),
});
