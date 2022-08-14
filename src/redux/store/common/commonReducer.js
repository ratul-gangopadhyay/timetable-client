import { Types } from './commonActions';

const initialState = {
  loader: {
    active: false,
    message: '',
  },
};

export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SHOW_SPINNER:
      return {
        ...state,
        loader: {
          active: true,
          message: action.payload.message,
        },
      };
    case Types.HIDE_SPINNER:
      return {
        ...state,
        loader: {
          active: false,
          message: '',
        },
      };
    default:
      return state;
  }
};
