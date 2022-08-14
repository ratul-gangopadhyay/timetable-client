import React from 'react';
import { Button } from '@mui/material';
import './classesStyles.css';
import RefreshIcon from '@mui/icons-material/Refresh';

const ClassDataRefresh = ({refresh}) => {
  return (
    <div className='class-refresh-icon-btn-container'>
      <Button
        sx={{ backgroundColor: '#313437', fontFamily: 'Calibri' }}
        variant='contained'
        size='small'
        onClick={refresh}
      >
        <RefreshIcon/>
        {' '}
        Refresh
      </Button>
    </div>
  );
};

export default ClassDataRefresh;
