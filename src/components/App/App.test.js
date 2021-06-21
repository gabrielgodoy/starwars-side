import { render, fireEvent, waitFor } from '@testing-library/react'
import App from './App'

test('renders render correct character after button click', async () => {
  const mockCharacter = {
    name: 'Darth Vader',
    url: 'https://swapi.dev/api/people/4/',
  }

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockCharacter),
    })
  )

  const renderComponent = () => render(<App />)
  const { getByText } = renderComponent()

  fireEvent.click(getByText('Start'))

  await waitFor(() => {
    const characterName = getByText(/Darth Vader/i)
    expect(characterName).toBeInTheDocument()
  })
})
