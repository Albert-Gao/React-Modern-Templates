import { QueryClientProvider } from '~/utils/reactQuery'

export const Providers: React.FC = ({ children }) => {
  return <QueryClientProvider>{children}</QueryClientProvider>
}
