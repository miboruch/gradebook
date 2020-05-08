export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_USER_INFO_ERROR = 'SET_USER_INFO_ERROR';

const initialState = {
  isLoggedIn: false,
  token: null,
  userID: null,
  loginError: null,
  userInfoError: null,
  isLoading: false,
  userInfo: null
};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        isLoading: true
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userID: action.payload.userID,
        isLoggedIn: true,
        isLoading: false,
        loginError: null
      };
    case AUTH_LOGIN_FAILURE:
      return {
        ...state,
        loginError: action.payload.error,
        isLoggedIn: false,
        isLoading: false
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        loginError: null,
        token: null,
        userID: null,
        isLoggedIn: false,
        isLoading: false
      };
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
        isLoading: false
      };
    case SET_USER_INFO_ERROR:
      return {
        ...state,
        userInfo: null,
        isLoading: false,
        userInfoError: action.payload
      };
    default:
      return state;
  }
};
