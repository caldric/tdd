import React from 'react'

interface Props {
  success?: boolean
}

const Congrats: React.FC<Props> = ({ success }) => {
  const successMessage = (): string => {
    return success ? 'Congrats' : ''
  }

  return <div data-test="component-congrats">{successMessage()}</div>
}

export default Congrats
