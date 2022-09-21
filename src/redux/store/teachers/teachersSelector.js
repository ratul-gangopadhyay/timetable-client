const getTeachers = (state) => state?.teachers?.teachers || [];
const getTeacherById = (state, id) =>
  getTeachers(state)?.find(({ id: teacherId }) => teacherId === id);

export default {
  teachers: {
    loading: (state) => Boolean(state?.teachers?.loading),
    list: getTeachers,
    error: (state) => state?.teachers?.error,
    byId: getTeacherById,
  },
};
