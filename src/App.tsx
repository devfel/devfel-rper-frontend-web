import Router from './routes'
import AppProvider from './contexts'
import GlobalStyle from './styles/global'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppProvider>
        <Router />
      </AppProvider>
    </>
  )
}

export default App
