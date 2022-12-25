import axios from 'axios';

export const getRoutineMap = (standard, section) =>
  axios.get(
    `/api/time-table/slot/v2/standard/${standard}/section/${section}`,
    {},
    {
      accept: 'application/json',
    }
  );

export const insertSlot = (slot) =>
  axios.post(`/api/time-table/slot`, slot, {
    accept: 'application/json',
    'content-type': 'application/json',
  });

export const updateSlot = (standard, section, weekDay, period, slot) =>
  axios.put(
    `/api/time-table/slot/standard/${standard}/section/${section}/weekday/${weekDay}/period/${period}`,
    slot,
    {
      accept: 'application/json',
      'content-type': 'application/json',
    }
  );

export const deleteSlot = (standard, section, weekDay, period) =>
  axios.delete(
    `/api/time-table/slot/standard/${standard}/section/${section}/weekday/${weekDay}/period/${period}`,
    {},
    {
      accept: 'application/json',
    }
  );
