import React from 'react'

const GuessedWords: React.FC<Props> = () => {
  return (
    <div data-test="component-guessed-words">
      <span data-test="guess-instructions">Instructions</span>
      <div data-test="guessed-words"></div>
    </div>
  )
}

export default GuessedWords
