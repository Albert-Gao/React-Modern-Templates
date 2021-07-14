import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from './apis.constants'
import type { Quote } from './modelTypes/Quote'

export const animeQuotesAPI = createApi({
  reducerPath: 'animeQuotesAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAnimeQuotes: builder.query<Quote[], void>({
      query: () => '/quotes',
    }),
  }),
})
