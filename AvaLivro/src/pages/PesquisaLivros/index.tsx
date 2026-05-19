import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  BookAuthor,
  BookItem,
  BookList,
  BookTitle,
  EmptyState,
  ResultsSection,
  SearchButton,
  SearchCard,
  SearchForm,
  SearchScreen,
  SecondaryButton,
} from './styles'

type Book = {
  id: number
  title: string
  author: string
}

type SearchBooksPageProps = {
  onBack: () => void
}

const books: Book[] = [
  { id: 1, title: 'O Pequeno Príncipe', author: 'Antoine de Saint-Exupéry' },
  { id: 2, title: 'Dom Casmurro', author: 'Machado de Assis' },
  { id: 3, title: 'Grande Sertão: Veredas', author: 'João Guimarães Rosa' },
  { id: 4, title: 'Memórias Póstumas de Brás Cubas', author: 'Machado de Assis' },
  { id: 5, title: 'Capitães da Areia', author: 'Jorge Amado' },
]

export default function SearchBooksPage({ onBack }: SearchBooksPageProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Book[]>([])
  const [searched, setSearched] = useState(false)

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSearched(true)

    const normalized = query.trim().toLowerCase()
    if (!normalized) {
      setResults([])
      return
    }

    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(normalized) ||
      book.author.toLowerCase().includes(normalized),
    )

    setResults(filtered)
  }

  return (
    <SearchScreen>
      <SearchCard>
        <h1>Pesquisar livros</h1>

        <SearchForm onSubmit={handleSearch}>
          <label>
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ex: Drac..."
            />
          </label>

          <SearchButton type="submit">Pesquisar</SearchButton>
        </SearchForm>

        {searched && (
          <ResultsSection>
            {results.length > 0 ? (
              <BookList>
                {results.map((book) => (
                  <BookItem key={book.id}>
                    <BookTitle>{book.title}</BookTitle>
                    <BookAuthor>{book.author}</BookAuthor>
                  </BookItem>
                ))}
              </BookList>
            ) : (
              <EmptyState>Nenhum livro encontrado.</EmptyState>
            )}
          </ResultsSection>
        )}

        <SecondaryButton type="button" onClick={onBack}>
          Voltar
        </SecondaryButton>
      </SearchCard>
    </SearchScreen>
  )
}
