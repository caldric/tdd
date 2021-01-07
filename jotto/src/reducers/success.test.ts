import { actionTypes } from '../actions'
import successReducer from './success'

test('Returns default initial state of "false" when no action is passed', () => {
  const result = successReducer()
  expect(result).toBe(false)
})
