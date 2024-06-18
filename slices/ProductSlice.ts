import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Product } from '~/types/product.type';

export interface ProductState {
  favotites: Product[];
}

const initialState: ProductState = {
  favotites: [],
};

export const ProductState = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Product>) => {
      const index = state.favotites.findIndex((i) => i.id === action.payload.id);
      if (index === -1) {
        state.favotites.push(action.payload);
      } else {
        state.favotites.splice(index, 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleFavorite } = ProductState.actions;

export default ProductState.reducer;
