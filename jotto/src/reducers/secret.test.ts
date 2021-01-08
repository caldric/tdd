import { actionTypes } from '../actions'
import secretReducer from './secret'

test('Returns default initial state of "" when generic action is passed', () => {
  const result = secretReducer(undefined, { type: 'NONE' })
  expect(result).toBe('')
})
