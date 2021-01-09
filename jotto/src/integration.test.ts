import { storeFactory } from '../tests/testUtils'
import { guess } from './actions'

describe('guessWord action dispatcher', () => {
  describe('No words have been guessed', () => {
    // Initialize variables for use in the beforeEach function
    let secret: string
    let initialState: RootState
    let store: ReturnType<typeof storeFactory>

    beforeEach(() => {
      secret = 'party'
      initialState = { guesses: {}, success: false, secret }
      store = storeFactory(initialState)
    })
    test('Updates state correctly for unsuccessful guess', () => {
      // Initialize guess word
      const word = 'train'

      // Call guess action creator
      // @ts-ignore
      store.dispatch(guess(word))

      // Compare actual state to expected state
      const newState = store.getState()
      const expectedState = {
        ...initialState,
        success: false,
        guesses: { [word]: { word, letterMatches: 3 } },
      }
      expect(newState).toEqual(expectedState)
    })

    test('Updates state correctly for successful guess', () => {
      // Call guess action creator
      // @ts-ignore
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
    let secret: string
    let initialGuesses: Record<string, Guess>
    let initialState: RootState
    let store: ReturnType<typeof storeFactory>

    beforeEach(() => {
      // Set the initial state
      secret = 'party'
      initialGuesses = { agile: { word: 'agile', letterMatches: 1 } }
      initialState = {
        guesses: initialGuesses,
        secret,
        success: false,
      }

      // Create store
      store = storeFactory(initialState)
    })
    test('Updates state correctly for unsuccessful guess', () => {
      // Call action creator
      const word = 'train'
      // @ts-ignore
      store.dispatch(guess(word))

      // Get the current state and it with expected state
      const newState = store.getState()
      const expectedState = {
        ...initialState,
        success: false,
        guesses: { ...initialGuesses, [word]: { letterMatches: 3, word } },
      }
      expect(newState).toEqual(expectedState)
    })

    test('Updates state correctly for successful guess', () => {
      // Call action creator
      // @ts-ignore
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
