import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Admin from './Admin';

const AdminContainer = () => {
  document.title = 'Admin';
  const navigate = useNavigate();
  useEffect(() => navigate('routine'), []);
  return <Admin onBack={() => navigate('/')} />;
};

export default AdminContainer;
