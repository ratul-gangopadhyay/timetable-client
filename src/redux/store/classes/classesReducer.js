import { Types } from './classesActions';

const initialState = {
  loading: true,
  classes: [],
  error: undefined,
};

export const classesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_CLASSES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_CLASSES_SUCCESS:
      return {
        ...state,
        loading: false,
        classes: action.payload.classes,
      };
    case Types.GET_CLASSES_FAILURE:
      return {
        ...state,
        loading: false,
        classes: [],
        error: action.payload.error,
      };
    case Types.INSERT_CLASS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.INSERT_CLASS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case Types.STORE_CLASS:
      return {
        ...state,
        loading:false,
        classes: [
          ...state.classes,
          {
            ...action.payload.classData
          }
        ]
      };
    default:
      return state;
  }
};
