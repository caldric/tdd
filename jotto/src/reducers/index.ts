import { combineReducers } from 'redux'
import guess from './guess'
import secret from './secret'
import success from './success'

export default combineReducers({ guess, secret, success })
