import { actionTypes } from '../actions'

const guessesReducer = (state: Guess[] = [], action: ActionTypes): Guess[] => {
  switch (action.type) {
    case actionTypes.GUESS:
      return [...state, action.payload]
    default:
      return state
  }
}

export default guessesReducer
