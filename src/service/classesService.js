import axios from 'axios';

export const getClasses = () => {
  return axios.get(
    '/api/time-table/class',
    {},
    {
      accept: 'application/json',
    }
  );
};

export const addClass = (requestBody) => {
  return axios.post('/api/time-table/class', requestBody, {
    accept: 'application/json',
    'content-type': 'application/json',
  });
};
