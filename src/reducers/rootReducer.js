import { combineReducers } from 'redux';
import { toggleReducer } from './toggleReducer';
import { authenticationReducer } from './authenticationReducer';

export const rootReducer = combineReducers({ toggleReducer, authenticationReducer });
