import styled from 'styled-components'
import { Card, PrimaryButton, Screen } from '../Login/styles'

export const RecoverScreen = styled(Screen)``

export const RecoverCard = styled(Card)`
  p {
    margin: 0;
    color: #cccccc;
  }
`

export const Form = styled.form``

export const SubmitButton = styled(PrimaryButton)``

export const SuccessMessage = styled.p`
  margin-top: 20px;
  color: #bbbbbb;
`

export const SecondaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 22px;
  padding: 14px 18px;
  border-radius: 14px;
  cursor: pointer;
  font-weight: 700;
  background: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
`
