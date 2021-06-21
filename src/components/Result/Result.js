import BounceLoader from 'react-spinners/BounceLoader'
import { SIDES } from './../../assets/js/constants'
import darthVader from './../../assets/images/darth-vader.png'
import lukeSkywalker from './../../assets/images/luke-skywalker.png'
import './Result.css'

const Result = ({
  backToStart,
  getSide,
  side,
  isLoading,
  hasError,
  character,
}) => (
  <div
    className="result__container"
    style={{ background: side === SIDES.LIGHT ? '#FBFE63' : '#2A2A2A' }}
  >
    <div
      className="result__return"
      data-testid="result-return"
      onClick={backToStart}
      style={{ color: side === SIDES.LIGHT ? '#2A2A2A' : 'white' }}
    >
      <div className="result__return-icon" onClick={backToStart}>
        <svg
          width="31"
          height="26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31 11.333H6.69l8.822-8.821L13.155.155.31 13l12.845 12.845 2.357-2.357-8.822-8.821H31v-3.334z"
            fill="currentColor"
          />
        </svg>
      </div>
      back
    </div>

    <div className="result__body">
      <button
        className="result__button"
        disabled={isLoading}
        onClick={getSide}
        style={{
          color: side === SIDES.LIGHT ? '#FBFE63' : '#2A2A2A',
          background: side === SIDES.LIGHT ? '#2A2A2A' : 'white',
        }}
      >
        choose your path again, Padawan
        {isLoading && (
          <div
            className="result__button-loading"
            data-testid="result-fetch-loading"
          >
            <BounceLoader
              color={side === SIDES.LIGHT ? 'white' : '#2A2A2A'}
              size={18}
            />
          </div>
        )}
      </button>
      {hasError && (
        <p
          className="return_error"
          data-testid="result-fetch-error"
          style={{ color: side === SIDES.LIGHT ? '#2A2A2A' : 'white' }}
        >
          Some error has occurred, please try again later
        </p>
      )}

      <div className="result__body-character">
        <img
          data-testid="result-character-image"
          src={side === SIDES.LIGHT ? lukeSkywalker : darthVader}
          alt={character.name}
          className="result__character-image"
        />
        <p
          className="result__text"
          data-testid="result-text"
          style={{ color: side === SIDES.LIGHT ? '#2A2A2A' : 'white' }}
        >
          Your master is <strong>{character.name}</strong>
        </p>
      </div>
    </div>
  </div>
)

export default Result
