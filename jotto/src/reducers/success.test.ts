import { actionTypes } from '../actions'
import successReducer from './success'

test('Returns default initial state of "false" when generic action is passed', () => {
  const result = successReducer(undefined, { type: 'NONE' })
  expect(result).toBe(false)
})
