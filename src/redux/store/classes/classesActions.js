export const Types = {
  GET_CLASSES_REQUEST: 'GET_CLASSES_REQUEST',
  GET_CLASSES_SUCCESS: 'GET_CLASSES_SUCCESS',
  GET_CLASSES_FAILURE: 'GET_CLASSES_FAILURE',
  INSERT_CLASS_REQUEST: 'INSERT_CLASS_REQUEST',
  INSERT_CLASS_SUCCESS: 'INSERT_CLASS_SUCCESS',
  INSERT_CLASS_FAILURE: 'INSERT_CLASS_FAILURE',
  STORE_CLASS:'STORE_CLASS',
};

export const getClassesRequest = () => ({
  type: Types.GET_CLASSES_REQUEST,
});

export const getClassesSuccess = (classes) => ({
  type: Types.GET_CLASSES_SUCCESS,
  payload: { classes },
});

export const getClassesFailure = (error) => ({
  type: Types.GET_CLASSES_FAILURE,
  payload: { error },
});

export const insertClassRequest = (classData) => ({
  type: Types.INSERT_CLASS_REQUEST,
  payload: { classData },
});

export const insertClassSuccess = (classData) => ({
  type: Types.INSERT_CLASS_SUCCESS,
  payload: { classData },
});

export const insertClassFailure = (error) => ({
  type: Types.INSERT_CLASS_FAILURE,
  payload: { error },
});

export const storeClass = (classData) => ({
  type: Types.STORE_CLASS,
  payload: { classData },
});

