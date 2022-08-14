import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import './teacherStyles.css';

const TeacherForm = ({
  teacher,
  errMsg,
  handleChange,
  handleStrengthChange,
  handleReset,
  handleSubmit,
  standards,
  sections,
}) => {
  const style = {
    label: {
      color: '#fff',
      fontWeight: 'bolder',
    },
    '& .MuiFormHelperText-contained': {
      color: '#fff',
      fontWeight: 'bolder',
    },
    '& .MuiInputBase-root': {
      color: '#fff',
      fontWeight: 'bolder',
    },
    '& label.Mui-focused': {
      color: '#fff',
      fontWeight: 'bolder',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
      fontWeight: 'bolder',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fff',
        fontWeight: 'bolder',
      },
      '&:hover fieldset': {
        borderColor: '#fff',
        fontWeight: 'bolder',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#fff',
        fontWeight: 'bolder',
      },
    },
  };
  return (
    <>
      <h2 className='teacher-form-heading'>Add a new Teacher</h2>
      <div className='teacher-form-box-container'></div>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <Box
          component='form'
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            '& .MuiTextField-root': { m: 2, width: '25ch' },
          }}
          autoComplete='off'
        >
          <TextField
            sx={style}
            id='Name'
            name='Name'
            type='text'
            required
            label='Name'
            value={teacher?.teacherName}
            onChange={handleChange}
            helperText='Enter Teacher Name'
          />            
          <TextField
            sx={style}
            id='age'
            name='age'
            type='number'
            required
            label='Age'
            value={teacher?.age}
            onChange={handleChange}
            helperText='Enter age'
          />
          <TextField
            sx={style}
            id='outlined-number'
            name='dateOfJoining'
            label='Date of Joining'
            type='Date'
            required
            value={teacher?.dateOfJoining}
            onChange={handleChange}
            helperText={errMsg}
            error={errMsg}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <div>
          <Button
            sx={{
              float: 'right',
              margin: '0.5rem 1rem 0 0',
              backgroundColor: '#313437',
            }}
            variant='contained'
            size='small'
            type='reset'
          >
            Reset
          </Button>
          <Button
            sx={{
              float: 'right',
              margin: '0.5rem 1rem 0 0',
              backgroundColor: '#313437',
            }}
            variant='contained'
            size='small'
            type='submit'
            disabled={errMsg}
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default TeacherForm;
