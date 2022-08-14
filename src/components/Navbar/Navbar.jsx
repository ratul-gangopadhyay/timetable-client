import React from 'react';
import AppLogo from '../AppLogo';


export const Navbar = () => {
  return (
    <Nav>
      <NavLink to='/'>
        {/* <h1>Timetable Maker</h1> */}
        <AppLogo />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to='teachers' activeStyle>
          Teachers
        </NavLink>
        <NavLink to='class' activeStyle>
          Classes
        </NavLink>
        <NavLink to='sign-up' activeStyle>
          Sign Up
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to='sign-in'>Sign In</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};
