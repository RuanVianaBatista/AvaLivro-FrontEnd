import { useState } from 'react'
import type { FormEvent } from 'react'

type RecoverPasswordPageProps = {
  onBack: () => void
}

export default function RecoverPasswordPage({ onBack }: RecoverPasswordPageProps) {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (email.trim()) {
      setSent(true)
    }
  }

  return (
    <div className="screen recover-screen">
      <div className="card">
        <h1>Recuperar senha</h1>
        <p>Informe seu e-mail para receber o link de recuperação.</p>

        {!sent ? (
          <form onSubmit={handleSubmit}>
            <label>
              E-mail
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="seu@email.com"
              />
            </label>

            <button type="submit">Enviar</button>
          </form>
        ) : (
          <p className="success-message">Link enviado! Verifique seu e-mail.</p>
        )}

        <button type="button" className="secondary" onClick={onBack}>
          Voltar
        </button>
      </div>
    </div>
  )
}
