import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently <span data-test="count">{counter}</span>
      </h1>
      <button
        data-test="increment-button"
        type="button"
        onClick={() => setCounter(counter + 1)}
      >
        Increment counter
      </button>
      <button type="button" data-test="decrement-button">
        Decrement counter
      </button>
    </div>
  )
}

export default App
