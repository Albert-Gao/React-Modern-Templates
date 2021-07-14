import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { Provider } from 'react-redux'
import type { FC } from 'react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { counterSlice } from './slices/counterSlice'
import { animeQuotesAPI } from '~/apis'
export * from './slices/counterSlice'

const reduxStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    [animeQuotesAPI.reducerPath]: animeQuotesAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animeQuotesAPI.middleware),
})

type RootState = ReturnType<typeof reduxStore.getState>
type AppDispatch = typeof reduxStore.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const ReduxProvider: FC = ({ children }) => (
  <Provider store={reduxStore}>{children}</Provider>
)

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// enable this if you have the need
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(reduxStore.dispatch)
