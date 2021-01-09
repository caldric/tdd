import { storeFactory } from '../tests/testUtils'
import { guess } from './actions'

describe('guessWord action dispatcher', () => {
  describe('No words have been guessed', () => {
    test('Updates state correctly for unsuccessful guess', () => {
      const secret = 'party'
      const word = 'train'
      const initialState: RootState = { guesses: [], success: false, secret }
      const store = storeFactory(initialState)
      store.dispatch(guess(word))
      const newState = store.getState()
      const expectedState = {
        ...initialState,
        success: false,
        guesses: [{ word, letterMatches: 3 }],
      }
      expect(newState).toEqual(expectedState)
    })

    test('Updates state correctly for successful guess', () => {
      const secret = 'party'
      const initialState: RootState = { guesses: [], success: false, secret }
      const store = storeFactory(initialState)
      store.dispatch(guess(secret))
      const newState = store.getState()
      const expectedState = {
        ...initialState,
        success: true,
      }
      expect(newState).toEqual(expectedState)
    })
  })

  // describe('Words have been guessed', () => {
  //   test('Updates state correctly for unsuccessful guess', () => {
  //     expect(true).toBe(true)
  //   })
  //   test('Updates state correctly for successful guess', () => {
  //     expect(true).toBe(true)
  //   })
  // })
})
