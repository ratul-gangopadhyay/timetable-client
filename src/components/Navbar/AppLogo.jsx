import React from 'react';

const AppLogo = () => {
  return (
    <>
      <img src={require('../../images/tagged.png')} height='45px' alt='Logo' />
      &nbsp;&nbsp;
      <h4
        style={{
          fontFamily: 'Calibri',
          color: 'white',
        }}
      >
        Timetable <br />
        Maker
      </h4>
    </>
  );
};

export default AppLogo;
