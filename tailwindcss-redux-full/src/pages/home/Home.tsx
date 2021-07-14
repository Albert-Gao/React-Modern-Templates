import { useAppSelector, useAppDispatch, counterSlice } from '~/redux'

export const Home = () => {
  const dispatch = useAppDispatch()
  const value = useAppSelector((state) => state.counter.value)

  return (
    <>
      <div>Home Page</div>

      <span>{value}</span>
      <button
        className="p-2 m-1 bg-indigo-100 rounded"
        onClick={() => {
          dispatch(counterSlice.actions.increment())
        }}
      >
        Increment!
      </button>
      <button
        className="p-2 m-1 bg-indigo-100 rounded"
        onClick={() => {
          dispatch(counterSlice.actions.decrement())
        }}
      >
        Decrement!
      </button>
    </>
  )
}
