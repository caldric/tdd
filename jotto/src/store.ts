import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const middlewareEnhancer = applyMiddleware(thunk)
const composedEnhancer = composeWithDevTools(middlewareEnhancer)
const store = createStore(rootReducer, composedEnhancer)

export default store
