import axios from 'axios';
import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGOUT,
  SET_USER_INFO,
  SET_USER_INFO_ERROR
} from '../reducers/authenticationReducer';
import { API_URL } from '../utils/helpers';

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

const userLogout = () => {
  return {
    type: AUTH_LOGOUT
  };
};

const setUserInfoSuccess = (info) => {
  return {
    type: SET_USER_INFO,
    payload: info
  };
};

const setUserInfoError = (error) => {
  return {
    type: SET_USER_INFO_ERROR,
    payload: error
  };
};

export const userLogin = (values) => async (dispatch) => {
  dispatch(authStart());

  try {
    const { data } = await axios.post(`${API_URL}/user/login`, values);
    dispatch(authSuccess(data.token, data.userId));
    const { token, userId, ...rest } = data;
    dispatch(setUserInfoSuccess(rest));

    localStorage.setItem('token', token);
    localStorage.setItem('userID', userId);
  } catch (error) {
    dispatch(authLoginFailure(error));
  }
};
