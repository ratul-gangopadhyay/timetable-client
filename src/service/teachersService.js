import axios from 'axios';

export const getTeachers = () => {
  return axios.get(
    'http://localhost:8080/api/time-table/teachers',
    {},
    {
      accept: 'application/json',
    }
  );
};

export const addTeacher = (requestBody) => {
  return axios.post(
    'http://localhost:8080/api/time-table/teachers',
    requestBody,
    {
      accept: 'application/json',
      'content-type': 'application/json',
    }
  );
};
