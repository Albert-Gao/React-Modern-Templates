import { NavBar } from '~/components/NavBar'
import { useCounterState } from '~/state'

export const Home = () => {
  const counter = useCounterState.use.counter()
  const increment = useCounterState.use.increment()

  return (
    <>
      <NavBar />
      <div>Home Page</div>

      <span>{counter}</span>
      <button
        className="p-2 m-1 bg-indigo-100 rounded"
        onClick={() => {
          increment(2)
        }}
      >
        Increment!
      </button>
    </>
  )
}
