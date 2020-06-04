export const FETCH_START = 'FETCH_START';
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_USER_INFO_ERROR = 'SET_USER_INFO_ERROR';
export const SET_USER_GRADES = 'SET_USER_GRADES';
export const SET_USER_GRADES_ERROR = 'SET_USER_GRADES_ERROR';

const initialState = {
  isLoading: false,
  userInfo: null,
  userInfoError: null,
  userGrades: null,
  userGradesError: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true
      };
    case SET_USER_INFO:
      return {
        ...state,
        isLoading: false,
        userInfo: action.payload,
        userInfoError: null
      };
    case SET_USER_INFO_ERROR:
      return {
        ...state,
        isLoading: false,
        userInfoError: action.payload,
        userInfo: null
      };
    case SET_USER_GRADES:
      return {
        ...state,
        isLoading: false,
        userGrades: action.payload,
        userGradesError: null
      };
    case SET_USER_GRADES_ERROR:
      return {
        ...state,
        isLoading: false,
        userGradesError: action.payload
      };
    default:
      return state;
  }
};
