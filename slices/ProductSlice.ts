// slices/ProductSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '~/store';
import { Product } from '~/types/product.type';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ProductState {
  favorites: Product[];
  details: Product;
}

const initialState: ProductState = {
  favorites: [],
  details: {
    id: 0,
    imgs: [],
    price: 152,
    title: '',
  },
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Product>) => {
      const index = state.favorites.findIndex((i) => i.id === action.payload.id);
      if (index === -1) {
        state.favorites.push(action.payload);
      } else {
        state.favorites.splice(index, 1);
      }
    },
    setFavorites: (state, action: PayloadAction<Product[]>) => {
      state.favorites = action.payload;
    },
    setDetails: (state, action: PayloadAction<Product>) => {
      state.details = action.payload;
    },
  },
});

export const { toggleFavorite, setFavorites, setDetails } = productSlice.actions;

export default productSlice.reducer;

export const loadFavorites = () => async (dispatch: AppDispatch) => {
  try {
    const favoritesData = await AsyncStorage.getItem('favorites');
    if (favoritesData) {
      const favorites = JSON.parse(favoritesData);
      dispatch(setFavorites(favorites));
    }
  } catch (error) {
    console.error('Failed to load favorites from storage:', error);
  }
};

export const saveFavorites = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  try {
    const state = getState();
    await AsyncStorage.setItem('favorites', JSON.stringify(state.productSlice.favorites));
  } catch (error) {
    console.error('Failed to save favorites to storage:', error);
  }
};
