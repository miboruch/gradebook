import axios from 'axios';
import {
  FETCH_START,
  SET_STUDENT_INFO,
  SET_STUDENT_INFO_ERROR,
  SET_STUDENT_GRADES,
  SET_STUDENT_GRADES_ERROR
} from '../reducers/studentReducer';
import { API_URL } from '../utils/helpers';

const fetchStart = () => {
  return {
    type: FETCH_START
  };
};

export const setStudentInfoSuccess = (info) => {
  return {
    type: SET_STUDENT_INFO,
    payload: info
  };
};

const setStudentInfoError = (error) => {
  return {
    type: SET_STUDENT_INFO_ERROR,
    payload: error
  };
};

const setStudentGrades = (grades) => {
  return {
    type: SET_STUDENT_GRADES,
    payload: grades
  };
};

const setStudentGradesError = (error) => {
  return {
    type: SET_STUDENT_GRADES_ERROR,
    payload: error
  };
};

export const getStudentInfo = (userID) => async (dispatch) => {
  dispatch(fetchStart());
  try {
    const { data } = await axios.get(`${API_URL}/user/findUser/${userID}`);

    dispatch(setStudentInfoSuccess(data));
  } catch (error) {
    dispatch(setStudentInfoError(error));
  }
};

export const getStudentGrades = (userID) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_URL}/grades/findStudentGrades/${userID}`);

    dispatch(setStudentGrades(data));
  } catch (error) {
    dispatch(setStudentGradesError(error));
  }
};
