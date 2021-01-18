import axios from 'axios'
import { AppThunk } from '../store'
import { getLetterMatchCount } from '../helpers'

// Actions
export const CORRECT_GUESS = 'CORRECT_GUESS'
export const GUESS = 'GUESS'
export const GET_SECRET = 'GET_SECRET'

export interface GenericAction {
  type: ''
}

export interface CorrectGuessAction {
  type: typeof CORRECT_GUESS
}

export interface GuessAction {
  type: typeof GUESS
  payload: Guess
}

export interface GetSecretAction {
  type: typeof GET_SECRET
  payload: string
}

export type ActionTypes =
  | GenericAction
  | CorrectGuessAction
  | GuessAction
  | GetSecretAction

// Action creators
export const guess = (word: string): AppThunk => (dispatch, getState) => {
  const secret = getState().secret
  if (secret === word) {
    // Dispatch CORRECT_GUESS action
    dispatch({ type: CORRECT_GUESS })
  } else {
    // Dispatch GUESS action and payload
    const letterMatches = getLetterMatchCount(word, secret)
    const payload: Guess = { word, letterMatches }
    dispatch({ type: GUESS, payload })
  }
}

export const getSecret = (): AppThunk => async (dispatch) => {
  const { data: payload } = await axios.get('http://localhost:3030')
  dispatch({ type: GET_SECRET, payload })
}
