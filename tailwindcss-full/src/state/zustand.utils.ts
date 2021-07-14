/* eslint-disable @typescript-eslint/no-explicit-any */
import create, { StateCreator, StoreApi } from 'zustand'
import produce from 'immer'
import { pipe, clone } from 'ramda'
import { createSelectorFunctions } from 'auto-zustand-selectors-hook'

const log = (config: any) => (set: any, get: any, api: any) =>
  config(
    (args: any) => {
      console.log('[Zustand Applying]', args)
      set(args)

      const state = clone(get())

      // remove function
      for (const key in state) {
        if (typeof state[key] === 'function') {
          delete state[key]
        }
      }

      console.log('[Zustand New State]', state)
    },
    get,
    api,
  )

const immer = (config: any) => (set: any, get: any, api: any) =>
  config((fn: any) => set(produce(fn)), get, api)

const isDev = process.env.NODE_ENV === 'development'

// eslint-disable-next-line @typescript-eslint/ban-types
export function createStore<StoreType extends object>(
  createState: StateCreator<StoreType> | StoreApi<StoreType>,
) {
  const store = isDev
    ? pipe(log, immer, create)(createState)
    : pipe(immer, create)(createState)

  return createSelectorFunctions<StoreType>(store)
}
