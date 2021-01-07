import { actionTypes, correctGuess } from './'

describe('correctGuess', () => {
  test('Returns an action with type "CORRECT_GUESS"', () => {
    const action = correctGuess()
    expect(action.type).toBe(actionTypes.CORRECT_GUESS)
  })
})
