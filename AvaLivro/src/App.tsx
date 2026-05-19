import { useState } from 'react'
import styled from 'styled-components'
import LoginPage from './pages/Login'
import SearchBooksPage from './pages/PesquisaLivros'
import RecoverPasswordPage from './pages/RecuperarSenha'

type View = 'login' | 'search' | 'recover'

const AppContainer = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`

function App() {
  const [view, setView] = useState<View>('login')

  return (
    <AppContainer>
      {view === 'login' && (
        <LoginPage
          onLogin={() => setView('search')}
          onRecover={() => setView('recover')}
        />
      )}

      {view === 'search' && (
        <SearchBooksPage onBack={() => setView('login')} />
      )}

      {view === 'recover' && (
        <RecoverPasswordPage onBack={() => setView('login')} />
      )}
    </AppContainer>
  )
}

export default App
