import axios from 'axios';
import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGOUT
} from '../reducers/authenticationReducer';
import { API_URL } from '../utils/helpers';
import { setUserInfoSuccess, getUserInfo, getUserGrades } from './userActions';

const authStart = () => {
  return {
    type: AUTH_START
  };
};

const authSuccess = (token, userID) => {
  return {
    type: AUTH_SUCCESS,
    payload: {
      token,
      userID
    }
  };
};

const authLoginFailure = (error) => {
  return {
    type: AUTH_LOGIN_FAILURE,
    payload: {
      error
    }
  };
};

const authLogout = () => {
  return {
    type: AUTH_LOGOUT
  };
};

export const authenticationCheck = () => (dispatch) => {
  const token = localStorage.getItem('token');
  const userID = localStorage.getItem('userID');

  if (token && userID) {
    dispatch(authSuccess(token, userID));
    dispatch(getUserInfo(userID));
    dispatch(getUserGrades(userID));
  }
};

export const userLogin = (values, history) => async (dispatch) => {
  dispatch(authStart());

  try {
    const { data } = await axios.post(`${API_URL}/user/login`, values);

    dispatch(authSuccess(data.token, data.userId));
    const { token, ...rest } = data;
    dispatch(getUserInfo(data.userId));
    !data.admin && dispatch(getUserGrades(data.userId));

    localStorage.setItem('token', token);
    localStorage.setItem('userID', rest.userId);
    history.push('/');
  } catch (error) {
    dispatch(authLoginFailure(error));
  }
};

export const userLogout = (history) => (dispatch) => {
  dispatch(authStart());
  localStorage.removeItem('token');
  localStorage.removeItem('userID');
  dispatch(authLogout());
  dispatch(setUserInfoSuccess(null));
  history.push('/');
};
