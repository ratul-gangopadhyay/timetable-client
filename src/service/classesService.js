import axios from 'axios';

export const getClasses = () => {
  return axios.get(
    'http://localhost:8080/api/time-table/class',
    {},
    {
      accept: 'application/json',
    }
  );
};

export const addClass = (requestBody) => {
  return axios.post(
    'http://localhost:8080/api/time-table/class',
    requestBody,
    {
      accept: 'application/json',
      'content-type': 'application/json',
    }
  );
};
