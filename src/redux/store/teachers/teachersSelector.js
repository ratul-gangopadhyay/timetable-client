const getTeachers = (state) => state?.teachers?.teachers || [];

export default {
  teachers: {
    loading: (state) => Boolean(state?.teachers?.loading),
    list: getTeachers,
    error: (state) => state?.teachers?.error,
  },
};
