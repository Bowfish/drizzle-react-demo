import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { drizzleReducers } from 'drizzle'

const rootReducer = combineReducers({
	routing: routerReducer,
	...drizzleReducers
})

export default rootReducer;
