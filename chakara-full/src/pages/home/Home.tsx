import { Button, Text } from '@chakra-ui/react'
import { NavBar } from '~/components/NavBar'
import { useCounterState } from '~/state'

export const Home = () => {
  const counter = useCounterState.use.counter()
  const increment = useCounterState.use.increment()

  return (
    <>
      <NavBar />
      <Text>Home Page</Text>

      <span>{counter}</span>
      <Button
        p={2}
        m={1}
        colorScheme="teal"
        onClick={() => {
          increment(2)
        }}
      >
        Increment!
      </Button>
    </>
  )
}
