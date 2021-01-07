import React from 'react'

interface Props {
  success?: boolean
}

const Congrats: React.FC<Props> = ({ success }) => {
  if (!success) {
    return <div data-test="component-congrats"></div>
  }

  return <div data-test="component-congrats">Congrats</div>
}

export default Congrats
