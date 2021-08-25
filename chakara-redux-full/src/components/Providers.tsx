import { QueryClientProvider } from '~/utils/reactQuery'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '~/theme/theme'
import { Provider } from 'react-redux'
import { reduxStore } from '~/redux'

export const Providers: React.FC = ({ children }) => {
  return (
    <Provider store={reduxStore}>
      <QueryClientProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </QueryClientProvider>
    </Provider>
  )
}
