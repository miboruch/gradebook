import axios from 'axios';
import { SET_USER_INFO, SET_USER_INFO_ERROR } from '../reducers/userReducer';
import { API_URL } from '../utils/helpers';

export const setUserInfoSuccess = (info) => {
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
