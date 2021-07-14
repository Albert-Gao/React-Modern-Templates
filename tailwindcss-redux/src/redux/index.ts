import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { counterSlice } from './slices/counterSlice'

export const reduxStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
})

type RootState = ReturnType<typeof reduxStore.getState>
type AppDispatch = typeof reduxStore.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
