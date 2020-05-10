import axios from 'axios';
import {
  FETCH_START,
  SET_UNIVERSITIES,
  SET_UNIVERSITIES_ERROR,
  SET_UNIVERSITY_STUDENTS,
  SET_UNIVERSITY_STUDENTS_ERROR,
  SET_CURRENT_UNIVERSITY
} from '../reducers/universityReducer';
import { API_URL } from '../utils/helpers';

const fetchStart = () => {
  return {
    type: FETCH_START
  };
};

const setUniversitiesSuccess = (universities) => {
  return {
    type: SET_UNIVERSITIES,
    payload: universities
  };
};

const setUniversitiesError = (error) => {
  return {
    type: SET_UNIVERSITIES_ERROR,
    payload: error
  };
};

const setUniversityStudents = (students) => {
  return {
    type: SET_UNIVERSITY_STUDENTS,
    payload: students
  };
};

const setUniversityStudentsError = (error) => {
  return {
    type: SET_UNIVERSITY_STUDENTS_ERROR,
    payload: error
  };
};

export const setCurrentUniversity = (university) => {
  return {
    type: SET_CURRENT_UNIVERSITY,
    payload: university
  };
};

export const getUniversities = () => async (dispatch) => {
  dispatch(fetchStart());

  try {
    const { data } = await axios.get(`${API_URL}/university/findAll`);

    dispatch(setCurrentUniversity(null));
    dispatch(setUniversitiesSuccess(data));
  } catch (error) {
    dispatch(setUniversitiesError(error));
  }
};

export const getUniversityStudents = (universityID) => async (dispatch) => {
  dispatch(fetchStart());

  try {
    const { data } = await axios.get(`${API_URL}/user/findByUniversity/${universityID}`);

    dispatch(setUniversityStudents(data));
  } catch (error) {
    dispatch(setUniversityStudentsError(error));
  }
};
