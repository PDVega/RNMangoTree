import { combineReducers } from 'redux'

import treeReducer from './treeReducer'

const rootReducer = combineReducers({
  pohonStore: treeReducer
})

export default rootReducer
