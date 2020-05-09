import axios from 'axios';
import {
  SET_USER_INFO,
  SET_USER_INFO_ERROR,
  SET_USER_GRADES,
  SET_USER_GRADES_ERROR
} from '../reducers/userReducer';
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

const setUserGrades = (grades) => {
  return {
    type: SET_USER_GRADES,
    payload: grades
  };
};

const setUserGradesError = (error) => {
  return {
    type: SET_USER_GRADES_ERROR,
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

export const getStudentGrades = (userID) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_URL}/grades/findStudentGrades/${userID}`);

    dispatch(setUserGrades(data));
  } catch (error) {
    dispatch(setUserGradesError(error));
  }
};
