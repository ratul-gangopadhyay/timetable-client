import React from 'react';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { Button } from '@mui/material';
import './adminStyles.css';
import AdminNavigatorContainer from './AdminNavigator.container';

const Admin = ({ onBack }) => {
  return (
    <>
      <div class='header-container'>
        <span>
          <Button
            sx={{ color: 'rgba(107, 118, 138, 0.937)' }}
            size='small'
            onClick={onBack}
          >
            <KeyboardArrowLeft />
            Back
          </Button>
        </span>
        {/* <h1 class='admin-header'> Admin</h1> */}
      </div>
      <AdminNavigatorContainer />
    </>
  );
};

export default React.memo(Admin);
