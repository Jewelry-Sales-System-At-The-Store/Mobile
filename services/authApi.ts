
import { PaggingRequest, PaggingRespone } from '~/types/base.type';
import { Jewelry } from '../types/jewelry.type';
import { JewelryType, SignInRequest } from '../types/user.type';
import { baseQueryWithReauth } from './baseApi';
import { createApi } from '@reduxjs/toolkit/query/react';
import { SignInRespone } from '~/types/auth.type';

export const authApi = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ['auth'],
    refetchOnMountOrArgChange: true,
    endpoints: (builder) => ({
        
        signIn: builder.mutation<SignInRespone, SignInRequest>({
            query: () => ({
                url: `api/User/CustomerLogin`,
                method: 'POST',
            }),
        }),
        
    }),
    reducerPath: 'authApi',
});

export default authApi;
