import { combineReducers } from 'redux';
import { authentication } from './auth.reducer';
import { room } from './room.reducer';
const rootReducer = combineReducers({
    authentication,
    room
});
export default rootReducer;