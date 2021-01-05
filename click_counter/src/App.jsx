import React from 'react'

const App = () => {
  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently <span data-test="count">0</span>
      </h1>
      <button data-test="increment-button" type="button">
        Increment counter
      </button>
    </div>
  )
}

export default App
