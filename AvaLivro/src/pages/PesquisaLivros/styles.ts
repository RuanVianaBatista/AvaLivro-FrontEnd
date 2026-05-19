import styled from 'styled-components'
import { Card, PrimaryButton, Screen } from '../Login/styles'

export const SearchScreen = styled(Screen)``

export const SearchCard = styled(Card)`
  p {
    margin: 0;
    color: #cccccc;
  }
`

export const SearchForm = styled.form`
  margin-top: 24px;
`

export const SearchButton = styled(PrimaryButton)``

export const ResultsSection = styled.div`
  margin-top: 24px;
`

export const BookList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 14px 0 0;
  display: grid;
  gap: 14px;
`

export const BookItem = styled.li`
  padding: 18px;
  border-radius: 18px;
  background: #0a0a0a;
  border: 1px solid #292929;
`

export const BookTitle = styled.p`
  margin: 0 0 6px;
  font-size: 1rem;
  font-weight: 700;
`

export const BookAuthor = styled.p`
  margin: 0;
  color: #aaaaaa;
  font-size: 0.95rem;
`

export const EmptyState = styled.p`
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
