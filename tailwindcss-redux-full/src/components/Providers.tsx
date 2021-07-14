import { ReactQueryClientProvider } from '~/components/providers/ReactQueryClientProvider'
import { ReduxProvider } from '~/redux'

export const Providers: React.FC = ({ children }) => {
  return (
    <ReactQueryClientProvider>
      <ReduxProvider>{children}</ReduxProvider>
    </ReactQueryClientProvider>
  )
}
