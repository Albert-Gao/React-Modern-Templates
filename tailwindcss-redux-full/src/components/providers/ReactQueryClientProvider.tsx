import type { FC } from 'react'
import {
  QueryCache,
  QueryClient,
  QueryClientProvider as RQQueryClientProvider,
} from 'react-query'

const queryCache = new QueryCache()

const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      staleTime: 300, // 300 ms
      retry: 1,
      retryOnMount: true,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
    mutations: {},
  },
})

export const ReactQueryClientProvider: FC = ({ children }) => (
  <RQQueryClientProvider client={queryClient}>{children}</RQQueryClientProvider>
)
