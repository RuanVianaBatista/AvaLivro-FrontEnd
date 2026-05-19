import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  Form,
  RecoverCard,
  RecoverScreen,
  SecondaryButton,
  SubmitButton,
  SuccessMessage,
} from './styles'

type RecoverPasswordPageProps = {
  onBack: () => void
}

export default function RecoverPasswordPage({ onBack }: RecoverPasswordPageProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [registered, setRegistered] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const hasValidFields =
      name.trim() && email.trim() && password.trim() && confirmPassword.trim()

    if (!hasValidFields) {
      alert('Preencha todos os campos')
      return
    }

    if (password !== confirmPassword) {
      alert('As senhas nao coincidem')
      return
    }

    setRegistered(true)
  }

  return (
    <RecoverScreen>
      <RecoverCard>
        <h1>Cadastro</h1>
        

        {!registered ? (
          <Form onSubmit={handleSubmit}>
            <label>
              
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Seu nome"
              />
            </label>

            <label>
              
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="@email.com"
              />
            </label>

            <label>
              
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Crie uma senha"
              />
            </label>

            <label>
              
              <input
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="Repita sua senha"
              />
            </label>

            <SubmitButton type="submit">Cadastrar</SubmitButton>
          </Form>
        ) : (
          <SuccessMessage>Conta criada com sucesso!</SuccessMessage>
        )}

        <SecondaryButton type="button" onClick={onBack}>
          Voltar
        </SecondaryButton>
      </RecoverCard>
    </RecoverScreen>
  )
}
