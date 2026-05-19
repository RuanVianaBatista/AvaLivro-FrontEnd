import { useState } from 'react'
import type { FormEvent } from 'react'

type LoginPageProps = {
  onLogin: () => void
  onRecover: () => void
}

export default function LoginPage({ onLogin, onRecover }: LoginPageProps) {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onLogin()
  }

  return (
    <div className="screen login-screen">
      <div className="card">
        <h1>AvaLivro</h1>
        <p>Entre para pesquisar livros. O tema é preto e branco.</p>

        <form onSubmit={handleSubmit}>
          <label>
            Usuário
            <input
              type="text"
              value={user}
              onChange={(event) => setUser(event.target.value)}
              placeholder="Digite seu usuário"
            />
          </label>

          <label>
            Senha
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Digite sua senha"
            />
          </label>

          <button type="submit">Entrar</button>
        </form>

        <div className="page-actions">
          <button type="button" className="link-button" onClick={onRecover}>
            Esqueci minha senha
          </button>
        </div>
      </div>
    </div>
  )
}
