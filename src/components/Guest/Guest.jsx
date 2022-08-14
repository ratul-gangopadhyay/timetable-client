import React from 'react';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { Button } from '@mui/material';
import './guestStyles.css';

const Guest = ({ onBack }) => {
  return (
    <>
      <div class='back-btn-container'>
        <Button
          sx={{
            color: 'rgba(107, 118, 138, 0.937)',
          }}
          size='small'
          onClick={onBack}
        >
          <KeyboardArrowLeft />
          Back
        </Button>
      </div>
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        Guest
      </h1>
    </>
  );
};

export default Guest;
