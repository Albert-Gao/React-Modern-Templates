import { Button } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '~/redux'
import { counterSlice } from '~/redux/slices/counterSlice'

export const Home = () => {
  const dispatch = useAppDispatch()
  const value = useAppSelector((state) => state.counter.value)
  return (
    <>
      <div>Home Page</div>

      <span>{value}</span>
      <Button
        onClick={() => {
          dispatch(counterSlice.actions.increment())
        }}
      >
        Increment!
      </Button>
    </>
  )
}
