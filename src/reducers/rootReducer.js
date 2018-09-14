import { combineReducers } from 'redux'
import registryReducer from './registryReducer'

export default combineReducers({
  registry: registryReducer
})
