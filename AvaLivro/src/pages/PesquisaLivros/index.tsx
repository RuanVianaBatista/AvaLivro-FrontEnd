import { useState } from 'react'
import type { FormEvent } from 'react'

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
    <div className="screen search-screen">
      <div className="card">
        <h1>Pesquisar livros</h1>
        <p>Digite o nome do livro ou autor e clique em pesquisar.</p>

        <form onSubmit={handleSearch} className="search-form">
          <label>
            Buscar livro
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Pesquisar..."
            />
          </label>

          <button type="submit">Pesquisar</button>
        </form>

        {searched && (
          <div className="results-section">
            {results.length > 0 ? (
              <ul className="book-list">
                {results.map((book) => (
                  <li key={book.id} className="book-item">
                    <p className="book-title">{book.title}</p>
                    <p className="book-author">{book.author}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="empty-state">Nenhum livro encontrado.</p>
            )}
          </div>
        )}

        <button type="button" className="secondary" onClick={onBack}>
          Voltar
        </button>
      </div>
    </div>
  )
}
