import React, { useState } from 'react'

const App: React.FC = () => {
  const [counter, setCounter] = useState(0)
  const [decrementError, setDecrementError] = useState(false)

  const incrementCounter = (): void => {
    setCounter(counter + 1)
    if (setDecrementError) setDecrementError(false)
  }

  const decrementCounter = (): void => {
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      setDecrementError(true)
    }
  }

  const renderDecrementError = (): JSX.Element | null =>
    decrementError ? (
      <p data-test="decrement-error">The counter cannot go below 0</p>
    ) : null

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently at <span data-test="counter">{counter}</span>
      </h1>
      {renderDecrementError()}
      <button
        type="button"
        data-test="increment-button"
        onClick={incrementCounter}
      >
        Increment counter
      </button>
      <button
        type="button"
        data-test="decrement-button"
        onClick={decrementCounter}
      >
        Decrement counter
      </button>
    </div>
  )
}

export default App
