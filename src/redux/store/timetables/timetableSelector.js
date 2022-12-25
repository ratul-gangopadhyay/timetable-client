const getRoutine = (state) => state?.timetables?.routine || {};

export default {
  timetables: {
    loading: (state) => Boolean(state?.timetables?.loading),
    routine: getRoutine,
    error: (state) => state?.timetables?.error,
  },
};
