export const FETCH_START = 'FETCH_START';
export const SET_UNIVERSITIES = 'SET_UNIVERSITIES';
export const SET_UNIVERSITIES_ERROR = 'SET_UNIVERSITIES_ERROR';
export const SET_UNIVERSITY_STUDENTS = 'SET_UNIVERSITY_STUDENTS';
export const SET_UNIVERSITY_STUDENTS_ERROR = 'SET_UNIVERSITY_STUDENTS_ERROR';
export const SET_CURRENT_UNIVERSITY = 'SET_CURRENT_UNIVERSITY';
export const SET_UNIVERSITY_COURSES = 'SET_UNIVERSITY_COURSES';

const initialState = {
  isLoading: false,
  universities: [],
  universitiesError: null,
  universityStudents: [],
  universityStudentsError: null,
  universityCourses: null,
  currentUniversity: null
};

export const universityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true
      };
    case SET_UNIVERSITIES:
      return {
        ...state,
        isLoading: false,
        universities: action.payload
      };
    case SET_UNIVERSITIES_ERROR:
      return {
        ...state,
        isLoading: false,
        universities: [],
        universitiesError: action.payload
      };
    case SET_UNIVERSITY_STUDENTS:
      return {
        ...state,
        isLoading: false,
        universityStudentsError: null,
        universityStudents: action.payload
      };
    case SET_UNIVERSITY_STUDENTS_ERROR:
      return {
        ...state,
        isLoading: false,
        universityStudentsError: action.payload,
        universityStudents: []
      };
    case SET_UNIVERSITY_COURSES:
      return {
        ...state,
        isLoading: false,
        universityCourses: action.payload
      };
    case SET_CURRENT_UNIVERSITY:
      return {
        ...state,
        currentUniversity: action.payload
      };
    default:
      return state;
  }
};
