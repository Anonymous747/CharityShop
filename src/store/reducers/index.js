import {combineReducers} from 'redux';
import loginSlice from './LoginReducer';

const rootReducer = combineReducers({
  login: loginSlice,
});

export default rootReducer;
