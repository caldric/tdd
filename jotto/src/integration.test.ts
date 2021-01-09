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

  describe('Words have been guessed', () => {
    test('Updates state correctly for unsuccessful guess', () => {
      // Set the initial state
      const secret = 'party'
      const initialGuesses = [{ word: 'agile', letterMatches: 1 }]
      const initialState: RootState = {
        guesses: initialGuesses,
        secret,
        success: false,
      }

      // Call action creator
      const store = storeFactory(initialState)
      const word = 'train'
      store.dispatch(guess(word))

      // Get the current state and it with expected state
      const newState = store.getState()
      const expectedState = {
        ...initialState,
        success: false,
        guesses: [...initialGuesses, { letterMatches: 3, word }],
      }
      expect(newState).toEqual(expectedState)
    })

    test('Updates state correctly for successful guess', () => {
      // Set the initial state
      const secret = 'party'
      const initialGuesses = [{ word: 'agile', letterMatches: 1 }]
      const initialState: RootState = {
        guesses: initialGuesses,
        secret,
        success: false,
      }

      // Call action creator
      const store = storeFactory(initialState)
      store.dispatch(guess(secret))

      // Get the current state and it with expected state
      const newState = store.getState()
      const expectedState = {
        ...initialState,
        success: true,
        guesses: initialGuesses,
      }
      expect(newState).toEqual(expectedState)
    })
  })
})
