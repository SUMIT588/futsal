import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import httpConfig from '../../common/httpconfig/http_config';

export const authenticationApis = createApi({
  reducerPath: 'authenticationApis',
  baseQuery: fetchBaseQuery({
    baseUrl: httpConfig.BASE_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (value) => ({
        url: 'login/',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: value,
      }),
    }),

  }),
});

export const { useLoginMutation } = authenticationApis;
