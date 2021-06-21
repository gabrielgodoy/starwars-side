import { render, screen } from '@testing-library/react'
import Welcome from './Welcome'

test('renders welcome message and start button', () => {
  render(<Welcome />)
  const welcomeElement = screen.getByRole('heading', {
    level: 1,
    name: 'Welcome to iClinic',
  })
  const challengeElement = screen.getByText('FRONTEND CHALLENGE')
  const startButton = screen.getByRole('button', {
    name: 'Start',
  })

  expect(welcomeElement).toBeInTheDocument()
  expect(challengeElement).toBeInTheDocument()
  expect(startButton).toBeInTheDocument()
})

test('renders error message', () => {
  render(<Welcome hasError />)
  const errorMessage = screen.getByTestId('welcome-fetch-error')
  expect(errorMessage).toHaveTextContent(
    'Some error has occurred, please try again later'
  )
})

test('renders loading state', () => {
  render(<Welcome isLoading />)
  const loading = screen.getByTestId('welcome-fetch-loading')
  expect(loading).toBeInTheDocument()

  const startButton = screen.getByRole('button', {
    name: 'Start',
  })
  expect(startButton).toHaveAttribute('disabled')
})
