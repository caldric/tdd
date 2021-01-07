import { combineReducers } from 'redux'
import guess from './guess'
import success from './success'

export default combineReducers({ guess, success })
