import React from 'react';
import AdminCard from '../Admin/AdminCard';
import GuestCard from '../Guest/GuestCard';
import './homeStyles.css';
import WelcomeMessage from './WelcomeMessage';

const TimetableHome = () => {
  return (
    <>
      <WelcomeMessage />
      <div className='home-container'>
        <div className='home-items'>
          <AdminCard />
        </div>
        <div className='home-items'>
          <GuestCard />
        </div>
      </div>
    </>
  );
};

export default TimetableHome;
