import  {combineReducers} from 'redux'

import route from './route.js'
import meals from './meal.js'
import cook from './set-cook.js'
import token from './token.js'
import cookProfile from './cook-profile.js'

export default combineReducers({route, meals, cook, token, cookProfile})
