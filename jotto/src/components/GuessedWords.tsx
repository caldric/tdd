import React from 'react'

interface Props {
  guesses: Guess[]
}

const GuessedWords: React.FC<Props> = ({ guesses = [] }) => {
  return (
    <div data-test="component-guessed-words">
      {guesses.length === 0 ? (
        <span data-test="guess-instructions">Instructions</span>
      ) : (
        <div data-test="guessed-words"></div>
      )}
    </div>
  )
}

export default GuessedWords
