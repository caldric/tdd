import { applyMiddleware, createStore } from 'redux'
import { ShallowWrapper } from 'enzyme'
import thunk from 'redux-thunk'
import rootReducer from '../src/reducers'

export const findByTestAttr = (
  wrapper: ShallowWrapper,
  search: string
): ShallowWrapper => {
  return wrapper.find(`[data-test="${search}"]`)
}

export const storeFactory = (initialState: RootState) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk))
}
