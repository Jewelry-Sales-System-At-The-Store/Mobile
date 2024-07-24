// slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '~/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Jewelry } from '~/types/jewelry.type';
import { JWTDecode, SignInRespone } from '~/types/auth.type';
import { jwtDecode } from 'jwt-decode';
import { saveToken } from '~/utils/auth';

export interface AuthState {
    token:JWTDecode|undefined
}


const initialState: AuthState = {
    token:undefined
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setSignInResponse: (state, action: PayloadAction<SignInRespone>) => {
      saveToken(action.payload);
      state.token = jwtDecode<JWTDecode>(action.payload.token);
    },
   
  },
});

export const { setSignInResponse } = authSlice.actions;

export default authSlice.reducer;


