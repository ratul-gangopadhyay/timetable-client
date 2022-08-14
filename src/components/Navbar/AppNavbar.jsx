import React from 'react';
import { NavLink } from 'react-router-dom';
import AppLogo from './AppLogo';
import './navbarStyles.css';
import SignInButton from './SignInButton';

const AppNavbar = () => {
  return (
    <nav className='custom-navbar'>
      <NavLink className='custom-navlink' to='/'>
        <AppLogo />
      </NavLink>
      <NavLink className='custom-navlink' to='sign-in'>
        <SignInButton />
      </NavLink>
    </nav>
  );
};

export default AppNavbar;
