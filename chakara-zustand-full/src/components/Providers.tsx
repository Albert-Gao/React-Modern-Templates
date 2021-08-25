import { QueryClientProvider } from '~/utils/reactQuery'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '~/theme/theme'

export const Providers: React.FC = ({ children }) => {
  return (
    <QueryClientProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </QueryClientProvider>
  )
}
