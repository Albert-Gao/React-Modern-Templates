import { createStore } from '../zustand.utils'

export interface IListStatus {
  counter: number

  increment: (by: number) => void
}

export const useCounterState = createStore<IListStatus>((set, get) => ({
  counter: 0,

  increment: (by) => {
    set((prev) => {
      prev.counter += by
    })
  },
}))
