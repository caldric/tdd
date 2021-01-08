import { actionTypes } from '../actions'

const guessesReducer = (state: Guess[] = [], action: GuessAction): Guess[] => {
  switch (action.type) {
    case actionTypes.GUESS:
      return [...state, action.payload]
    default:
      return state
  }
}

export default guessesReducer
