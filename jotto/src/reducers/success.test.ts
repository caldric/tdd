import { CORRECT_GUESS } from '../actions'
import successReducer from './success'

test('Returns default initial state of "false" when another action is passed', () => {
  const result = successReducer(undefined, { type: '' })
  expect(result).toBe(false)
})

test('Returns state of true upon receiving a "CORRECT_GUESS" action type', () => {
  const result = successReducer(undefined, { type: CORRECT_GUESS })
  expect(result).toBe(true)
})
