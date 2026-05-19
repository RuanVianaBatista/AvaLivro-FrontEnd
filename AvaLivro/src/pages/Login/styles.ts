import styled from 'styled-components'

export const Screen = styled.div`
  width: 100%;
  max-width: 480px;
`

export const Card = styled.div`

  h1 {
    margin: 0 0 12px;
    font-size: clamp(1rem, 2vw, 1.6rem);
    text-align: center;
  }

  label {
    display: block;
    margin-top: 10px;
    color: #dddddd;
    font-size: 0.95rem;
  }

  input {
    width: 100%;
    margin-top: 10px;
    padding: 14px 16px;
    border-radius: 14px;
    border: 1px solid #3a3a3a;
    background: #0b0b0b;
    color: #ffffff;
  }

  input::placeholder {
    color: #666666;
  }

  input:focus {
    border-color: #ffffff;
    outline: none;
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.08);
  }
`

export const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 22px;
  padding: 14px 18px;
  border-radius: 14px;
  cursor: pointer;
  font-weight: 700;
  border: none;
  background: #ffffff;
  color: #000000;
`

export const PageActions = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
`

export const LinkButton = styled.button`
  background: transparent;
  border: none;
  color: #ffffff;
  text-decoration: underline;
  cursor: pointer;
  padding: 0;
  font: inherit;
`

