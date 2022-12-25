import React from 'react';
import './teacherStyles.css';
import { Button } from '@mui/material';
import FormModal from '../generic/FormModal';
import TeacherFormContainer from './TeacherForm.container';

const TeacherFormModal = ({ open, handleOpen, handleClose }) => {
  return (
    <>
      <div className='add-icon-btn-container'>
        <Button
          sx={{ backgroundColor: '#313437', fontFamily: 'Calibri' }}
          variant='contained'
          size='small'
          onClick={handleOpen}
        >
          Add New Teacher
        </Button>
      </div>
      <FormModal open={open} handleClose={handleClose} modalHeight='93vh'>
        <TeacherFormContainer handleClose={handleClose} />
      </FormModal>
    </>
  );
};

export default TeacherFormModal;
