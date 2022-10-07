import { AuthProvider } from './auth-context'
import { ToastProvider } from './toast-context'
import { RperProvider } from './rper-context'

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>
        <RperProvider>{children}</RperProvider>
      </ToastProvider>
    </AuthProvider>
  )
}

export default AppProvider
