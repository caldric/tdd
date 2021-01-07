import React from 'react'

interface Props {
  success?: boolean
}

const Congrats: React.FC<Props> = ({ success = false }) => {
  const successMessage = (): JSX.Element | null => {
    return success ? (
      <span data-test="congrats-message">
        Congratulations! You guessed the word!
      </span>
    ) : null
  }

  return <div data-test="component-congrats">{successMessage()}</div>
}

export default Congrats
