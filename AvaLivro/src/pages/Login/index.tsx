import { useState } from "react"
import type { FormEvent } from "react"
import { Card, LinkButton, PageActions, PrimaryButton, Screen } from './styles'

type LoginPageProps = {
  onLogin: () => void
  onRecover: () => void
}

export default function LoginPage({
  onLogin,
  onRecover
}: LoginPageProps) {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {

    event.preventDefault()

    if (user.trim() === "" || password.trim() === "") {
      alert("Preencha todos os campos")
      return
    }
    onLogin()
  }

  return (
    <Screen>
      <Card>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>

          <label>
            

            <input
              type="text"
              value={user}
              onChange={(event) => setUser(event.target.value)}
              placeholder="Digite seu email"
            />
          </label>

          <label>
            

            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Digite sua senha"
            />
          </label>

          <PrimaryButton type="submit">
            Entrar
          </PrimaryButton>

        </form>

        <PageActions>

          <LinkButton
            type="button"
            onClick={onRecover}
          >
            Cadastro
          </LinkButton>

        </PageActions>
      </Card>
    </Screen>
  )
}
