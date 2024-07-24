import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { KEYS } from '~/enums';
import { SignInRespone } from '~/types/auth.type';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://10.0.2.2:5188',
  prepareHeaders: async (headers, { getState }) => {
    const token = await AsyncStorage.getItem(KEYS.ACCESS_TOKEN);
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let response = await baseQuery(args, api, extraOptions);
  if (response.error && (response.error as FetchBaseQueryError).status === 401) {
    // token expired
    
  }

  return response;
};
