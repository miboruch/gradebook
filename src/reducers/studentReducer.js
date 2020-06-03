export const FETCH_START = 'FETCH_START';
export const SET_STUDENT_INFO = 'SET_STUDENT_INFO';
export const SET_STUDENT_INFO_ERROR = 'SET_STUDENT_INFO_ERROR';
export const SET_STUDENT_GRADES = 'SET_STUDENT_GRADES';
export const SET_STUDENT_GRADES_ERROR = 'SET_STUDENT_GRADES_ERROR';
export const ADD_GRADE_START = 'ADD_GRADE_START';
export const ADD_GRADE_ERROR = 'ADD_GRADE_ERROR';
export const ADD_GRADE_SUCCESS = 'ADD_GRADE_SUCCESS';
export const STOP_DELETE_GRADE = 'STOP_DELETE_GRADE';

const initialState = {
  isLoading: false,
  studentInfo: null,
  studentInfoError: null,
  studentGrades: null,
  studentGradesError: null,
  addGradeError: null,
  addGradeSuccess: false
};

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true
      };
    case SET_STUDENT_INFO:
      return {
        ...state,
        isLoading: false,
        studentInfo: action.payload,
        studentInfoError: null
      };
    case SET_STUDENT_INFO_ERROR:
      return {
        ...state,
        isLoading: false,
        studentInfoError: action.payload,
        studentInfo: null
      };
    case SET_STUDENT_GRADES:
      return {
        ...state,
        isLoading: false,
        studentGrades: action.payload,
        studentGradesError: null
      };
    case SET_STUDENT_GRADES_ERROR:
      return {
        ...state,
        isLoading: false,
        studentGradesError: action.payload
      };
    case ADD_GRADE_START:
      return {
        ...state,
        addGradeError: null,
        addGradeSuccess: false
      };
    case ADD_GRADE_ERROR:
      return {
        ...state,
        addGradeError: action.payload,
        addGradeSuccess: false
      };
    case ADD_GRADE_SUCCESS:
      return {
        ...state,
        addGradeSuccess: true,
        addGradeError: null
      };
    case STOP_DELETE_GRADE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
