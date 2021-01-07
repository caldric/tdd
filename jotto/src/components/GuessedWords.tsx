import React from 'react'

interface Props {
  guesses: Guess[]
}

const GuessedWords: React.FC<Props> = ({ guesses = [] }) => {
  const renderInstructions = (): JSX.Element | null =>
    guesses.length === 0 ? (
      <span data-test="guess-instructions">Instructions</span>
    ) : null

  const renderGuesses = (): JSX.Element | null =>
    guesses.length > 0 ? <div data-test="guessed-words"></div> : null

  return (
    <div data-test="component-guessed-words">
      {renderInstructions()}
      {renderGuesses()}
    </div>
  )
}

export default GuessedWords
