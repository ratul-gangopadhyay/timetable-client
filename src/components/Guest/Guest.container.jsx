import React from 'react';
import { useNavigate } from 'react-router';
import Guest from './Guest';

const GuestContainer = () => {
  document.title = 'Guest';
  const navigate = useNavigate();
  return <Guest onBack={() => navigate(-1)} />;
};

export default GuestContainer;
