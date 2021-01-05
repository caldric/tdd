import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  const [decrementErr, setDecrementErr] = useState(false)

  const increment = () => {
    setCounter(counter + 1)
    setDecrementErr(false)
  }

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      setDecrementErr(true)
    }
  }

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently <span data-test="count">{counter}</span>
      </h1>
      {decrementErr ? (
        <p data-test="decrement-error">The counter cannot go below 0</p>
      ) : null}
      <button data-test="increment-button" type="button" onClick={increment}>
        Increment counter
      </button>
      <button type="button" data-test="decrement-button" onClick={decrement}>
        Decrement counter
      </button>
    </div>
  )
}

export default App
