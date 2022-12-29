import { TYPES } from './timetableActions';

const initialState = {
  loading: true,
  routine: {},
  error: undefined,
};

export const timetableReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.INSERT_SLOT_REQUEST:
    case TYPES.GET_ROUTINE_REQUEST:
    case TYPES.UPDATE_SLOT_REQUEST:
    case TYPES.DELETE_SLOT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.GET_ROUTINE_SUCCESS:
      return {
        ...state,
        loading: false,
        routine: {
          section: payload.routine.section,
          standard: payload.routine.standard,
          routineMap: payload.routine.routineMap,
        },
      };
    case TYPES.GET_ROUTINE_FAILURE:
      return {
        ...state,
        loading: false,
        routine: {},
        error: payload.error,
      };
    case TYPES.INSERT_SLOT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.INSERT_SLOT_FAILURE:
    case TYPES.UPDATE_SLOT_FAILURE:
    case TYPES.DELETE_SLOT_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case TYPES.SAVE_SLOT:
      return {
        ...state,
        loading: false,
        routine: {
          section: payload.slot.section,
          standard: payload.slot.standard,
          routineMap: {
            ...state.routine.routineMap,
            [payload.slot.weekDay]: {
              ...state.routine.routineMap[payload.slot.weekDay],
              [payload.slot.period]: payload.slot,
            },
          },
        },
      };
    case TYPES.RESET_ROUTINE:
      return initialState;
    default:
      return state;
  }
};
