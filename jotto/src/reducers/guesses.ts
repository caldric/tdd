import { GUESS, GuessAction } from '../actions'

const guessesReducer = (
  state: Record<string, Guess> = {},
  action: GuessAction
): Record<string, Guess> => {
  switch (action.type) {
    case GUESS:
      return { ...state, [action.payload.word]: action.payload }
    default:
      return state
  }
}

export default guessesReducer
