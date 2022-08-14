import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './adminStyles.css';

const AdminNavigator = () => {
  return (
    <>
      <nav className='admin-nav'>
        <NavLink className='admin-nav-items' to='teachers'>
          Teachers
        </NavLink>
        <NavLink className='admin-nav-items' to='classes'>
          Classes
        </NavLink>
        <NavLink className='admin-nav-items' to='routine'>
          Routine
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default AdminNavigator;
