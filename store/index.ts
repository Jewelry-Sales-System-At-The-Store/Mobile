// store.ts
import { configureStore } from '@reduxjs/toolkit';
import jewelryApi from '~/services/jewelryApi';
import ProductSlice from '~/slices/ProductSlice';

export const store = configureStore({
  reducer: { productSlice: ProductSlice ,
     [jewelryApi.reducerPath]: jewelryApi.reducer,},
     middleware:(getDefaultMiddleWare) => getDefaultMiddleWare().concat(jewelryApi.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
