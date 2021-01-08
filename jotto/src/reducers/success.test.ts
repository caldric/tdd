import { actionTypes } from '../actions'
import successReducer from './success'

test('Returns default initial state of "false" when generic action is passed', () => {
  const result = successReducer(undefined, { type: '' })
  expect(result).toBe(false)
})

test('Returns state of true upon receiving a "CORRECT_GUESS" action type', () => {
  const result = successReducer(undefined, { type: actionTypes.CORRECT_GUESS })
  expect(result).toBe(true)
})
