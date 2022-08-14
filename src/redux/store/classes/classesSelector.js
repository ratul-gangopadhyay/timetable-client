const getClasses = (state) => state?.classes?.classes || [];

export default {
  classes: {
    loading: (state) => Boolean(state?.classes?.loading),
    list: getClasses,
    error: (state) => state?.classes?.error,
  },
};
