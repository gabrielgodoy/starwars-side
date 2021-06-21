import BounceLoader from 'react-spinners/BounceLoader'
import './Welcome.css'

const Welcome = ({ getSide, isLoading, hasError }) => (
  <div className="welcome__container">
    <h1 className="welcome__header">
      Welcome to <strong>iClinic</strong>
    </h1>
    <p className="welcome__subheader">FRONTEND CHALLENGE</p>
    <button className="welcome__button" disabled={isLoading} onClick={getSide}>
      Start
      {isLoading && (
        <div className="welcome__loading" data-testid="welcome-fetch-loading">
          <BounceLoader color="white" size={18} />
        </div>
      )}
    </button>
    {hasError && (
      <p className="welcome_error" data-testid="welcome-fetch-error">
        Some error has occurred, please try again later
      </p>
    )}
  </div>
)

export default Welcome
