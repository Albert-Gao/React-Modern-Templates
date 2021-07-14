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
        onClick={() => {
          increment(2)
        }}
      >
        Increment
      </button>
    </>
  )
}
