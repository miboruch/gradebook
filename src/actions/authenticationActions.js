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

const authLogout = () => {
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

export const getUserInfo = (userID) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_URL}/user/findUser/${userID}`);

    dispatch(setUserInfoSuccess(data));
  } catch (error) {
    dispatch(setUserInfoError(error));
  }
};

export const authenticationCheck = () => (dispatch) => {
  const token = localStorage.getItem('token');
  const userID = localStorage.getItem('userID');

  if (token && userID) {
    dispatch(authSuccess(token, userID));
    dispatch(getUserInfo(userID));
  }
};

export const userLogin = (values) => async (dispatch) => {
  dispatch(authStart());

  try {
    const { data } = await axios.post(`${API_URL}/user/login`, values);
    console.log(data);
    dispatch(authSuccess(data.token, data.userId));
    const { token, ...rest } = data;
    dispatch(setUserInfoSuccess(rest));

    localStorage.setItem('token', token);
    localStorage.setItem('userID', rest.userId);
  } catch (error) {
    dispatch(authLoginFailure(error));
  }
};

export const userLogout = (history) => (dispatch) => {
  dispatch(authStart());
  localStorage.removeItem('token');
  localStorage.removeItem('userID');
  dispatch(authLogout());
  history.push('/');
};
