import React from 'react';
import { BarLoader, PuffLoader } from 'react-spinners';
import './genericStyles.css';

const AppLoaderModal = ({ active, message }) => {
  return (
    <div className='app-loader-container'>
      {/* <PuffLoader
            size={60}
            color='#f3e3e3'
            loading={active}
            speedMultiplier={1}
          /> */}
      {message}
      <br/>
      <br/>
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
