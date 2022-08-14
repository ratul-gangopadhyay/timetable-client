import React from 'react';
import './classesStyles.css';
import { Button } from '@mui/material';
import FormModal from '../generic/FormModal';
import ClassFormContainer from './ClassForm.container';

const ClassFormModal = ({ open, handleOpen, handleClose }) => {
  return (
    <>
      <div className='add-icon-btn-container'>
        <Button
          sx={{ backgroundColor: '#313437', fontFamily: 'Calibri' }}
          variant='contained'
          size='small'
          onClick={handleOpen}
        >
          Add New Class
        </Button>
      </div>
      <FormModal open={open} handleClose={handleClose}>
        <ClassFormContainer handleClose={handleClose}/>
      </FormModal>
    </>
  );
};

export default ClassFormModal;
