import React from 'react';
import { BarLoader } from 'react-spinners';
import './genericStyles.css';

const AppLoaderModal = ({ active, message }) => {
  return (
    <div className='app-loader-container'>
      {message}
      <br />
      <br />
      <BarLoader
        color='#e7e1e1'
        height={10}
        loading={active}
        speedMultiplier={1}
        width={140}
      />
    </div>
  );
};

export default AppLoaderModal;
