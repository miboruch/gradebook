export const FETCH_START = 'FETCH_START';
export const SET_UNIVERSITIES = 'SET_UNIVERSITIES';
export const SET_UNIVERSITIES_ERROR = 'SET_UNIVERSITIES_ERROR';

const initialState = {
  isLoading: false,
  universities: [],
  universitiesError: null
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
    default:
      return state;
  }
};
