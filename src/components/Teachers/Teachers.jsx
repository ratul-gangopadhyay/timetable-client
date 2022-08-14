import React from 'react';
import { Button } from '@mui/material';
import './teacherStyles.css';
import TeachersTableContainer from './TeachersTable.container';
import TeacherFormModalContainer from './TeacherFormModal.container';

const Teachers = () => {
  return (
    <div className='teacher-container'>
      {/* <h1>Teachers</h1> */}
      <div className='teacher-header-container'>
        {/* <span>Teacher</span> */}
      </div>
      <div className='teachers-table-container'>
        <TeachersTableContainer />
      </div>
      {/* <div className='add-icon-btn-container'>
      <Button
          sx={{ backgroundColor: '#313437', fontFamily: 'Calibri' }}
          variant='contained'
          size='small'
        >
          Add New Teacher
        </Button>
      </div> */}
      <TeacherFormModalContainer />
    </div>
  );
};

export default Teachers;
