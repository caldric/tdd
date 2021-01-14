import { AppThunk } from '../store'
import { getLetterMatchCount } from '../helpers'

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS: 'GUESS',
  GET_SECRET: 'GET_SECRET',
}

export interface CorrectGuessAction {
  type: typeof actionTypes.CORRECT_GUESS
}

export interface GuessAction {
  type: typeof actionTypes.GUESS
  payload: Guess
}

export type ActionTypes = CorrectGuessAction | GuessAction

export const guess = (word: string): AppThunk => (dispatch, getState) => {
  const secret = getState().secret
  if (secret === word) {
    // Dispatch CORRECT_GUESS action
    dispatch({ type: actionTypes.CORRECT_GUESS })
  } else {
    // Dispatch GUESS action and payload
    const letterMatches = getLetterMatchCount(word, secret)
    const payload: Guess = { word, letterMatches }
    dispatch({ type: actionTypes.GUESS, payload })
  }
}
