// store.ts
import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from '~/slices/ProductSlice';

export const store = configureStore({
  reducer: { productSlice: ProductSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
