import { combineReducers } from 'redux';
import { toggleReducer } from './toggleReducer';
import { authenticationReducer } from './authenticationReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({ toggleReducer, authenticationReducer, userReducer });
