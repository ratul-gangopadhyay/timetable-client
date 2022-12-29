export const Types = {
  GET_TEACHERS_REQUEST: 'GET_TEACHERS_REQUEST',
  GET_TEACHERS_SUCCESS: 'GET_TEACHERS_SUCCESS',
  GET_TEACHERS_FAILURE: 'GET_TEACHERS_FAILURE',
  GET_TEACHER_REQUEST: 'GET_TEACHER_REQUEST',
  GET_TEACHER_SUCCESS: 'GET_TEACHER_SUCCESS',
  GET_TEACHER_FAILURE: 'GET_TEACHER_FAILURE',
  INSERT_TEACHER_REQUEST: 'INSERT_TEACHER_REQUEST',
  INSERT_TEACHER_FAILURE: 'INSERT_TEACHER_FAILURE',
  STORE_TEACHER: 'STORE_TEACHER',
};

export const getTeachersRequest = () => ({
  type: Types.GET_TEACHERS_REQUEST,
});

export const getTeachersSuccess = (teachers) => ({
  type: Types.GET_TEACHERS_SUCCESS,
  payload: { teachers },
});

export const getTeachersFailure = (error) => ({
  type: Types.GET_TEACHERS_FAILURE,
  payload: { error },
});

export const getTeacherRequest = (teacherId) => ({
  type: Types.GET_TEACHER_REQUEST,
  params: { teacherId },
});

export const getTeacherSuccess = (teacher) => ({
  type: Types.GET_TEACHER_SUCCESS,
  payload: { teacher },
});

export const getTeacherFailure = (error) => ({
  type: Types.GET_TEACHER_FAILURE,
  payload: { error },
});

export const insertTeachersRequest = (teacher) => ({
  type: Types.INSERT_TEACHER_REQUEST,
  payload: { teacher },
});

export const insertTeacherFailure = (error) => ({
  type: Types.INSERT_TEACHER_FAILURE,
  payload: { error },
});

export const storeTeacher = (teacher) => ({
  type: Types.STORE_TEACHER,
  payload: { teacher },
});
