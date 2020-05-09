export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_USER_INFO_ERROR = 'SET_USER_INFO_ERROR';
export const SET_USER_GRADES = 'SET_USER_GRADES';
export const SET_USER_GRADES_ERROR = 'SET_USER_GRADES_ERROR';

const initialState = {
  userInfo: null,
  userInfoError: null,
  userGrades: null,
  userGradesError: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
        userInfoError: null
      };
    case SET_USER_INFO_ERROR:
      return {
        ...state,
        userInfoError: action.payload,
        userInfo: null
      };
    case SET_USER_GRADES:
      return {
        ...state,
        userGrades: action.payload,
        userGradesError: null
      };
    case SET_USER_GRADES_ERROR:
      return {
        ...state,
        userGradesError: action.payload
      };
    default:
      return state;
  }
};
