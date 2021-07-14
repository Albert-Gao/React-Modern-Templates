import { Button } from '@chakra-ui/react'
import { useCounterState } from '~/state'

export const Home = () => {
  const counter = useCounterState.use.counter()
  const increment = useCounterState.use.increment()

  return (
    <>
      <div>Home Page</div>

      <span>{counter}</span>
      <Button
        onClick={() => {
          increment(2)
        }}
      >
        Increment!
      </Button>
    </>
  )
}
