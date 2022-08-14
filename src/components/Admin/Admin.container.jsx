import React from 'react';
import { useNavigate } from 'react-router';
import Admin from './Admin';

const AdminContainer = () => {
  document.title = 'Admin';
  const navigate = useNavigate();
  return <Admin onBack={() => navigate('/')} />;
};

export default AdminContainer;
