import { ActionTypes, GET_SECRET } from '../actions'

const secretReducer = (state: string = '', action: ActionTypes): string => {
  switch (action.type) {
    case GET_SECRET:
      return action.payload
    default:
      return state
  }
}

export default secretReducer
