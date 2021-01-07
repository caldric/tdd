import { actionTypes } from '../actions'

const successReducer = (
  state: boolean = false,
  action: ActionTypes
): boolean => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true
    default:
      return state
  }
}

export default successReducer
