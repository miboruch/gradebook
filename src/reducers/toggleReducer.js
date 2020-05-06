export const TOGGLE_MENU = 'TOGGLE_MENU';

const initialState = {
  isMenuOpen: false
};

export const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      };
    default:
      return state;
  }
};
