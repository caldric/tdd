import { getLetterMatchCount } from '../helpers'

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS: 'GUESS',
  GET_SECRET: 'GET_SECRET',
}

export const guess = (word: string): AppThunk => (dispatch, getState) => {
  const secret = getState().secret
  if (secret === word) {
    // Dispatch CORRECT_GUESS action
  } else {
    // Dispatch GUESS action and payload
    const letterMatches = getLetterMatchCount(word, secret)
    const payload: Guess = { word, letterMatches }
    dispatch({ type: actionTypes.GUESS, payload })
  }
}
