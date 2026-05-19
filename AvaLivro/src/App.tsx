import { useState } from 'react'
import LoginPage from './pages/Login'
import SearchBooksPage from './pages/PesquisaLivros'
import RecoverPasswordPage from './pages/RecuperarSenha'

type View = 'login' | 'search' | 'recover'

function App() {
  const [view, setView] = useState<View>('login')

  return (
    <main id="app">
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
    </main>
  )
}

export default App
