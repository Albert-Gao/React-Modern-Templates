import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { counterSlice } from './slices/counterSlice'
import { Provider } from 'react-redux'
import { FC } from 'react'
export * from './slices/counterSlice'

const reduxStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
})

type RootState = ReturnType<typeof reduxStore.getState>
type AppDispatch = typeof reduxStore.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const ReduxProvider: FC = ({ children }) => (
  <Provider store={reduxStore}>{children}</Provider>
)
