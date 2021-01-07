export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
}

interface CorrectGuessAction {
  type: typeof actionTypes.CORRECT_GUESS
}

type ActionTypes = CorrectGuessAction

export const correctGuess = (): ActionTypes => {
  return { type: actionTypes.CORRECT_GUESS }
}
