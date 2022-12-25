export const TYPES = {
  GET_ROUTINE_REQUEST: 'GET_ROUTINE_REQUEST',
  GET_ROUTINE_SUCCESS: 'GET_ROUTINE_SUCCESS',
  GET_ROUTINE_FAILURE: 'GET_ROUTINE_FAILURE',
  INSERT_SLOT_REQUEST: 'INSERT_SLOT_REQUEST',
  SAVE_SLOT: 'SAVE_SLOT',
  INSERT_SLOT_FAILURE: 'INSERT_SLOT_FAILURE',
  UPDATE_SLOT_REQUEST: 'UPDATE_SLOT_REQUEST',
  UPDATE_SLOT_FAILURE: 'UPDATE_SLOT_FAILURE',
  DELETE_SLOT_REQUEST: 'DELETE_SLOT_REQUEST',
  DELETE_SLOT_FAILURE: 'DELETE_SLOT_FAILURE',
  RESET_ROUTINE: 'RESET_ROUTINE',
};

export const getRoutineRequest = (standard, section) => ({
  type: TYPES.GET_ROUTINE_REQUEST,
  parameters: {
    standard,
    section,
  },
});

export const getRoutineSuccess = (routine) => ({
  type: TYPES.GET_ROUTINE_SUCCESS,
  payload: { routine },
});

export const getRoutineFailure = (error) => ({
  type: TYPES.GET_ROUTINE_FAILURE,
  payload: { error },
});

export const insertSlotRequest = (slot) => ({
  type: TYPES.INSERT_SLOT_REQUEST,
  payload: { slot },
});

export const saveSlot = (slot) => ({
  type: TYPES.SAVE_SLOT,
  payload: { slot },
});

export const insertSlotFailure = (error) => ({
  type: TYPES.INSERT_SLOT_FAILURE,
  payload: { error },
});

export const updateSlotRequest = (
  standard,
  section,
  weekDay,
  period,
  slot
) => ({
  type: TYPES.UPDATE_SLOT_REQUEST,
  payload: { slot },
  params: { standard, section, weekDay, period },
});

export const updateSlotFailure = (error) => ({
  type: TYPES.UPDATE_SLOT_FAILURE,
  payload: { error },
});

export const deleteSlotFailure = (error) => ({
  type: TYPES.DELETE_SLOT_FAILURE,
  payload: { error },
});

export const deleteSlotRequest = (standard, section, weekDay, period) => ({
  type: TYPES.DELETE_SLOT_REQUEST,
  params: { standard, section, weekDay, period },
});

export const resetRoutine = () => ({
  type: TYPES.RESET_ROUTINE,
});
