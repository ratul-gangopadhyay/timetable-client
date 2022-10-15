import axios from 'axios';

export const getTeachers = () => {
  return axios.get(
    '/api/time-table/teachers',
    {},
    {
      accept: 'application/json',
    }
  );
};

export const addTeacher = (requestBody) => {
  return axios.post(
    '/api/time-table/teachers',
    requestBody,
    {
      accept: 'application/json',
      'content-type': 'application/json',
    }
  );
};
