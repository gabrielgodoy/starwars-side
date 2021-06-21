import { render, screen } from '@testing-library/react'
import Result from './Result'

const mockCharacter = {
  name: 'Darth Vader',
  url: 'https://swapi.dev/api/people/4/',
}

test('renders result UI elements', () => {
  render(<Result character={mockCharacter} />)
  const characterImageElement = screen.getByTestId('result-character-image')
  const returnElement = screen.getByTestId('result-return', { name: 'back' })
  const resultElement = screen.getByTestId('result-text', {
    name: 'Your master is Darth Vader',
  })
  const chooseButton = screen.getByRole('button', {
    name: 'choose your path again, Padawan',
  })

  expect(chooseButton).toBeInTheDocument()
  expect(returnElement).toBeInTheDocument()
  expect(resultElement).toBeInTheDocument()
  expect(characterImageElement).toHaveAttribute('alt', 'Darth Vader')
})

test('renders error message', () => {
  render(<Result character={mockCharacter} hasError />)
  const errorMessage = screen.getByTestId('result-fetch-error')
  expect(errorMessage).toHaveTextContent(
    'Some error has occurred, please try again later'
  )
})

test('renders loading state', () => {
  render(<Result character={mockCharacter} isLoading />)
  const loading = screen.getByTestId('result-fetch-loading')
  expect(loading).toBeInTheDocument()

  const chooseButton = screen.getByRole('button', {
    name: 'choose your path again, Padawan',
  })
  expect(chooseButton).toHaveAttribute('disabled')
})
