import { storeFactory } from '../tests/testUtils'
import { guess } from './actions'

describe('guessWord action dispatcher', () => {
  // Initialize variables for use in the beforeEach function
  let secret: string
  let initialState: RootState
  let store: ReturnType<typeof storeFactory>

  beforeEach(() => {
    secret = 'party'
    initialState = { guesses: [], success: false, secret }
    store = storeFactory(initialState)
  })

  describe('No words have been guessed', () => {
    test('Updates state correctly for unsuccessful guess', () => {
      // Initialize guess word
      const word = 'train'

      // Call guess action creator
      store.dispatch(guess(word))

      // Compare actual state to expected state
      const newState = store.getState()
      const expectedState = {
        ...initialState,
        success: false,
        guesses: [{ word, letterMatches: 3 }],
      }
      expect(newState).toEqual(expectedState)
    })

    test('Updates state correctly for successful guess', () => {
      // Call guess action creator
      store.dispatch(guess(secret))

      // Compare actual state with expected state
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
