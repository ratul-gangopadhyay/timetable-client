import React from 'react';
import { Button } from '@mui/material';
import './teacherStyles.css';
import RefreshIcon from '@mui/icons-material/Refresh';

const TeacherDataRefresh = ({ refresh }) => {
  return (
    <div className='teacher-refresh-icon-btn-container'>
      <Button
        sx={{ backgroundColor: '#313437', fontFamily: 'Calibri' }}
        variant='contained'
        size='small'
        onClick={refresh}
      >
        <RefreshIcon /> Refresh
      </Button>
    </div>
  );
};

export default TeacherDataRefresh;
