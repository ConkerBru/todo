import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//import { composeWithDevTools } from 'redux-devtools-extension'

import notesReducer from './reducers/notesReducer'
import toggleSelectionReducer from './reducers/toggleSelectionReducer'

const reducer = combineReducers({
  notes: notesReducer,
  toggleSelection: toggleSelectionReducer,
})

export default createStore(reducer, applyMiddleware(thunk))
