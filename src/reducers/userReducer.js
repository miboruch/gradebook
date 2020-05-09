export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_USER_INFO_ERROR = 'SET_USER_INFO_ERROR';

const initialState = {
  userInfo: null,
  userInfoError: null
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
    default:
      return state;
  }
};
