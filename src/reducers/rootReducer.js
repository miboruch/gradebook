import { combineReducers } from 'redux';
import { toggleReducer } from './toggleReducer';
import { authenticationReducer } from './authenticationReducer';
import { userReducer } from './userReducer';
import { studentReducer } from './studentReducer';

export const rootReducer = combineReducers({
  toggleReducer,
  authenticationReducer,
  userReducer,
  studentReducer
});
