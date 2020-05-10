import axios from 'axios';
import {
  FETCH_START,
  SET_UNIVERSITIES,
  SET_UNIVERSITIES_ERROR
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

export const getUniversities = () => async (dispatch) => {
  dispatch(fetchStart());

  try {
    const { data } = await axios.get(`${API_URL}/university/findAll`);

    dispatch(setUniversitiesSuccess(data));
  } catch (error) {
    dispatch(setUniversitiesError(error));
  }
};
