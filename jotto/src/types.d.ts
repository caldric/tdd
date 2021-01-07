import { actionTypes } from './actions'

declare global {
  interface Guess {
    word: string
    letterMatches: number
  }

  // Actions
  interface CorrectGuessAction {
    type: typeof actionTypes.CORRECT_GUESS
  }

  type ActionTypes = CorrectGuessAction
}
