import { Types } from './teachersActions';

const initialState = {
  loading: true,
  teachers: [],
  error: undefined,
};

export const teachersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_TEACHERS_REQUEST:
    case Types.INSERT_TEACHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_TEACHERS_SUCCESS:
      return {
        ...state,
        loading: false,
        teachers: action.payload.teachers,
      };
    case Types.GET_TEACHERS_FAILURE:
      return {
        ...state,
        loading: false,
        teachers: [],
        error: action.payload.error,
      };
    case Types.INSERT_TEACHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case Types.STORE_TEACHER:
      return {
        ...state,
        loading: false,
        teachers: [
          ...state.teachers,
          {
            ...action.payload.teacher,
          },
        ],
      };
    default:
      return state;
  }
};
