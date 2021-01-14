import { ActionTypes, CORRECT_GUESS } from '../actions'

const successReducer = (
  state: boolean = false,
  action: ActionTypes
): boolean => {
  switch (action.type) {
    case CORRECT_GUESS:
      return true
    default:
      return state
  }
}

export default successReducer
