import { combineReducers } from 'redux'
import guesses from './guesses'
import secret from './secret'
import success from './success'

export default combineReducers({ guesses, secret, success })
