import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk, { ThunkAction } from 'redux-thunk'

import { ActionTypes } from './actions'
import rootReducer from './reducers'

const middlewareEnhancer = applyMiddleware(thunk)
const composedEnhancer = composeWithDevTools(middlewareEnhancer)
const store = createStore(rootReducer, composedEnhancer)

// State
export type RootState = ReturnType<typeof store.getState>

// Redux Thunk
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  ActionTypes
>

export default store
