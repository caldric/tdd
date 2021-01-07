import React from 'react'

interface Props {
  guesses?: Guess[]
}

const GuessedWords: React.FC<Props> = ({ guesses = [] }) => {
  const renderInstructions = (): JSX.Element | null =>
    guesses.length === 0 ? (
      <span data-test="guess-instructions">Try to guess the secret word!</span>
    ) : null

  const renderGuesses = (): JSX.Element | null =>
    guesses.length > 0 ? (
      <div data-test="guesses">
        <h2>Guessed Words</h2>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {guesses.map((guess) => (
              <tr data-test="guess" key={guess.word}>
                <td>{guess.word}</td>
                <td>{guess.letterMatches}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : null

  return (
    <div data-test="component-guessed-words">
      {renderInstructions()}
      {renderGuesses()}
    </div>
  )
}

export default GuessedWords
