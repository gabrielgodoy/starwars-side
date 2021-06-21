import { useState } from 'react'
import Welcome from './../Welcome/Welcome'
import Result from './../Result/Result'
import { SIDES, URLS } from './../../assets/js/constants'

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isStart, setIsStart] = useState(true)
  const [side, setSide] = useState(null)
  const [character, setCharacter] = useState(null)

  const getSide = async () => {
    try {
      setHasError(false)
      setIsLoading(true)
      const response = await Promise.race([fetch(URLS.light), fetch(URLS.dark)])
      const character = await response.json()
      const chosenSide = character.url === URLS.light ? SIDES.LIGHT : SIDES.DARK

      setSide(chosenSide)
      setCharacter(character)
      setIsStart(false)
    } catch (error) {
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }

  const backToStart = () => setIsStart(true)

  return isStart ? (
    <Welcome getSide={getSide} isLoading={isLoading} hasError={hasError} />
  ) : (
    <Result
      backToStart={backToStart}
      character={character}
      getSide={getSide}
      side={side}
      isLoading={isLoading}
      hasError={hasError}
    />
  )
}

export default App
