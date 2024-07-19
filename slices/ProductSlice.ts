// slices/ProductSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '~/store';
import { Product } from '~/types/product.type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Jewelry } from '~/types/jewelry.type';

export interface ProductState {
  favorites: Jewelry[];
  //details: Jewelry;
}

const initialState: ProductState = {
  favorites: [],
 // details: { },
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Jewelry>) => {
      const index = state.favorites.findIndex((i) => i.jewelryId === action.payload.jewelryId);
      if (index === -1) {
        state.favorites.push(action.payload);
      } else {
        state.favorites.splice(index, 1);
      }
    },
    setFavorites: (state, action: PayloadAction<Jewelry[]>) => {
      state.favorites = action.payload;
    },
    setDetails: (state, action: PayloadAction<Jewelry>) => {
     // state.details = action.payload;
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
