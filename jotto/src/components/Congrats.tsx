import React from 'react'

interface Props {
  success?: boolean
}

const Congrats: React.FC<Props> = ({ success }) => {
  const successMessage = (): JSX.Element | null => {
    return success ? <span data-test="congrats-message">Congrats</span> : null
  }

  return <div data-test="component-congrats">{successMessage()}</div>
}

export default Congrats
