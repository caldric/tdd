import { ThunkAction } from 'redux-thunk'
import { actionTypes } from './actions'
import rootReducer from './reducers'

declare global {
  // Data types
  interface Guess {
    word: string
    letterMatches: number
  }

  // Actions
  interface CorrectGuessAction {
    type: typeof actionTypes.CORRECT_GUESS
  }
  type ActionTypes = CorrectGuessAction

  // State
  type RootState = ReturnType<typeof rootReducer>

  // Redux Thunk
  type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
  >
}
